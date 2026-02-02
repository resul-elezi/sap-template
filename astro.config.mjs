// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap'

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },
    server: {
        allowedHosts: [
            ".trycloudflare.com",
            ".ngrok-free.app"
        ]
    },
    site: 'https://www.epicerpsolutions.com',
    integrations: [sitemap()],
});
