import { CONTACT } from "../constants";
import {motion} from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 
        whileInView={{opacity: 1, x: 0}}
        initial={{opacity: 0, x: -100}}
        transition={{duration: 1}}
        className="my-10 text-center text-4xl">Get in Touch</motion.h2>
        <div className="text-center tracking-tighter">
            <p>
              <motion.a 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1.1}}
                href="#" className="border-b">{CONTACT.email}
              </motion.a>
            </p>
            <p><motion.a 
                whileInView={{opacity: 1, x: 0}}
                initial={{opacity: 0, x: -100}}
                transition={{duration: 1.2}}
                href="#" className="border-b">{CONTACT.altEmail}</motion.a></p>
            <p className="my-4">{CONTACT.phoneNO}</p>
        </div>
    </div>
  );
};

export default Contact;