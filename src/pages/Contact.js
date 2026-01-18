// import React from "react";

// function Contact() {
//   return (
//     <div className="page">
//       <h1>Contact Details</h1>

//       <p><b>Name:</b> Vipin Khatri</p>
//       <p><b>Profession:</b> Android Developer</p>
//       <p><b>Email:</b> vipin.dev@gmail.com</p>
//       <p><b>Phone:</b> +91 9XXXXXXXXX</p>
//       <p><b>LinkedIn:</b> linkedin.com/in/vipinkhatri</p>
//       <p><b>GitHub:</b> github.com/vipinkhatri</p>
//     </div>
//   );
// }

// export default Contact;

///////////////////////////////
// import React from "react";

// function Contact() {
//   const contacts = [
//     {
//       label: "Email",
//       value: "vipin.dev@gmail.com",
//       link: "mailto:vipin.dev@gmail.com",
//     },
//     {
//       label: "Phone",
//       value: "+91 9XXXXXXXXX",
//       link: "tel:+919XXXXXXXXX",
//     },
//     {
//       label: "LinkedIn",
//       value: "linkedin.com/in/vipinkhatri",
//       link: "https://linkedin.com/in/vipinkhatri",
//     },
//     {
//       label: "GitHub",
//       value: "github.com/vipinkhatri",
//       link: "https://github.com/vipinkhatri",
//     },
//   ];

//   return (
//     <div className="contact-container">
//       <h1 className="section-title">Contact</h1>

//       <div className="contact-grid">
//         {/* LEFT INFO */}
//         <div className="contact-info">
//           <h2>Vipin Khatri</h2>
//           <p className="contact-role">Android Developer</p>
//           <p className="contact-about">
//             Open to Android development opportunities, freelance projects and
//             collaborations. Let’s build something impactful 🚀
//           </p>
//         </div>

//         {/* RIGHT CARDS */}
//         <div className="contact-cards">
//           {contacts.map((item, index) => (
//             <a
//               key={index}
//               href={item.link}
//               target="_blank"
//               rel="noreferrer"
//               className="contact-card"
//             >
//               <span className="contact-label">{item.label}</span>
//               <span className="contact-value">{item.value}</span>
//             </a>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Contact;

import React from "react";

function Contact() {
  const resumeUrl = "/resume/Vipin_Resume1.pdf";

  const contacts = [
    {
      label: "Email",
      value: "vipinkhatri444@gmail.com",
      link: "https://mail.google.com/mail/?view=cm&fs=1&to=vipinkhatri444@gmail.com",
    },
    {
      label: "Phone",
      value: "+91 9315283287",
      link: "tel:+919315283287",
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/vipinkhatri8",
      link: "https://linkedin.com/in/vipinkhatri8",
    },
    {
      label: "GitHub",
      value: "github.com/vipinkhatri",
      link: "https://github.com/vipinkhatri8",
    },
  ];

  return (
    <div className="contact-container">
      <h1 className="section-title">Contact</h1>

      <div className="contact-grid">
        {/* LEFT INFO */}
        <div className="contact-info">
          <h2>Vipin Khatri</h2>
          <p className="contact-role">Software Developer</p>
          <p className="contact-about">
            Open to Android development opportunities, freelance projects and
            collaborations. Let’s build something impactful 🚀
          </p>

          {/* RESUME ACTIONS */}
          <div className="resume-actions">
            <a
              href={resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="resume-btn outline"
            >
              👀 View Resume
            </a>

            <a
              href={resumeUrl}
              download
              className="resume-btn solid"
            >
              ⬇️ Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT CARDS */}
        <div className="contact-cards">
          {contacts.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <span className="contact-label">{item.label}</span>
              <span className="contact-value">{item.value}</span>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
