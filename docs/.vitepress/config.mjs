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
			{ text: 'Pronghorn', link: '/pronghorn/', activeMatch: '/pronghorn/' }
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
							text: 'Project File',
							collapsed: false,
							items: [
								{ text: 'Project File Syntax', link: '/lync/project-format/project-file/project-file-syntax' },
								{ text: 'Packages', link: '/lync/project-format/project-file/packages' },
								{ text: 'Automated Downloads', link: '/lync/project-format/project-file/automated-downloads' },
								{ text: 'Automated Jobs', link: '/lync/project-format/project-file/automated-jobs' }
							]
						},
						{
							text: 'Files',
							collapsed: false,
							items: [
								{ text: 'Supported Files', link: '/lync/project-format/files/supported-files' },
								{ text: 'Script Directives', link: '/lync/project-format/files/script-directives' },
								{ text: 'Init Scripts', link: '/lync/project-format/files/init-scripts' },
								{ text: 'Meta Files', link: '/lync/project-format/files/meta-files' },
								{ text: 'JSON Models', link: '/lync/project-format/files/json-models' }
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
			message: 'Lync and Pronghorn released under LGPL 2.1',
			copyright: 'Copyright © 2023 Iron Stag Games'
		},
	}
})
