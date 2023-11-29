import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config

export default defineConfig({
	title: "Iron Stag Games",

	head: [
		['link', { rel: 'icon', href: '/favicon.ico' }],
	],

	themeConfig: {
		logo: '/favicon.ico',
		siteTitle: 'ISG Docs',

		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: 'Lync', link: '/lync/' },
			{ text: 'Pronghorn', link: '/pronghorn/' }
		],

		sidebar: {
			'/lync/': [
				{
					text: 'Introduction',
					collapsed: false,
					items: [
						{ text: 'What is Lync?', link: '/lync/' },
						{ text: 'Installation', link: '/lync/introduction/installation' },
						{
							text: 'Features',
							collapsed: false,
							items: [
								{ text: 'Command Line', link: '/lync/introduction/features/command-line' },
								{ text: 'Studio Plugin', link: '/lync/introduction/features/studio-plugin' }
							]
						}
					]
				},
				{
					text: 'Getting Started',
					collapsed: false,
					items: [
						{ text: 'Create a New Project', link: '/lync/getting-started/new-project' },
						{ text: 'Convert an Existing Place', link: '/lync/getting-started/convert-place' }
					]
				},
				{
					text: 'Project Format',
					collapsed: false,
					items: [
						{
							text: 'Project File',
							collapsed: false,
							items: [
								{ text: 'Syntax', link: '/lync/project-format/project-json/overview' },
								{ text: 'Packages', link: '/lync/project-format/project-json/packages' },
								{ text: 'Automated Downloads', link: '/lync/project-format/project-json/automated-downloads' },
								{ text: 'Automated Jobs', link: '/lync/project-format/project-json/automated-jobs' }
							]
						},
						{
							text: 'Files',
							collapsed: false,
							items: [
								{ text: 'Filetypes', link: '/lync/project-format/files/filetypes' },
								{ text: 'Model Files', link: '/lync/project-format/files/model-files' },
								{ text: 'Meta Files', link: '/lync/project-format/files/meta-files' }
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
			]
		},

		outline: 'deep',

		editLink: {
			pattern: 'https://github.com/Iron-Stag-Games/Iron-Stag-Games.github.io/edit/main/docs/:path',
			text: 'Edit this page on GitHub'
		},

		lastUpdated: true,

		footer: {
			message: 'LGPL 2.1',
			copyright: 'Copyright © 2023 Iron Stag Games'
		},
	}
})
