import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
	title: 'Iron Stag Games',
	description: ' ',
	cleanUrls: true,

	head: [
		['link', { rel: 'icon', href: '/favicon.ico' }],
	],

	themeConfig: {
		logo: '/favicon.ico',
		siteTitle: 'Documentation & API',

		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Lync', link: '/lync/', activeMatch: '/lync/' },
			{ text: 'Pronghorn', link: '/pronghorn/', activeMatch: '/pronghorn/' },
			{ text: 'Traitor Town', link: '/traitor-town/', activeMatch: '/traitor-town/' }
		],

		socialLinks: [
			{ icon: 'github', link: 'https://github.com/Iron-Stag-Games' }
		],

		sidebar: {
			'/lync/': [
				{
					text: 'Introduction',
					collapsed: false,
					items: [
						{ text: 'What is Lync?', link: '/lync/' },
						{ text: 'Community Tooling', link: '/lync/introduction/community-tooling' }
					]
				},
				{
					text: 'Getting Started',
					collapsed: false,
					items: [
						{ text: 'Installation', link: '/lync/getting-started/installation' },
						{
							text: 'Usage',
							collapsed: false,
							items: [
								{ text: 'Lync Executable', link: '/lync/getting-started/usage/lync-executable' },
								{ text: 'Studio Plugin', link: '/lync/getting-started/usage/studio-plugin' }
							]
						},
						{ text: 'Create a New Project', link: '/lync/getting-started/new-project' },
						{ text: 'Convert an Existing Place', link: '/lync/getting-started/convert-place' }
					]
				},
				{
					text: 'Project Format',
					collapsed: false,
					items: [
						{
							text: 'Project',
							collapsed: false,
							items: [
								{ text: 'Project File', link: '/lync/project-format/project/project-file' },
								{ text: 'Packages', link: '/lync/project-format/project/packages' },
								{ text: 'Automated Downloads', link: '/lync/project-format/project/automated-downloads' },
								{ text: 'Automated Jobs', link: '/lync/project-format/project/automated-jobs' }
							]
						},
						{
							text: 'Files',
							collapsed: false,
							items: [
								{ text: 'Supported Files', link: '/lync/project-format/files/supported-files' },
								{ text: 'Scripts', link: '/lync/project-format/files/scripts' },
								{ text: 'Meta Files', link: '/lync/project-format/files/meta-files' },
								{ text: 'JSON Models', link: '/lync/project-format/files/json-models' },
								{ text: 'Excel Tables', link: '/lync/project-format/files/excel-tables' }
							]
						},
						{ text: 'Sourcemap', link: '/lync/project-format/sourcemap' }
					]
				}
			],
			'/pronghorn/': [
				{
					text: 'Introduction',
					collapsed: false,
					items: [
						{ text: 'What is Pronghorn?', link: '/pronghorn/' }
					]
				}
			],
			'/traitor-town/': [
				{
					text: 'Introduction',
					collapsed: false,
					items: [
						{ text: 'Hello World', link: '/traitor-town/' }
					]
				}
			]
		},

		outline: 'deep',

		editLink: {
			pattern: 'https://github.com/Iron-Stag-Games/Iron-Stag-Games.github.io/edit/main/docs/:path',
			text: 'Edit this page on GitHub'
		},

		lastUpdated: true,

		footer: {
			message: 'Lync and Pronghorn released under LGPL 2.1',
			copyright: 'Copyright © Iron Stag Games'
		},
	}
})
