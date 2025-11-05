// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// const companyData = {
//   heading: "Discover why hundreds of clients entrust their business success to",
//   brand: "Megascale ",
//   stats: [
//     { value: "1120+", label: "Remarkable Project" },
//     { value: "500+", label: "Happy Customers" },
//     { value: "220+", label: "Strong Team " },
//     { value: "100%", label: "Communicative Approach" },
//   ],
//   projects: [
//     { name: "Bangalore", top: "77%", left: "30%" },
//     { name: "Mumbai", top: "57%", left: "15%" },
//     { name: "Delhi", top: "32%", left: "29%" },
//   ],
// };

// // Utility to extract number from string like "800+" or "2x"
// const parseNumber = (str) => {
//   const num = parseInt(str.replace(/\D/g, ""), 10);
//   return isNaN(num) ? 0 : num;
// };

// // CountUp component
// const CountUp = ({ end, suffix = "", duration = 2 }) => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     let start = 0;
//     const increment = end / (duration * 60); // assuming 60fps
//     let frame = 0;

//     const counter = () => {
//       frame++;
//       const next = Math.min(start + increment * frame, end);
//       setCount(Math.floor(next));
//       if (next < end) {
//         requestAnimationFrame(counter);
//       }
//     };
//     requestAnimationFrame(counter);
//   }, [end, duration]);

//   return <>{count.toLocaleString()}{suffix}</>;
// };

// const GlobeSection = () => {

//     useEffect(() => {
//     // Scroll to top when the component mounts
//     window.scrollTo(0, 0);
//   }, []);
  
//   return (
//     <section className="relative flex flex-col items-center justify-center py-12 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
//       {/* Heading */}
//       <div className="text-center mb-4 px-6 max-w-4xl">
//         <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
//           {companyData.heading}{" "}
//           <span className="text-[#0A1721] font-bold">{companyData.brand}</span>
//         </h2>
//       </div>

//       {/* Layout Wrapper */}
//       <div className=" grid grid-cols-1 lg:grid-cols-3 items-center gap-4 w-full  px-8">
//         {/* Left Stats */}
//         <div className="flex flex-col gap-8 items-center">
//           {companyData.stats.slice(0, 2).map((stat, index) => {
//             const number = parseNumber(stat.value);
//             const suffix = stat.value.replace(number, "");
//             return (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white border border-gray-100 rounded-2xl shadow-sm px-8 py-6 text-center w-full max-w-[280px] hover:shadow-lg transition-all"
//               >
//                 <h3 className="text-4xl font-medium text-[#0A1721]">
//                   <CountUp end={number} suffix={suffix} />
//                 </h3>
//                 <p className="text-gray-600 mt-2 text-md">{stat.label}</p>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Center Map */}
//         <div className="relative flex justify-center items-center">
//           <div className="relative w-[320px] sm:w-[400px] md:w-[550px] h-[400px] md:h-[550px]">
//             <img
//               src="earth3.glb"
//               alt="India Map"
//               className="w-full h-full object-cover opacity-95 drop-shadow-md"
//             />

//             {/* Project Dots */}
//             {companyData.projects.map((p, i) => (
//               <motion.div
//                 key={i}
//                 className="absolute bg-[#0A1721] rounded-full w-4 h-4 shadow-md"
//                 style={{
//                   top: p.top,
//                   left: p.left,
//                   transform: "translate(-50%, -50%)",
//                 }}
//                 animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
//                 transition={{ repeat: Infinity, duration: 2 + i }}
//               >
//                 <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-gray-700 text-sm font-medium px-3 py-1 rounded-lg shadow-md whitespace-nowrap border border-gray-100">
//                   {p.name}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>

//         {/* Right Stats */}
//         <div className="flex flex-col gap-8 items-center">
//           {companyData.stats.slice(2, 4).map((stat, index) => {
//             const number = parseNumber(stat.value);
//             const suffix = stat.value.replace(number, "");
//             return (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white border border-gray-100 rounded-2xl shadow-sm px-8 py-6 text-center w-full max-w-[280px] hover:shadow-lg transition-all"
//               >
//                 <h3 className="text-4xl font-medium text-[#0A1721]">
//                   <CountUp end={number} suffix={suffix} />
//                 </h3>
//                 <p className="text-gray-600 mt-2 text-md">{stat.label}</p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GlobeSection;



















// import React, { useEffect, useRef } from "react";
// import { motion } from "framer-motion";
// import { Canvas } from "@react-three/fiber";
// import { OrbitControls, useGLTF } from "@react-three/drei";

// const companyData = {
//   heading: "Discover why hundreds of clients entrust their business success to",
//   brand: "Megascale ",
//   stats: [
//     { value: "1120+", label: "Remarkable Project" },
//     { value: "500+", label: "Happy Customers" },
//     { value: "220+", label: "Strong Team " },
//     { value: "100%", label: "Communicative Approach" },
//   ],
// };

