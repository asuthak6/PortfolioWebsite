import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h2 className="my-20 text-4xl pl-4 lg:pl-8">
        About <span className="text-neutral-500">Me</span>
      </h2>
      <div className="flex flex-wrap px-4 lg:px-8">
        <motion.div 
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-3/4"
        >
          <div>
            <p className="max-w-4xl font-light tracking-tighter leading-relaxed">{ABOUT_TEXT}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;