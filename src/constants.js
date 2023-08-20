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
import {BiLogoMongodb, BiLogoDjango, BiLogoDocker, BiLogoFlutter, BiLogoGmail, BiLogoTailwindCss, BiLogoReact, BiLogoFlask} from 'react-icons/bi';
import {TbBrandRedux, TbBrandVscode} from 'react-icons/tb';
import {SiMysql, SiPostgresql, SiTypescript, SiNextdotjs, SiDart, SiLinkedin, SiAndroid, SiAndroidstudio, SiSocketdotio} from 'react-icons/si';
import {GrInstagram} from 'react-icons/gr';



export const iconsPathMap = {
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

export const socialConstants = {
	linkedin: "https://www.linkedin.com/in/shivang-Vora-1206/",
	instagram: "https://www.instagram.com/vora_shivang/",
	github: "https://github.com/ShivangVora1206"
}

export const navbarLogo = "svlogowhite-no-bg.png";



export const resumeLink = "ShivangVoraResume V13.pdf";


export const firstName = "Shivang";
export const lastName = "Vora";
export const aboutText ="Allow me to introduce myself—I'm Shivang Vora, a software engineer with a profound love for exploring the vast realm of technology and crafting innovative applications. I find immense joy in staying at the forefront of emerging technologies, constantly seeking new challenges to broaden my skill set and push the boundaries of what I can achieve. There's nothing quite like the satisfaction of transforming ideas into functional and user-friendly solutions.";
export const companyDetails = [
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

export const projects = [
	{
		name:"Portfolio Website",
		description:"project description",
		stack:['react', 'tailwind', 'redux', 'javascript', 'vscode', 'git'],
		image:"portfolio.png",
		github:"https://github.com/ShivangVora1206"
	},
	{
		name:"Blockchain Supply Chain Project",
		description:"project description",
		stack:['python', 'flask', 'android', 'androidstudio', 'mongodb', 'git'],
		image:"military_blockchain.png",
		github:"https://github.com/ShivangVora1206"
	},
	{
		name:"GA Pilot App",
		description:"project description",
		stack:['java', 'android', 'androidstudio', 'git'],
		image:"gapilot.png",
		github:"https://github.com/ShivangVora1206"
	},
	{
		name:"GA Technician App",
		description:"project description",
		stack:['java', 'android', 'androidstudio', 'git'],
		image:"gatechnician.png",
		github:"https://github.com/ShivangVora1206"
	},
	{
		name:"Repartee Chat Application",
		description:"project description",
		stack:['react', 'node', 'mongodb', 'html', 'css', 'javascript', 'socketio', 'git'],
		image:"repartee.png",
		github:"https://github.com/ShivangVora1206"
	},
	{
		name:"Alder Alarm",
		description:"project description",
		stack:['node', 'mongodb', 'html', 'css', 'javascript', 'socketio', 'git'],
		image:"alder.png",
		github:"https://github.com/ShivangVora1206"
	},
	{
		name:"E - Commerce App",
		description:"project description",
		stack:['node', 'mongodb', 'html', 'css', 'javascript', 'socketio', 'git'],
		image:"ecommerce.png",
		github:"https://github.com/ShivangVora1206"
	},
	{
		name:"NoxLog",
		description:"project description",
		stack:['node', 'html', 'css', 'javascript', 'git'],
		image:"noxlog.png",
		github:"https://github.com/ShivangVora1206"
	},
	{
		name:"TODO App",
		description:"project description",
		stack:['node', 'html', 'css', 'javascript', 'mongodb', 'git'],
		image:"todoapp.png",
		github:"https://github.com/ShivangVora1206"
	},

	{
		name:"Pomodoro App",
		description:"project description",
		stack:['javascript', 'html', 'css', 'git'],
		image:"pomodoro.png",
		github:"https://github.com/ShivangVora1206"
	},
	{
		name:"Project ASA",
		description:"project description",
		stack:['python', 'flask', 'html', 'css', 'javascript', 'git'],
		image:"projectasa.png",
		github:"https://github.com/ShivangVora1206"
	},
	{
		name:"Affinity",
		description:"project description",
		stack:['python', 'java', 'html', 'css', 'mysql', 'git'],
		image:"affinity.png",
		github:"https://github.com/ShivangVora1206"
	},
	
]

export const colorCodes = ['bg-red-600', 'bg-orange-600', 'bg-yellow-500', 'bg-green-600', 'bg-teal-600', 'bg-blue-600', 'bg-indigo-600']

export const techStackList = [
								{name:'python', bgtailwind:'dark:bg-red-500 bg-violet-800', icon:<Icon className="m-1 p-3 sm:p-2" path={iconsPathMap['python']} size={3}/>},
								{name:'vscode', bgtailwind:'dark:bg-red-600 bg-violet-700', icon:<TbBrandVscode size={55} className="m-1 p-3 sm:p-1"/>},
								{name:'javascript', bgtailwind:'dark:bg-red-700 bg-violet-600', icon:<Icon className="m-1 p-3 sm:p-2" path={iconsPathMap['javascript']} size={3}/>},
								{name:'docker', bgtailwind:'dark:bg-red-800 bg-violet-500', icon:<BiLogoDocker size={55} className="m-1 p-3 sm:p-1"/>},
								{name:'html', bgtailwind:'dark:bg-pink-500 bg-purple-800', icon:<Icon className="m-1 p-3 sm:p-2" path={iconsPathMap['html']} size={3}/>}, 
								{name:'git', bgtailwind:'dark:bg-pink-600 bg-purple-700', icon:<Icon className="m-1 p-3 sm:p-2" path={iconsPathMap['git']} size={3}/>}, 
								{name:'node', bgtailwind:'dark:bg-pink-700 bg-purple-600', icon:<Icon className="m-1 p-3 sm:p-2" path={iconsPathMap['node']} size={3}/>}, 
								{name:'mongodb', bgtailwind:'dark:bg-pink-800 bg-purple-500', icon:<BiLogoMongodb size={55} className="m-1 p-3 sm:p-1"/>},
								{name:'css', bgtailwind:'dark:bg-purple-500 bg-pink-800', icon:<Icon className="m-1 p-3 sm:p-2" path={iconsPathMap['css']} size={3}/>}, 
								{name:'react', bgtailwind:'dark:bg-purple-600 bg-pink-700', icon:<BiLogoReact size={55} className="m-1 p-3 sm:p-1"/>}, 
								{name:'mysql', bgtailwind:'dark:bg-purple-700 bg-pink-600', icon:<SiMysql size={55} className="m-1 p-3 sm:p-1"/>}, 
								{name:'android', bgtailwind:'dark:bg-purple-800 bg-pink-500', icon:<SiAndroid size={50} className="m-1 p-3 sm:p-1"/>},
								{name:'androidstudio', bgtailwind:'dark:bg-violet-500 bg-red-800', icon:<SiAndroidstudio size={55} className="m-1 p-3 sm:p-1"/>}, 
								{name:'redux', bgtailwind:'dark:bg-violet-600 bg-red-700', icon:<TbBrandRedux size={52} className="m-1 p-3 sm:p-1"/>}, 
								{name:'java', bgtailwind:'dark:bg-violet-700 bg-red-600', icon:<Icon className="m-1 p-3 sm:p-2" path={iconsPathMap['java']} size={3}/>}, 
								{name:'tailwind', bgtailwind:'dark:bg-violet-800 bg-red-500', icon:<BiLogoTailwindCss size={55} className="m-1 p-3 sm:p-1"/>}
							]