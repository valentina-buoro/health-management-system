import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config

/**
 * 
 * 
 * 
    --clr-accent-100: #151421;
    --clr-accent-600: #F5F5F5;
    --clr-accent-700: #FEF9F5;
    --clr-primary-300: #E8CECB;
    --clr-primary-400: #FCACA1;

    -ff-base: Poppins-Regular;
    --ff-base-500: Poppins-Medium;
    --ff-base-700: Poppins-Bold;
 */