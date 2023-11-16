import {Request, Response, NextFunction} from 'express';
import CustomError from '../lib/CustomError';


const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    
    res.status(500).json({
        error: err.message,
        status: err.status,
        code: err.code
    });
};

export default errorHandler;