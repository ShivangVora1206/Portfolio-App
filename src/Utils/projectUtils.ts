import { projects, Project } from "../config";


export const getOneProjectFromNameHelper = (name:string) =>  {
    let project:any = null;

    projects.forEach((item:Project) => {
        if(item.name === name) {
            project = item
        }
    })

    return project
}

export const getProjectsFromTechHelper = (tech:string)=>{
    let tempList:Project[] = [];
    projects.forEach((element: Project) => {
        if(element.stack.includes(tech)){
            tempList.push(element);
        }    
    });
    return tempList;
}