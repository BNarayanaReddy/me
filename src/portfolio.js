/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "BNarayanaReddy",
  title: "Hi all, I'm Lakshmi Narayana",
  subTitle: emoji(
    "An aspiring AI engineer leveraging the tech around NLP, LLMs, Agentic and Speech AI."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1BJJl7105MjuhLkvTUB18uz6IhPtRZKin/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/BNarayanaReddy",
  linkedin: "https://www.linkedin.com/in/lakshmi-narayana-reddy-basireddy-485013254/",
  gmail: "itsnarayanareddy@gmail.com",
  kaggle: "https://www.kaggle.com/bnarayanareddy",
  twitter: "https://x.com/BNarayana_Redd",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Training Deep Learning Models, Working in Speech, and Text Processing",
  skills: [
    emoji(
      "⚡ Develop robust deep learning modeles"
    ),
    emoji("⚡ Automating tasks using Agentic AI"),
    emoji(
      "⚡ Working on Spoken Keyword Spotting"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "PyTorch",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Rajiv Gandhi University of Knowledge Technologies",
      logo: require("./assets/images/RGUKT_logo.webp"),
      subHeader: "Bachelors in Electronics and Communication",
      duration: "September 2022 - May 2026",
      desc: "Participated in the research on Real-time Speaker diarization and submitted a paper.",
      // descBullets: [
      //   "E",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Rajiv Gandhi University of Knowledge Technologies",
      logo: require("./assets/images/RGUKT_logo.webp"),
      subHeader: "Pre-University Course",
      duration: "January 2020 - September 2022",
      desc: "Passed with distinction in Math, Physics, Chemistry and IT group",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Agentic AI", //Insert stack or technology you have experience in
      progressPercentage: "30%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Deep Learning",
      progressPercentage: "70%"
    },
    {
      Stack: "Speech AI",
      progressPercentage: "40%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Summer Intern - Remote",
      company: "IIIT Sri City",
      companylogo: require("./assets/images/IIIT_Sri_City_Logo.png"),
      date: "May 2025 - Present",
      desc: "Spoken Keyword Detection",
      descBullets: [
        "Surveying the literature review on KWS",
        "Exploring already built systems by IIT Guwahati"        
      ]
    },
    {
      role: "Intern - Remote",
      company: "Meeami Technologies",
      companylogo: require("./assets/images/meeami_technologies_logo.jpeg"),
      date: "August 2024 - May 2025",
      desc: "Reduced the absolute diarization error rate by 5% compared to existing online diarization framework",
      descBullets: [
        "Conducted comparative evaluation of state-of-the-art diarization systems",
        "Collaborated in team meetings and worked closely with university professor on system improvements"
      ]
    }    
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {};
//   title: "Big Projects",
//   subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
//   projects: [
//     {
//       image: require("./assets/images/saayaHealthLogo.webp"),
//       projectName: "Saayahealth",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://saayahealth.com/"
//         }
//         //  you can add extra buttons here.
//       ]
//     },
//     {
//       image: require("./assets/images/nextuLogo.webp"),
//       projectName: "Nextu",
//       projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
//       footerLink: [
//         {
//           name: "Visit Website",
//           url: "http://nextu.se/"
//         }
//       ]
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications "),
  subtitle:
    "Achievements and Certifications",

  achievementsCards: [
    {
      title: "Research Paper Submission",
      subtitle:
        "Thorough research in real-time diarization helped to write my first research paper.",
      image: require("./assets/images/interspeech.jpeg"),
      imageAlt: "Interspeech 2025 Netherlands",
      footerLink: [
        {
          name: "Not yet Accepted - Results in May",
          url: ""
        },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Agentic AI",
      subtitle:
        "Completed Agentic AI course that taught me openAI agents SDK, Crew, LangGraph, MCP...",
      image: require("./assets/images/agentic_ai.jpeg"),
      imageAlt: "Complete Agentic AI - by Ed Donner",
      footerLink: [
        {
          name: "Progress - 40%",
          url: ""
        }
      ]
    },

    {
      title: "Deep Learning",
      subtitle: "Completed Certifcation from IIT Madras as part of NPTEL, Achieved Silver Medal in Final Exam",
      image: require("./assets/images/IIT_Madras_Logo.svg.png"),
      imageAlt: "IIT Madras",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1qCZ9JBWILkjVC2tAQUS1JxHh_DW0ARuz/view?usp=drive_link"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    },
    {
      title: "Large Language Models",
      subtitle: "Completed Certifcation from IIT Delhi as part of NPTEL, Achieved Elite Bronze in Final Exam",
      image: require("./assets/images/Indian_Institute_of_Technology_Delhi_Logo.svg.png"),
      imageAlt: "IIT Madras",
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1n34FpDspptkOBKU4d6LbyBRdwIn3p6qv/view?usp=drive_link"},
        // {
        //   name: "Final Project",
        //   url: "https://pakistan-olx-1.firebaseapp.com/"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {};
//   title: "Blogs",
//   subtitle:
//     "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
//   displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
//   blogs: [
//     {
//       url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
//       title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
//       description:
//         "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
//     },
//     {
//       url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
//       title: "Why REACT is The Best?",
//       description:
//         "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Talks Sections

const talkSection = {};
//   title: "TALKS",
//   subtitle: emoji(
//     "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE "
//   ),

//   talks: [
//     {
//       title: "Build Actions For Google Assistant",
//       subtitle: "Codelab at GDG DevFest Karachi 2019",
//       slides_url: "https://bit.ly/saadpasta-slides",
//       event_url: "https://www.facebook.com/events/2339906106275053/"
//     }
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Podcast Section

const podcastSection = {};
//   title: emoji("Podcast 🎙️"),
//   subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

//   // Please Provide with Your Podcast embeded Link
//   podcast: [
//     "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
//   ],
//   display: true // Set false to hide this section, defaults to true
// };

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91- 703220727*",
  email_address: "itsnarayanareddy@gmail.com"
};

// Twitter Section

const twitterDetails = {};
//   userName: "twitter", //Replace "twitter" with your twitter username without @
//   display: true // Set true to display this section, defaults to false
// };

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
