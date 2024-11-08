import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <div className="text-center tracking-tighter">
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.1 }}
          href="#"
          className="border-b mr-4"
        >
          {CONTACT.email}
        </motion.a>
        <motion.a
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1.2 }}
          href="#"
          className="border-b mr-4"
        >
          {CONTACT.altEmail}
        </motion.a>
        <span className="mr-4">{CONTACT.phoneNO}</span>
      </div>
    </div>
  );
};

export default Contact;
