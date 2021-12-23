import { motion } from "framer-motion";

const Animation = () => {
  return (
    <motion.div
      className='overlay'
      initial={{ width: "100%" }}
      animate={{ width: 0, right: 0, left: "auto" }}
      exit={{ width: "100%" }}
      transition={{ ease: "easeOut", duration: 1 }}
    ></motion.div>
  )
}

export default Animation;