import PathCell from "../PathCell"

export default function PathMatrix(props) {
    return(
        <div className="relative bg-gradient-to-t dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 from-gray-600 via-zinc-600 to-zinc-700 h-100 flex flex-col items-center justify-center">
            <div className="absolute w-full h-[7px] dark:bg-gradient-to-tl dark:from-gray-950 dark:via-zinc-900 dark:to-gray-950 bg-gray-400 top-0"/>
            <div className="absolute w-full h-[6px] dark:bg-gradient-to-tl dark:from-gray-950 dark:via-zinc-900 dark:to-gray-950 bg-gray-400 top-[12px]"/>
            <div className="absolute w-full h-[4px] dark:bg-gradient-to-tl dark:from-gray-950 dark:via-zinc-900 dark:to-gray-950 bg-gray-400 top-[24px]"/>
            <div className="absolute w-full h-[3px] dark:bg-gradient-to-tl dark:from-gray-950 dark:via-zinc-900 dark:to-gray-950 bg-gray-400 top-[34px]"/>
            <div className="absolute w-full h-[2px] dark:bg-gradient-to-tl dark:from-gray-950 dark:via-zinc-900 dark:to-gray-950 bg-gray-400 top-[44px]"/>
            <div className="absolute w-full h-[1px] dark:bg-gradient-to-tl dark:from-gray-950 dark:via-zinc-900 dark:to-gray-950 bg-gray-400 top-[52px]"/>
            <h1 className="text-center mt-20 font-minecraft text-[100px] bg-gradient-to-r bg-clip-text text-transparent 
                        dark:from-blue-500 dark:via-cyan-400 dark:to-blue-500 from-red-500 via-amber-500 to-red-500 animate-text">PUZZLE</h1>

            <div className="w-[840px] grid grid-cols-7 grid-rows-4 m-10">
                {/* TODO GENERATE CELLS PROCEDURALLY AND RANDOMIZE ANGLES */}
                <PathCell type="image" imageLabel="1-1" angle={0}/>
                <PathCell type="image" imageLabel="1-2" angle={91}/>
                <PathCell type="image" imageLabel="1-3" angle={0}/>
                <PathCell type="image" imageLabel="1-4" angle={90}/>
                <PathCell type="image" imageLabel="1-5" angle={0}/>
                <PathCell type="image" imageLabel="1-6" angle={180}/>
                <PathCell type="image" imageLabel="1-7" angle={0}/>

                <PathCell type="image" imageLabel="2-1" angle={0}/>
                <PathCell type="image" imageLabel="2-2" angle={270}/>
                <PathCell type="image" imageLabel="2-3" angle={0}/>
                <PathCell type="image" imageLabel="2-4" angle={0}/>
                <PathCell type="image" imageLabel="2-5" angle={91}/>
                <PathCell type="image" imageLabel="2-6" angle={0}/>
                <PathCell type="image" imageLabel="2-7" angle={91}/>

                <PathCell type="image" imageLabel="3-1" angle={0}/>
                <PathCell type="image" imageLabel="3-2" angle={0}/>
                <PathCell type="image" imageLabel="3-3" angle={0}/>
                <PathCell type="image" imageLabel="3-4" angle={0}/>
                <PathCell type="image" imageLabel="3-5" angle={0}/>
                <PathCell type="image" imageLabel="3-6" angle={0}/>
                <PathCell type="image" imageLabel="3-7" angle={0}/>

                <PathCell type="image" imageLabel="4-1" angle={0}/>
                <PathCell type="image" imageLabel="4-2" angle={0}/>
                <PathCell type="image" imageLabel="4-3" angle={0}/>
                <PathCell type="image" imageLabel="4-4" angle={0}/>
                <PathCell type="image" imageLabel="4-5" angle={0}/>
                <PathCell type="image" imageLabel="4-6" angle={0}/>
                <PathCell type="image" imageLabel="4-7" angle={0}/>
                

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