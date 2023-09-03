import {
	mdiLanguagePython,
	mdiReact,
	mdiLanguageJavascript,
	mdiLanguageJava,
	mdiLanguageC,
	mdiLanguageCpp,
	mdiLanguageCss3,
	mdiLanguageHtml5,
	mdiGit,
	mdiGithub,
	mdiFlask,
	mdiNodejs,
} from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import {BiLogoMongodb, BiLogoDjango, BiLogoDocker, BiLogoFlutter, BiLogoGmail, BiLogoTailwindCss, BiLogoReact, BiLogoFlask} from 'react-icons/bi';
import {TbBrandRedux, TbBrandVscode} from 'react-icons/tb';
import {SiMysql, SiPostgresql, SiTypescript, SiNextdotjs, SiDart, SiLinkedin, SiAndroid, SiAndroidstudio, SiSocketdotio} from 'react-icons/si';
import {GrInstagram} from 'react-icons/gr';
import { JSXElementConstructor } from 'react';
import { IconType } from "react-icons/lib";

export type WorkItem = {
	companyName: string,
	startDate: string,
	endDate: string,
	content: string[],
	mode: boolean
}
export type Project = {
    name: string,
    description: string,
    stack: string[],
    github: string,
    image: string
}
export type Company = {
    name: string,
    content: string[],
    startDate: string,
    endDate: string
}
export type NavbarProps = {
	onHomeClick: () => void,
	onWorkClick: () => void,
	onResumeClick: () => void,
	onProjectsClick: () => void,
	onStackClick: () => void,
	onPuzzleClick: () => void,
	
}
export type PathCellProps = {
	type: string,
	angle: number,
	imageLabel:string
}
export interface IconsPathMapInterface {
  [key: string]:  string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal; // Or replace 'string' with the appropriate type if using icon names instead of JSX elements
}
export const projects:Project[] = [
	{
		name:"Portfolio Website",
		description:"project description",
		stack:['react', 'tailwind', 'redux', 'javascript', 'vscode', 'git', 'github', 'docker'],
		image:"portfolio.png",
		github:"https://github.com/ShivangVora1206/Portfolio-App"
	},
	{
		name:"Blockchain Supply Chain Project",
		description:"Objective was to track the supply chain of military goods and equipment on an open ledger system. Blockchain fundamentals implemented using Python and FastAPI. Frontend built using MERN stack with Android application developed using Java and Retrofit",
		stack:['python', 'flask', 'android', 'androidstudio', 'mongodb', 'git', 'github'],
		image:"military_blockchain.png",
		github:"https://github.com/ShivangVora1206/DrugTracker"
	},
	{
		name:"GA Pilot App",
		description:"GA - Pilot from General Aeronautics is an app which is planned for Drone Pilots.  Merged API calls using RxJava observables for optimized performance for Mobile development. Added push notifications feature using OneSignal and Firebase Cloud Messaging. Implemented crucial bug fixes to enhance the app's stability and user experience",
		stack:['java', 'android', 'androidstudio', 'git', 'github'],
		image:"gapilot.png",
		github:"https://play.google.com/store/apps/details?id=com.ga.ga_app"
	},
	{
		name:"GA Technician App",
		description:" The technician app is designed to support the technicians with the repairs and maintenance of the drones.  Created the entire project from scratch as the primary developer. Implemented OTP-based login authentication for secure user access. Integrated APIs using Retrofit to fetch and display real-time data. Incorporated Recycler Views within tab layouts and utilized bottom sheet fragments for smooth navigation",
		stack:['java', 'android', 'androidstudio', 'git', 'github'],
		image:"gatechnician.png",
		github:"https://play.google.com/store/apps/details?id=com.ga.gatechnician"
	},
	{
		name:"Repartee Chat Application",
		description:"For users who prefer to conduct discussions in their private spaces, there is an application called Repartee.  With a dependable socket.io connection, users may send and receive messages one-to-one or in rooms containing multiple users. All of their crucial chats are securely kept on a MongoDB database at the backend with NodeJS APIs. New users can set up a profile with their preferred display image and begin communicating with the groups they belong to. Users can have a seamless experience without having to log in each time thanks to a persistent authorization mechanism.",
		stack:['react', 'node', 'mongodb', 'html', 'css', 'javascript', 'socketio', 'git', 'github'],
		image:"repartee.png",
		github:"https://github.com/ShivangVora1206/Repartee-chat-app"
	},
	{
		name:"Alder Alarm",
		description:"With the help of the app Alder Alarm, users may set alarms and reminders down to the minute. Users can use many devices at once to access the application, and they will all concurrently receive alarm alerts. Uses an indexed MongoDB database to provide lightning-fast query response times. Adler Alarm makes it easy for a user to keep track of all the alarms from the interactive user interface and users can also delete alarms as per necessity. ",
		stack:['node', 'mongodb', 'html', 'css', 'javascript', 'socketio', 'git', 'github'],
		image:"alder.png",
		github:"https://github.com/ShivangVora1206/alarmApp"
	},
	{
		name:"E - Commerce App",
		description:"An E-commerce web-application with Email user verification and MongoDB database. Users can create an account as a customer or an admin. Admin users have specialized privileges to add or delete a product from inventory. A regular customer can add or delete products from a cart and also manipulate the quantity of a product from their cart.",
		stack:['node', 'mongodb', 'html', 'css', 'javascript', 'socketio', 'git', 'github'],
		image:"ecommerce.png",
		github:"https://github.com/ShivangVora1206/ECommerce-app"
	},
	{
		name:"NoxLog",
		description:"A virtualized journaling application where users can add their regular diary entries. This application can substitute the need for maintaining a physical bedside diary for people who have a habit of journaling their days on a regular basis. The inner journal paging application is designed to have a darker theme to imitate the usual nighttime conditions of a person who writes their diary entries at the end of the day.",
		stack:['node', 'html', 'css', 'javascript', 'git', 'github'],
		image:"noxlog.png",
		github:"https://github.com/ShivangVora1206/NoxLog"
	},
	{
		name:"TODO App",
		description:"Discover seamless task management with our HTML, CSS, and JS-powered Todo app. Leveraging a Node.js server and Mongoose, tasks are securely stored and retrieved from a MongoDB database. Experience organized productivity at your fingertips.",
		stack:['node', 'html', 'css', 'javascript', 'mongodb', 'git', 'github'],
		image:"todoapp.png",
		github:"https://github.com/ShivangVora1206/todo-app-nodejs"
	},

	{
		name:"Pomodoro App",
		description:"An intuitive Pomodoro Clock application with an attractive user interface wherein the user can set a timer for work and break according to the concepts of a Pomodoro Clock. In order to encourage prolonged attention and prevent mental tiredness, this well-known time management technique requires one to alternate focused work spurts called pomodoros with frequent brief breaks",
		stack:['javascript', 'html', 'css', 'git'],
		image:"pomodoro.png",
		github:"https://github.com/ShivangVora1206"
	},
	{
		name:"Project ASA",
		description:"An attendance visualization solution for parents and students to view their attendance in detail using only their PRN. Uses Google Sheets API along with a FastAPI application to fetch, parse and provide the data. The dashboard is designed to be simple and easy to understand using color coded charts and numeric values to make it easy for a student or a parent to understand the data",
		stack:['python', 'flask', 'html', 'css', 'javascript', 'git'],
		image:"projectasa.png",
		github:"https://github.com/ShivangVora1206"
	},
	{
		name:"Affinity",
		description:"Objective was to understand the personality of a user to match them with people having similar personalities. Constructed Ocean personality profile of the users using KNN Machine Learning algorithm.",
		stack:['python', 'java', 'html', 'css', 'mysql', 'git'],
		image:"affinity.png",
		github:"https://github.com/ShivangVora1206"
	},
	
]

