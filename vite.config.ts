import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import legacy from '@vitejs/plugin-legacy';

// https://vitejs.dev/config/
export default defineConfig({
	base: './', // Use relative paths
	plugins: [
		preact(),
		legacy({
			targets: ['Chrome 53'] // Adjust as needed
		})
	]
});