// // Utility to extract number from string like "800+" or "2x"
// const parseNumber = (str) => {
//   const num = parseInt(str.replace(/\D/g, ""), 10);
//   return isNaN(num) ? 0 : num;
// };

// // CountUp component
// const CountUp = ({ end, suffix = "", duration = 2 }) => {
//   const [count, setCount] = React.useState(0);

//   React.useEffect(() => {
//     let start = 0;
//     const increment = end / (duration * 60); // assuming 60fps
//     let frame = 0;

//     const counter = () => {
//       frame++;
//       const next = Math.min(start + increment * frame, end);
//       setCount(Math.floor(next));
//       if (next < end) {
//         requestAnimationFrame(counter);
//       }
//     };
//     requestAnimationFrame(counter);
//   }, [end, duration]);

//   return <>{count.toLocaleString()}{suffix}</>;
// };

// // Load Earth 3D Model
// const EarthModel = () => {
//   const { scene } = useGLTF("/earth3.glb");
//   return <primitive object={scene} scale={1.5} position={[0, 0, 0]} />;
// };

// const GlobeSection = () => {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   return (
//     <section className="relative flex flex-col items-center justify-center py-12 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
//       {/* Heading */}
//       <div className="text-center mb-4 px-6 max-w-4xl">
//         <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
//           {companyData.heading}{" "}
//           <span className="text-[#0A1721] font-bold">{companyData.brand}</span>
//         </h2>
//       </div>

//       {/* Layout Wrapper */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-4 w-full px-8">
//         {/* Left Stats */}
//         <div className="flex flex-col gap-8 items-center">
//           {companyData.stats.slice(0, 2).map((stat, index) => {
//             const number = parseNumber(stat.value);
//             const suffix = stat.value.replace(number, "");
//             return (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white border border-gray-100 rounded-2xl shadow-sm px-8 py-6 text-center w-full max-w-[280px] hover:shadow-lg transition-all"
//               >
//                 <h3 className="text-4xl font-medium text-[#0A1721]">
//                   <CountUp end={number} suffix={suffix} />
//                 </h3>
//                 <p className="text-gray-600 mt-2 text-md">{stat.label}</p>
//               </motion.div>
//             );
//           })}
//         </div>

//         {/* Center 3D Earth */}
// <div className="relative flex justify-center items-center w-full">
//   <div className="relative w-[90vw] sm:w-[70vw] md:w-[50vw] max-w-[650px] aspect-square">
//     <Canvas
//       camera={{ position: [0, 0, 4.5], fov: 45 }} // 👈 slightly zoomed out
//       style={{ width: "100%", height: "100%" }}
//     >
//       <ambientLight intensity={1} />
//       <directionalLight position={[3, 3, 5]} intensity={1.2} />
//       <EarthModel />
//       <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
//     </Canvas>
//   </div>
// </div>



//         {/* Right Stats */}
//         <div className="flex flex-col gap-8 items-center">
//           {companyData.stats.slice(2, 4).map((stat, index) => {
//             const number = parseNumber(stat.value);
//             const suffix = stat.value.replace(number, "");
//             return (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white border border-gray-100 rounded-2xl shadow-sm px-8 py-6 text-center w-full max-w-[280px] hover:shadow-lg transition-all"
//               >
//                 <h3 className="text-4xl font-medium text-[#0A1721]">
//                   <CountUp end={number} suffix={suffix} />
//                 </h3>
//                 <p className="text-gray-600 mt-2 text-md">{stat.label}</p>
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default GlobeSection;













import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import * as THREE from "three";

const companyData = {
  heading: "Discover why hundreds of clients entrust their business success to",
  brand: "Megascale ",
  stats: [
    { value: "1120+", label: "Remarkable Project" },
    { value: "500+", label: "Happy Customers" },
    { value: "220+", label: "Strong Team " },
    { value: "100%", label: "Communicative Approach" },
    { value: "92%", label: "Repeat Business Rate" },
    { value: "100%", label: "Communicative Approach" },
  ],
};

// Utility to extract number from string like "800+" or "2x"
const parseNumber = (str) => {
  const num = parseInt(str.replace(/\D/g, ""), 10);
  return isNaN(num) ? 0 : num;
};

// CountUp component
const CountUp = ({ end, suffix = "", duration = 2 }) => {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60); // assuming 60fps
    let frame = 0;

    const counter = () => {
      frame++;
      const next = Math.min(start + increment * frame, end);
      setCount(Math.floor(next));
      if (next < end) {
        requestAnimationFrame(counter);
      }
    };
    requestAnimationFrame(counter);
  }, [end, duration]);

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  );
};

