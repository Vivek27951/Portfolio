import { FunctionComponent } from "react";
import {IconType} from 'react-icons'
export interface Services{
    title:string
    about:string
    Icon:IconType
}

export interface Skill{
    name:string,
    level : string,
    Icon:IconType
}

export interface IProject{
    id:number,
    name:string,
    description:string,
    image_path:string,
    deployed_url:string,
    github_url:string,
    category:Category[],
    key_techs:string[]
}

export type Category = "react" | "node" | "express" | "django" | "mongo";