import {firstName, lastName, aboutText, socialConstants} from "../../config"
import { useSelector, useDispatch } from "react-redux";
import { updateCursorVariant } from "../../global_store/slices/cursorVariantSlice";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import {AiOutlinePlus} from "react-icons/ai"
import { Parallax, ParallaxLayer} from '@react-spring/parallax'
import React from "react";
import { useState, useEffect, useRef } from "react";
import { toggleBlackBar } from "../../global_store/slices/blackBarSlice";
export default function Home() {
    const mode = useSelector((state:any) => {return state.navbar.value.mode})
    const variant = useSelector((state:any)=>{return state.cursorVariant.value})
    const dispatch = useDispatch()
    const [header1, setHeader1] = useState(false)
    const [header2, setHeader2] = useState(false)
    // const parallaxRef = useRef<HTMLDivElement | null>(null)

//     useEffect(() => { 
//         if (parallaxRef.current) {
            
//             // console.log("parallax ref is not null")
//             // console.log(parallaxRef.current.children[0]);
            
//             parallaxRef.current.children[0].addEventListener('scroll', (e: any) => {
//                 // console.log(e.target.scrollTop);
                
//                 if(e.target.scrollTop > 750 && e.target.scrollTop < 850){
//                     dispatch(toggleBlackBar(true))
//                 }else{
//                     dispatch(toggleBlackBar(false))
//             }
    
//     })
// }}, [])

    return(
        <div key={'container'} className={` flex justify-between flex-col h-screen w-100 ease-in duration-300 
        ${
            mode 
            ? `bg-home-image-dark`
            : `bg-home-image-light` 
            }  bg-no-repeat bg-cover bg-center`}>
            <div key={'text-right'} className="flex flex-row justify-center md:justify-between " >
                <div className="flex flex-row">
                    <div className="bg-gray-200 dark:bg-gray-200 w-2 ms-0 mt-60 h-1/2 "></div>
                    <div className="flex flex-col justify-evenly h-1/2 mt-60 ms-2">
                        <SiLinkedin onClick={()=>{window.open(socialConstants.linkedin)}} size={25} className="m-1 text-gray-200 dark:text-gray-200 duration-100 hover:translate-x-1"/>
                        <SiInstagram onClick={()=>{window.open(socialConstants.instagram)}} size={25} className="m-1 text-gray-200 dark:text-gray-200 duration-100 hover:translate-x-1"/>
                        <SiGithub onClick={()=>{window.open(socialConstants.github)}} size={25} className="m-1 text-gray-200 dark:text-gray-200 duration-100 hover:translate-x-1"/>
                    </div>
                </div>
                <p key={'about'} className="text-center md:text-right font-minecraft m-0 p-0 mx-10 mt-24 w-80 text-custom-96 text-gray-200 dark:text-gray-200">{aboutText}</p>
            </div>
            <div key={'text-left'} className="flex flex-col justify-between md:flex-row items-center md:items-end" >
                <div className="flex flex-col items-center md:flex-row md:items-end"><p onMouseEnter={()=>{dispatch(updateCursorVariant("larger"))}} onMouseLeave={()=>{dispatch(updateCursorVariant("default"))}} key={'title'} className="font-coolvetica my-0 p-0 ms-10 me-8 md:w-52 lg:w-custom-medium-width lg:me-0 text-custom-medium md:text-custom-medium lg:text-custom-large text-gray-200 dark:text-gray-200 cursor-default">{firstName.toUpperCase()} {lastName.toUpperCase()}{','}</p> 
                <p onMouseEnter={()=>{dispatch(updateCursorVariant("larger"))}} onMouseLeave={()=>{dispatch(updateCursorVariant("default"))}} className="md:w-64 lg:w-96 mb-0 md:mb-2 lg:mb-16 font-coolvetica text-custom-small md:text-custom-small lg:text-custom-medium text-gray-200 dark:text-gray-200 cursor-default">SOFTWARE DEVELOPER</p> </div>
                <div className="bg-gray-200 dark:bg-gray-200 w-80 ms-0 mt-60 h-2"></div>

            </div>
            
        </div>
    )
}

