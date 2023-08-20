import Button from '@mui/material/Button'
import {useState} from 'react'
import {PiEyeClosedFill, PiEyeFill} from 'react-icons/pi'
import { resumeBackgroundDark, resumeBackgroundLight, resumeLink } from '../../constants';
export default function Resume(params) {

    const [buttonClicked, toggleButtonClicked] = useState(false);

    return (
        <div className={`h-full w-full flex flex-col justify-center items-center dark:bg-resume-bg-dark bg-resume-bg bg-cover bg-no-repeat bg-center duration-150`}>
            <h1 className="text-center dark:text-slate-200 text-slate-200 flex mb-5 mt-20 font-minecraft text-2xl">MY RESUME</h1>
            {buttonClicked ? <object data={resumeLink} type="application/pdf" className="w-custom-large-pdf-width h-custom-large-pdf-height mb-10 duration-200"/> : <div/>}
            <div className='mt-5 mb-20'><Button endIcon={buttonClicked ? <PiEyeClosedFill/> : <PiEyeFill/>} onClick={()=>{toggleButtonClicked(!buttonClicked)}} variant='contained'>{buttonClicked ? 'close resume' : 'open resume'}</Button></div>
        </div>
    )
}