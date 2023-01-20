import React from "react";
import styles from "./layout.module.scss"

export default function GameLayout({children}: {
	children: React.ReactNode
}) {

	return (

		<div className={styles.gameBaseLayout}>

			<div className={styles.header}>1A2B GAME</div>

			<div className={styles.gameContent}>

				{children}

			</div>

		</div>

	)
}

