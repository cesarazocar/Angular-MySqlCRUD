import express, {Application}  from 'express';
import morgan from 'morgan';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import gamesRoutes from './routes/gamesRoutes';

class Server{

    public app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config():void{
        this.app.set('port',process.env.PORT||3000) //Si existe un puerto definido en el sistema tomalo sino usa el 3000 (SE CREA LA VARIABE port) se puede acceder desde cualquier parte de app
        this.app.use(morgan('dev')); //con eso se ver por consola peticiones http los clientes (iniciar con npm i @types/morgan)
        this.app.use(cors()); //para ejecutar 2 consolas a la vez (iniciar con npm i @types/morgan) va a poder pedir los datos a nuestro servidor
        this.app.use(express.json()); //servidor podra entender formato JSON
        this.app.use(express.urlencoded({extended:false}));

    }

    routes():void{
        this.app.use('/',indexRoutes);
        this.app.use('/api/games',gamesRoutes);

    }
    
    start():void{
        this.app.listen(this.app.get('port'));
            console.log("server on port", this.app.get('port'));
    }

}

const server = new Server();
server.start();