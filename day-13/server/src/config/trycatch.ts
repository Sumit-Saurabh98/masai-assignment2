import type { Request, Response, NextFunction, RequestHandler } from "express";

const tryCatch = (handler:RequestHandler):RequestHandler =>{

    return async (req:Request, res:Response, next:NextFunction) => {
        try{
            await handler(req, res, next)
        }catch(err:Error| any){
            next(err.message)
        }
    }

}

export default tryCatch
