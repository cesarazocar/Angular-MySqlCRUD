import { Request, Response } from "express";

class IndexController{
    public index(req : Request,res:Response){
        res.json({text:'API Is /api/games'});
    }
}

export const indexController = new IndexController(); //Exporta toda la clase (todos los metodos)
