import axios from "axios";
import React, { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import { toggleLoader } from "../../global_store/slices/loaderSlice";
import {toggleImageModal} from "../../global_store/slices/imageModalSlice";
import { UPLOAD_IMAGE_BASE_URL } from "../../config";
export default function ImageUploadModal(props:any) {
    const [selectedImage, setSelectedImage] = useState<any>(null);
    const dispatch = useDispatch();
    const uploadImage = async (image:any) =>{
        const formdata = new FormData();
        formdata.append("image", image);
        try {
            const response = await axios.post(UPLOAD_IMAGE_BASE_URL, formdata);
            console.log(response);
            if(response.status === 200){
                console.log("Image uploaded successfully");
                console.log(response.data);
                dispatch(toggleLoader(false))
                dispatch(toggleImageModal(false))
            }else {
                console.log("Image upload failed");
                dispatch(toggleLoader(false))
            }
        } catch (error) {
            dispatch(toggleLoader(false))
        }
        
    }

    const handleSubmit = (event:any) => {
        event.preventDefault();
        dispatch(toggleLoader(true))
        uploadImage(selectedImage)
    }
    const handleImageChange = (event:any) => {
        console.log(event);
        
        const file = event.target.files[0];
        setSelectedImage(file);
    }

    return (
        <div key={"container-image-modal"} className=" bg-black bg-opacity-40 h-full w-full flex flex-col justify-center items-center">
            <div className="relative bg-white dark:bg-violet-950 h-100 w-[800px] rounded-xl flex flex-col justify-between items-center p-6">
            <h1 onClick={()=>{dispatch(toggleImageModal(false))}} className="absolute top-2 right-3 font-minecraft text-lg text-violet-800 dark:text-violet-100 cursor-pointer">X</h1>
            <h1 className="font-minecraft text-violet-500 dark:text-violet-100">UPLOAD IMAGE </h1>    
                <form onSubmit={handleSubmit} className="flex flex-row items-center justify-between">
                    <input className="file:bg-violet-50 file:dark:bg-violet-900 file:text-violet-500 file:dark:text-violet-100 hover:file:bg-violet-100 hover:file:dark:bg-violet-700 file:rounded-lg file:rounded-tr-none file:rounded-br-none file:px-4 file:py-2 file:mr-4 file:border-none hover:cursor-pointer border dark:border-slate-800 rounded-lg text-gray-400" type="file" onChange={handleImageChange} accept="image/*" />
                    <button className="bg-violet-50 dark:bg-violet-900 hover:bg-violet-100 hover:dark:bg-violet-700 rounded-md text-violet-500 dark:text-violet-100 py-2 px-2 mx-4 my-4" type="submit">Upload</button>
                </form>
            </div>
        </div>
    )
}