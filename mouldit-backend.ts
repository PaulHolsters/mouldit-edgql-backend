import express, { Express, Request, Response } from 'express';
import {serverActions} from "./app-configuration/server-actions";

const backend = express()
backend.get('/:actionId', (req:Request, res:Response) => {
    const serverAction = serverActions.find(sa=>sa.id===req.params.actionId)
    if(serverAction){
        serverAction.query().then((result )=>{
            if(result){
                res.status(200).send(result)
            } else res.status(500)
        })
    }
});

export default backend