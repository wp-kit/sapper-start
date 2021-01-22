export function getToken() {
	return Buffer.from(process.env.WP_USERNAME + ':' + process.env.WP_PASSWORD).toString('base64');
}