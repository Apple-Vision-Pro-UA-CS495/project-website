import * as motion from "framer-motion/client";
import {variants} from "../variants";

interface Feature {
    path: string;
    title: string;
    alt: string;
}

export default function Feature({path, title, alt}: Feature) {
    return (
        <motion.div
            className="flex flex-col justify-center items-center min-w-2xs my-[0.5em] mx-[5rem] max-sm:mx-[0.5em]"        
            variants={variants}
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            >
            <img
                src={path}
                alt={alt}
                className="h-auto rounded-3xl"
            />

            <h2 className="lg:text-2xl max-sm:text-lg my-[1em] max-sm:my-[0em]">
                {title}
            </h2>
        </motion.div>
    )
}

