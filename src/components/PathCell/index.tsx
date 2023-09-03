import React from "react";
import { useState } from "react";
import { PathCellProps, IMAGES_BASE_URL } from "../../config";
export default function PathCell(props:PathCellProps) {
	const [degree, setDegree] = useState(props.angle);

	const toggleDegree = (currentDegree:number) => {
		if(currentDegree === 91){
			setDegree(0);
		}
		else {
			setDegree((currentDegree + 90) % 360);
		}
	};

	const degreeToRotateMap:any = {
		0: "rotate-0",
		90: "rotate-90",
		180: "rotate-180",
		270: "rotate-270",
        91: "-rotate-90"
	};

	const imageToBgMap:any = {
		"1-1": "bg-path-cell-1-1",
		"1-2": "bg-path-cell-1-2",
		"1-3": "bg-path-cell-1-3",
		"1-4": "bg-path-cell-1-4",
		"1-5": "bg-path-cell-1-5",
		"1-6": "bg-path-cell-1-6",
		"1-7": "bg-path-cell-1-7",
		"2-1": "bg-path-cell-2-1",
		"2-2": "bg-path-cell-2-2",
		"2-3": "bg-path-cell-2-3",
		"2-4": "bg-path-cell-2-4",
		"2-5": "bg-path-cell-2-5",
		"2-6": "bg-path-cell-2-6",
		"2-7": "bg-path-cell-2-7",
		"3-1": "bg-path-cell-3-1",
		"3-2": "bg-path-cell-3-2",
		"3-3": "bg-path-cell-3-3",
		"3-4": "bg-path-cell-3-4",
		"3-5": "bg-path-cell-3-5",
		"3-6": "bg-path-cell-3-6",
		"3-7": "bg-path-cell-3-7",
		"4-1": "bg-path-cell-4-1",
		"4-2": "bg-path-cell-4-2",
		"4-3": "bg-path-cell-4-3",
		"4-4": "bg-path-cell-4-4",
		"4-5": "bg-path-cell-4-5",
		"4-6": "bg-path-cell-4-6",
		"4-7": "bg-path-cell-4-7",
	};

	let cell = <></>;

	switch (props.type) {
		case "vertical-full":
			cell = (
				<div
					id="vertical-line-full"
					onClick={() => {
						toggleDegree(degree);
					}}
					className={`h-[120px] w-[120px]  bg-white dark:bg-black   hover:scale-90 duration-200 ${degreeToRotateMap[degree]}`}
				>
					<div className="h-[120px] w-[40px] bg-black dark:bg-white ms-[40px]"></div>
				</div>
			);
			break;
		case "horizontal-full":
			cell = (
				<div
					id="horizontal-line-full"
					onClick={() => {
						toggleDegree(degree);
					}}
					className={`h-[120px] w-[120px]  bg-white dark:bg-black   hover:scale-90 duration-200 ${degreeToRotateMap[degree]}`}
				>
					<div className="h-[40px] w-[120px] bg-black dark:bg-white mt-[40px]"></div>
				</div>
			);
			break;
		case "corner-left-top":
			cell = (
				<div
					id="corner-left-top"
					onClick={() => {
						toggleDegree(degree);
					}}
					className={`h-[120px] w-[120px]  bg-white dark:bg-black   hover:scale-90 duration-200 ${degreeToRotateMap[degree]}`}
				>
					<div className="h-[40px] w-[40px] bg-black dark:bg-white ms-[40px]"></div>
					<div className="h-[40px] w-[80px] bg-black dark:bg-white"></div>
				</div>
			);
			break;
		case "corner-right-top":
			cell = (
				<div
					id="corner-right-top"
					onClick={() => {
						toggleDegree(degree);
					}}
					className={`h-[120px] w-[120px]  bg-white dark:bg-black   hover:scale-90 duration-200 ${degreeToRotateMap[degree]}`}
				>
					<div className="h-[40px] w-[40px] bg-black dark:bg-white ms-[40px]"></div>
					<div className="h-[40px] w-[80px] bg-black dark:bg-white ms-[40px]"></div>
				</div>
			);
			break;
		case "corner-right-bottom":
			cell = (
				<div
					id="corner-right-bottom"
					onClick={() => {
						toggleDegree(degree);
					}}
					className={`h-[120px] w-[120px]  bg-white dark:bg-black   hover:scale-90 duration-200 ${degreeToRotateMap[degree]}`}
				>
					<div className="h-[40px] w-[80px] bg-black dark:bg-white mt-[40px] ms-[40px]"></div>
					<div className="h-[40px] w-[40px] bg-black dark:bg-white ms-[40px]"></div>
				</div>
			);
			break;
		case "corner-left-bottom":
			cell = (
				<div
					id="corner-left-bottom"
					onClick={() => {
						toggleDegree(degree);
					}}
					className={`h-[120px] w-[120px]  bg-white dark:bg-black   hover:scale-90 duration-200 ${degreeToRotateMap[degree]}`}
				>
					<div className="h-[40px] w-[80px] bg-black dark:bg-white mt-[40px]"></div>
					<div className="h-[40px] w-[40px] bg-black dark:bg-white ms-[40px]"></div>
				</div>
			);
			break;
		case "blank":
			cell = (
				<div
					id="blank"
					className={`h-[120px] w-[120px]  bg-white dark:bg-black  hover:scale-90 duration-200`}
				/>
			);
			break;
		case "image":
			cell = (
				<img
					src={`${IMAGES_BASE_URL}?id=`+props.imageLabel+'.jpg'}
					id="image"
					onClick={() => {
						toggleDegree(degree);
					}}
					className={`h-[120px] w-[120px] hover:scale-90 duration-200 ${degreeToRotateMap[degree]}`}
				/>
			);
		// case "image":
		// 	cell = (
		// 		<div
		// 			id="image"
		// 			onClick={() => {
		// 				toggleDegree(degree);
		// 			}}
		// 			className={`h-[120px] w-[120px] hover:scale-90 duration-200 bg-cover bg-no-repeat ${
		// 				imageToBgMap[props.imageLabel]
		// 			} ${degreeToRotateMap[degree]}`}
		// 		/>
		// 	);
	}

	return cell;
}
