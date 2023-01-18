import Image from 'next/image'
import {Inter} from '@next/font/google'
import styles from './page.module.css'
import {MoonLoader} from "react-spinners";
import SpinnerCircle from "@/components/SpinnerCircle";


const inter = Inter({subsets: ['latin']})

export default function Home() {

	return <>
			<div>This is the root page</div>

	</>


}
