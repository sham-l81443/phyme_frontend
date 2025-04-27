// "use client";
// import { useEffect } from "react";
// import jdetects from "jdetects";

// const useDevtoolsDetect = (onDetect: (status: string) => void, once = false) => {
//     useEffect(() => {
//         const detector = jdetects.create({
//             once,
//             label: "phyme-learn",
//             onchange: onDetect,
//         });

//         return () => {
//             detector.destroy();
//         };
//     }, [onDetect, once]);
// };

// export { useDevtoolsDetect };
