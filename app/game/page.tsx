"use client"

import styles from "./page.module.css"
import {useEffect, useState} from "react";

// @ts-ignore
import { v4 as uuidv4 } from 'uuid';

export default function GamePage() {

	const [theAnswer, setTheAnswer] = useState([0, 0, 0, 0])
	const [guessInput, setGuessInput] = useState<any>([])
	const [guessHistory, setGuessHistory] = useState<any>([])
	const [guessTimes, setGuessTimes] = useState<any>(1)

	const [errorString, setErrorString] = useState("")

	useEffect(() => {

		let numAvailable = [0,1,2,3,4,5,6,7,8,9]
		let tmpArray = [0,0,0,0]

		for (let i=0; i<=3 ; ++i){

			let valOfThisDigit = numAvailable[Math.floor(Math.random()*(numAvailable.length))]
			tmpArray[i] = valOfThisDigit

			let valIndex = numAvailable.indexOf(valOfThisDigit)
			numAvailable.splice(valIndex, 1)

			console.log(numAvailable)
		}

		setTheAnswer(tmpArray)
	}, [])


	function appendNum(num: number) {
		if (guessInput.length < 4) {

			setGuessInput((prev: []) => [...prev, num])
		}
	}

	function deleteNum() {

		let tmp = guessInput.slice()
		tmp.pop()
		setGuessInput(tmp)
	}

	function guess() {

		const hasDuplicate = guessInput.some((num: number) => {

			if (guessInput.indexOf(num) !== guessInput.lastIndexOf(num)) {
				return true;
			}
			return false;

		});

		if(guessInput.length !== 4) {
			setErrorString("必須為四位數")
			setTimeout(()=>setErrorString(""), 1250)
			return
		}

		if(hasDuplicate) {
			setGuessInput([])
			setErrorString("位數不可重複")
			setTimeout(()=>setErrorString(""), 1250)
			return
		}

		let A = 0
		let B = 0

		theAnswer.some((ansDigit, ansIndex) => {
			guessInput.some((guessDigit: number, guessIndex: number) => {
				if (guessDigit === ansDigit && guessIndex === ansIndex) {
					A ++;
				} else if(guessDigit === ansDigit && guessIndex !== ansIndex) {
					B ++;
				}
			})
		})

		setGuessHistory((prev: []) => [...prev, {guessInput: guessInput, resultString: A + "A" + B + "B"}])
		setGuessInput([])
		setGuessTimes((prev: number) => prev + 1)
		console.log(uuidv4())
	}

	return (

		<>
			{/*{theAnswer}*/}

			<div className={styles.upperSection}>

				<div className={styles.errorString}>{errorString}</div>
				<div className={styles.guessInput}>{guessInput}</div>

				<div className={styles.numPadBase}>

					<div className={styles.numButton} onClick={() => appendNum(1)}>1</div>
					<div className={styles.numButton} onClick={() => appendNum(2)}>2</div>
					<div className={styles.numButton} onClick={() => appendNum(3)}>3</div>
					<div className={styles.numButton} onClick={() => appendNum(4)}>4</div>
					<div className={styles.numButton} onClick={() => appendNum(5)}>5</div>
					<div className={styles.numButton} onClick={() => appendNum(6)}>6</div>
					<div className={styles.numButton} onClick={() => appendNum(7)}>7</div>
					<div className={styles.numButton} onClick={() => appendNum(8)}>8</div>
					<div className={styles.numButton} onClick={() => appendNum(9)}>9</div>
					<div className={styles.numButton} onClick={() => deleteNum()}>←</div>
					<div className={styles.numButton} onClick={() => appendNum(0)}>0</div>
					<div className={styles.numButton} onClick={() => guess()}>✔</div>

				</div>

			</div>

			<div className={styles.lowerSection}>

				{guessHistory.map((guessResult: any) =>

					<div key={uuidv4()} className={styles.guessHistoryRow}>

						<div>{guessResult.guessInput}</div>
						<div>&nbsp;{"→"}&nbsp;</div>
						<div>{guessResult.resultString}</div>

					</div>
				)}

			</div>
		</>
	)
}

