"use client"; // This is a client component

import Image from "next/image";
import * as motion from "framer-motion/client";
import Discover from "../../assets/Discover_1.gif";
import { TypeAnimation } from 'react-type-animation';
import React, {useState} from 'react';

export default function Home() {

  const [textColor, setTextColor] = useState('white')

  const variants = {
    initial: {
      y: '3vw', 
      opacity: 0, 
    },
    visible: {
      y: 0,
      opacity: 1, 
      transition: {
          duration: 1,
      }
    }
  }

  return (
    <div className="flex flex-col">
      <div className="h-screen flex flex-row flex-wrap items-center p-8">
        <div className="flex flex-col flex-1 min-w-2xs font-[family-name:var(--font-geist-sans) text-4xl">
          <motion.h1
              className=''
              variants={variants}
              initial='initial'
              animate='visible'>
                Apple Vision Pro
          </motion.h1>
          <motion.div
            variants={variants}
            initial='initial'
            animate='visible'
            style={{color: textColor}}
          >
            <TypeAnimation
                preRenderFirstString={true}
                sequence={[ 
                  'University of Alabama',
                  500, 
                  () =>setTextColor('rgb(251, 200, 35)'),
                  'CS495 Spring 2025',
                  500, 
                  () => setTextColor('rgb(246, 141, 141)'),
                  'Capstone Project', 
                  500, 
                  () =>setTextColor('rgb(93, 254, 168)'),
                ]}
                speed={30}
                className=''
                repeat={Infinity}
            />
        </motion.div>

        </div>
        <motion.div
          className="flex flex-col justify-center flex-1 min-w-2xs"        
          variants={variants}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <Image
            src={Discover}
            alt="Discover App"
            className="rounded-3xl"
          />
        </motion.div>
      </div>
      <div className="text-center font-[family-name:var(--font-geist-sans)]">
        <motion.h1
          variants={variants}
          className="text-5xl"
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}>
            PROJECT DESCRIPTION  
            <br></br>
              ...
        </motion.h1> 
        <motion.p
          variants={variants}
          className="font-[family-name:var(--font-geist-mono)] text-2xl text-justify mx-[15%] my-[5%]"
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}>
        This is the Apple Vision Pro Capstone Project for the CS495 class in the University of Alabama. We create a visionOS app which allows users to upload or capture data (image and audio) from the Apple Vision Pro and send it to AWS where Hugging Face models will be applied to detect objects in an image.
        </motion.p>
        <motion.button
          variants={variants}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <a href='https://github.com/Apple-Vision-Pro-UA-CS495' 
            style={{textDecoration:'none'}}>
                View GitHub</a>
        </motion.button>
        <motion.hr
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            >
        </motion.hr>
      </div>
    </div>
    

  );
  // return (
  //   <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
  //     <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
  //       <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
  //         <li className="mb-2 tracking-[-.01em]">
  //           Get started by editing{" "}
  //           <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
  //             src/app/page.tsx
  //           </code>
  //           .
  //         </li>
  //         <li className="tracking-[-.01em]">
  //           Save and see your changes instantly.
  //         </li>
  //       </ol>

  //       <div className="flex gap-4 items-center flex-col sm:flex-row">
  //         <a
  //           className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
  //           href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Deploy now
  //         </a>
  //         <a
  //           className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
  //           href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           Read our docs
  //         </a>
  //       </div>
  //     </main>
  //     <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
  //       <a
  //         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
  //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
          
  //         Learn
  //       </a>
  //       <a
  //         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
  //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
        
  //         Examples
  //       </a>
  //       <a
  //         className="flex items-center gap-2 hover:underline hover:underline-offset-4"
  //         href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Go to nextjs.org →
  //       </a>
  //     </footer>
  //   </div>
  // );
}
