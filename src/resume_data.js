const resume_data = {
	"meta": {
		"name": "Geoffrey Liu",
		"byline": "Organist, web developer, and software engineer",
		"contacts": [{
			"type": "email",
			"id": "main@g-liu.com"
		}, {
			"type": "website",
			"id": "g-liu.com"
		}, {
			"type": "linkedin",
			"id": "geoffliu"
		}, {
			"type": "github",
			"id": "g-liu"
		}]
	},
	"education": [{
		"date_start": "2012-09-26",
		"date_end": "2016-06-10",
		"institution": "University of Washington",
		"location_city": "Seattle",
		"degrees": ["B.S. Computer Science", "Minor in Music"],
		"achievements": [
			"Direct admission into Computer Science, 2012",
			"Dean's List candidate, 2012―2016",
			"3.73 overall GPA",
			"Teaching assistant, ASUW webmaster, musician in UW Symphony"
		]
	}],
	// "coursework": [
	//     "Web programming",
	//     "Data structures",
	//     "Software engineering",
	//     "Databases",
	//     "Systems programming",
	//     "Graphics",
	//     "Introduction to HCI",
	//     "Artificial intelligence",
	//     "HW/SW interface",
	//     "Music theory",
	//     "Music history"
	// ],
	"languages": [
		"Swift / Objective-C",
	    "JavaScript / ES6",
	    "React / Angular / Node",
	    "Java",
	    "PHP",
	    "HTML5 / CSS3",
	    "Ruby on Rails",
	    "Python",
	    "C / C++",
	],
	"skills": [
		"WordPress",
		"Advanced Custom Fields",
		"Custom plugins and themes",
		"SEO",
		"SQL / databases",
		"NPM",
		"GitHub / version control",
		"Google Suite",
		"Music literacy"
	],
	"interests": [
    	"UI/UX design",
    	"Mobile app development",
    	"Music performance",
    	"Photography",
    	"Blogging",
    	"Teaching / speaking",
	],
	"experiences": [{
		"title": "Freelance web developer",
		"company": null,
		"company_url": null,
		"location": "Seattle WA",
		"description": "Develop WordPress websites for clients, including many Seattle-area non-profits, both individually and as a team. Designed custom plugins, themes, or modified existing ones whenever necessary. Helped clients troubleshoot issues with site after launch.",
		"date_start": "2010-06-15",
		"date_end": null
	}, {
		"title": "Organist",
		"company": "Kent United Methodist Church",
		"company_url": "https://kentmethodist.com",
		"location": "Kent WA",
		"description": "Play organ and piano for worship services. Choose appropriate voluntaries, using external sources such as the CMI library. Coordinate with team to plan special services. Maintain organ/piano library database on Google Sheets.",
		"date_start": "2023-01-15",
		"date_end": null,
	}, {
		"title": "Web developer",
		"company": "Groupon",
		"company_url": "https://groupon.com",
		"location": "Palo Alto CA & Seattle WA",
		"description": "Develop web-specific features of the Groupon Goods online presence. Leverage internal JavaScript framework for front-end UX and maintain browser automation tests. Oversaw deployments on our custom deployment solution, and performed on-call duties as necessary.",
		"date_start": "2016-07-25",
		"date_end": "2017-03-31",
		"is_shown": true,
	}, {
		"title": "Senior Software Engineer",
		"company": "PayPal",
		"company_url": "https://paypal.com",
		"location": "Seattle WA (remote)",
		"description": "iOS development for multiple critical company initiatives including 2024 rebranding, 2023 interface re",
		"date_start": "2020-10-05",
		"date_end": "2024-01-30",
		"display_short": true,
	}, {
		"title": "Teaching Assistant",
		"company": "University of Washington CSE",
		"company_url": "https://cse.uw.edu",
		"location": "Seattle WA",
		"date_start": "2015-01-05",
		"date_end": "2016-06-10",
		"description": "Prepare for and teach sections of 15-25 students, grade homework assignments and exams, and hold office hours for students.",
		"display_short": true,
		"is_shown": false,
	}, {
		"title": "Webmaster",
		"company": "Associated Students of the University of Washington",
		"company_url": "https://asuw.org",
		"location": "Seattle WA",
		"date_start": "2013-12-01",
		"date_end": "2014-06-01",
		"description": "Maintain and develop web projects for the ASUW",
		"display_short": true,
	}, {
		"title": "Programming Intern",
		"company": "Seattle Publishing",
		"company_url": "https://seattlepublishing.org",
		"location": "Seattle WA",
		"date_start": "2013-06-01",
		"date_end": "2013-09-01",
		"description": "Ruby on Rails migration and website redesign",
		"display_short": true,
		"is_shown": false,
	}],
	"projects": [{
		"title": "Kent UMC Organ/Piano library",
		"description": "Led a team of volunteers to build from scratch a catalog of existing titles in the organ/piano library. Created training videos for volunteers. Database searchable by title, hymn tune, key, composer, keywords, and other criteria."
		
	}, {
		"title": "Redwood Symphony new website",
		"description": "Completely overhauled the organization's website in WordPress, with over 1,000 lines of custom PHP and JavaScript code. Created custom interactive components to display concert data in a consistent, reusable manner."
	}, {
		"title": "Seattle Ladies' Choir new website",
		"description": "Complete re-design from scratch for the non-profit. Upgraded site to latest version of Wordpress, including new themes and plugins. Optimized database and added caching for best performance."
	}, {
		"title": "Odo proxy software",
		"description": "Owned the redesign of Groupon's open-source proxy software. Rewrote significant portions of the Groupon front-end using Bootstrap framework, introducing usability features such as keyboard navigation.",
		"is_in_progress": false,
		"is_shown": false,
	}, {
		"title": "PeaceTrees Vietnam project map",
		"description": "Leverage MapBox, React, and Node to present interactive map of the non-profit's projects and landmine data from KML files. Allows map updates via uploads through a secure backend."
	}, {
		"title": "Nagios alerts visualizer",
		"description": "Created a full-stack solution to visualize and reduce unnecessary Nagios alerts by over 50% in several weeks. Leveraged multi-threaded web scraper and Bootstrap-based front-end for quick tabular visualization.",
		"is_shown": false
	}]
};


export default resume_data;