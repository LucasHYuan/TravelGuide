import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Travel Guide',
			social: {
				github: 'https://github.com/withastro/starlight',
			},
			sidebar: [
				{
			      label: '旅游攻略',
			      autogenerate: { directory: '旅游攻略' },
			    },
				
			],
			customCss: [
		    	// 你的自定义 CSS 文件的相对路径
		    	'./src/styles/custom.css',
		    ],
		}),
	],
});
