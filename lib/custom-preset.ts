import type { Config } from 'tailwindcss';
import { customPlugin } from './custom-plugin';
import animatePlugin from 'tailwindcss-animate';

export const customPreset = {
  darkMode: ['class'],
  content: [],
  plugins: [customPlugin, animatePlugin]
} satisfies Config;
