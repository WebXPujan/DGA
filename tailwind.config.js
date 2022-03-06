module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
	"./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
	extend: {
		borderRadius: {
			none: '0',
			'sm': '4px',
			'md': '8px',
			'lg': '10px',
			'xl': '14px',
			'xxl': '18px',
			full: '9999px',
		},
		borderWidth: {
			'1': '1px',
			'0': '0',
			'2': '2px',
			'4': '4px',
			'5': '5px',
			'6': '6px',
		},
		colors: {
			transparent: 'transparent',
			black: '#000',
			blue:{
				50: '#E9F7FE',
				300: '#2088BE',
				700: '#374453',
			},
			white: '#fff',
			gray:{
				200: '#DCDCDC',
				400: '#9C9C9C',
				500: '#242426',
				600: '#1C2632',
				700: '#020D1B'
			},
			green:{
				300:"#0EE000",
				400:"#22A819",
			},
			orange: "#E07000",
			

		},
		fontFamily:{
			dmsans: [
						'DM Sans',
						'-apple-system',
						'BlinkMacSystemFont',
						'"Segoe UI"',
						'Roboto',
						'"Helvetica Neue"',
						'Arial',
						'"Noto Sans"',
						'sans-serif',
						'"Apple Color Emoji"',
						'"Segoe UI Emoji"',
						'"Segoe UI Symbol"',
						'"Noto Color Emoji"',
					],
			worksans: [
						'Work Sans',
						'-apple-system',
						'BlinkMacSystemFont',
						'"Segoe UI"',
						'Roboto',
						'"Helvetica Neue"',
						'Arial',
						'"Noto Sans"',
						'sans-serif',
						'"Apple Color Emoji"',
						'"Segoe UI Emoji"',
						'"Segoe UI Symbol"',
						'"Noto Color Emoji"',
					],
		},
		fontSize: {
			xxs: '10px',
			xs: '0.75rem', // 12px
			sm: '0.875rem', // 14px
			base: '1rem', // 16px
			lg: '1.125rem', // 18px
			xl: '1.25rem', // 20px
			'2xl': '1.5rem', // 24px
			'3xl': '2rem', // 32px
			'4xl': '2.5rem', //40px
			'5xl': '3rem', // 48px
			'6xl': '3.5rem', // 56px
			'7xl': '6rem', // 96px
		},
		fontWeight: {
			normal: 400,
			medium: 500,
			semiBold: 600,
			bold: 700,
			extrabold: 800,
		},
		height: {
			'0': '0',
			'50': '50px',
			'150': '150px',
			'250': '250px',
			'100': '100px',
			'30r': '30rem',
			auto: 'auto',
			full: '100%',
			'screen': '100vh',
		},
		margin: (theme) => ({
			auto: 'auto',
			...theme('spacing'),
			'1/12': '8.333333%',
			'1/6': '16.666667%',

			'-4': '-0.25rem',
			'-6': '-0.375rem',
			'-8': '-0.5rem',
			'-10': '-0.6rem',
			'-12': '-0.75rem',
			'-16': '-1rem',
			'-20': '-20px',
			'-24': '-24px',
			'-28': '-1.75rem', // 28px
			'-32': '-2rem', // 32px
			'-40': '-2.5rem', //40px
			'-48': '-3rem', //48px
			'-56': '-3.5rem', // 56px
			'-60': '-3.75rem', // 56px
			'-64': '-4rem', // 64px
			'-76': '-4.75rem', // 76px
			'-80': '-5rem', // 80px
			'-96': '-6rem', // 96px
			'-112': '-7rem', // 112px
			'-144': '-9rem', // 144px
		}),
		minHeight: {
			'0': '0',
			'140': '140px',
			full: '100%',
			'screen': '100vh',
		},
		padding: theme => theme('spacing'),
		screens: {
			sm:   '640px',
			md:   '768px',
			lg:   '992px',
			'exlg': '1200px',
			xl:   '1450px',
			xxl:  '1600px',
			print: { 'raw': 'print' },
		},
		spacing: {
			'0': '0',
			'1': '1px',
			'2': '2px',
			'4': '0.25rem',
			'6': '0.375rem',
			'8': '0.5rem',
			'10': '0.6rem',
			'12': '0.75rem', // FOR CONTAINER PADDING ONLY ABOVE TABLET
			'14': '0.875rem', //14px
			'16': '1rem', // 16px
			'18': '1.125rem', // 18px
			'20': '1.25rem', // 20px
			'21': '1.3125rem', // 20px
			'22': '1.375rem', //22px
			'24': '1.5rem', // 24px
			'26': '1.625rem', // 26px
			'28': '1.75rem', // 24px
			'32': '2rem', // 32px
			'40': '2.5rem', //40px
			'48': '3rem', //48px
			'56': '3.5rem', // 56px
			'60': '3.75rem', // 56px
			'64': '4rem', // 64px
			'76': '4.75rem', // 76px
			'80': '5rem', // 80px
			'96': '6rem', // 96px
			'112': '7rem', // 112px
			'144': '9rem', // 144px
			'160': '10rem', //160px
			'192': '12rem', //192px
			'256': '16rem', //256px
			'1/10': '10%',
			'2/10': '20%',
			'5/10': '50%',
			'10/10': '100%',
			'-5/10': '-50%',
			'-10/10': '100%',
			'-1': '-1px',
			'-2': '-2px',
			'-4': '-0.25rem',
			'-6': '-0.375rem',
			'-8': '-0.5rem',
			'-16': '1rem',
			'-24': '-1.5rem', // 24px
			'-40': '-2.5rem', //40px
			'-48': '-3rem', //48px
			'-56': '-3.5rem',
			'-96': '-6rem',
			'-112': '-7rem',
			'-144': '-9rem', // 144px
			'-160': '-10rem', //160px
			'-192': '-12rem', //192px

		},
		width: ({
			auto: 'auto',
			'0': '0',
			'50': '50px',
			'100': '100px',
			'1/2': '50%',
			'1/3': '33.333333%',
			'2/3': '66.666667%',
			'1/4': '25%',
			'2/4': '50%',
			'3/4': '75%',
			'1/10': '10%',
			'1/5': '20%',
			'2/5': '40%',
			'3/5': '60%',
			'4/5': '80%',
			'1/6': '16.666667%',
			'2/6': '33.333333%',
			'3/6': '50%',
			'4/6': '66.666667%',
			'5/6': '83.333333%',
			'1/12': '8.333333%',
			'2/12': '16.666667%',
			'3/12': '25%',
			'4/12': '33.333333%',
			'5/12': '41.666667%',
			'6/12': '50%',
			'7/12': '58.333333%',
			'8/12': '66.666667%',
			'9/12': '75%',
			'10/12': '83.333333%',
			'11/12': '91.666667%',
			full: '100%',
			screen: '100vw',
		}),
	}
  },
  plugins: [],
  variants:{
	borderWidth: ['responsive'],
	margin: ['responsive'],
	padding: ['responsive'],
	textColor: ['group-hover', 'hover', 'focus'],
	height: ['responsive'],
	minHeight: ['responsive'],
  },
  corePlugins: {
	height:true,
	minHeight:true,
},
};
