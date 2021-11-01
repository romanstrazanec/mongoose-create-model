import {Schema, model, Document, Model, SchemaDefinition, SchemaDefinitionType, SchemaOptions} from 'mongoose'

type Doc<Attrs> = Document & Attrs

interface IModel<Attrs> {
    build(attrs: Attrs): Doc<Attrs>
}

type _Model<Attrs> = Model<Doc<Attrs>> & IModel<Attrs>

export const createModel = <Attrs>(name: string, definition: SchemaDefinition<SchemaDefinitionType<any>>, options?: SchemaOptions) => {
    const schema = new Schema(definition, options ?? {
        toJSON: {
            transform(doc, ret) {
                ret.id = doc._id
                delete doc._id
                delete doc.__v
                return ret
            }
        }
    })
    schema.statics.build = (attrs: Attrs) => new m(attrs)
    const m = model<Doc<Attrs>, _Model<Attrs>>(name, schema)
    return m
}
