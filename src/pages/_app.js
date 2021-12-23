import React from "react";
import '../styles/all.scss'
import { AnimatePresence } from "framer-motion";
import { useTransitionFix } from "../utils/useTransitionFix";

function MyApp({ Component, pageProps, router }) {
  const transitionCallback = useTransitionFix();
  
  return (
    <AnimatePresence exitBeforeEnter onExitComplete={transitionCallback}>
      <Component {...pageProps} key={router.route}/>
    </AnimatePresence>
  )
}

export default MyApp
