import * as motion from "framer-motion/client";

export default function Description() {
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
    }

    return (
        <div className="text-center font-[family-name:var(--font-geist-sans)] mx-[15%]">
        <motion.h1
          variants={variants}
          className="text-5xl"
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}>
            PROJECT DESCRIPTION  
            <br></br>
              ...
        </motion.h1> 
        <motion.p
          variants={variants}
          className="font-[family-name:var(--font-geist-mono)] text-2xl text-justify my-[5%]"
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}>
        This is the Apple Vision Pro Capstone Project for the CS495 class in the University of Alabama. We create a visionOS app which allows users to upload or capture data (image and audio) from the Apple Vision Pro and send it to AWS where Hugging Face models will be applied to detect objects in an image.
        </motion.p>
        <motion.button
          variants={variants}
          initial="initial"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <a href='https://github.com/Apple-Vision-Pro-UA-CS495' 
            style={{textDecoration:'none'}}>
                View GitHub</a>
        </motion.button>
        <motion.hr
            initial="initial"
            whileInView="visible"
            viewport={{ once: true, amount: 0.8 }}
            >
        </motion.hr>
      </div>
    )
}