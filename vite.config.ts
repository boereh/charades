import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import { SvelteKitPWA } from '@vite-pwa/sveltekit';
import unocss from 'unocss/vite';
import {
	transformerCompileClass,
	transformerDirectives,
	transformerVariantGroup,
	presetWind4
} from 'unocss';

export default defineConfig({
	plugins: [
		sveltekit(),
		unocss({
			presets: [presetWind4()],
			transformers: [transformerCompileClass(), transformerDirectives(), transformerVariantGroup()]
		}),
		SvelteKitPWA({
			registerType: 'autoUpdate',
			injectRegister: 'inline',
			includeAssets: ['/favicon.png'],
			manifest: {
				display: 'standalone',
				name: 'Charades',
				short_name: 'Charades',
				description: 'my own version of charades',
				theme_color: '#000000',
				icons: [{ src: '/favicon.png', sizes: '192x192', type: 'image/png' }]
			}
		})
	]
});
