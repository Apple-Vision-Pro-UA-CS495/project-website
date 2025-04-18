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
        <motion.div className='flex flex-col items-center basis-1/3 text-base'>
            <div>{path}</div>
            {name}
        </motion.div>
    )
}

export default function IconList({variants, title, icons}: IconList) {
    return (
        <motion.div 
            variants={variants}
            className='lg:text-2xl max-sm:text-lg'
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}>
                <motion.h2 
                    variants={variants}>
                    {title}
                </motion.h2>
                <motion.div 
                    variants={variants}
                    className='grid grid-cols-3 gap-y-[2rem] m-[5%]'
                >
                    {icons.map((icon) => {
                        return <Icon key={icon.name} path={icon.path} name={icon.name} />
                    })}
                </motion.div>
        </motion.div>
    )
}