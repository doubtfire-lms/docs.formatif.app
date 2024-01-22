import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Formatif Guides',
			social: {
				github: 'https://github.com/doubtfire-lms/docs.formatif.app',
			},
			sidebar: [
				{
					label: 'Start here',
					link: 'guides/welcome/',
				},
				{
					label: 'Guides for Lecturers',
					autogenerate: { directory: 'guides/chair/' },
				},
				{
					label: 'Guides for teaching staff',
					autogenerate: { directory: 'guides/staff/' },
				},
				{
					label: 'Guides for students',
					autogenerate: { directory: 'guides/student/' },
				},
			],
			customCss: ['./src/tailwind.css'],
		}),
		tailwind({ applyBaseStyles: false }),
	],
});
