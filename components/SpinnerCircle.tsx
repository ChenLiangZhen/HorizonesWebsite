"use client"

import {MoonLoader} from "react-spinners";

export default function SpinnerCircle() {
	return <div style={{ margin: 16}}>

		<MoonLoader
			color={"gray"}
			loading={true}
			size={32}
			aria-label="Loading Spinner"
			data-testid="loader"
		/>

	</div>
}
