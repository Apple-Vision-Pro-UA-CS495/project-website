import * as motion from "framer-motion/client";
import {variants} from "../variants";
import Feature from "./feature"

export default function FeaturePage() {
    const features = [
        {
            path: "/gifs/Splash_View.gif", 
            title: "Display a splash view when the app is loaded for the first time.",
            alt: "Splash View"
        }, 
        {
            path: "/gifs/Photo_Feature.gif", 
            title: "Select an image from the Photo app and send the selected image to AWS EC2 instance via WebSocket. Then, receive response and display the result to the Apple Vision Pro.",
            alt: "Submit Photo Feature"
        }, 
        {
            path: "/gifs/SpeechRecognition.gif", 
            title: "Use speech-to-text to capture text from user. Then, send the text to OpenAI and display the result.",
            alt: "Submit Photo Feature"
        }
    ]
    return (
        <div className="flex flex-col justify-center items center my-[5%] mx-[15%] text-center lg:text-5xl max-sm:text-2xl max-sm:mx-[5%]">
            <motion.h1
                variants={variants}
                initial="initial"
                whileInView="visible"
                viewport={{ once: true, amount: 0.8 }}>
                    FEATURES 
                    <br></br>
                    ...
            </motion.h1>

            <div className="flex flex-col mt-[2rem] max-sm:mt-[0.5em]">
                {features.map((feature) => {
                    return <motion.div 
                        key={feature.alt}
                        variants={variants}
                        initial="initial"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5}}>
                    <Feature path={feature.path} title={feature.title} alt={feature.alt}/>
                </motion.div> 
                })}
                
            </div>
            

        </div>
    )
}
