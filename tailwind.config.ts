import type { Config } from 'tailwindcss';
import { customPreset } from './lib/custom-preset';

const config = {
  presets: [customPreset],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ]
} satisfies Config;

export default config;
