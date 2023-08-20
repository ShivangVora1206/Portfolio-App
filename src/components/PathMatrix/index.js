import PathCell from "../PathCell"

export default function PathMatrix(props) {
    return(
        <div className="bg-slate-400 h-100 flex justify-center">
            <div className="w-[840px] grid grid-cols-7 grid-rows-4 m-20">
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