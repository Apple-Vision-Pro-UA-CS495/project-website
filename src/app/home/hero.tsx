"use client";
import * as motion from "framer-motion/client";
import { TypeAnimation } from 'react-type-animation';
import React, {useState} from 'react';
import {variants} from "../variants";

export default function Hero() {
    const [textColor, setTextColor] = useState('white')

    return (
        <div className="lg:h-screen flex flex-row flex-wrap items-center p-8 mx-[5%]">
          <div className="flex flex-col flex-1 min-w-2xs lg:text-4xl font-[family-name:var(--font-geist-sans) max-sm:text-2xl max-sm:text-center">
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
            <img
              src={process.env.NEXT_PUBLIC_BASE_PATH + "/gifs/Discover_1.gif"}
              alt="Discover App"
              className="rounded-3xl"
            />
          </motion.div>
      </div>
    )
}