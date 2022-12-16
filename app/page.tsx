import Products from '../components/Products'
import { IProduct } from '../models/models'

const getData = async () => {
  const res = await fetch(
    'https://ishonchdew.pythonanywhere.com/api/v1/products',
    {
      // cache: 'force-cache', // < SSG
      // cache: 'no-store' // < SSR
      // next: {
      //   revalidate: 20 // ISR
      // }
    }
  )

  // console.log('Fetching')

  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

const Home = async () => {
  const products: IProduct[] = await getData()
  // console.log(products)

  return (
    <div className={'home'}>
      <div className={'container'}>
        <Products products={products} />
      </div>
    </div>
  )
}

export default Home
