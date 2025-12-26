import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return {
		rules: [
			{
				userAgent: '*',
				allow: '/',
			},
		],
		host: 'https://www.agentbay.co',
		sitemap: 'https://www.agentbay.co/sitemap.xml',
	}
} 