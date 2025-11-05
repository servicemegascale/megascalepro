// import React from "react";
// import "./SevenStepSection.css"; // Create a CSS file for styles

// const steps = [
//   {
//     id: 1,
//     title: "Empathize with client vision",
//     img: "https://www.upstairtechnologies.com/images/progimg1.svg",
//   },
//   {
//     id: 2,
//     title: "Craft it on paper",
//     img: "https://www.upstairtechnologies.com/images/progimg2.svg",
//   },
//   {
//     id: 3,
//     title: "Planning for desired results",
//     img: "https://www.upstairtechnologies.com/images/progimg3.svg",
//   },
//   {
//     id: 4,
//     title: "Design optimal architecture",
//     img: "https://www.upstairtechnologies.com/images/progimg4.svg",
//   },
//   {
//     id: 5,
//     title: "Delivery with quality",
//     img: "https://www.upstairtechnologies.com/images/progimg5.svg",
//   },
//   {
//     id: 6,
//     title: "Test it like gorilla",
//     img: "https://www.upstairtechnologies.com/images/progimg6.svg",
//   },
//   {
//     id: 7,
//     title: "Standing right behind to maintain it",
//     img: "https://www.upstairtechnologies.com/images/progimg7.svg",
//   },
// ];

// export default function SevenStepSection() {
//   return (
//     <section className="seven_step_img text-center position-relative" id="seven_step_img">
//       <div className="container">
//         <div className="work-list-wrap">
//           <ul className="workflow-list">
//             {steps.map((step) => (
//               <li key={step.id} className={`list-${step.id} test`}>
//                 <span dangerouslySetInnerHTML={{ __html: step.title.replace(/\n/g, "<br>") }} />
//                 <img
//                   className="load-img"
//                   alt={step.title}
//                   width="28"
//                   height="28"
//                   src={step.img}
//                   loading="lazy"
//                 />
//               </li>
//             ))}
//           </ul>

//           {/* SVG Animation */}
//           <svg width="100%" viewBox="0 0 1156 608">
//             <path
//               d="M253.829 523.292C189.329 521.625 53.4285 483.592 25.8285 344.792C-1.77148 205.992 75.3285 125.292 117.329 102.292C167.162 68.1249 292.629 21.6916 395.829 109.292C499.029 196.892 650.829 357.125 713.829 426.292C752.495 472.958 860.029 555.392 980.829 511.792C1101.63 468.192 1135.83 362.958 1137.83 315.792C1145.5 268.792 1136.23 160.292 1037.83 102.292C1018.83 85.6249 960.629 53.7916 879.829 59.7916"
//               opacity="0.1"
//               stroke="#000"
//               fill="none"
//               strokeWidth="3"
//               id="theMotionPath"
//             ></path>

//             <image
//               id="ios-logo"
//               xlinkHref="images/logo-icon.svg"
//               y="-20"
//               x="-20"
//               path="#theMotionPath"
//               className="hide-path"
//             >
//               <animateMotion dur="11.35s" repeatCount="0" id="anim">
//                 <mpath xlinkHref="#theMotionPath"></mpath>
//               </animateMotion>
//             </image>

//             <path
//               id="highlighted-path"
//               className="highlighted-path-anime"
//               fill="none"
//               stroke="#F15124"
//               strokeWidth="3"
//               d="M253.829 523.292C189.329 521.625 53.4285 483.592 25.8285 344.792C-1.77148 205.992 75.3285 125.292 117.329 102.292C167.162 68.1249 292.629 21.6916 395.829 109.292C499.029 196.892 650.829 357.125 713.829 426.292C752.495 472.958 860.029 555.392 980.829 511.792C1101.63 468.192 1135.83 362.958 1137.83 315.792C1145.5 268.792 1136.23 160.292 1037.83 102.292C1018.83 85.6249 960.629 53.7916 879.829 59.7916"
//             ></path>
//           </svg>
//         </div>

//         {/* Mobile Slider (optional: integrate SwiperJS later) */}
//         <div className="process-slider mob">
//           <div className="slide-process">
//             {steps.map((step) => (
//               <div key={step.id} className="slide-process-content">
//                 <img className="load-img" alt={step.title} width="40" height="40" src={step.img} />
//                 <h4>{step.title}</h4>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
