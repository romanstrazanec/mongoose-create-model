# Mongoose model create

Short-hand for creating `mongoose` model using `Typescript`.

```typescript
// Define attributes.
interface TestAttrs {
    name: string
}

// Create model.
const Test = createModel<TestAttrs>('Test', {
    name: {
        type: String,
        required: true
    }
});

// Create instance of the model with build method.
const test = Test.build({name: 'new test'})
await test.save()
```
