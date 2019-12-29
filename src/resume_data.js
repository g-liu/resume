const resume_data = {
	"meta": {
		"name": "Geoffrey Liu",
		"byline": "iOS engineer & web developer",
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
		}, {
			"type": "twitter",
			"id": "geo_liu"
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
	"coursework": [
	    "Web programming",
	    "Data structures",
	    "Software engineering",
	    "Databases",
	    "Systems programming",
	    "Graphics",
	    "Introduction to HCI",
	    "Artificial intelligence",
	    "HW/SW interface",
	    "Music theory",
	    "Music history"
	],
	"skills": [
		"Swift / Objective-C",
		"UI/Unit testing",
	    "JavaScript / ES6",
	    "React / Angular / Node",
	    "Java",
	    "PHP / WordPress",
	    "HTML5 / CSS3",
	    "C / C++",
	    "Ruby on Rails",
	    "Python"
	],
	"languages": [
		"English",
		"Chinese",
		"French"
	],
	"interests": [
    	"Teaching / speaking",
    	"UI/UX design",
    	"Mobile app development",
    	"Music performance",
    	"Photography"
	],
	"experiences": [{
		"title": "iOS Engineer",
		"company": "Groupon",
		"company_url": "https://groupon.com",
		"location": "Santa Clara CA & Seattle WA",
		"description": "Owned the development of many features in the Groupon iOS consumer app, a top-25 App Store app. Wrote extensive unit test and UI automation suites. Advised managers on design and implementation decisions.",
		"date_start": "2017-04-01",
		"date_end": null
	}, {
		"title": "Web developer",
		"company": "Groupon",
		"company_url": "https://groupon.com",
		"location": "Palo Alto CA",
		"description": "Develop web-specific features of the Groupon Goods online presence. Leverage internal JavaScript framework for front-end UX and maintain browser automation tests.",
		"date_start": "2016-07-25",
		"date_end": "2017-03-31"
	}, {
		"title": "Software Engineering Intern",
		"company": "CDK Global",
		"company_url": "https://www.cdkglobal.com",
		"location": "Seattle WA",
		"description": "Add functionality to existing Angular JS mobile app to allow car dealers to manage their incentives. Integrated with CDK's in-house REST APIs, wrote extensive tests. Added push notifications through Pushwoosh.",
		"date_start": "2015-06-15",
		"date_end": "2015-09-04"
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
	}],
	"projects": [{
		"title": "Odo proxy software",
		"description": "Owned the redesign of Groupon's open-source proxy software. Rewrote significant portions of the Groupon front-end using Bootstrap framework, introducing usability features such as keyboard navigation.",
		"is_in_progress": false
	}, {
		"title": "PeaceTrees Vietnam project map",
		"description": "Leverage MapBox, React, and Node to present interactive map of projects and landmine data from non-profit organization. Allows admin to update map via CSV upload through a secure backend."
	}, {
		"title": "Periodic Table browser",
		"description": "Develop Node-based web scraper to obtain data about periodic table elements, and leverage JS and jQuery to display data in interactive table."
	}, {
		"title": "This resume!",
		"description": "Open-source template, written with React and data provided by a simple JSON file. Job-seekers can quickly create their own resume simply by editing the JSON!"
	}]
};


export default resume_data;