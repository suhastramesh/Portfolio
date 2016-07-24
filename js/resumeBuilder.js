/*
This is empty on purpose! Your code to build the resume will go here.
 */

 //$("#main").append("Suhas Tirumali Ramesh");

// var awesomeThoughts = "I am Suhas and I am awesome";

 //var age = 24;

 //var funThoughts = awesomeThoughts.replace("awesome", "fun");
//$("#main").append(funThoughts);


 //console.log(funThoughts);
var formattedName = HTMLheaderName.replace("%data%", "Suhas Tirumali Ramesh");
var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);




//$("#main").append(skills[1].length);
var bio = {
	"name": "Suhas",
	"role": "Web Developer",
	"contacts": {
		"mobile": "256-226-6749",
		"email": "suhastr0065@gmail.com",
		"twitter": "@suhastramesh",
		"github": "suhastramesh",
		"location": "San Jose"
	},
	"welcomeMessage": "Hey I'm Suhas, welcome to my Portfolio! I'm a graduate in the field of" +
	"computer science with an under-grad in electronics & communication, currently looking for" +
    "full time opportunities. I have a variety of interests. I enjoy robotics as much as soccer, which" +
    "I played professionally in the C-division league in India. Do go through my Portfolio if you'd like to know more about me, I hope to hear from you!",
	"skills": [
		"HTML", "CSS", "JavaScript", "JQuery", "JSON", "AJAX", "Bootstrap"
	],
	"bioPic": "images/profile.jpg"
}; 

//$("#main").append(bio);

var education = {
	"schools": [
		{
			"name": "University of Alabama in Huntsville",
			"location": "Huntsville, AL",
			"degree": "Masters",
			"majors": ["Computer Science"],
			"dates": "2014 - 2016",
			"gpa": "3.8 / 4.0"
		},
		{
			"name": "R.N.S Institute of Technology",
			"location": "Bangalore, India",
			"degree": "Bachelors",
			"majors": ["Electronics and Communication Engineering"],
			"dates": "2009 - 2013",
			"gpa": "3.6 / 4.0"
		}
  ],
	"onlineCourses": [
		{
			"title": "Front-end Web Development",
			"name": "Udacity",
			"dates": 2016,
			"url": "https://www.udacity.com" 
		},
		{
			"title": "JavaScript Basics",
			"name": "Udacity",
			"dates": 2016,
			"url": "https://www.udacity.com"
		}
	]
}

var work = {
	"jobs": [
		{
			"employer": "UAH",
			"title": "Graduate Teaching Assistant",
			"dates": "May 2014 - May 2016",
			"location": "Huntsville, AL",
			"description": "Hold weekly office hours. " +
			"Work with students, learn about problems they are having with the course work and "+
			"answer their questions. " +
			"Grade exams, programming assignments and projects. " +
			"Obtain materials required for classes and proctor the exams. "
		}
	]
}

