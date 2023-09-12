import {firstName, lastName, aboutText, socialConstants} from "../../config"
import { useSelector, useDispatch } from "react-redux";
import { updateCursorVariant } from "../../global_store/slices/cursorVariantSlice";
import { SiGithub, SiInstagram, SiLinkedin } from "react-icons/si";
import {Parallax, ParallaxLayer} from '@react-spring/parallax'
import React from "react";
export default function Home() {
    const mode = useSelector((state:any) => {return state.navbar.value.mode})
    const variant = useSelector((state:any)=>{return state.cursorVariant.value})
    const dispatch = useDispatch()
    return(
        <div className="">
        <Parallax pages={3} className="scrollbar">
            <ParallaxLayer  speed={1} factor={2} style={{ backgroundImage: `url(http://127.0.0.1:3000/reneissance.jpg)`, backgroundSize:'cover' }}/>
            <ParallaxLayer  speed={1} factor={1} offset={1} style={{ backgroundImage: `url(http://127.0.0.1:3000/greekstatue.jpg)`, backgroundSize:'cover' }}/>
            {/* <ParallaxLayer offset={1} speed={1} factor={0} style={{ backgroundImage: `url(http://127.0.0.1:3000/bg3.jpeg)`, backgroundSize:'cover' }}/> */}
                
            <ParallaxLayer speed={0.25}>
            <div key={'text-left'} className="flex flex-col justify-center h-full items-center" >
                <div className="flex flex-col items-center "><p onMouseEnter={()=>{dispatch(updateCursorVariant("larger"))}} onMouseLeave={()=>{dispatch(updateCursorVariant("default"))}} key={'title'} className="font-coolvetica p-0  md:w-52 lg:w-full text-custom-medium md:text-custom-medium lg:text-[200px] text-gray-200 dark:text-gray-200 cursor-default">{firstName.toUpperCase()} {lastName.toUpperCase()}</p> 
                <p onMouseEnter={()=>{dispatch(updateCursorVariant("larger"))}} onMouseLeave={()=>{dispatch(updateCursorVariant("default"))}} className="md:w-64 lg:w-96 flex flex-col items-center  font-coolvetica text-custom-small md:text-custom-small lg:text-[90px] text-gray-200 dark:text-gray-200 cursor-default">SOFTWARE DEVELOPER</p> </div>
            </div>
            </ParallaxLayer>
            <ParallaxLayer offset={0} speed={0.25}>
            <div className="flex flex-row h-1/2">
                    <div className="bg-gray-200 dark:bg-gray-200 w-2 ms-0 mt-60 h-1/2 "></div>
                    <div className="flex flex-col justify-evenly h-1/2 mt-60 ms-2">
                        <SiLinkedin onClick={()=>{window.open(socialConstants.linkedin)}} size={25} className="m-1 text-gray-200 dark:text-gray-200 duration-100 hover:translate-x-1"/>
                        <SiInstagram onClick={()=>{window.open(socialConstants.instagram)}} size={25} className="m-1 text-gray-200 dark:text-gray-200 duration-100 hover:translate-x-1"/>
                        <SiGithub onClick={()=>{window.open(socialConstants.github)}} size={25} className="m-1 text-gray-200 dark:text-gray-200 duration-100 hover:translate-x-1"/>
                    </div>
                </div>
            </ParallaxLayer>
            
            <ParallaxLayer offset={1} speed={2}>
                <img className="h-[100px] w-[100px] absolute right-[100px] top-[300px]" src="http://127.0.0.1:3000/dove.png"/>
            </ParallaxLayer>
            
            <ParallaxLayer offset={1.25} speed={0.75}>
            <p key={'about'} className="flex flex-row justify-center items-center font-SF_Pro_Display_Black mx-[60px]  text-[20px] text-white dark:text-gray-200">{aboutText}</p>
            </ParallaxLayer>
        </Parallax>
        </div>
    )
}

// <div key={'container'} className={` flex justify-between flex-col h-screen w-100 ease-in duration-300 
        // ${
        //     mode 
        //     ? `bg-home-image-dark`
        //     : `bg-home-image-light` 
        //     }  bg-no-repeat bg-cover bg-center`}>
        //     <div key={'text-right'} className="flex flex-row justify-center md:justify-between " >
        //         <div className="flex flex-row">
        //             <div className="bg-gray-200 dark:bg-gray-200 w-2 ms-0 mt-60 h-1/2 "></div>
        //             <div className="flex flex-col justify-evenly h-1/2 mt-60 ms-2">
        //                 <SiLinkedin onClick={()=>{window.open(socialConstants.linkedin)}} size={25} className="m-1 text-gray-200 dark:text-gray-200 duration-100 hover:translate-x-1"/>
        //                 <SiInstagram onClick={()=>{window.open(socialConstants.instagram)}} size={25} className="m-1 text-gray-200 dark:text-gray-200 duration-100 hover:translate-x-1"/>
        //                 <SiGithub onClick={()=>{window.open(socialConstants.github)}} size={25} className="m-1 text-gray-200 dark:text-gray-200 duration-100 hover:translate-x-1"/>
        //             </div>
        //         </div>
        //         <p key={'about'} className="text-center md:text-right font-minecraft m-0 p-0 mx-10 mt-24 w-80 text-custom-96 text-gray-200 dark:text-gray-200">{aboutText}</p>
        //     </div>
        //     <div key={'text-left'} className="flex flex-col justify-between md:flex-row items-center md:items-end" >
        //         <div className="flex flex-col items-center md:flex-row md:items-end"><p onMouseEnter={()=>{dispatch(updateCursorVariant("larger"))}} onMouseLeave={()=>{dispatch(updateCursorVariant("default"))}} key={'title'} className="font-coolvetica my-0 p-0 ms-10 me-8 md:w-52 lg:w-custom-medium-width lg:me-0 text-custom-medium md:text-custom-medium lg:text-custom-large text-gray-200 dark:text-gray-200 cursor-default">{firstName.toUpperCase()} {lastName.toUpperCase()}{','}</p> 
        //         <p onMouseEnter={()=>{dispatch(updateCursorVariant("larger"))}} onMouseLeave={()=>{dispatch(updateCursorVariant("default"))}} className="md:w-64 lg:w-96 mb-0 md:mb-2 lg:mb-16 font-coolvetica text-custom-small md:text-custom-small lg:text-custom-medium text-gray-200 dark:text-gray-200 cursor-default">SOFTWARE DEVELOPER</p> </div>
        //         <div className="bg-gray-200 dark:bg-gray-200 w-80 ms-0 mt-60 h-2"></div>

        //     </div>
            
        // </div>