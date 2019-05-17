import { Router } from 'express' ;

import { indexController } from '../controllers/indexControllers'

class IndexRoutes{

    router:Router=Router(); //propiedad llamada router de tipo Router

    constructor(){
        this.config(); // al enrutador le agrega la ruta creada abajo   
    }

    config():void{
        //this.router.get('/',(req,res)=>res.send('Hello')); //creamos una ruta inicial de la aplicacion del servidor 
        this.router.get('/', indexController.index)
    }
}

const indexRoutes = new IndexRoutes();
export default indexRoutes.router;