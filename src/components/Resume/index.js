// import React from "react";
// // import Resume from "";

// const resumePage = () => {
//   return (
//     <div class="container">
//       <h2 className="top-title">Resume</h2>
//       <ul>
//         <li>Full-Stack Web Developer and my Proficiencies</li>
//         <h6>
//           <ul>
//             <li>Html5</li>
//             <li>Css</li>
//             <li>Javascript</li>
//             <li>JQuery</li>
//             <li>Bootstrap</li>
//             <li>Node.js</li>
//             <li>MySQL, MongoDb, Mongoose</li>
//             <li>Express</li>
//             <li>React</li>
//             <li>HandleBars</li>
//           </ul>
//         </h6>
//       </ul>
//     </div>
//   );
// };
// export default resumePage;

import React, { useState } from "react";
import { Document, Page } from "react-pdf";

function MyApp() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  return (
    <div>
      <Document
        file="Catherine_Cox_Resume.pdf"
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page height="600" pageNumber={pageNumber} />
      </Document>
      <p>
        Page {pageNumber} of {numPages}
      </p>
    </div>
  );
}
