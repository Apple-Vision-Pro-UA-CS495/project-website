import * as motion from "framer-motion/client";
import { MemberInfo} from "./memberInfo";
import Member from "./member";
import {variants} from "../variants";

export default function Team() {
    return (
        <div className="text-center font-[family-name:var(--font-geist-sans)] mx-[15%] my-[2rem]">
            <motion.h1 
                className="lg:text-5xl max-sm:text-2xl"
                variants={variants}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}>
                MEET THE TEAM
                <br></br>
                    ...
            </motion.h1>
            <div className="flex flex-wrap justify-center gap-6 mt-[2rem]">
                {MemberInfo.map((member) => {
                    return <motion.div key={member.name}
                                variants={variants}
                                initial="initial"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.8 }}>
                            <Member name={member.name} description={member.description} picture={member.picture} contact={member.contact}/>
                        </motion.div> 
                })}
                
            </div>
        </div>   
    )
}