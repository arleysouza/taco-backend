import { Router, Request, Response } from "express";
import {CategoryController as controller} from "../controllers";

const routes = Router();

// http://localhost:3021/category
routes.get("/", controller.list);

//aceita qualquer método HTTP ou URL
routes.use( (_:Request,res:Response) => res.json({message:"Operação desconhecida com as categorias"}) );

export default routes;