var projects = {
	"projects": [
		{
			"title": "Design and development of sign language to plain text conversion device Animatronic Glove",
			"dates": "2013",
			"description": "Designed and develop an independent  wireless animatronic  glove to convert sign " +
			"language to plain text to help the common man and the disabled individuals to converse in the absence " +
			"of a human interpreter, using a self-designed flex sensor. In this project I was involved in building " +
			"the LDR sensor from the scratch using an LED. and a sleeve. I tested the resistance values based on the bending angle of the sleeve.",
			"images": [
				""
			]
		},
		{
			"title": "Implementation of Service Discovery Protocol using JINI",
			"dates": "2015",
			"description": "An individual  project in which I built a basic application in which " +
			"information was retrieved using a XML file using JINI as a service. The project was implemented using JAVA.",
			"images": [
				""
			]
		},
		{
			"title": "Forever chargers – Using cloud database",
			"dates": "2015",
			"description": "Developed and designed a social networking website that allows for the " +
			"alumni and current students of a university  to interact in a distraction  free environment. " +
			"This project was an exercise in building a database management system. The database was hosted " +
			"on the Microsoft Azure platform. In this project, I was involved in the database design, sketching " +
			"the ER diagram with one other student and the front end design.",
			"images": [
				""
			]
		},
		{
			"title": "Mathathon",
			"dates": "2016",
			"description": "This is a mathematical quiz game we built mainly for the kids. This was a group " +
			"project with two members. I built the simulation system using the Corona Simulator. The game included " +
			"three levels. I designed the complete level 1. The entire coding was done using LUA.",
			"images": [
				""
			]
		},
		{
			"title": "Open stack",
			"dates": "2016",
			"description": "An individual project in which I was instructed to Install OpenStack, starting a " +
			"Virtual Machine using the dashboard with an associated key pair, SSH to VM using private key and migrating a VM. ",
			"images": [
				""
			]
		},
		{
			"title": "Amazon web services(EC2)",
			"dates": "2016",
			"description": "This was an individual project as a part of the course. This project involved starting an " +
			"instance of an existing VM using the Amazon Web interface by mentioning the instance details such as image ID, " +
			"key pair name, etc. from the VM's terminal.",                                             
			"images": [
				""
			]
		},
		{
			"title": "Tribute Page ",
			"dates": "2016",
			"description": "This is a project done on Code Pen. I built a tribute page using HTML and CSS. I used the " +
			"Bootstrap framework for this project. The link for the code is given below http://codepen.io/suhastramesh/pen/ZOyaXR ",                                                                                               
			"images": [
				""
			]
		},
		{
			"title": "Portfolio",
			"dates": "2016",
			"description": "Built my portfolio from scratch using the concepts of HTML5 and CSS3. I used the grid system concept of " +
			"Bootstrap framework to design the layout of my portfolio. The  portfolio is made responsive keeping in mind the different sizes of devices. " +
			"Link - https://github.com/suhastramesh",
			"images": [
				""
			]
		},
		{
			"title": "Apple product page",
			"dates": "2016",
			"description": "Built a responsive web page for Apple products by using the concepts of HTML and CSS. I made use of the bootstrap " +
			"framework to place the items on the page. ",
			"images": [
				""
			]
		},
		{
			"title": "Reaction-Tester",
			"dates": "2016",
			"description": " A game which allows the user to click on the shapes that appear randomly on the screen in the least "+
			"reaction time. I used the concepts of HTML, CSS and JavaScript The JavaScript loops, functions are made use of in order to generate " +
			"random colors for the shapes and to appear at random places. " +
			"Link - https://github.com/suhastramesh",
			"images": [
				""
			]
		},
		{
			"title": "Resume",
			"dates": "2016",
			"description": "Built my resume using the concept of HTML, CSS, JavaScript and JQuery. I used the " +
			"template formatting method by using jQuery commands to replace the placeholders and then appending " +
			"it to the page. I included the map initialization to put a map in my resume which shows the locations " +
			"of my college and the places I have worked. "+
			"Link - https://github.com/suhastramesh",
			"images": [
				""
			]
		}
		
		
	]
}


	//$("#header").append(HTMLcontactGeneric);

	var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);

	var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);

	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);

	var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);

	var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedWelcome);

	var formattedBiopic = HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedBiopic);


if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
	$("#skills").append(formattedSkill);
	formattedSkill = HTMLskills.replace("%data%", bio.skills[6]);
	$("#skills").append(formattedSkill);
}

function displayWork() {
	for (job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		$(".work-entry:last").append(formattedDates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		$(".work-entry:last").append(formattedDescription);
		
	}

}

displayWork();

function displayProjects() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
		$(".project-entry:last").append(formattedTitle);

		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		$(".project-entry:last").append(formattedDates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		$(".project-entry:last").append(formattedDescription);

		if (projects.projects[project].images.length > 0) {
			for (image in projects.projects[project].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
				$(".project-entry:last").append(formattedImage);
			}

		}
	}

}
displayProjects();


function displayEducation() {
	for (school in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
		$(".education-entry:last").append(formattedName);

		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
		$(".education-entry:last").append(formattedDegree);

		var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedGpa = HTMLschoolGpa.replace("%data%", education.schools[school].gpa);
		$(".education-entry:last").append(formattedGpa);

		if (education.schools[school].majors.length > 0) {
			for (major in education.schools[school].majors) {
				var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].majors);
				$(".education-entry:last").append(formattedMajor);
			}
		}
	}
	$("#education").append(HTMLonlineClasses);
	for (course in education.onlineCourses) {
		
		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
		$(".education-entry:last").append(formattedTitle);

		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].name);
		$(".education-entry:last").append(formattedSchool);

		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
		$(".education-entry:last").append(formattedDates);

		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
		$(".education-entry:last").append(formattedUrl);
	}
}

displayEducation();



// function displayCourses() {

// 	for (course in education.onlineCourses) {
// 		$("#education").append(HTMLonlineClasses);
// 		var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[course].title);
// 		$(".education-entry:last").append(formattedTitle);

// 		var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[course].name);
// 		$(".education-entry:last").append(formattedSchool);

// 		var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[course].dates);
// 		$(".education-entry:last").append(formattedDates);

// 		var formattedUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[course].url);
// 		$(".education-entry:last").append(formattedUrl);
// 	}
// }

// displayCourses();




$(document).click(function(loc) {
	var locx = loc.pageX;
	var locy = loc.pageY;

	logClicks(locx, locy);	
});


function inName(name) {
	name = name.trim().split(" ");
	console.log(name);
	name[1] = name[1].toUpperCase();
	name[2] = name[2].toUpperCase();
	name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

	return name[0] + " " + name[1] + " " + name[2];
}
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);























