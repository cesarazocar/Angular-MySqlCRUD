import { Request, Response } from "express";

import pool from '../database';

class GamesController {
    public async list(req: Request, res: Response) {

        const games = await pool.query('SELECT * FROM games');
        res.json(games);

    }
    public async getOne(req: Request, res: Response): Promise<any>  {

        const { id } = req.params; //destructuring
        const games = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
        if(games.length>0){
            return res.json(games[0]);
        }
        
        res.status(404).json({text:"the game doesn't exists"});

    }

    // Promise<void> es para poner de manera explicita que la promesa retorna una promesa de tipo void (se podría omitir)
    public async create(req: Request, res: Response): Promise<void> {

        await pool.query('INSERT INTO games set ?', [req.body])
        res.json({ message: 'Game Saved' });
    }
    public async update(req: Request, res: Response): Promise<void> {
        const { id } = req.params; //destructuring
        await pool.query('UPDATE games set ? WHERE id = ?', [req.body,id]);
        
        res.json({ text: `the game ${id} was updated` });
    }
    public async delete(req: Request, res: Response): Promise<void> {

        const { id } = req.params; //destructuring
        await pool.query('Delete FROM games WHERE id = ?', [id]);
        res.json({ message: `The game was deleted` });


    }



}

const gamesController = new GamesController();
export default gamesController;//Exporta toda la clase (todos los metodos)