{/* <div key={'container'} className={` flex justify-between flex-col h-screen w-100 ease-in duration-300 
        ${
            mode 
            ? `bg-home-image-dark`
            : `bg-home-image-light` 
            }  bg-no-repeat bg-cover bg-center`}>
            <div key={'text-right'} className="flex flex-row justify-center md:justify-between " >
                <div className="flex flex-row">
                    <div className="bg-gray-200 dark:bg-gray-200 w-2 ms-0 mt-60 h-1/2 "></div>
                    <div className="flex flex-col justify-evenly h-1/2 mt-60 ms-2">
                        <SiLinkedin onClick={()=>{window.open(socialConstants.linkedin)}} size={25} className="m-1 text-gray-200 dark:text-gray-200 duration-100 hover:translate-x-1"/>
                        <SiInstagram onClick={()=>{window.open(socialConstants.instagram)}} size={25} className="m-1 text-gray-200 dark:text-gray-200 duration-100 hover:translate-x-1"/>
                        <SiGithub onClick={()=>{window.open(socialConstants.github)}} size={25} className="m-1 text-gray-200 dark:text-gray-200 duration-100 hover:translate-x-1"/>
                    </div>
                </div>
                <p key={'about'} className="text-center md:text-right font-minecraft m-0 p-0 mx-10 mt-24 w-80 text-custom-96 text-gray-200 dark:text-gray-200">{aboutText}</p>
            </div>
            <div key={'text-left'} className="flex flex-col justify-between md:flex-row items-center md:items-end" >
                <div className="flex flex-col items-center md:flex-row md:items-end"><p onMouseEnter={()=>{dispatch(updateCursorVariant("larger"))}} onMouseLeave={()=>{dispatch(updateCursorVariant("default"))}} key={'title'} className="font-coolvetica my-0 p-0 ms-10 me-8 md:w-52 lg:w-custom-medium-width lg:me-0 text-custom-medium md:text-custom-medium lg:text-custom-large text-gray-200 dark:text-gray-200 cursor-default">{firstName.toUpperCase()} {lastName.toUpperCase()}{','}</p> 
                <p onMouseEnter={()=>{dispatch(updateCursorVariant("larger"))}} onMouseLeave={()=>{dispatch(updateCursorVariant("default"))}} className="md:w-64 lg:w-96 mb-0 md:mb-2 lg:mb-16 font-coolvetica text-custom-small md:text-custom-small lg:text-custom-medium text-gray-200 dark:text-gray-200 cursor-default">SOFTWARE DEVELOPER</p> </div>
                <div className="bg-gray-200 dark:bg-gray-200 w-80 ms-0 mt-60 h-2"></div>

            </div>
            
        </div> */}

