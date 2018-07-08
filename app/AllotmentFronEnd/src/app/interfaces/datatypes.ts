export interface FolderDetails{
    name:string,
    path:string,
    isDir?:boolean,
    desc?:string,
    pathArray?:Array<string>
}

export interface AlphabetSearchCompParams{
    alphabet:string,
    id?:number,
    numOfFiles:number
}

export interface ServerFolderObject{
    accessPath?:string,
    isDir:boolean,
    file:string,
    path:string
}