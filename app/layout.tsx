import './globals.css'
import React from "react";
import styles from './layout.module.css'
import Footer from "@/components/Footer";
import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (

    <html lang="en">

    <head/>


       <body>

       <div className={styles.baseLayout}>
          {children}

          <div className={styles.footer}>
             Copyright © Horizones Studio
          </div>

       </div>

       </body>

    </html>
  )
}
