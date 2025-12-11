import { createRequire } from 'module';
const require = createRequire(import.meta.url);

/** @type {import('tailwindcss').Config} */
export default {
  presets: [
    require('@iniguezmarc/design-system/tailwind.preset')
  ],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@iniguezmarc/design-system/dist/**/*.{js,ts,jsx,tsx}"
  ],
}
