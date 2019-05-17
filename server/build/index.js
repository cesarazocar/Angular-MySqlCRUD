"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const gamesRoutes_1 = __importDefault(require("./routes/gamesRoutes"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000); //Si existe un puerto definido en el sistema tomalo sino usa el 3000 (SE CREA LA VARIABE port) se puede acceder desde cualquier parte de app
        this.app.use(morgan_1.default('dev')); //con eso se ver por consola peticiones http los clientes (iniciar con npm i @types/morgan)
        this.app.use(cors_1.default()); //para ejecutar 2 consolas a la vez (iniciar con npm i @types/morgan) va a poder pedir los datos a nuestro servidor
        this.app.use(express_1.default.json()); //servidor podra entender formato JSON
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', indexRoutes_1.default);
        this.app.use('/api/games', gamesRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'));
        console.log("server on port", this.app.get('port'));
    }
}
const server = new Server();
server.start();
