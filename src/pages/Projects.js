// import React from "react";

// function Projects() {
//   const projects = [
//     {
//       name: "CureMeGPT",
//       type: "Healthcare Android App",
//       skills: "Kotlin, Jetpack Compose, Firebase, MVVM"
//     },
//     {
//       name: "LawCo",
//       type: "Legal Service App",
//       skills: "Java, XML, REST API, RecyclerView"
//     },
//     {
//       name: "Appointment Booking App",
//       type: "Business Application",
//       skills: "Kotlin, Room DB, Firebase Auth"
//     }
//   ];

//   return (
//     <div className="page">
//       <h1>Projects</h1>

//       {projects.map((project, index) => (
//         <div key={index} className="card">
//           <h3>{project.name}</h3>
//           <p><b>Type:</b> {project.type}</p>
//           <p><b>Skills Used:</b> {project.skills}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Projects;

// import React from "react";

// function Projects() {
//   const projects = [
//     {
//       name: "CureMeGPT",
//       type: "Healthcare App",
//       description:
//         "AI-powered healthcare assistant app with chat, reports and secure authentication.",
//       skills: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM"],
//     },
//     {
//       name: "LawCo",
//       type: "Legal Service App",
//       description:
//         "Lawyer-client communication platform with profile management and bookings.",
//       skills: ["Java", "XML", "REST API", "RecyclerView"],
//     },
//     {
//       name: "Appointment Booking App",
//       type: "Business App",
//       description:
//         "Appointment scheduling app with real-time slots and user authentication.",
//       skills: ["Kotlin", "Room DB", "Firebase Auth"],
//     },
//   ];

//   return (
//     <div className="projects-container">
//       <h1 className="section-title">Projects</h1>

//       <div className="projects-grid">
//         {projects.map((project, index) => (
//           <div key={index} className="project-card">
//             <div className="project-header">
//               <h3>{project.name}</h3>
//               <span className="project-type">{project.type}</span>
//             </div>

//             <p className="project-desc">{project.description}</p>

//             <div className="skills-wrapper">
//               {project.skills.map((skill, i) => (
//                 <span key={i} className="skill-chip">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Projects;

// import React from "react";

// function Projects() {
//   const projects = [
//     {
//       name: "CureMeGPT",
//       type: "Healthcare App",
//       description:
//         "AI-powered healthcare assistant app with chat, reports and secure authentication.",
//       skills: ["Kotlin", "Jetpack Compose", "Firebase", "MVVM"],
//     },
//     {
//       name: "LawCo",
//       type: "Legal Service App",
//       description:
//         "Lawyer-client communication platform with profile management and bookings.",
//       skills: ["Java", "XML", "REST API", "RecyclerView"],
//     },
//     {
//       name: "Appointment Booking App",
//       type: "Business App",
//       description:
//         "Appointment scheduling app with real-time slots and user authentication.",
//       skills: ["Kotlin", "Room DB", "Firebase Auth"],
//     },
//   ];

//   const projectVideos = [
//     {
//       title: "CureMeGPT App Demo",
//       src: "/videos/dummy.mp4",
//     },
//     {
//       title: "LawCo App Demo",
//       src: "/videos/dummy.mp4",
//     },
//   ];

//   return (
//     <div className="projects-container">
//       <h1 className="section-title">Projects</h1>

//       {/* PROJECT CARDS */}
//       <div className="projects-grid">
//         {projects.map((project, index) => (
//           <div key={index} className="project-card">
//             <div className="project-header">
//               <h3>{project.name}</h3>
//               <span className="project-type">{project.type}</span>
//             </div>

//             <p className="project-desc">{project.description}</p>

//             <div className="skills-wrapper">
//               {project.skills.map((skill, i) => (
//                 <span key={i} className="skill-chip">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* VIDEO SHOWCASE */}
//       <h2 className="section-title">Project Demo Videos</h2>

//       <div className="video-grid">
//         {projectVideos.map((video, index) => (
//           <div key={index} className="video-card">
//             <video
//               src={video.src}
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="project-video"
//             />
//             <p className="video-title">{video.title}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Projects;


// import React from "react";

// function Projects() {
//   const allProjects = [
//     {
//       name: "CureMeGPT",
//       type: "Healthcare App",
//       description:
//         "AI-powered healthcare assistant app with chat, reports and secure authentication.",
//       skills: ["Kotlin", "Jetpack Compose", "MVVM"],
//     },
//     {
//       name: "LawCo",
//       type: "Legal Service App",
//       description:
//         "Lawyer-client communication platform with profile management and bookings.",
//       skills: ["Kotlin", "XML", "REST API", "RecyclerView"],
//     },
//     {
//       name: "Appointment Booking App",
//       type: "Business App",
//       description:
//         "Appointment scheduling app with real-time slots and user authentication.",
//       skills: ["Kotlin", "Room DB", "Firebase Auth"],
//     },
//     {
//       name: "Food Delivery App (Demo)",
//       type: "Delivery App",
//       description: "Live demo of Food Delivery  mobile application.",
//       skills: ["Kotlin","XML" ],
//       video: "/videos/foodapp.mp4",
//     },
//     // {
//     //   name: "LawCo (Demo)",
//     //   type: "Legal App",
//     //   description: "Demo showcasing LawCo app features.",
//     //   skills: ["Java", "XML"],
//     //   video: "/videos/dummy.mp4",
//     // },
//   ];

