import {MoonLoader} from "react-spinners";
import Image from "next/image";

async function getProducts() {
	const res = await fetch('https://dummyjson.com/products?limit=50', {next: {revalidate: 2}})
	const data = await res.json()
	return data?.products as any[]

}

export default async function Game() {

	const products = await getProducts()

	return (
		<div>
			{
				products.map(product => <div>

				<div>
					{product.title}
				</div>

				<Image src={product.images[0]} alt={""} width={200} height={200}/>

			</div>)

			}

		</div>
	)
}

