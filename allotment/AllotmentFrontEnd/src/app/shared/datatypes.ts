export interface ResourceContainer{
    name:string,
    path:string,
    children:number,
    opted:boolean,
    childrenDetails:any,
    isDir:boolean 
}

export interface AuthenticatedUserProfile{
    userName:string,
    password:string
}

export interface ResourceObject{
    uniq_id:number,
    width:number,
    height:number,
    sourcePath:string,
    originSourcePath:string,
    targetPath:string,
    loaded:boolean,
    opted:boolean,
    isDir:boolean,
    name:string    
}

export interface ResourcePostObject{
    target:string,
    resourcePathList:Array<string>,
    
}

export interface RequestStatusObject{
    heading:string,
    subheading:string,
    type:string
}

export interface AlbumResourceObject{
    file:string,
    path:string,
    isDir:boolean
}

export interface GeneralPhotoShow{
    COL_LENGTH:number,
    list:Array<Array<AlbumResourceObject>>
}