export const socialConstants = {
	linkedin: "https://www.linkedin.com/in/shivang-Vora-1206/",
	instagram: "https://www.instagram.com/vora_shivang/",
	github: "https://github.com/ShivangVora1206"
}

export const navbarLogo:string = "svlogowhite-no-bg.png";
export const resumeLink:string = "ShivangVoraResume V13.pdf";
export const firstName:string = "Shivang";
export const lastName:string = "Vora";
export const aboutText:string ="Allow me to introduce myself—I'm Shivang Vora, a software engineer with a profound love for exploring the vast realm of technology and crafting innovative applications. I find immense joy in staying at the forefront of emerging technologies, constantly seeking new challenges to broaden my skill set and push the boundaries of what I can achieve. There's nothing quite like the satisfaction of transforming ideas into functional and user-friendly solutions.";

export const colorCodes:string[] = ['bg-red-600', 'bg-orange-600', 'bg-yellow-500', 'bg-green-600', 'bg-teal-600', 'bg-blue-600', 'bg-indigo-600'];

export const companyDetails:Company[] = [
	{
		name: "General Aeronutics Pvt. Ltd. - Android Developer",
		content: [
			"Developed and maintained 2 Android Mobile applications for GA Pilot App and GA Technician App.",
			"Utilized Agile workflow to efficiently manage and deliver projects on time.",
			"Collaborated with cross-functional teams to design and implement new features.",
			"Conducted code reviews and provided valuable feedback to improve code quality.",
		],
		startDate: "02/23",
		endDate: "08/23",
	},
	{
		name: "Code Quotient Pvt. Ltd. - Software Developer Intern",
		content: [
			"Designed and developed 5 separate projects during this internship focusing on MERN stack development.",
			"Implemented APIs and integrated frontend with backend functionality",
			"Designed database architecture and system level implementations for the projects.",
			"Developed a custom made Session management middleware system from scratch.",
			"Developed a Pomodoro application, a multi-device simultaneous alarm system, a web socket enabled chat application, an E-commerce website with email based user verification and much more",
		],
		startDate: "08/22",
		endDate: "12/22",
	},
	{
		name: "R3 SYS Pvt. Ltd. - Java Developer Intern",
		content: [
			"Developed and maintained Java applications",
			"Worked as an Intern in Java development, using core Java, Advanced Java, and Spring framework.",
			"Made seven projects during the internship including a full stack banking application, a KNN machine learning based personality matching matrimony application, an ERP system, etc.",
		],
		startDate: "02/22",
		endDate: "04/22",
	},
	{
		name: "Magtapp Pvt. Ltd. - Video Editor",
		content: [
			"Created multiple ads for promotional purposes",
			"Produced in-app tutorial videos for several different devices",
		],
		startDate: "05/20",
		endDate: "08/20",
	},
	{
		name: "L&D Global Mumbai Chapter - Editor In Chief",
		content: [
			"Created and edited all the assets and videos for TBGM Season 1",
			"Consulted on Season 2 and Season 3 of TBGM",
		],
		startDate: "05/19",
		endDate: "06/19",
	},
];


