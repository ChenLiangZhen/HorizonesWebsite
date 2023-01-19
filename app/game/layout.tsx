import React from "react";
import styles from "./layout.module.css"

export default function GameLayout({children}: {
	children: React.ReactNode
}) {

	return (
		<div>

			<div className={styles.header}>1A2B GAME</div>

			{children}
		</div>

	)
}

