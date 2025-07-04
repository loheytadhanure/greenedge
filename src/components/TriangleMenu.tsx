// import React, { useState } from 'react';
// import './TriangleMenu.css';

// const TriangleMenu: React.FC = () => {
//   const [menuVisible, setMenuVisible] = useState(false);

//   const handleTruckClick = () => {
//     setMenuVisible(true);
//   };

//   return (
//     <div className="triangle-container">
//       <div className="road-background">
//         <img
//           src="/assets/truck.avif"
//           alt="Truck"
//           className={`truck ${!menuVisible ? 'truck-moving' : ''}`}
//           onClick={handleTruckClick}
//         />
//       </div>

//       {menuVisible && (
//         <>
//           <div className="triangle top-left">Vendor to warehouse</div>
//           <div className="triangle top-right">Warehouse to customer</div>
//           <div className="triangle bottom-left">Dashboard</div>
//           <div className="triangle bottom-right">GOAL</div>
//         </>
//       )}
//     </div>
//   );
// };

// export default TriangleMenu;
import React, { useEffect, useRef } from 'react';
import './TriangleMenu.css';

const TriangleMenu: React.FC = () => {
  const triangleRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Show triangles one by one with staggered delays
    triangleRefs.current.forEach((triangle, index) => {
      setTimeout(() => {
        triangle.classList.add('active');
      }, index * 400); // delay each by 400ms
    });
  }, []);

  return (
    <div className="triangle-container">
      <div
        className="triangle triangle-1"
        ref={(el) => el && (triangleRefs.current[0] = el)}
      >
        Vendor to Warehouse
      </div>
      <div
        className="triangle triangle-2"
        ref={(el) => el && (triangleRefs.current[1] = el)}
      >
        Warehouse to Customer
      </div>
      <div
        className="triangle triangle-3"
        ref={(el) => el && (triangleRefs.current[2] = el)}
      >
        Dashboard
      </div>
      <div
        className="triangle triangle-4"
        ref={(el) => el && (triangleRefs.current[3] = el)}
      >
        Goal
      </div>
    </div>
  );
};

export default TriangleMenu;
