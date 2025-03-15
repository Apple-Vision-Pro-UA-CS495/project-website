import React from 'react'; 
import * as motion from "framer-motion/client";
import IconList from './IconList';
import {css, git, html, javascript, swift, vscode, xcode, python, typescript, nextjs, aws} from '../../assets/icons/icon'; 

export default function Technology() {
    const variants = {
        visible: {
            y: 0, 
            opacity: 1, 
            transition: {
                duration: 1,
            }
        }, 
        hidden: {
            y: '3vw', 
            opacity: 0,
        }
    }

    const icons = [
        {name: 'Swift', path: swift},
        {name: 'HTML5', path: html},
        {name: 'Javascipt', path: javascript},
        {name: 'CSS3', path: css}, 
        {name: 'Python', path: python},  
        {name: 'TypeScript', path: typescript}, 
        {name: 'NextJS', path: nextjs},
        {name: "AWS", path: aws},
        {name: 'Xcode', path: xcode}, 
        {name: 'VSCode', path: vscode}, 
        {name: 'GitHub', path: git},
        
    ]

    return (
        <div className='mx-[15%] my-[5%] text-center text-5xl'>
            <motion.h1
                variants={variants}
                initial="hidden"
                animate="visible"
                viewport={{ once: true, amount: 0.8 }}>
                    TECHNOLOGY 
                    <br></br>
                    ...
            </motion.h1> 

            <motion.div className='flex flex-row justify-center items-center flex-nowrap font-[family-name:var(--font-geist-mono)] my-[3rem]'>
                <IconList variants={variants} title="Languages, Frameworks and Development Tools" icons={icons}/>
            </motion.div>
            <hr></hr>
        </div>
    )
}