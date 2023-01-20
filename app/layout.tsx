"use client"

import './globals.scss'
import React, {useEffect} from "react";
import styles from './layout.module.scss'
import Footer from "@/components/Footer";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

   useEffect(()=> {

      let vh = window.innerHeight * 0.01;
         // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);

      window.addEventListener('resize', () => {
         // We execute the same script as before
         let vh = window.innerHeight * 0.01;
         document.documentElement.style.setProperty('--vh', `${vh}px`);
      });
   }, [])



  return (

    <html lang="en">

    <head/>


       <body>

       <div className={styles.baseLayout}>

          <div className={styles.content}>

          {children}

          </div>

          <div className={styles.footer}>
             Copyright © Horizones Studio
          </div>

       </div>

       </body>

    </html>
  )
}
