import * as motion from "framer-motion/client";
import { DeliverablesDocs } from "./deliverablesIndex";
import Doc from "./doc";
import {variants} from "../variants";

export default function Deliverables() {
    const pitch1_docs = DeliverablesDocs.filter((doc) => doc.iteration == "Pitch"); 
    const sprint1_docs = DeliverablesDocs.filter((doc) => doc.iteration == "Sprint 1"); 
    const sprint2_docs = DeliverablesDocs.filter((doc) => doc.iteration == "Sprint 2"); 
    const sprint3_docs = DeliverablesDocs.filter((doc) => doc.iteration == "Sprint 3"); 

    return (
        <div className="flex flex-col items-center">
            <motion.h1
                variants={variants}
                className="text-center font-[family-name:var(--font-geist-sans)] mx-[15%] my-[2rem] lg:text-5xl max-sm:text-2xl"
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}>
                DELIVERABLES
                <br></br>
                    ...
            </motion.h1>
            <div className="flex flex-row flex-wrap gap-4 justify-center mb-[1em]">
                <motion.div
                    variants={variants}
                    className="flex flex-col text-center font-semibold text-2xl max-sm:text-xl bg-gray-100 p-6 rounded-2xl w-sm max-sm:w-xs h-90 text-black"
                    initial="initial"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}>
                    Pitch
                    {pitch1_docs.map((doc) => {
                        return <div key={doc.fileName}>
                            <Doc fileName={doc.fileName} iteration={doc.iteration} href={doc.href} download={doc.download}/>
                        </div> 
                    })}
                </motion.div>
                <motion.div
                    variants={variants}
                    className="flex flex-col text-center font-semibold text-2xl max-sm:text-xl bg-gray-100 p-6 rounded-2xl w-sm max-sm:w-xs h-90 text-black"
                    initial="initial"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}>
                    Sprint 1
                    {sprint1_docs.map((doc) => {
                        return <div key={doc.fileName}>
                            <Doc fileName={doc.fileName} iteration={doc.iteration} href={doc.href} download={doc.download}/>
                        </div> 
                    })}
                </motion.div>
                <motion.div
                    variants={variants}
                    className="flex flex-col text-center font-semibold text-2xl max-sm:text-xl bg-gray-100 p-6 rounded-2xl w-sm max-sm:w-xs h-90 text-black"
                    initial="initial"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}>
                    Sprint 2
                    {sprint2_docs.map((doc) => {
                        return <div key={doc.fileName}>
                            <Doc fileName={doc.fileName} iteration={doc.iteration} href={doc.href} download={doc.download}/>
                        </div> 
                    })}
                </motion.div>
                <motion.div
                    variants={variants}
                    className="flex flex-col text-center font-semibold text-2xl max-sm:text-xl bg-gray-100 p-6 rounded-2xl w-sm max-sm:w-xs h-120 text-black"
                    initial="initial"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.8 }}>
                    Sprint 3
                    {sprint3_docs.map((doc) => {
                        return <div key={doc.fileName}>
                            <Doc fileName={doc.fileName} iteration={doc.iteration} href={doc.href} download={doc.download}/>
                        </div> 
                    })}
                </motion.div>
            </div> 
            <motion.button
                className="rounded-[8px] border-solid border-[2px] border-black px-[1.2em] py-[0.6em] text-[1.25em] max-sm:text-[1em] mb-[10%] font-medium bg-[#C1C3C1] cursor-pointer text-black hover:bg-[#1A97DB] hover:text-white"
                variants={variants}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}
            >
                <a href='https://github.com/Apple-Vision-Pro-UA-CS495' 
                style={{textDecoration:'none'}}>
                    View GitHub</a>
            </motion.button>

        </div>
        
      
    )
}