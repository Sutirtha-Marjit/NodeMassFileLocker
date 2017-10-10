export interface ResourceContainer{
    name:string,
    path:string,
    children:number,
    opted:boolean,
    childrenDetails:any 
}

export interface ResourceObject{
    uniq_id:number,
    width:number,
    height:number,
    sourcePath:string,
    originSourcePath:string,
    targetPath:string,
    loaded:boolean,
    opted:boolean    
}

export interface ResourcePostObject{
    target:string,
    resourcePathList:Array<string>
}

export interface RequestStatusObject{
    heading:string,
    subheading:string,
    type:string
}