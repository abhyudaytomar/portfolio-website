// import React from 'react';
// import { motion } from 'framer-motion';

// const ThrowableSentence = ({ text }) => {
//   return (
//     <div style={{ position: 'relative', width: '100%', height: '100%' }}>
//       <motion.div
//         style={{ display: 'inline-block', cursor: 'grab' }}
//         drag
//         dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
//         whileTap={{ scale: 1.2 }}
//         whileHover={{ scale: 1.1 }}
//       >
//         {text}
//       </motion.div>
//     </div>
//   );
// };

// export default ThrowableSentence;






















// import React, { useState, useEffect, useRef } from 'react';
// import { Typography, Grid, Button } from '@mui/material';
// import { motion } from 'framer-motion';
// import Draggable from 'react-draggable';

// const Letter = ({ char }) => {
//   return (
//     <span>{char}</span>
//   );
// };

// const Main = () => {
//   const [showAdditionalText, setShowAdditionalText] = useState(false);
//   const [typingText, setTypingText] = useState('');
//   const [lettersMoving, setLettersMoving] = useState(false); // State to track if letters are moving
//   const [additionalTextPosition, setAdditionalTextPosition] = useState({ x: 0, y: 0 }); // State to track additional text position
//   const neonOrange = "#FFA500"; // Neon orange color
//   const fontSizeMain = "75px"; // Font size for the main sentence
//   const fontSizeAdditional = "48px"; // Font size for the additional sentence
//   const fontFamily = "'Poppins', sans-serif"; // Font family
//   const typingSpeed = 40; // Typing speed in milliseconds

//   useEffect(() => {
//     const textToType = "Looking for a coding wizard?"; // Include spaces in the sentence
//     let charIndex = 0;
//     let animationRef;

//     const animateTyping = () => {
//       if (charIndex < textToType.length) {
//         if (textToType[charIndex] === " ") { // Check if the character is a space
//           setTypingText(prevText => prevText + " "); // Add space
//         } else {
//           setTypingText(prevText => prevText + textToType.charAt(charIndex));
//         }
//         charIndex++;
//         animationRef = setTimeout(animateTyping, typingSpeed);
//       } else {
//         setShowAdditionalText(true);
//       }
//     };

//     const startAnimation = () => {
//       animationRef = setTimeout(animateTyping, typingSpeed);
//     };

//     const cancelAnimation = () => {
//       clearTimeout(animationRef);
//     };

//     const typingTimer = setTimeout(startAnimation, 1000); // Start typing after 1 second delay

//     return () => {
//       clearTimeout(typingTimer);
//       cancelAnimation();
//     };
//   }, [typingSpeed]);

//   // Ref for motion elements
//   const letterRefs = useRef([]);

//   // Function to handle the button click to start moving letters
//   const handleMoveLetters = () => {
//     setLettersMoving(true); // Set state to indicate letters are moving
//     setAdditionalTextPosition({ x: Math.random() * 100, y: Math.random() * 100 }); // Random position for additional text
//     letterRefs.current.forEach((ref) => {
//       ref.x = Math.random() * 100; // Random x position between 0 and 100
//       ref.y = Math.random() * 100; // Random y position between 0 and 100
//     });
//   };

//   return (
//     <div style={{backgroundColor:"white"}}>
//       <Grid container alignItems="center" justifyContent="center" style={{ minHeight: '80vh', padding: '20px' }}>
//         <Grid item xs={12} style={{ textAlign: 'center', marginBottom: '20px', position: 'relative' }}>
//           <Typography variant="h4" align="center" color="primary" style={{ color: neonOrange, fontSize: fontSizeMain, fontFamily: fontFamily }}>
//             {typingText.split('').map((char, index) => (
//               <motion.div
//                 key={index}
//                 animate={{ x: `${letterRefs.current[index]?.x}vw`, y: `${letterRefs.current[index]?.y}vh` }}
//                 transition={{ duration: 0.5 }}
//                 ref={(element) => (letterRefs.current[index] = { ref: element, x: 0, y: 0 })}
//                 style={{ display: "inline-block", position: "relative" }}
//               >
//                 <Draggable>
//                   <span><Letter char={char} /></span>
//                 </Draggable>
//               </motion.div>
//             ))}
//           </Typography>
//           {showAdditionalText && (
//             <motion.div
//               animate={{ x: `${additionalTextPosition.x}vw`, y: `${additionalTextPosition.y}vh` }}
//               transition={{ duration: 0.5 }}
//               style={{ position: "relative" }}
//             >
//               {lettersMoving ? (
//                 "I've got the spells to make your projects sparkle!".split('').map((char, index) => (
//                   <motion.span
//                     key={index}
//                     animate={{ x: `${Math.random() * 100}vw`, y: `${Math.random() * 100}vh` }}
//                     transition={{ duration: 0.5 }}
//                     style={{ display: "inline-block", position: "relative" }}
//                   >
//                     <Letter char={char} />
//                   </motion.span>
//                 ))
//               ) : (
//                 <Typography variant="h4" align="center" color="secondary" style={{ fontSize: fontSizeAdditional, fontFamily: fontFamily, marginBottom: '20px' }}>
//                   I've got the spells to make your projects sparkle!
//                 </Typography>
//               )}
//             </motion.div>
//           )}
//           {/* Button to start moving letters */}
//           <Button variant="contained" color="primary" onClick={handleMoveLetters} disabled={lettersMoving}>
//             {lettersMoving ? "Letters Moving" : "Move Letters"}
//           </Button>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default Main;
