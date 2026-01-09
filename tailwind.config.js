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
				mono: ['Courier New', 'monospace'],
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
			animation: {
				'text':'text 5s ease infinite',
				'pulse-3':'pulse 3s ease infinite',
				'pulse-4':'pulse 4s ease infinite',
				'glitch': 'glitch 1s linear infinite',
			},
			keyframes: {
				'text': {
					'0%, 100%': {
						'background-size':'200% 200%',
						'background-position': 'left center'
					},
					'50%': {
						'background-size':'200% 200%',
						'background-position': 'right center'
					}
				},
				'pulse': {
					'0%, 100%': { opacity: 1 },
					'50%': { opacity: 0.1 },
				},
				'glitch': {
					'0%': {
						transform: 'translate(0)',
					},
					'20%': {
						transform: 'translate(-2px, 2px)',
					},
					'40%': {
						transform: 'translate(-2px, -2px)',
					},
					'60%': {
						transform: 'translate(2px, 2px)',
					},
					'80%': {
						transform: 'translate(2px, -2px)',
					},
					'100%': {
						transform: 'translate(0)',
					},
				},
			},
		},
	},
	plugins: [],
	darkMode: "class",
}
