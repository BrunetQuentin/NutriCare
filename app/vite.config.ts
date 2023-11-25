import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { defineConfig } from 'vite'

const mode = process.env.MODE || 'client and admin'

export default defineConfig(() => {
	console.log('Interface courante: ', mode)
	if (mode === 'admin') {
		return {
			plugins: [react()],
			build: {
				outDir: 'adminDist',
				rollupOptions: {
					input: {
						admin: resolve(__dirname, 'admin/index.html'),
					},
				},
			},
			server: {
				open: '/admin/',
			},
		}
	} else if (mode === 'client') {
		return {
			plugins: [react()],
			build: {
				outDir: 'clientDist',
				rollupOptions: {
					input: {
						client: resolve(__dirname, 'client/index.html'),
					},
				},
			},
			server: {
				open: '/client/',
			},
		}
	}
	return {
		plugins: [react()],
		build: {
			outDir: 'dist',
			rollupOptions: {
				input: {
					client: resolve(__dirname, 'client/index.html'),
					admin: resolve(__dirname, 'admin/index.html'),
					dev: resolve(__dirname, 'index.html'),
				},
			},
		},
		server: {
			open: '/client/',
		},
	}
})
