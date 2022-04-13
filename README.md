- Required mongodb: `mongod` command
- Windows, Develop: `npm run windowsDebug` command

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