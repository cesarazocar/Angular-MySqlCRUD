import { Router } from 'express';

import gamesController from '../controllers/gamesControllers';



class GamesRoutes{

    router:Router=Router(); //propiedad llamada router de tipo Router

    constructor(){
        this.config(); // al enrutador le agrega la ruta creada abajo   
    }

    config():void{
        //this.router.get('/',(req,res)=>res.send('Games')); //creamos una ruta inicial de la aplicacion del servidor 
        this.router.get('/',gamesController.list);
        this.router.get('/:id',gamesController.getOne);
        this.router.post('/',gamesController.create);
        this.router.put('/:id',gamesController.update);

        this.router.delete('/:id',gamesController.delete);
    }
}

const gamesRoutes = new GamesRoutes();
export default gamesRoutes.router;