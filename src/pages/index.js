import Link from 'next/link';
import Image from 'next/image';
import * as style from '../styles/index.module.scss'
import Layout from '../components/layout';
import SEO from '../components/seo';
// import { motion } from "framer-motion";

const Index = () => {
  return (
    <Layout>
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
      > */}
        <SEO title="トップページ" description="これはトップページです" />
        <div className={`defaultContainer ${style.indexContainer}`}>
          <h1>これはトップページです。</h1>
        </div>
      {/* </motion.div> */}
    </Layout>
  )
}

export default Index;