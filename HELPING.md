# Helping commands
## Export Mongo DB
`mongodump -d catchthereview -o d-2019-07-02`
`zip -r d-2019-07-02.zip d-2019-07-02`


# Pagination Command
```
Model.find().paginate({page: 2, limit: 10});	
Model.find({ where: { name: 'foo' }, limit: 10, skip: 10 });
/api/todos?skip=10&limit=10
```