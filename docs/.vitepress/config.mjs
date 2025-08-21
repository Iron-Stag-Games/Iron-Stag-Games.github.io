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
			{ text: 'Traitor Town', link: '/traitor-town/content/gamemodes/Traitor Town/how-to-play', activeMatch: '/traitor-town/' }
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
					text: 'Content',
					collapsed: false,
					items: [
						{
							text: 'Gamemodes',
							collapsed: false,
							items: [
								{
									text: 'Traitor Town',
									collapsed: false,
									items: [
										{ text: 'How to Play', link: '/traitor-town/content/gamemodes/Traitor Town/how-to-play' },
										{ text: 'Karma', link: '/traitor-town/content/gamemodes/Traitor Town/karma' },
										{ text: 'Traitor Equipment', link: '/traitor-town/content/gamemodes/Traitor Town/traitor-equipment' },
										{ text: 'Detective Equipment', link: '/traitor-town/content/gamemodes/Traitor Town/detective-equipment' }
									]
								},
								{ text: 'Deathmatch', link: '/traitor-town/content/gamemodes/Deathmatch' },
								{ text: 'Juggernaut', link: '/traitor-town/content/gamemodes/Juggernaut' },
								{ text: 'Death Run', link: '/traitor-town/content/gamemodes/Death Run' },
								{ text: 'Surf', link: '/traitor-town/content/gamemodes/Surf' }
							]
						},
						{
							text: 'Maps',
							collapsed: true,
							items: [
								{ text: '67thway', link: '/traitor-town/content/maps/67thway' },
								{ text: 'Anubis', link: '/traitor-town/content/maps/Anubis' },
								{ text: 'Archipelago', link: '/traitor-town/content/maps/Archipelago' },
								{ text: 'Asylum', link: '/traitor-town/content/maps/Asylum' },
								{ text: 'Clue', link: '/traitor-town/content/maps/Clue' },
								{ text: 'Compound', link: '/traitor-town/content/maps/Compound' },
								{ text: 'Crossisle PD', link: '/traitor-town/content/maps/Crossisle PD' },
								{ text: 'Death Run Test', link: '/traitor-town/content/maps/Death Run Test' },
								{ text: 'Detective HQ', link: '/traitor-town/content/maps/Detective HQ' },
								{ text: 'Domain Mall', link: '/traitor-town/content/maps/Domain Mall' },
								{ text: 'Fabrik', link: '/traitor-town/content/maps/Fabrik' },
								{ text: 'Harappa', link: '/traitor-town/content/maps/Harappa' },
								{ text: 'Hellscape', link: '/traitor-town/content/maps/Hellscape' },
								{ text: 'International', link: '/traitor-town/content/maps/International' },
								{ text: 'Isle', link: '/traitor-town/content/maps/Isle' },
								{ text: 'Jailbreak', link: '/traitor-town/content/maps/Jailbreak' },
								{ text: 'Lost Temple', link: '/traitor-town/content/maps/Lost Temple' },
								{ text: 'Mesa Monorail', link: '/traitor-town/content/maps/Mesa Monorail' },
								{ text: 'Militia', link: '/traitor-town/content/maps/Militia' },
								{ text: 'Monsoon', link: '/traitor-town/content/maps/Monsoon' },
								{ text: 'Polar', link: '/traitor-town/content/maps/Polar' },
								{ text: 'Rooftops', link: '/traitor-town/content/maps/Rooftops' },
								{ text: 'Santa Fe', link: '/traitor-town/content/maps/Santa Fe' },
								{ text: 'Shipment', link: '/traitor-town/content/maps/Shipment' },
								{ text: 'Skeld', link: '/traitor-town/content/maps/Skeld' },
								{ text: 'Skylands', link: '/traitor-town/content/maps/Skylands' },
								{ text: 'Snowfall Complex', link: '/traitor-town/content/maps/Snowfall Complex' },
								{ text: 'Vista Overpass', link: '/traitor-town/content/maps/Vista Overpass' },
								{ text: 'Warehouse', link: '/traitor-town/content/maps/Warehouse' },
								{ text: 'Wastelands', link: '/traitor-town/content/maps/Wastelands' },
								{ text: 'Water Hazard', link: '/traitor-town/content/maps/Water Hazard' },
								{ text: 'Winterhaus', link: '/traitor-town/content/maps/Winterhaus' }
							]
						},
						{
							text: 'Items',
							collapsed: true,
							items: [
								{
									text: 'Slot 1',
									collapsed: false,
									items: [
										{ text: 'Crowbar', link: '/traitor-town/content/items/Crowbar' }
									]
								},
								{
									text: 'Slot 2',
									collapsed: false,
									items: [
										{ text: 'Desert Eagle', link: '/traitor-town/content/items/Desert Eagle' },
										{ text: 'Five-seveN', link: '/traitor-town/content/items/Five-seveN' },
										{ text: 'G18', link: '/traitor-town/content/items/G18' }
									]
								},
								{
									text: 'Slot 3',
									collapsed: false,
									items: [
										{ text: 'M1014', link: '/traitor-town/content/items/M1014' },
										{ text: 'M11', link: '/traitor-town/content/items/M11' },
										{ text: 'G18', link: '/traitor-town/content/items/G18' },
										{ text: 'M249 SAW', link: '/traitor-town/content/items/M249 SAW' },
										{ text: 'M4A1 Carbine', link: '/traitor-town/content/items/M4A1 Carbine' },
										{ text: 'Scout', link: '/traitor-town/content/items/Scout' }
									]
								},
								{
									text: 'Slot 4',
									collapsed: false,
									items: [
										{ text: 'Discombobulator', link: '/traitor-town/content/items/Discombobulator' },
										{ text: 'Incendiary Grenade', link: '/traitor-town/content/items/Incendiary Grenade' },
										{ text: 'Smoke Grenade', link: '/traitor-town/content/items/Smoke Grenade' }
									]
								},
								{
									text: 'Slot 5',
									collapsed: false,
									items: [
										{ text: 'Magneto-Stick', link: '/traitor-town/content/items/Magneto-Stick' }
									]
								},
								{
									text: 'Slot 6',
									collapsed: false,
									items: [
										{ text: 'Holstered', link: '/traitor-town/content/items/Holstered' }
									]
								},
								{
									text: 'Slot 7',
									collapsed: false,
									items: [
									]
								},
								{
									text: 'Slot 8',
									collapsed: false,
									items: [
									]
								},
								{
									text: 'Slot 9',
									collapsed: false,
									items: [
										{ text: 'DNA Scanner', link: '/traitor-town/content/items/DNA Scanner' }
									]
								},
								{
									text: 'Slot 0',
									collapsed: false,
									items: [
										{ text: 'Tool Gun', link: '/traitor-town/content/items/Tool Gun' }
									]
								},
								{
									text: 'Slotless',
									collapsed: false,
									items: [
									]
								}
							]
						}
					]
				},
				{
					text: 'Workshop',
					collapsed: false,
					items: [
						{ text: 'Setup', link: '/traitor-town/workshop/setup' },
						{ text: 'Building', link: '/traitor-town/workshop/building' },
						{ text: 'Publishing and Testing', link: '/traitor-town/workshop/publishing-and-testing' },
						{
							text: 'Script API',
							collapsed: false,
							items: [
								{
									text: 'Server',
									collapsed: false,
									items: [
									]
								},
								{
									text: 'Client',
									collapsed: false,
									items: [
									]
								}
							]
						}
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
