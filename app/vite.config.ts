import react from '@vitejs/plugin-react'
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
						admin: './adminIndex.html',
					},
				},
			},
			server: {
				open: '/adminIndex.html',
			},
		}
	} else if (mode === 'client') {
		return {
			plugins: [react()],
			build: {
				outDir: 'clientDist',
				rollupOptions: {
					input: {
						client: './clientIndex.html',
					},
				},
			},
			server: {
				open: '/clientIndex.html',
			},
		}
	}
	return {
		plugins: [react()],
		build: {
			outDir: 'dist',
			rollupOptions: {
				input: {
					client: './clientIndex.html',
					admin: './adminIndex.html',
				},
			},
		},
		server: {
			open: '/clientIndex.html',
		},
	}
})
