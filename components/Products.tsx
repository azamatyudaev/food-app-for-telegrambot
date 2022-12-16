import { IProduct } from '../models/models'
import Product from './Product'

interface ProductsProps {
  products: IProduct[]
}

const Products = ({ products }: ProductsProps) => {
  return (
    <div className={'products'}>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </div>
  )
}

export default Products
