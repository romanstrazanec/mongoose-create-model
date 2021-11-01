import {createModel} from 'index'
import {expect} from 'chai'

it('creates a model', async () => {
    interface TestAttrs {
        name: string
    }

    const Test = createModel<TestAttrs>('Test', {
        name: {
            type: String,
            required: true
        }
    })
    const test = Test.build({name: 'new test'})
    await test.save()

    expect(test.id).to.exist
    expect(test._id).to.exist
})
