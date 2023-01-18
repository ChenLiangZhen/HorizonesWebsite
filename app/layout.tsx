import './globals.css'
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
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head/>
      <body>

      <div className={styles.header}>

         <Link style={{ marginRight: 16 }} href={"/"}>
            <div>ROOT</div>
         </Link>

         <Link href={"/games"}>
            <div>Games</div>
         </Link>

      </div>


      <div>ROOTLAYOUT</div>

      {children}

      <Footer/>
      </body>

    </html>
  )
}
