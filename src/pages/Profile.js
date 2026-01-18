// import React from "react";

// function Profile() {
//   return (
//     <div className="page">
//       <h1>Android Developer</h1>
//       <p>
//         I am a passionate Android Developer with experience in building
//         scalable and user-friendly mobile applications.
//       </p>

//       <h2>Skills</h2>
//       <ul>
//         <li>Kotlin</li>
//         <li>Java</li>
//         <li>Jetpack Compose</li>
//         <li>XML Layouts</li>
//         <li>MVVM Architecture</li>
//         <li>Firebase</li>
//         <li>REST APIs</li>
//         <li>Room Database</li>
//       </ul>
//     </div>
//   );
// }

// export default Profile;
import React from "react";

function Profile() {
  const skills = [
    { name: "Kotlin", level: "Advanced" },
    { name: "Java", level: "Good" },
    { name: "Jetpack Compose", level: "Good" },
    { name: "XML Layouts", level: "Expert" },
    { name: "MVVM Architecture", level: "Expert" },
    { name: "Firebase", level: "Good" },
    { name: "REST APIs", level: "Good" },
    { name: "Room Database", level: "Good" },
    { name: "Node js", level: "Good" },
    { name: "React js", level: "Good" },
    { name: "Flutter", level: "Good" }
  ];

  return (
    <div className="profile-container">
      {/* Hero Section */}
      <div className="hero">
        <h1>Software Developer</h1>
        <p>
          Passionate Android Developer focused on building scalable, secure, and high-performance mobile applications. I also have hands-on experience with Node.js, React.js, and Flutter through real-world projects.
        </p>
      </div>

      {/* Skills Section */}
      <h2 className="section-title">Core Skills</h2>

      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <span>{skill.level}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;

