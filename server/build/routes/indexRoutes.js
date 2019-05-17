"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const indexControllers_1 = require("../controllers/indexControllers");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router(); //propiedad llamada router de tipo Router
        this.config(); // al enrutador le agrega la ruta creada abajo   
    }
    config() {
        //this.router.get('/',(req,res)=>res.send('Hello')); //creamos una ruta inicial de la aplicacion del servidor 
        this.router.get('/', indexControllers_1.indexController.index);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
