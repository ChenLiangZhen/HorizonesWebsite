async function getProducts(){
	const res = await fetch('https://dummyjson.com/products')
	const data = await res.json()
	return data?.products as any[]

}

export default async function Game(){

	const products = await getProducts()

	return(
		<div>
			{products.map(product =>  <div>{product.title}</div>)}
		</div>
	)
}
4