export const iconsPathMap:IconsPathMapInterface = {
	python: mdiLanguagePython,
	react: mdiReact,
	javascript: mdiLanguageJavascript,
	java: mdiLanguageJava,
	c: mdiLanguageC,
	cpp: mdiLanguageCpp,
	css: mdiLanguageCss3,
	html: mdiLanguageHtml5,
	git: mdiGit,
	github: mdiGithub,
	flask: <BiLogoFlask size={25} className="m-1"/>,
	node: mdiNodejs,
	mongodb: <BiLogoMongodb size={25} className="m-1"/>,
	django: <BiLogoDjango size={25} className="m-1"/>,
	docker: <BiLogoDocker size={25} className="m-1"/>,
	flutter: <BiLogoFlutter size={25} className="m-1"/>,
	gmail: <BiLogoGmail size={25} className="m-1"/>,
	mysql: <SiMysql size={25} className="m-1"/>,
	postgresql: <SiPostgresql size={25} className="m-1"/>,
	typescript: <SiTypescript size={20} className="m-1"/>,
	next: <SiNextdotjs size={20} className="m-1"/>,
	dart: <SiDart size={25} className="m-1"/>,
	linkedin: <SiLinkedin size={25} className="m-1"/>,
	android: <SiAndroid size={20} className="m-1"/>,
	androidstudio: <SiAndroidstudio size={25} className="m-1"/>,
	instagram: <GrInstagram size={25} className="m-1"/>,
	redux: <TbBrandRedux size={22} className="m-1"/>,
	vscode: <TbBrandVscode size={25} className="m-1"/>,
	tailwind: <BiLogoTailwindCss size={25} className="m-1"/>,
	socketio: <SiSocketdotio size={25} className="m-1"/>,
	
}


