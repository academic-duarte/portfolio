import { defineConfig } from 'vitepress';

import Navbar from "./modules/nav";
import Sidebar from "./modules/sidebar";

export default defineConfig({
	base: process.env.READTHEDOCS_CANONICAL_URL ? new URL(process.env.READTHEDOCS_CANONICAL_URL).pathname.replace(/\/$/, "") : "",
	cleanUrls: true,
	ignoreDeadLinks: true,
	lang: 'en',
	lastUpdated: true,
  title: "Duarte's Portfolio",
	titleTemaplte: ":title | Duarte's Portfolio",
  description: "My academic archive",
	markdown: {
		math: true
	},
	srcDir: "docs/",
	sitemap: {
		hostname: "https://duarte.readthedocs.io"
	},
  themeConfig: {
		footer: {
			copyright: "Copyright © 2026, Duarte. All rights reserved.",
		},

    nav: Navbar,
    sidebar: Sidebar,
		search: {
			provider: 'local'
		},
    socialLinks: [
			{ icon: 'orcid', link: 'https://orcid.org/0009-0006-5258-5241' },
      { icon: 'x', link: 'https://x.com/AcademicDuarte' },
    ]
  },

	vite: {
		publicDir: ".assets/"
	},
})
