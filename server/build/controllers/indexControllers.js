"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class IndexController {
    index(req, res) {
        res.json({ text: 'API Is /api/games' });
    }
}
exports.indexController = new IndexController(); //Exporta toda la clase (todos los metodos)
