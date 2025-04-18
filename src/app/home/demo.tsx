import {variants} from "../variants";
import * as motion from "framer-motion/client";

export default function DemoVideo() {
    return (
        <div className='flex flex-col items-center mx-[15%] text-center lg:text-5xl max-sm:text-2xl'>
            <motion.h1
                variants={variants}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}>
                    LIVE DEMO 
                    <br></br>
                    ...
            </motion.h1> 
            <motion.div 
                variants={variants}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
                >
                <iframe
                    className="my-[0.5em] h-[70vh] w-[70vw] max-sm:h-[30vh]"
                    src="https://www.youtube.com/embed/ihywh1OfG-Y"
                    title="Live Demo - Apple Vision Pro Project"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
            </motion.div>
        </div>
    )
}
