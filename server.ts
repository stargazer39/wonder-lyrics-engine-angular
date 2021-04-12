import * as express from 'express';
import * as http from 'http';

class Server {
    public app: express.Application;

    constructor() {
        this.app = express();
    }
}