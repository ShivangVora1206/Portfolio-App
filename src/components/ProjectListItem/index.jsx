import Icon from "@mdi/react";

import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useCollapse } from "react-collapsed";
import { useAnimation } from "framer-motion";
import { iconsPathMap } from "../../constants";
import { useDispatch, useSelector } from "react-redux";
import {
	toggleProjectModal,
	setProject,
} from "../../global_store/slices/projectModalSlice";
export default function ProjectListItem(params) {
	// console.log(params.project.stack);
	const dispatch = useDispatch();

	return (
		<div
			className=" dark:text-slate-200 text-zinc-800 mx-6 my-4 w-80 xl:w-70 h-48 flex flex-col rounded-lg cursor-pointer"
			onClick={() => {
				dispatch(toggleProjectModal(true));
				dispatch(
					setProject({
						name: params.project.name,
						description: params.project.description,
						image: params.project.image,
						stack: params.project.stack,
						github: params.project.github,
					})
				);
			}}
		>
			<img
				className="rounded-lg h-52"
				src={process.env.PUBLIC_URL + params.project.image}
			/>
			<div className="absolute  bg-zinc-300 dark:bg-zinc-800 w-80 h-100 mt-0 rounded-lg opacity-0 p-0 hover:p-3 hover:opacity-100  duration-200">
				<h1 className="font-SF_Pro_Display_Black text-center mt-2">
					{params.project.name}
				</h1>
				<div className=" grid grid-cols-5 mx-5 mb-8 my-2">
					{params.project.stack.map((item) => {
						return (
							<div className="flex flex-row justify-center items-center">
								<div className="">
									{typeof iconsPathMap[item] == typeof "" ? (
										<Icon
											className="m-1"
											path={iconsPathMap[item]}
											size={1}
										/>
									) : (
										iconsPathMap[item]
									)}
								</div>
							</div>
						);
					})}
				</div>
				{/* <div className="h-2"></div> */}
			</div>
		</div>
	);
}
