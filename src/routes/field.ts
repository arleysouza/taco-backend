import { Router, Request, Response } from "express";
import {FieldController as controller} from "../controllers";

const routes = Router();

// http://localhost:3021/field
routes.get("/", controller.list);

//aceita qualquer método HTTP ou URL
routes.use( (_:Request,res:Response) => res.json({message:"Operação desconhecida com os campos"}) );

export default routes;