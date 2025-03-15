import React from 'react'; 
import * as motion from "framer-motion/client";

interface Icon {
    name: string;
    path: React.JSX.Element;
}

interface IconList {
    variants: {}
    title: string;
    icons: Icon[];
}

function Icon({ name, path}: Icon) {
    return (
        <motion.div className='flex flex-col items-center basis-[33.3333%] text-base'>
            <div>{path}</div>
            {name}
        </motion.div>
    )
}

export default function IconList({variants, title, icons}: IconList) {
    return (
        <motion.div 
            variants={variants}
            className='basis-[50%] text-2xl'
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}>
                <motion.h2 
                    variants={variants}>
                    {title}
                </motion.h2>
                <motion.div 
                    variants={variants}
                    className='grid grid-cols-3 w-[40vw] gap-y-[2rem] mb-[5%]'
                >
                    {icons.map((icon) => {
                        return <Icon key={icon.name} path={icon.path} name={icon.name} />
                    })}
                </motion.div>
        </motion.div>
    )
}