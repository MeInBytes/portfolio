// import {animate, motion} from "framer-motion"

// //variants
// const stairAnimation={
//     intial:{
//         top: "0%",
//     },
//     animate:{
//         top:"100%",
//     },
//     exit: {
//         top: ["100%","0%"]
//     },
// }

// // Calculating the reverse index for staggered delay

// const reverseIndex = (index)=>{
//     const totalSteps =6;
//      return totalSteps-index-1;
// }
// const Stairs = () => {
//   return (
//   <>
//     {/*render & motion divs,each repersenting a step of the stairs
//     Each div will have the same animation defined by the stairsAnimation object  The deay for each div is calculated sinamically based on it's reversed index ,creating a staggered effort with decreasing delay for Each subsequent step
//     */}
//     {[...Array(6).map((_,index)=>{
//         <motion.div key={index}
//         variants={stairAnimation}
//         intial="intial"
//         animate = "animate"
//         exit="exit"
//         transition={{
//             duration:0.4,
//             ease:"easeInOut",
//             delay:reverseIndex(index)*0.1
//         }}
//         className="h-full w-full bg-white relative"
//     )]}

//   </>)

// };

// export default Stairs;
import { motion } from "framer-motion";

// Variants for the stairs animation
const stairAnimation = {
  initial: {
    // Corrected spelling from 'intial' to 'initial'
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

// Calculating the reverse index for staggered delay
const reverseIndex = (index) => {
  const totalSteps = 6;
  return totalSteps - index - 1;
};

const Stairs = () => {
  return (
    <>
      {/* Render & motion divs, each representing a step of the stairs */}
      {Array.from({ length: 6 }).map(
        (
          _,
          index // Corrected array creation
        ) => (
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial" // Corrected spelling from 'intial' to 'initial'
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        )
      )}
    </>
  );
};

export default Stairs;
