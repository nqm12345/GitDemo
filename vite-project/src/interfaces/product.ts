export type productType = {
  id: number
  title: string
  images: string
  oldprice: string
  newprice: string
}

const product: productType[] = [
  {
    id: 1,
    title: 'iPhone 15',
    images: 'https://cdn.viettelstore.vn/Images/Product/ProductImage/1544726730.jpeg',
    oldprice: '39.000.000đ',
    newprice: '29.000.000đ'
  },
  {
    id: 2,
    images: 'https://images.samsung.com/is/image/samsung/p6pim/uk/2401/gallery/uk-galaxy-s24-ultra-online-exclusive-sm-s928blbpeub-539464522?$650_519_PNG$',

    title: 'Samsung s24 ultra',
    oldprice: '37.000.000đ',
    newprice: '26.000.000đ'
  },

  {
    id: 3,
    images: 'https://product.hstatic.net/200000547447/product/14-ultra-trang_9d9b62b4a6394c7ea0f13ce518aa784e.png',

    title: 'Xiaomi 14 ultra',
    oldprice: '21.000.000đ',
    newprice: '18.000.000đ'
  },

  {
    id: 4,
    images: 'https://clickbuy.com.vn/uploads/images/2022/03/avt-iphone-13-pro-max-green.png',

    title: 'Iphone 13 pro',
    oldprice: '21.000.000đ',
    newprice: '15.000.000đ'
  },

  {
    id: 5,
    images: 'https://cdn.tgdd.vn/Products/Images/42/299250/samsung-galaxy-z-flip5-xanh-mint-thumb-600x600.jpg',
    title: 'Samsung Galaxy Z Flip5',
    oldprice: '22.000.000đ',
    newprice: '18.000.000đ'
  },

  {
    "id": 6,
    "title": "Xiaomi 14 ultra",
    "images": "https://product.hstatic.net/200000547447/product/14-ultra-trang_9d9b62b4a6394c7ea0f13ce518aa784e.png",
    "oldprice": "21.000.000đ",
    "newprice": "18.000.000đ"
},
{
    "id": 7,
    "title": "iPhone 15",
    "images": "https://cdn.viettelstore.vn/Images/Product/ProductImage/1544726730.jpeg",
    "oldprice": "39.000.000đ",
    "newprice": "29.000.000đ"
},
{
    "id": 8,
    "title": "Samsung s24 ultra",
    "images": "https://images.samsung.com/is/image/samsung/p6pim/uk/2401/gallery/uk-galaxy-s24-ultra-online-exclusive-sm-s928blbpeub-539464522?$650_519_PNG$",
    "oldprice": "37.000.000đ",
    "newprice": "26.000.000đ"
},
{
    "id": 9,
    "title": "Iphone 13 pro",
    "images": "https://clickbuy.com.vn/uploads/images/2022/03/avt-iphone-13-pro-max-green.png",
    "oldprice": "21.000.000đ",
    "newprice": "15.000.000đ"
},
{
    "id": 10,
    "title": "Samsung Galaxy Z Flip5",
    "images": "https://cdn.tgdd.vn/Products/Images/42/299250/samsung-galaxy-z-flip5-xanh-mint-thumb-600x600.jpg",
    "oldprice": "22.000.000đ",
    "newprice": "18.000.000đ"
}
]

export default product