export const techStackList = [
	{name:'python', bgtailwind:'dark:bg-red-500 bg-violet-800', icon:<Icon className="m-1 p-3 sm:p-2" path={iconsPathMap['python'].toString()} size={3}/>},
	{name:'vscode', bgtailwind:'dark:bg-red-600 bg-violet-700', icon:<TbBrandVscode size={55} className="m-1 p-3 sm:p-1"/>},
	{name:'javascript', bgtailwind:'dark:bg-red-700 bg-violet-600', icon:<Icon className="m-1 p-3 sm:p-2" path={iconsPathMap['javascript'].toString()} size={3}/>},
	{name:'docker', bgtailwind:'dark:bg-red-800 bg-violet-500', icon:<BiLogoDocker size={55} className="m-1 p-3 sm:p-1"/>},
	{name:'html', bgtailwind:'dark:bg-pink-500 bg-purple-800', icon:<Icon className="m-1 p-3 sm:p-2" path={iconsPathMap['html'].toString()} size={3}/>}, 
	{name:'git', bgtailwind:'dark:bg-pink-600 bg-purple-700', icon:<Icon className="m-1 p-3 sm:p-2" path={iconsPathMap['git'].toString()} size={3}/>}, 
	{name:'node', bgtailwind:'dark:bg-pink-700 bg-purple-600', icon:<Icon className="m-1 p-3 sm:p-2" path={iconsPathMap['node'].toString()} size={3}/>}, 
	{name:'mongodb', bgtailwind:'dark:bg-pink-800 bg-purple-500', icon:<BiLogoMongodb size={55} className="m-1 p-3 sm:p-1"/>},
	{name:'css', bgtailwind:'dark:bg-purple-500 bg-pink-800', icon:<Icon className="m-1 p-3 sm:p-2" path={iconsPathMap['css'].toString()} size={3}/>}, 
	{name:'react', bgtailwind:'dark:bg-purple-600 bg-pink-700', icon:<BiLogoReact size={55} className="m-1 p-3 sm:p-1"/>}, 
	{name:'mysql', bgtailwind:'dark:bg-purple-700 bg-pink-600', icon:<SiMysql size={55} className="m-1 p-3 sm:p-1"/>}, 
	{name:'android', bgtailwind:'dark:bg-purple-800 bg-pink-500', icon:<SiAndroid size={50} className="m-1 p-3 sm:p-1"/>},
	{name:'androidstudio', bgtailwind:'dark:bg-violet-500 bg-red-800', icon:<SiAndroidstudio size={55} className="m-1 p-3 sm:p-1"/>}, 
	{name:'redux', bgtailwind:'dark:bg-violet-600 bg-red-700', icon:<TbBrandRedux size={52} className="m-1 p-3 sm:p-1"/>}, 
	{name:'java', bgtailwind:'dark:bg-violet-700 bg-red-600', icon:<Icon className="m-1 p-3 sm:p-2" path={iconsPathMap['java'].toString()} size={3}/>}, 
	{name:'tailwind', bgtailwind:'dark:bg-violet-800 bg-red-500', icon:<BiLogoTailwindCss size={55} className="m-1 p-3 sm:p-1"/>}
]

export const IMAGES_BASE_URL:string = "http://localhost:3001/Images/v1/getImage";