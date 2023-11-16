import supabase from '../lib/supabase';
import CustomError from '../lib/CustomError';
import {Request, Response, NextFunction} from 'express';
const dotenv = require('dotenv').config();

async function index (req: Request, res: Response, next: NextFunction) {
    const {data, error} = await supabase.from('posts').select('*');
    if (error) {
        next(new CustomError(error.message, 'NOTHING IN DB',  668));
        return
    }
    else {
        res.status(200).json(data);
    }
}

async function show (req: Request, res: Response, next: NextFunction) {
    const {data, error} = await supabase.from(process.env.SUPABASE_TABLE as string).select('*').eq('id', parseInt(req.params.id));
    if (error) {
        next(new CustomError(error.message, 'BAD_REQUEST',  669));
        return
    } else if (data.length === 0) {
        next(new CustomError('Post not found', 'NOT_FOUND', 700));
        return
    }
   
    res.status(200).json(data);
    
}

export {index, show}
