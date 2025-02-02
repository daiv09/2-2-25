"use client";
import Link from 'next/link';
import Navbar from '../../components/Navbar';

// import React, { useState, CSSProperties, useEffect } from 'react'
// import { useTransition, animated, AnimatedProps, useSpringRef } from '@react-spring/web'

// import styles from './styles.module.css'

// const pages: ((props: AnimatedProps<{ style: CSSProperties }>) => React.ReactElement)[] = [
//   ({ style }) => <animated.div style={{ ...style, background: 'linear-gradient(135deg, #ff7e5f, #feb47b)', borderRadius: '150px' }}>A</animated.div>,
//   ({ style }) => <animated.div style={{ ...style, background: 'linear-gradient(135deg, #6a11cb, #2575fc)', borderRadius: '150px' }}>R</animated.div>,
//   ({ style }) => <animated.div style={{ ...style, background: 'linear-gradient(135deg, #ff4b2b, #ff416c)', borderRadius: '150px' }}>U</animated.div>,
// ]

// function AnimatedPages() {
//   const [index, set] = useState(0)
//   const onClick = () => set(state => (state + 1) % 3)
//   const transRef = useSpringRef()
//   const transitions = useTransition(index, {
//     ref: transRef,
//     keys: null,
//     from: { opacity: 0, transform: 'translate3d(100%,0,0)' },
//     enter: { opacity: 1, transform: 'translate3d(0%,0,0)' },
//     leave: { opacity: 0, transform: 'translate3d(-50%,0,0)' },
//   })
//   useEffect(() => {
//     transRef.start()
//   }, [index])

//   return (
//     <div className={`flex fill ${styles.container}`} onClick={onClick}>
//       {transitions((style, i) => {
//         const Page = pages[i]
//         return (
//           <Page style={{
//             ...style,
//             borderRadius: '20px',  // Rounded corners
//             padding: '40px',  // Padding inside the page content
//             boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',  // Shadow for depth
//             fontSize: '4.5rem',  // Font size for the content
//             color: 'white',
//           }} />
//         )
//       })}
//     </div>
//   )
// }


export default function FirstDate() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8 text-center">
        <h1 className="text-4xl text-pink-500 font-semibold">Our First Date</h1>
        {/* <img src="/images/first-date.jpg" alt="First Date" className="w-full mt-6 rounded-xl shadow-lg" /> */}
        <p className="mt-6 text-lg text-gray-800">This was the day we shared our first meal together, laughed, and realized that we had so much in common. It was the beginning of something beautiful.
          <br />
          I still remember it was at Durga where you had Onion Utappa and I had Masala Dosa on the day of Aarohan. Where it was such a nice timeee. 💖
        </p>
        
        {/* <AnimatedPages /> */}
        <Link href="/" className="mt-6 text-pink-500 hover:underline inline-block">Back to the Journey</Link>
      </div>
    </div>
  );
}
