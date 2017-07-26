# Online Portfolio

Online resume built using HTML, CSS, JavaScript and JQuery.

## Procedure:

1. Built four javaScript objects, each one representing a different resume section. The objects created follow the schema below. 

2. 'Bio' contains  
    - name : string
    - role : string
    - contacts : an object with
         - mobile: string
         - email: string 
         - github: string
         - twitter: string (optional)
         - location: string
    - welcomeMessage: string 
    - skills: array of strings
    - biopic: string url
    - display: function with no parameters    
   
3. 'Education' contains 
    - schools: Array of onjects with
         - name : string
         - location : string
         - degree: string
         - majors: array of strings
         - dates: string
         - url: string
    - onlineCourses: array of objects with
         - title: string
         - school: string
         - dates: string
         - url: string
    - display: function with no parameters
    
 4. 'Work' contains  
    - jobs: array of objects with
         - employer: string 
         - title: string 
         - location: string 
         - dates: string
         - description: string 
    - display: function with no parameters
    
 5. 'Projects' contains  
    - projects: array of objects with
         - title: string 
         - dates: string
         - description: string
         - images: array with string urls
    - display: function with no parameters

- Used jQuery’s `selector.append()` and `selector.prepend()` functions to modify index.html. 

- Used the JavaScript method `string.replace(old, new)` to swap out all the placeholder text for data from your resume JSON                  objects.
  



    
