import axios from "axios";
import React from "react";
import PathCell from "../PathCell"
import Pattern from "../Pattern"
import { useEffect, useState } from "react";

export default function PathMatrix(props:any) {
    const [pathCells, setPathCells] = useState<any>({list:[]});
    let angles = [0, 90, 180, 270, 91];
    let difficulty = 2;

    useEffect(() => {
        getPathCells();
    }, [])

    useEffect(() => {
        console.log("PathCells updated -> ", pathCells);
    }, [pathCells])


    function getPathCells(){
        console.log("getPathCells");
        
        let tempPathCells:any[] = [];
        for (let i = 1; i < 5; i++) {
            for (let j = 1; j < 8; j++) {
                let angle = 0;
                if((i+j)%difficulty === 0){
                    angle = angles[Math.floor(Math.random() * angles.length)];
                }
                tempPathCells.push(<PathCell type="image" imageLabel={`${i}_${j}`} angle={angle}/>)
                
            }
            
        }
        setPathCells({list:[...tempPathCells]});
        console.log("TempPathCells -> ", tempPathCells);
    }

        async function getImagesApi(){
            // let data = {"id" : "1_1.jpg"}
            // let response = await axios.get("http://localhost:3001/Images/v1/getImage", {params: data});
            let response = await axios.get("http://localhost:3001/Images/v1/getImages");
            console.log(response);
            if(response.status === 200){
                getPathCells();
            }
        }

    return(
        <div className="relative bg-gradient-to-t dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 from-zinc-800 to-zinc-900 h-100 flex flex-col items-center justify-center">

            <div id="trainsition-wave-pattern" className="absolute dark:opacity-0 w-full top-0"><Pattern/></div>

            <h1 id="title" className="text-center mt-[200px] font-minecraft text-[100px] bg-gradient-to-r bg-clip-text text-transparent
                        dark:from-blue-500 dark:via-cyan-400 dark:to-blue-500 from-red-500 via-amber-500 to-red-500 animate-text">PUZZLE</h1>
            
            <h2 id="subtitle" className="text-slate-200 text-2xl font-minecraft"> Can you solve the below puzzle to reveal the hidden image ? </h2>

            <div id="screen-size-alert-banner" className="absolute flex items-center rounded-xl border top-[400px] bg-zinc-700  h-[300px] w-[350px] sm:h-[300px] sm:w-[400px] md:opacity-0 md:w-0 md:h-0">
                <h1 className="text-center m-5 text-slate-200 font-minecraft text-2xl">PLEASE USE A LARGER SCREEN TO VIEW THE PUZZLE</h1>
            </div>

            <div className="opacity-0 w-[100px] md:opacity-100 md:w-[840px] grid grid-cols-7 grid-rows-4 m-10">
                

                {pathCells.list}
                

            </div>


            <div>
            <button className="bg-white h-5 w-8" key={"btn_api_call"} onClick={()=>{getImagesApi()}}> Call </button>
            
            </div>

        </div>
    )
}

