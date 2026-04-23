import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import aiRobotsTxt from "astro-ai-robots-txt";

// https://astro.build/config
export default defineConfig({
  site: 'https://link.levi.land',
  integrations: [aiRobotsTxt()],
  vite: {
    plugins: [tailwindcss()]
  }
});