// import React from 'react';

// const Certifications = () => {
//   const certs = [
//     {
//       title: "Java Fundamentals - IBM",
//       description: "Mastered Java concepts, including object-oriented programming, data types, control structures, and basic algorithms.",
//     },
//     {
//       title: "Standard Test of English Proficiency (STEP) - Hindu Group",
//       description: "Secured 7.2, demonstrating strong skills in reading, writing, and verbal communication in English.",
//     },
//   ];

//   return (
//     <section id="certifications" className="certifications">
//       <div className="container">
//         <h2>Certifications</h2>
//         <div className="grid">
//           {certs.map((cert, index) => (
//             <div key={index} className="card">
//               <div className="card-content">
//                 <h3>{cert.title}</h3>
//                 <p>{cert.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Certifications;
import React from 'react';
import { FaJava } from 'react-icons/fa';
import { MdLanguage } from 'react-icons/md';

const Certifications = () => {
  const certs = [
    {
      title: "Java Fundamentals - IBM",
      description: "Mastered Java concepts, including object-oriented programming, data types, control structures, and basic algorithms.",
      icon: <FaJava className="icon" />,
    },
    {
      title: "Standard Test of English Proficiency (STEP) - Hindu Group",
      description: "Secured 7.2, demonstrating strong skills in reading, writing, and verbal communication in English.",
      icon: <MdLanguage className="icon" />,
    },
  ];

  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2>Certifications</h2>
        <div className="grid">
          {certs.map((cert, index) => (
            <div key={index} className="card">
              <div className="card-content">
                <div className="icon-wrapper">{cert.icon}</div>
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
