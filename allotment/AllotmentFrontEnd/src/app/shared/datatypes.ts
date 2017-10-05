export interface ResourceContainer{
    name:string,
    path:string,
    children:number,
    opted:boolean 
}

export interface ResourceObject{
    uniq_id:number,
    width:number,
    height:number,
    sourcePath:string,
    targetPath:string,
    loaded:boolean,
    opted:boolean    
}

