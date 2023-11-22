export default () => ({
	port: parseInt(process.env.PORT, 10) || 8080,
	database: {
		host: process.env.DB_HOST || 'localhost',
		port: parseInt(process.env.DB_PORT, 10) || 5432,
		name: process.env.DB_NAME || 'database',
	},
	jwt: {
		secret: process.env.JWT_TOKEN_SECRET || 'secret',
		expire: process.env.JWT_TOKEN_EXPIRATION || '1d',
	},
})
