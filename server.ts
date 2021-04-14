import * as express from 'express';
import * as http from 'http';
import * as path from 'path';

const port = process.env.PORT || 4200;
var app:express.Application =  express();


app.set('port',port);
app.use(express.static(path.join(__dirname,'dist/wle')));

const server = http.createServer(app);
server.listen(port,()=>{
    console.log(`Express Listening @ ${port}`);
})