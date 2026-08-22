import { heroui } from "@heroui/theme";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // Scan only the HeroUI components this site actually renders (navbar + link).
  	// The previous `dist/**/*` glob made Tailwind emit CSS for every HeroUI
  	// component, which is what pushed the render-blocking stylesheet to 301KB.
  	"./node_modules/@heroui/theme/dist/components/(navbar|link|button).js",
  ],
  safelist: ["animate-marquee", "animate-marquee-vertical"],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: [
  				'var(--font-sans)', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'
  			],
  			mono: [
  				'ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'
  			]
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},
  			clinic: {
  				primary: '#00A9B7',
  				light_primary: '#33C1CC',
  				vlight_primary: '#99E5EE',
  				secondary: '#F4A300',
  				secondaryDark: '#E49501',
  				accent: '#1B2A41',
  				dark: '#00757F',
  				background: '#F8F9FA'
  			}
  		},
  		keyframes: {
  			sparkle: {
  				'0%, 100%': {
  					opacity: '0',
  					transform: 'scale(0) rotate(75deg)'
  				},
  				'50%': {
  					opacity: '1',
  					transform: 'scale(var(--sparkle-scale, 1)) rotate(120deg)'
  				}
  			},
  			marquee: {
  				from: {
  					transform: 'translateX(0)'
  				},
  				to: {
  					transform: 'translateX(calc(-100% - var(--gap)))'
  				}
  			},
  			marqueeVertical: {
  				from: {
  					transform: 'translateY(0)'
  				},
  				to: {
  					transform: 'translateY(calc(-100% - var(--gap)))'
  				}
  			},
  			scale: {
  				'0%, 40%, 100%': {
  					transform: 'scaleY(0.05)'
  				},
  				'20%': {
  					transform: 'scaleY(1)'
  				}
  			},
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
  			gradient: {
  				to: {
  					backgroundPosition: 'var(--bg-size, 300%) 0'
  				}
  			}
  		},
  		animation: {
  			sparkle: 'sparkle 1s linear infinite',
  			marquee: 'marquee var(--duration) linear infinite',
  			marqueeVertical: 'marqueeVertical var(--duration) linear infinite',
  			scale: 'scale 0.9s ease-in-out infinite',
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			gradient: 'gradient 8s linear infinite'
  		}
  	}
  },
  darkMode: ["class", "class"],
  plugins: [heroui(), require("tailwindcss-animate")],
};

module.exports = config;
