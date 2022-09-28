import fs from "fs"
import path from "path"

export function getPath(){
    return path.join(process.cwd(), "server.json")
}

export function getData(filepath){
    const fileData = fs.readFileSync(filepath)
    const data = JSON.parse(fileData)

    return data
}