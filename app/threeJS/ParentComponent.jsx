// import React from "react";
// import ZenAnimation from "./ZenAnimation";

// const ParentComponent = () => {
//   const [viewport, setViewport] = React.useState({
//     width: window.innerWidth,
//     height: window.innerHeight,
//   });

//   // Update viewport size on window resize
//   React.useEffect(() => {
//     const handleResize = () => {
//       setViewport({ width: window.innerWidth, height: window.innerHeight });
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   return <ZenAnimation viewport={viewport} />;
// };

// export default ParentComponent;
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";

const ZenAnimation = dynamic(() => import("./ZenAnimation"), { ssr: false });

const ParentComponent = () => {
  const [viewport, setViewport] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    // Check if window object is defined (client-side)
    if (typeof window !== "undefined") {
      // Set initial viewport dimensions
      setViewport({ width: window.innerWidth, height: window.innerHeight });

      // Update viewport size on window resize
      const handleResize = () => {
        setViewport({ width: window.innerWidth, height: window.innerHeight });
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return <ZenAnimation viewport={viewport} />;
};

export default ParentComponent;
