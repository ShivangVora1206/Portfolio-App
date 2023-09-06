import React, { useEffect } from "react";
import { useState } from "react";
import { customToastProps } from "../../config";
import { useSelector, useDispatch } from "react-redux";
import {
	showCustomToast,
	hideCustomToast,
} from "../../global_store/slices/customToastSlice";
const typeToBgMap: any = {
	success: "bg-green-500",
	error: "bg-red-500",
	warning: "bg-yellow-500",
	info: "bg-blue-500",
};

export default function CustomToast(props: any) {
	const toast = useSelector((state: any) => state.customToast);
	const dispatch = useDispatch();
	const handelToast = () => {
		// dispatch(
		// 	showCustomToast({
		// 		message: "Hello",
		// 		type: "success",
		// 		timeout: 2000,
		// 	})
		// );
	};

	useEffect(() => {
        if(toast.visible){
		setTimeout(() => {
				dispatch(hideCustomToast());
			}, toast.timeout ? toast.timeout : 2000)}
	}, [toast]);

	return (
		<div
			key={"container"}
			className="relative h-[90px] cursor-default flex flex-row justify-end me-2"
		>
			<div
				onClick={handelToast}
				className={`absolute ${
					typeToBgMap[toast.type]
				} h-[50px] flex flex-col justify-center items-center p-7 me-3 rounded-lg ease-in-out duration-200 ${
					toast.visible
						? "opacity-100 translate-y-0"
						: "opacity-0 translate-y-7"
				}`}
			>
				<p className="text-sm min-w-max text-white font-SF_Pro_Text_Regular">
					{toast.message}
				</p>
			</div>
		</div>
	);
}
