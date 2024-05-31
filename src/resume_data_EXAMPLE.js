// Instructions:
// Copy me into resume_data/data.js and change the data for your needs.

const resume_data = {
	"meta": {
		"name": "Joe Q. Public",
		"byline": "Person with a job",
		"contacts": {
			"title": "Contact info",
			"items": [{
				"prefix": null,
				"type": "email",
				"display_name": "joe@example.com",
				"url": "mailto:joe@example.com&subject=Contact from Joe Public's resume",
			}, {
				"prefix": null,
				"type": "phone",
				"display_name": "(555) 123-4567",
				"url": "tel:15551234567"
			}, /*{
				"prefix": null,
				"type": "website",
				"display_name": "example.com",
				"url": "https://example.com",
			},*/ {
				"prefix": "LinkedIn",
				"type": "linkedin",
				"display_name": "joepublic",
				"url": "https://linkedin.com/in/joepublic"
			}, {
				"prefix": "GitHub",
				"type": "github",
				"display_name": "joepublic",
				"url": "https://github.com/joepublic"
			}/*, {
				"prefix": "YouTube",
				"type": "youtube",
				"display_name": "@joepublic",
				"url": "https://youtube.com/@joepublic",
			}*/],
		},
	},
	"education": {
		title: "Education",
		items: [{
			"date_start": "2000-01-01",
			"date_end": "2010-12-31",
			"institution": "Public University of State",
			"location_city": "Anytown",
			"degrees": "A Degree, Another Degree",
			"achievements": {
				"items": [{
					"title": "Award for activity",
					"year": "2002",
				}]
			},
		}],
	},
	// "coursework": {
	// 	"title": "Coursework",
	// 	"items": [
	// 	    "History",
	// 	    "Science",
	// 	    "Math 1",
	// 	    "Math 2"
	// 	],
	// },
	"languages": {
		"title": "Languages",
		"listType": "detailed",
		"items": [
			{
				"name": "LangLang",
				"yoe": "5",
			},
			{
				"name": "ProgrammingLang",
				"yoe": "3"
			}
		],
	},
	"skills": {
		"title": "Skills",
		"listType": "linear",
		"items": [
			"Exampling",
			"Preparing"
		],
	},
	"interests": {
		"title": "Interests",
		"listType": "linear",
		"items": [
	    	"Interesting thing",
	    	"Another interesting thing"
		],
	},
	"experiences": {
		"title": "Professional experience",
		"items": [{
			"title": "Employee",
			"company": "The Company",
			"location": "Anytown USA",
			"description": "Employee duties. Other duties as assigned.",
			"date_start": "2020-01-01",
			"date_end": null
		}, {
			"title": "Junior Employee",
			"company": "Employment Company",
			"company_url": "https://example.com",
			"location": "Anytown (remote)",
			"description": "Employed as an employee. Performed employment duties. Assisted in employment duties.",
			"date_start": "2010-01-01",
			"date_end": "2019-12-31",
		}, {
			"title": "Employment Intern",
			"company": "Employee Corp",
			"company_url": "https://www.example.com",
			"location": "Anytown USA",
			"description": "Assisted employees in employment duties.",
			"date_start": "2009-06-01",
			"date_end": "2009-09-01",
			"display_short": true,
		}],
	},
	"projects": {
		// "display_short": false,
		"heading": "Side projects",
		"items": [{
			"title": "Generic Project",
			"description": "Used tools to develop project. Also did project duties as necessary.",
			"end_date": "2013-01-01",
			"start_date": "2010-01-01",
			"project_url": "https://example.com",
			"technologies": ["Lang1", "Tech1", "Thing1"],
			"is_hidden": false
		}]
	},
	"plug": {
		"content": "Hire me!",
	}
};


export default resume_data;