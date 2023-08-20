/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			rotate: {
				
				'270': '270deg',
			},
			backgroundImage: {
				"image-home": "url('../public/bg1.jpg')",
				"image-dark": "url('../public/bg3.jpg')",
				"image-light": "url('../public/bg4.png')",
				"image-work-light": "url('../public/work-bg-red.png')",
				"image-work-dark": "url('../public/work-bg-blue.png')",
				"home-image-light": "url('../public/game-bg-5.gif')",
				"home-image-dark": "url('../public/game-bg-4.gif')",
				"resume-bg": "url('../public/game-bg-2-m.gif')",
				"resume-bg-dark": "url('../public/game-bg.gif')",
				"path-cell-1-1":"url('../public/image_puzzle_1/1_1.png')",
				"path-cell-1-2":"url('../public/image_puzzle_1/1_2.png')",
				"path-cell-1-3":"url('../public/image_puzzle_1/1_3.png')",
				"path-cell-1-4":"url('../public/image_puzzle_1/1_4.png')",
				"path-cell-1-5":"url('../public/image_puzzle_1/1_5.png')",
				"path-cell-1-6":"url('../public/image_puzzle_1/1_6.png')",
				"path-cell-1-7":"url('../public/image_puzzle_1/1_7.png')",
				"path-cell-2-1":"url('../public/image_puzzle_1/2_1.png')",
				"path-cell-2-2":"url('../public/image_puzzle_1/2_2.png')",
				"path-cell-2-3":"url('../public/image_puzzle_1/2_3.png')",
				"path-cell-2-4":"url('../public/image_puzzle_1/2_4.png')",
				"path-cell-2-5":"url('../public/image_puzzle_1/2_5.png')",
				"path-cell-2-6":"url('../public/image_puzzle_1/2_6.png')",
				"path-cell-2-7":"url('../public/image_puzzle_1/2_7.png')",
				"path-cell-3-1":"url('../public/image_puzzle_1/3_1.png')",
				"path-cell-3-2":"url('../public/image_puzzle_1/3_2.png')",
				"path-cell-3-3":"url('../public/image_puzzle_1/3_3.png')",
				"path-cell-3-4":"url('../public/image_puzzle_1/3_4.png')",
				"path-cell-3-5":"url('../public/image_puzzle_1/3_5.png')",
				"path-cell-3-6":"url('../public/image_puzzle_1/3_6.png')",
				"path-cell-3-7":"url('../public/image_puzzle_1/3_7.png')",
				"path-cell-4-1":"url('../public/image_puzzle_1/4_1.png')",
				"path-cell-4-2":"url('../public/image_puzzle_1/4_2.png')",
				"path-cell-4-3":"url('../public/image_puzzle_1/4_3.png')",
				"path-cell-4-4":"url('../public/image_puzzle_1/4_4.png')",
				"path-cell-4-5":"url('../public/image_puzzle_1/4_5.png')",
				"path-cell-4-6":"url('../public/image_puzzle_1/4_6.png')",
				"path-cell-4-7":"url('../public/image_puzzle_1/4_7.png')",

			},
			fontSize: {
				"custom-large": "230px",
				"custom-medium": "100px",
				"custom-small": "80px",
				
			},
			fontFamily: {
				bombing: ["BOMBING"],
				varsity: ["Varsity"],
				agharti: ["Agharti"],
				minecraft: ["Minecraft"],
				coolvetica: ["Coolvetica"],
				SF_Pro_Display_Black: ["SFProDisplayBlack"],
				SF_Pro_Text_Bold: ["SFProTextBold"],
				SF_Pro_Text_Heavy: ["SFProTextHeavy"],
				SF_Pro_Text_Regular: ["SFProTextRegular"],
			},
			width: {
				"custom-large-width": "900px",
				"custom-medium-width": "510px",
				"custom-xl-square-width":"480px",
				"custom-100px-width":"120px",
				"custom-large-pdf-width": "800px",
			},
			height: {
				"custom-large-height": "250px",
				"custom-xl-square-height":"480px",
				"custom-100px-height":"120px",
				"custom-large-pdf-height": "1200px",
			},
			margin:{
				"custom-margin":"92px",
				"custom-top-margin":"152px",
			},
			top:{
				"custom-top":"200px",
			},
			
		},
		
	},
	plugins: [],
	darkMode: "class",
};
