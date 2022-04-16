- Required mongodb: `mongod` command
- Windows, Develop: `npm run windowsDebug` command

### Modelling Relationships:
Trade off between query **performance** vs **consistency**
1. Using References (Normalization) -> **CONSISTENCY**
```
let author = {
    name: 'Travis Scott'
}

let book = {
    author: 'id'
}
```
2. Using Embedded Documents (Denormalization) -> **PERFORMANCE**
```
let book = {
    author: {
        name: 'Travis Scott'
    }
}
```
3. Hybrid approach mongodb (best for small shops)
```
let author = {
    name: 'Travis Scott'
    ... // and other prorerties
}

let book = {
    author: {
        id: 'referral',
        name: 'Travis Scott'
    }
}
```

### Comparison Query Operators:
- eq (equal),
- ne (not equal),
- gt (greather than)
- gte (greathe than or equal to)
- lt (less than)
- lte (less than or equal to)
- in
- nin (not in)

### Logical Query Operators
 - or
 - and

### Regular Expression
[$regex manual](https://www.mongodb.com/docs/manual/reference/operator/query/regex/)

Examples `{ <field>: /pattern/<options> }`: 
- Start with _Tolkien_ `.find ({ author: /^Tolkien/ })`
- Ends with _Tolkien_ `.find ({ author: /Tolkien$/i })`
- Contain _Tolkien_ `.find ({ author: /.*Tolkien.*/ })`

### Counting

`.count();`