//<div ref={parallaxRef}>
//        <Parallax pages={3} className="scrollbar" >
//            <ParallaxLayer  speed={1} factor={2} style={{ backgroundImage: `url(${window.location.origin + "/" + 'reneissance.jpg'})`, backgroundSize:'cover' }}/>
//            
//            {/* <ParallaxLayer offset={1} speed={1} factor={0} style={{ backgroundImage: `url(http://127.0.0.1:3000/bg3.jpeg)`, backgroundSize:'cover' }}/> */}
//            <ParallaxLayer speed={0.70}>
//            <div key={'text-left'} className="absolute z-20 flex flex-col justify-center w-full h-full items-center" >
//                <div className="flex flex-col items-center "><p onMouseEnter={()=>{dispatch(updateCursorVariant("larger"))}} onMouseLeave={()=>{dispatch(updateCursorVariant("default"))}} key={'title'} className="font-coolvetica p-0  md:w-52 lg:w-full text-custom-medium md:text-custom-medium lg:text-[200px] text-gray-200 dark:text-gray-200 cursor-default">{firstName.toUpperCase()} {lastName.toUpperCase()}</p> 
//                <p onMouseEnter={()=>{dispatch(updateCursorVariant("larger"))}} onMouseLeave={()=>{dispatch(updateCursorVariant("default"))}} className="md:w-64 lg:w-96 flex flex-col items-center  font-coolvetica text-custom-small md:text-custom-small lg:text-[90px] text-gray-200 dark:text-gray-200 cursor-default">SOFTWARE DEVELOPER</p> </div>
//            </div>
//            </ParallaxLayer>
//            <ParallaxLayer speed={0.80} >
//                <div onMouseEnter={()=>{setHeader1(true)}} onMouseLeave={()=>{setHeader1(false)}}>
//                <h1 className={`absolute text-white top-[145px] left-[250px] font-extralight text-lg duration-200 ${header1 ? 'opacity-100' : 'opacity-0'}`}>Far Hann Itrate</h1>
//                <div className="animate-pulse-3 absolute bg-white top-[95px] left-[80px] h-[1px] w-[120px] rotate-[15deg]"/>
//                <div className="animate-pulse-4 absolute bg-white top-[150px] left-[133px] h-[1px] w-[95px] rotate-[122deg]"/>
//                <div className="animate-pulse-3 absolute bg-white top-[212px] left-[147px] h-[1px] w-[115px] rotate-[19deg]"/>
//                <div className="animate-pulse-4 absolute bg-white top-[330px] left-[184px] h-[1px] w-[80px] rotate-[0deg]"/>
//                <div className="animate-pulse-3 absolute bg-white top-[260px] left-[92px] h-[1px] w-[148px] rotate-[78deg]"/>
//                <div className="animate-pulse-4 absolute bg-white top-[282px] left-[212px] h-[1px] w-[100px] rotate-[90deg]"/>
//                <div className="animate-pulse-3 absolute bg-white top-[215px] left-[257px] h-[1px] w-[80px] rotate-[-22deg]"/>
//                <AiOutlinePlus size={20} className="absolute text-white left-[70px] top-[70px]"/>
//                <AiOutlinePlus size={20} className="absolute text-white left-[140px] top-[180px]"/>
//                <AiOutlinePlus size={20} className="absolute text-white left-[195px] top-[100px]"/>
//                <AiOutlinePlus size={20} className="absolute text-white left-[250px] top-[220px]"/>
//                <AiOutlinePlus size={20} className="absolute text-white left-[250px] top-[320px]"/>
//                <AiOutlinePlus size={20} className="absolute text-white left-[170px] top-[320px]"/>
//                <AiOutlinePlus size={20} className="absolute text-white left-[325px] top-[190px]"/>
//                </div>
//                <div onMouseEnter={()=>{setHeader2(true)}} onMouseLeave={()=>{setHeader2(false)}}>
//                <h1 className={`absolute text-white bottom-[300px] right-[80px] font-extralight text-lg duration-200 ${header2 ? 'opacity-100' : 'opacity-0'}`}>Prera Juli Sation</h1>
//                <div className="animate-pulse-4 absolute bg-white bottom-[236px] right-[122px] h-[1px] w-[200px] rotate-[-27deg]"/>
//                <div className="animate-pulse-3 absolute bg-white bottom-[148px] right-[152px] h-[1px] w-[150px] rotate-[-29deg]"/>
//                <div className="animate-pulse-4 absolute bg-white bottom-[107px] right-[298px] h-[1px] w-[65px] rotate-[-6deg]"/>
//                <div className="animate-pulse-3 absolute bg-white bottom-[236px] right-[94px] h-[1px] w-[105px] rotate-[105deg]"/>
//                <AiOutlinePlus size={20} className="absolute text-white right-[300px] bottom-[180px]"/>
//                <AiOutlinePlus size={20} className="absolute text-white right-[285px] bottom-[100px]"/>
//                <AiOutlinePlus size={20} className="absolute text-white right-[350px] bottom-[95px]"/>
//                <AiOutlinePlus size={20} className="absolute text-white right-[150px] bottom-[175px]"/>
//                <AiOutlinePlus size={20} className="absolute text-white right-[125px] bottom-[270px]"/></div>
//            </ParallaxLayer>
//            <ParallaxLayer  speed={0.80} >
//            <div className="bg-gray-200 dark:bg-gray-200 w-2 ms-0 absolute top-[325px] h-[150px] "></div>
//                <div className="absolute top-[325px] h-[130px] ms-3 mt-[10px] justify-between flex flex-col" onMouseEnter={()=>{console.log("mouse entered")}}>
//                <SiLinkedin onClick={()=>{window.open(socialConstants.linkedin)}} size={25} className="m-1 text-gray-200 dark:text-gray-200 duration-100 hover:translate-x-1"/>
//                <SiInstagram onClick={()=>{window.open(socialConstants.instagram)}} size={25} className="m-1 text-gray-200 dark:text-gray-200 duration-100 hover:translate-x-1"/>
//                <SiGithub onClick={()=>{window.open(socialConstants.github)}} size={25} className="m-1 text-gray-200 dark:text-gray-200 duration-100 hover:translate-x-1"/>
//                </div>
//            </ParallaxLayer>
//            <ParallaxLayer  speed={1} factor={1} offset={1} style={{ backgroundImage: `url(${window.location.origin + "/" + 'greekstatue.jpg'})`, backgroundSize:'cover' }}/>
//            <ParallaxLayer offset={1.25} speed={0.5}>
//            <p key={'about'} className="flex flex-row justify-center items-center font-SF_Pro_Display_Black mx-[60px]  text-[20px] text-white dark:text-gray-200">{aboutText}</p>
//            </ParallaxLayer>
//            <ParallaxLayer offset={1.25} speed={2.5}>
//                <img className="h-[100px] w-[100px] absolute right-[100px] top-[300px]" src={`${window.location.origin + "/" + 'dove.png'}`}/>
//            </ParallaxLayer>
//            
//        </Parallax>
//        </div>