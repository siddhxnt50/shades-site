import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './config/**/*.{ts,tsx}'],
  future: {
    // Wrap every hover: utility in @media (hover: hover) so taps never leave sticky hover states.
    hoverOnlyWhenSupported: true,
  },
  theme: {
    // Full replacement (not extend) so `xs` sorts before `sm` in the cascade.
    screens: {
      xs: '400px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        ink: {
          DEFAULT: '#0B1220',
          950: '#060A13',
          900: '#0B1220',
          850: '#0F1729',
          800: '#131D33',
          700: '#1C2842',
          600: '#2A3754',
        },
        paper: {
          DEFAULT: '#ECE9E3',
          dim: '#C9C6BF',
        },
        fog: {
          DEFAULT: '#9AA3AE',
          dim: '#7F8A99',
        },
        signal: {
          DEFAULT: '#818CF8',
          soft: '#A5ADFB',
        },
        // The logo's tonal ramp, re-keyed for a dark ground.
        shade: {
          1: '#2B3A50',
          2: '#4A5A6E',
          3: '#76838F',
          4: '#9FA8B0',
          5: '#CDD2D6',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'none' },
        },
        rise: {
          from: { transform: 'scaleY(0)' },
          to: { transform: 'scaleY(1)' },
        },
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.21, 0.47, 0.32, 0.98) both',
        rise: 'rise 1.1s cubic-bezier(0.22, 1, 0.36, 1) both',
        'accordion-down': 'accordion-down 0.25s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
};

export default config;
