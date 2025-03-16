import * as motion from "framer-motion/client";
import { MemberInfo} from "./memberInfo";
import Member from "./member";

export default function Team() {
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
    };

    const memberInfo = MemberInfo;

    return (
        <motion.div 
            variants={variants}
            className="text-center font-[family-name:var(--font-geist-sans)] mx-[15%] my-[2rem]"
            initial="initial"
            animate="visible"
            viewport={{ once: true, amount: 0.8 }}
        >
            <h1 className="lg:text-5xl max-sm:text-2xl">
                MEET THE TEAM
                <br></br>
                    ...
            </h1>
            <div className="flex flex-wrap justify-center gap-6 mt-[2rem]">
                {memberInfo.map((member) => {
                    return <div key={member.name}>
                            <Member name={member.name} description={member.description} picture={member.picture} contact={member.contact}/>
                        </div> 
                })}
                
            </div>
        </motion.div>   
    )
}