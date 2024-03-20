type cartType<T extends productsType[]> = {
  id: number
  products: T
}

type productsType = {
  id: number
  title: string
  price: number
  quantity: number
  total: number
  discountPercentage: number
  discountedPrice: number
  thumbnail: string
}

const cart: cartType<[productsType]> = {
  id: 1,
  products: [
    {
      id: 59,
      title: 'Spring and summershoes',
      price: 20,
      quantity: 3,
      total: 60,
      discountPercentage: 8.71,
      discountedPrice: 55,
      thumbnail: 'https://cdn.dummyjson.com/product-images/59/thumbnail.jpg'
    }
  ]
}

export default cart
