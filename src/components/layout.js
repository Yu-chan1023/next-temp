import Header from "./header"
import Footer from "./footer"
import { motion } from "framer-motion";

const Layout = ({children}) => {
  return (
    <>
      <Header></Header>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      >
        <main>{children}</main>
      </motion.div>
      <Footer></Footer>
    </>
  )
}

export default Layout