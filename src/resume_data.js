const resume_data = {
	"meta": {
		"name": "Geoffrey Liu",
		"byline": "Experienced iOS and web engineer",
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
		"Xcode",
		"Jenkins CI",
		"Quick/Nimble unit testing",
		"iOS UI Test automation",
		"Web testing automation",
		"JIRA",
		"NPM / yarn / Cocoapods",
		"GitHub Enterprise",
		"Bash/Python scripting",
		"IntelliJ",
		"Eclipse",
		"WordPress"
	],
	"interests": [
    	"UI/UX design",
    	"Foreign languages",
    	"Music education",
    	"Teaching / speaking",
    	"Photography",
    	"Architecture / interior design"
	],
	"experiences": [{
		"title": "Senior Software Engineer",
		"company": "PayPal",
		"company_url": "https://paypal.com",
		"location": "Seattle WA (remote)",
		"description": "Constantly developed new user-facing experiences across the PayPal iOS app in Loyalty, Rewards, and Shopping; as well as addressing technical debt, release, and on-call needs. Contributed to a major redesign of the app in late 2023, ensuring quality of code through code reviews, unit, UI, regression, and snapshot testing; and daily collaboration with QA, managers, design, and product teams. Hosted knowledge sharing sessions through the organization to encourage other teams to adopt best practices in software development.",
		"date_start": "2020-10-05",
		"date_end": "2024-01-30",
	}, {
		"title": "Violin/viola instructor",
		"company": "The Key to Change",
		"company_url": "https://keytochangestudio.org",
		"location": "Renton WA",
		"description": "Provide instruction to group classes and individual students in a socioeconomically diverse music studio. Accompany students on piano for events, festivals, and recitals. Address technical needs when necessary.",
		"date_start": "2020-09-01",
		"date_end": null,
	}, {
		"title": "Web / iOS Engineer",
		"company": "Groupon",
		"company_url": "https://groupon.com",
		"location": "Santa Clara CA & Seattle WA",
		"description": "Owned the development of over 25+ features in the Groupon iOS app and Groupon Goods web presence, supporting key business goals such as Groupon+ and Groupon Select. Wrote extensive unit test and UI automation suites for stability and regression tracking. Contributed to a significant app-wide re-architecture of the deal page screens. Advised managers on design and implementation decisions.",
		"date_start": "2017-04-01",
		"date_end": "2020-09-23",
	}, {
		"title": "Web developer",
		"company": "Groupon",
		"company_url": "https://groupon.com",
		"location": "Palo Alto CA",
		"description": "Develop web-specific features of the Groupon Goods online presence. Leverage internal JavaScript framework for front-end UX and maintain browser automation tests. Oversaw deployments on our custom deployment solution, and performed on-call duties as necessary.",
		"date_start": "2016-07-25",
		"date_end": "2017-03-31",
		"is_shown": false,
	}, {
		"title": "Software Engineering Intern",
		"company": "CDK Global",
		"company_url": "https://www.cdkglobal.com",
		"location": "Seattle WA",
		"description": "Add functionality to existing Angular JS mobile app to allow car dealers to manage their incentives. Integrated with CDK's in-house REST APIs, wrote extensive tests. Added push notifications through Pushwoosh.",
		"date_start": "2015-06-15",
		"date_end": "2015-09-04",
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
	}, {
		"title": "Freelance web developer",
		"company": "Self-employed",
		"location": "Seattle WA",
		"date_start": "2010-01-01",
		"date_end": null,
		"display_short": true,
	}],
	"projects": [{
		"title": "Odo proxy software",
		"description": "Owned the redesign of Groupon's open-source proxy software. Rewrote significant portions of the Groupon front-end using Bootstrap framework, introducing usability features such as keyboard navigation.",
		"project_url": "https://github.com/groupon/odo",
		"start_date": "2019-01-01",
		"end_date": "2019-12-31",
		"technologies": ["JavaScript", "Bootstrap", "Hotkeys", "Unit testing"],
	}, {
		"title": "PeaceTrees Vietnam project map",
		"description": "Leverage MapBox, React, and Node to present interactive map of the non-profit's projects and landmine data from KML files. Allows map updates via uploads through a secure backend.",
		"start_date": "2019-10-01",
		"end_date": "2019-10-31",
	}, {
		"title": "Redwood Symphony new website",
		"description": "Completely overhauled the organization's website in WordPress, with over 1,000 lines of custom PHP and JavaScript code. Created custom interactive components to display concert data in a consistent, reusable manner.",
		"start_date": "2020-06-01",
		"end_date": "2021-03-01",
	}, {
		"title": "Nagios alerts visualizer",
		"description": "Created a full-stack solution to visualize and reduce unnecessary Nagios alerts by over 50% in several weeks. Leveraged multi-threaded web scraper and Bootstrap-based front-end for quick tabular visualization.",
		"start_date": "2017-05-01",
		"end_date": "2017-06-01",
		"is_hidden": true,
	}],
	"projects_display_short": true,
};


export default resume_data;