const EarthModel = () => {
  const { scene } = useGLTF("/earth3.glb");
  const groupRef = useRef();
  const linesRef = useRef([]);

  // 🌍 Rotate earth and animate line shader
  useFrame(({ clock }) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }

    linesRef.current.forEach((line) => {
      if (line?.material?.uniforms) {
        line.material.uniforms.time.value = clock.getElapsedTime();
      }
    });
  });

  // 🌀 Create a curved arc path between two globe points
  const createArc = (start, end, altitude = 0.2, segments = 120) => {
    const points = [];
    for (let i = 0; i <= segments; i++) {
      const t = i / segments;
      const interpolated = new THREE.Vector3().lerpVectors(start, end, t);

      // Lift the arc higher from the globe
      const lift = Math.sin(Math.PI * t) * altitude; // higher arc
      const direction = interpolated.clone().normalize();
      const point = direction.multiplyScalar(1.5 + lift); // 1.5 = globe radius
      points.push(point);
    }
    return new THREE.CatmullRomCurve3(points);
  };

  // 🎯 Define arcs
  const arcHeight = 0.6; // 👈 increase this for taller arcs (try 0.8 for more)
  const arcs = [
    createArc(new THREE.Vector3(1, 0.2, 0.3), new THREE.Vector3(-0.8, -0.3, -0.2), arcHeight),
    createArc(new THREE.Vector3(0.8, -0.2, -0.6), new THREE.Vector3(-0.9, 0.3, 0.4), arcHeight),
    createArc(new THREE.Vector3(0.6, 0.5, -0.4), new THREE.Vector3(-0.5, -0.5, 0.6), arcHeight),
  ];

  // ✨ Flowing glow shader
  const createShaderMaterial = (color) =>
    new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      uniforms: {
        time: { value: 0 },
      },
      vertexShader: `
        varying float vProgress;
        void main() {
          vProgress = position.x;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        varying float vProgress;

        void main() {
          float progress = fract(time * 0.4); // speed
          float head = progress * 2.0 - 1.0;
          float diff = abs(vProgress - head);
          float intensity = smoothstep(0.15, 0.0, diff);
          vec3 color = vec3(${color}) * intensity * 3.0;
          gl_FragColor = vec4(color, intensity);
        }
      `,
      blending: THREE.AdditiveBlending,
    });

  return (
    <group ref={groupRef}>
      {/* 🌍 Earth */}
      <primitive object={scene} scale={1.5} position={[0, 0, 0]} />

      {/* 🌈 Animated arcs */}
      {arcs.map((arc, i) => {
        const points = arc.getPoints(200);
        const path = new THREE.CatmullRomCurve3(points);
        const geometry = new THREE.TubeGeometry(path, 200, 0.008, 6, false); // 👈 thin width stays same

        const material = createShaderMaterial(
          i % 2 === 0 ? "0.0, 1.0, 0.5" : "1.0, 0.3, 0.2" // green/red glow
        );

        return (
          <mesh
            key={i}
            ref={(ref) => (linesRef.current[i] = ref)}
            geometry={geometry}
            material={material}
          />
        );
      })}
    </group>
  );
};


const GlobeSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center py-12 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-4 px-6 max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 leading-snug">
          {companyData.heading}{" "}
          <span className="text-[#0A1721] font-bold">{companyData.brand}</span>
        </h2>
      </div>

      {/* Layout Wrapper */}
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-4 w-full px-8">
        {/* Left Stats */}
        <div className="flex flex-col gap-6 items-center">
          {companyData.stats.slice(0, 3).map((stat, index) => {
            const number = parseNumber(stat.value);
            const suffix = stat.value.replace(number, "");
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm px-8 py-6 text-center w-full max-w-[280px] hover:shadow-lg transition-all"
              >
                <h3 className="text-4xl font-medium text-[#0A1721]">
                  <CountUp end={number} suffix={suffix} />
                </h3>
                <p className="text-gray-600 mt-2 text-md">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Center 3D Earth */}
        <div className="relative flex justify-center items-center w-full">
          <div className="relative w-[90vw] sm:w-[70vw] md:w-[50vw] max-w-[650px] aspect-square">
            <Canvas
              camera={{ position: [0, 0, 4.5], fov: 45 }}
              style={{ width: "100%", height: "100%" }}
            >
              <ambientLight intensity={1} />
              <directionalLight position={[3, 3, 5]} intensity={1.2} />
              <EarthModel />
              <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
            </Canvas>
          </div>
        </div>

        {/* Right Stats */}
        <div className="flex flex-col gap-6 items-center">
          {companyData.stats.slice(3, 6).map((stat, index) => {
            const number = parseNumber(stat.value);
            const suffix = stat.value.replace(number, "");
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white border border-gray-100 rounded-2xl shadow-sm px-8 py-6 text-center w-full max-w-[280px] hover:shadow-lg transition-all"
              >
                <h3 className="text-4xl font-medium text-[#0A1721]">
                  <CountUp end={number} suffix={suffix} />
                </h3>
                <p className="text-gray-600 mt-2 text-md">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GlobeSection;
