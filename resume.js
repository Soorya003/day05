//create your own resume data in json format
{
    "name": "Soorya",
    "location": "Tiruppur City,Tamilnadu",
    "email": "sooryasoor003@gmail.com",
    "phone": "+91 9626727673",
    "summary": " To become a highly skilled software engineer with a passion for developing innovative solutions.To gain experience in full-stack web development, with expertise in frontend technologies and backend frameworks. Strong problem-solving abilities and a keen eye for detail.",
    "skills": [
    {
    "category": "Programming Languages",
    "skills": [
    "JavaScript",
    "Python",
    "Java",
    "C++"
    ]
    },
    {
    "category": "Frontend Development",
    "skills": [
    "HTML5",
    "CSS3",
    "React"
    ]
    },
    {
    "category": "Backend Development",
    "skills": [
    "Node.js",
    "Express.js"
    ]
    },
    {
    "category": "Databases",
    "skills": [
    "MongoDB",
    "MySQL"
    ]
    },
    {
    "category": "Tools & Technologies",
    "skills": [
    "Git"
    ]
    }
    ],
    "education": [
    {
    "degree": "Bachelor of Computer Applications",
    "institution": "Sasurie College Of Arts And Science",
    "dates": "2017 - 2021",
    "location": "Vijayamangalam",
    "description": "Studied computer applications with a focus on software engineering. Completed coursework in web development."
    }
    ],
    "certifications": [
    {
    "title": "Full-Stack Web Development Certification",
    "authority": "Guvi",
    "dates": "2024",
    "description": "Completed an online certification course covering frontend and backend web development technologies, including HTML5, CSS3, JavaScript, Node.js, and React."
    }
    ],
    "languages": ["English","Tamil","kannada"],
    "interests": [
    "Reading",
    "Drawing"
    ]
    };
    //for the above json,iterate overr all for loops (for,for in ,for of , for each)
    // for and for in loop
    const resume = {
        "name": "Soorya",
        "location": "Tiruppur City,Tamilnadu",
        "email": "sooryasoor003@gmail.com",
        "phone": "+91 9626727673",
        "summary": " To become a highly skilled software engineer with a passion for developing innovative solutions.To gain experience in full-stack web development, with expertise in frontend technologies and backend frameworks. Strong problem-solving abilities and a keen eye for detail.",
        "skills": [
        {
        "category": "Programming Languages",
        "skills": [
        "JavaScript",
        "Python",
        "Java",
        "C++"
        ]
        },
        {
        "category": "Frontend Development",
        "skills": [
        "HTML5",
        "CSS3",
        "React"
        ]
        },
        {
        "category": "Backend Development",
        "skills": [
        "Node.js",
        "Express.js"
        ]
        },
        {
        "category": "Databases",
        "skills": [
        "MongoDB",
        "MySQL"
        ]
        },
        {
        "category": "Tools & Technologies",
        "skills": [
        "Git"
        ]
        }
        ],
        "education": [
        {
        "degree": "Bachelor of Computer Applications",
        "institution": "Sasurie College Of Arts And Science",
        "dates": "2017 - 2021",
        "location": "Vijayamangalam",
        "description": "Studied computer applications with a focus on software engineering. Completed coursework in web development."
        }
        ],
        "certifications": [
        {
        "title": "Full-Stack Web Development Certification",
        "authority": "Guvi",
        "dates": "2024",
        "description": "Completed an online certification course covering frontend and backend web development technologies, including HTML5, CSS3, JavaScript, Node.js, and React."
        }
        ],
        "languages": ["English","Tamil","kannada"],
        "interests": [
        "Reading",
        "Drawing"
        ]   
      };
      
      // Iterate over each key-value pair in the resume
      for (const key in resume) {
        console.log(key + ": ");
        const value = resume[key];
      
        // Check if the value is an object
        if (typeof value === 'object') {
          // If it's an array, iterate over each item
          if (Array.isArray(value)) {
            for (let i = 0; i < value.length; i++) {
              console.log("  - " + JSON.stringify(value[i]));
            }
          } else {
            // If it's an object, iterate over each property
            for (const subKey in value) {
              console.log("  " + subKey + ": " + value[subKey]);
            }
          }
        } else {
          console.log("  " + value);
        }
      }
// for of and forEach loop
  
  // Using for...of loop
  for (const [key, value] of Object.entries(resume)) {
    console.log(key + ": ");
    if (typeof value === 'object' && !Array.isArray(value)) {
      for (const [subKey, subValue] of Object.entries(value)) {
        console.log("  " + subKey + ": " + subValue);
      }
    } else if (Array.isArray(value)) {
      value.forEach(item => {
        console.log("  - " + JSON.stringify(item));
      });
    } else {
      console.log("  " + value);
    }
  }
  
  // Using forEach method
  Object.entries(resume).forEach(([key, value]) => {
    console.log(key + ": ");
    if (typeof value === 'object' && !Array.isArray(value)) {
      Object.entries(value).forEach(([subKey, subValue]) => {
        console.log("  " + subKey + ": " + subValue);
      });
    } else if (Array.isArray(value)) {
      value.forEach(item => {
        console.log("  - " + JSON.stringify(item));
      });
    } else {
      console.log("  " + value);
    }
  });
  
      
    
    
    
    