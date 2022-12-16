import { IProduct } from '../models/models'
import AddToCart from './AddToCart'

interface ProductProps {
  product: IProduct
}

const Product = ({ product }: ProductProps) => {
  const { title, image, price } = product
  return (
    <div className={'product'}>
      <div className="product__img">
        <img src={image} alt={title} />
      </div>
      <h2 className={'product__title'}>{title}</h2>
      <div className={'product__price'}>{price} so&apos;m</div>
      <AddToCart />
    </div>
  )
}

export default Product