//   const topProjects = allProjects.slice(0, 3);
//   const videoProjects = allProjects.slice(3);

//   return (
//     <div className="projects-container">
//       <h1 className="section-title">Projects</h1>

//       {/* 🔹 TOP 3 PROJECTS (NO VIDEO) */}
//       <div className="projects-grid">
//         {topProjects.map((project, index) => (
//           <div key={index} className="project-card">
//             <div className="project-header">
//               <h3>{project.name}</h3>
//               <span className="project-type">{project.type}</span>
//             </div>

//             <p className="project-desc">{project.description}</p>

//             <div className="skills-wrapper">
//               {project.skills.map((skill, i) => (
//                 <span key={i} className="skill-chip">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* 🔹 PROJECTS WITH VIDEOS */}
//       <h2 className="section-title">Live Project Demos</h2>

//       {videoProjects.map((project, index) => (
//         <div
//           key={index}
//           className={`project-row ${index % 2 === 1 ? "reverse" : ""}`}
//         >
//           {/* PROJECT INFO */}
//           <div className="project-card">
//             <div className="project-header">
//               <h3>{project.name}</h3>
//               <span className="project-type">{project.type}</span>
//             </div>

//             <p className="project-desc">{project.description}</p>

//             <div className="skills-wrapper">
//               {project.skills.map((skill, i) => (
//                 <span key={i} className="skill-chip">
//                   {skill}
//                 </span>
//               ))}
//             </div>
//           </div>

//           {/* VIDEO */}
//           <div className="video-wrapper">
//             <video
//               src={project.video}
//               autoPlay
//               loop
//               muted
//               playsInline
//               className="project-video"
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Projects;

import React from "react";

function Projects() {
  const allProjects = [
    {
      name: "CureMeGPT",
      type: "Healthcare App",
      description:
        "AI-powered healthcare assistant app with chat, reports, and secure authentication.",
      skills: ["Kotlin", "Jetpack Compose", "MVVM"],
    },
    {
      name: "LawCo",
      type: "Legal Service App",
      description:
        "Lawyer-client communication platform with profile management and bookings.",
      skills: ["Kotlin", "XML", "REST API", "RecyclerView"],
    },
    {
      name: "Appointment Booking App",
      type: "Business App",
      description:
        "Appointment scheduling app with real-time slots and user authentication.",
      skills: ["Kotlin", "Room DB", "Firebase Auth"],
    },
    {
      name: "Food Delivery App (Demo)",
      type: "Delivery App",
      description: "Live demo showcasing core features of a food delivery app.",
      skills: ["Kotlin", "XML"],
      video: "/videos/foodapp.mp4",
    },
  ];

  const topProjects = allProjects.slice(0, 3);
  const videoProjects = allProjects.slice(3);

  return (
    <div className="projects-container">
      <h1 className="section-title">Projects</h1>

      {/* 🔹 TOP PROJECTS */}
      <div className="projects-grid">
        {topProjects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-header">
              <h3>{project.name}</h3>
              <span className="project-type">{project.type}</span>
            </div>

            <p className="project-desc">{project.description}</p>

            <div className="skills-wrapper">
              {project.skills.map((skill, i) => (
                <span key={i} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 EXTRA PROJECTS NOTE (NO NAMES) */}
      <p className="projects-note">
        In addition to the projects showcased above, I have worked on several
        other real-world applications across different domains, which helped me
        gain strong hands-on experience and improve my problem-solving and
        development skills.
      </p>

      {/* 🔹 LIVE PROJECT DEMOS */}
      <h2 className="section-title">Live Project Demos</h2>

      {videoProjects.map((project, index) => (
        <div
          key={index}
          className={`project-row ${index % 2 === 1 ? "reverse" : ""}`}
        >
          {/* PROJECT INFO */}
          <div className="project-card">
            <div className="project-header">
              <h3>{project.name}</h3>
              <span className="project-type">{project.type}</span>
            </div>

            <p className="project-desc">{project.description}</p>

            <div className="skills-wrapper">
              {project.skills.map((skill, i) => (
                <span key={i} className="skill-chip">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* VIDEO */}
          <div className="video-wrapper">
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="project-video"
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;

