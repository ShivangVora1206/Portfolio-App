import { useSelector } from "react-redux"
import PathCell from "../PathCell"
import Pattern from "../Pattern"

export default function PathMatrix(props) {

    let pathCells = [];
    let angles = [0, 90, 180, 270, 91];
    let difficulty = 2;

        for (let i = 1; i < 5; i++) {
            for (let j = 1; j < 8; j++) {
                let angle = 0;
                if((i+j)%difficulty === 0){
                    angle = angles[Math.floor(Math.random() * angles.length)];
                }
                pathCells.push(<PathCell type="image" imageLabel={`${i}-${j}`} angle={angle}/>)
            }
            
        }

    return(
        <div className="relative bg-gradient-to-t dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 from-zinc-800 to-zinc-900 h-100 flex flex-col items-center justify-center">

            <div id="trainsition-wave-pattern" className="absolute dark:opacity-0 w-full top-0"><Pattern/></div>

            <h1 id="title" className="text-center mt-[200px] font-minecraft text-[100px] bg-gradient-to-r bg-clip-text text-transparent
                        dark:from-blue-500 dark:via-cyan-400 dark:to-blue-500 from-red-500 via-amber-500 to-red-500 animate-text">PUZZLE</h1>
            
            <h2 id="subtitle" className="text-slate-200 text-2xl font-minecraft"> Can you solve the below puzzle to reveal the hidden image ? </h2>

            <div id="screen-size-alert-banner" className="absolute flex items-center rounded-xl border top-96 bg-zinc-700  h-[300px] w-[350px] sm:h-[300px] sm:w-[400px] md:opacity-0 md:w-0 md:h-0">
                <h1 className="text-center m-5 text-slate-200 font-minecraft text-2xl">PLEASE USE A LARGER SCREEN TO VIEW THE PUZZLE</h1>
            </div>

            <div className="opacity-0 w-[100px] md:opacity-100 md:w-[840px] grid grid-cols-7 grid-rows-4 m-10">
                

                {pathCells}
                

            </div>
        </div>
    )
}

/* <div id="vertical-line-full" className="h-[120px] w-[120px] bg-white mx-10">
                <div className="h-[120px] w-[40px] bg-black ms-[40px]"></div>
            </div>
            <div id="horizontal-line-full" className="h-[120px] w-[120px] bg-white mx-10">
                <div className="h-[40px] w-[120px] bg-black mt-[40px]"></div>
            </div>
            <div id="corner-left-top" className="h-[120px] w-[120px] bg-white mx-10">
                <div className="h-[40px] w-[40px] bg-black ms-[40px]"></div>
                <div className="h-[40px] w-[80px] bg-black"></div>
            </div>
            <div id="corner-right-top" className="h-[120px] w-[120px] bg-white mx-10">
                <div className="h-[40px] w-[40px] bg-black ms-[40px]"></div>
                <div className="h-[40px] w-[80px] bg-black ms-[40px]"></div>
            </div>
            <div id="corner-right-bottom" className="h-[120px] w-[120px] bg-white mx-10">
                <div className="h-[40px] w-[80px] bg-black mt-[40px] ms-[40px]"></div>
                <div className="h-[40px] w-[40px] bg-black ms-[40px]"></div>
            </div>
            <div id="corner-left-bottom" className="h-[120px] w-[120px] bg-white mx-10">
                <div className="h-[40px] w-[80px] bg-black mt-[40px]"></div>
                <div className="h-[40px] w-[40px] bg-black ms-[40px]"></div>
            </div> */