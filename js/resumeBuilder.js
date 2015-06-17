

var bio = {
  "name": "Ryan Campa",
  "role": "Web Developer",
  "contacts": {
    "LinkedIn": "LinkedIn",
    "mobile": "555-555-5555",
    "email": "RJCampa@gmail.com",
    "github": "rjcampa",
    "location": "Alexandria, Virginia"
  },
  "skills": [
    "programming", "project management", "development", "reactJS", "jQuery"
  ],
  "welcomeMessage": "hi, there!",
  "bioPic": "images/fry.jpg",
  //I added some of the other places I've lived :)
  "places": ["Yokosuka, Japan", "Newport, RI", "Santa Rita, Guam", "Seattle, Washington", "Chicago, Illinois"]
};

var work = {
  "jobs": [
{
  "title" : "Engineering Project Manager",
  "employer" : "USCG",
  "dates" : 2012,
  "location" : "Baltimore, MD",
  "description" : "Logistics, Project Management, Leadership"
},
{
  "title" : "Student Engineer",
  "employer" : "USCG",
  "dates" : 2010,
  "location" : "San Diego, CA",
  "description" : "Student Engineer, Watchstander"
}
]};

var education = {
  "schools": [
    {
      "name": "US Coast Guard Academy",
      "location": "New London, CT",
      "dates": "2006-2010",
      "degree" : "Bachelor of Science",
      "major" : "Mechanial Engineering",
      "url" : ""   
    },
    {
      "name": "NVCC",
      "location": "Annandale, VA",
      "dates": "May-Aug 2015",
      "degree": "Continuing Education",
      "major" : "CS I & CS II",
      "url" : "http://www.nvcc.edu/"   
    },
    {
      "name": "Betamore Back-End Web Developer Course",
      "location": "Baltimore, MD",
      "dates": "May-Aug 2015",
      "degree": "Continuing Education",
      "major" : "ReactJS, NodeJS, jQuery",
      "url" : "http://betamore.com/academy/back-end-web-development/"   
    },
  ],
  "online_Classes" : [
    {
      "title": "Front-End Nanodegree",
      "school": "Udacity",
      "dates": "2015",
      "url" : "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"   
    },
  ]
};

var projects = {
  "projects": [
    {
      "title" : "Project 1",
      "dates" : "May 2015",
      "description" : "Interactive and Responsive Landing Page",
      "images" : [
      "http://placehold.it/350x150", "http://placehold.it/350x150"
      ]
    },
    {
      "title" : "Photo Cards in ReactJS",
      "dates" : "June 2015",
      "description" : "The Photo Card app demo allows users to add and save pictures. Implemented with ReactJS.",
      "images" : [ "http://placehold.it/350x150", "http://placehold.it/350x150"
      ]
    },
    {
      "title" : "Project 3",
      "dates" : "15May15-21May15",
      "description" : "Interactive and Responsive Landing Page",
      "images" : [
      "http://placehold.it/350x150", "http://placehold.it/350x150"
      ]
    }
  ]
};

work.display = function() {
for (index in work.jobs) {
  $("#workExperience").append(HTMLworkStart);
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[index].employer);
  var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[index].title);
  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[index].dates);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[index].description);
  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[index].location);

  $(".work-entry:last").append(formattedEmployer + formattedWorkTitle);
  $(".work-entry:last").append(formattedDates);
  $(".work-entry:last").append(formattedLocation);
  $(".work-entry:last").append(formattedDescription);
}
};

projects.display = function(){
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images.length >0 ) {
      for (image in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images[image]);
        $(".project-entry:last").append(formattedImage);
      }
    };
  }
};



education.display = function(){
  for (schools in education.schools) {
    $("#education").append(HTMLschoolStart);
    var formattedName = HTMLschoolName.replace("%data%", education.schools[schools].name);
    $(".education-entry:last").append(formattedName);
    
    var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schools].degree);
    $(".education-entry:last").append(formattedDegree);

    var formattedDates = HTMLschoolDates.replace("%data%", education.schools[schools].dates);
    $(".education-entry:last").append(formattedDates);
    
    var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[schools].location);
    $(".education-entry:last").append(formattedLocation);

    var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[schools].major);
    $(".education-entry:last").append(formattedMajor);
 
  };
    $(".education-entry:last").append(HTMLonlineClasses);
    for (onlineSchool in education.online_Classes){
      var formattedTitle = HTMLonlineTitle.replace("%data%", education.online_Classes[onlineSchool].title);
      $(".education-entry:last").append(formattedTitle);
      var formattedSchool = HTMLonlineSchool.replace("%data%", education.online_Classes[onlineSchool].school);
      $(".education-entry:last").append(formattedSchool);
      var formattedDates = HTMLonlineDates.replace("%data%", education.online_Classes[onlineSchool].dates);
      $(".education-entry:last").append(formattedDates);
      var formattedURL = HTMLonlineURL.replace("%data%", education.online_Classes[onlineSchool].url);
      $(".education-entry:last").append(formattedURL);
    }
};

//this function also populates the footer
bio.personalInfo = function(){
  if (bio.skills.length > 0) {
  $("#header").append(HTMLskillsStart);
  for (var skills in bio.skills){
    var formattedSkill = HTMLskills.replace("%data%", bio.skills[skills]);
    $("#skills").append(formattedSkill);
  }
};
  var formattedName = HTMLheaderName.replace("%data%", bio.name);
  var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
  $("#header").prepend(formattedRole);
  $("#header").prepend(formattedName);
  $("#topContacts").before(HTMLbioPic.replace("%data%", bio.bioPic)); 
  $("#topContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
  $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
  $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
  $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
  $("#footerContacts").append(HTMLmobile.replace("%data%", this.contacts.mobile));
  $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
  $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
  };

projects.display();
work.display();
bio.personalInfo();
education.display();
$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);
var inName = function(name) {
  name = name.trim().split(" ");
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] + " " + name[1];
};
