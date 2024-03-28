export type productType = {
  id: number
  title: string
  images: string
  oldprice: string
  newprice: string
  thumbnail?: string[]
}

const product: productType[] = [
  {
    id: 1,
    title: 'iPhone 15',
    images: 'https://cdn.viettelstore.vn/Images/Product/ProductImage/1544726730.jpeg',
    oldprice: '39.000.000đ',
    newprice: '29.000.000đ',
    thumbnail: [
      'https://cdn-v2.didongviet.vn/files/products/2023/8/29/1/1695953279709_thumb_iphone_15_didongviet.jpg',
      "https://kenh14cdn.com/thumb_w/660/203336854389633024/2023/11/5/photo-2-1699152660973233500519.jpg",
      'https://www.komplettbedrift.no/img/p/1080/1252210.jpg',
      'https://clickbuy.com.vn//uploads/images/2023/09/iphone-15-xanh-la-1.png'
    ]
  },
  {
    id: 2,
    images:
      'https://images.samsung.com/is/image/samsung/p6pim/uk/2401/gallery/uk-galaxy-s24-ultra-online-exclusive-sm-s928blbpeub-539464522?$650_519_PNG$',
    title: 'Samsung s24 ultra',
    oldprice: '37.000.000đ',
    newprice: '26.000.000đ',
    thumbnail: [
      'https://images.samsung.com/is/image/samsung/p6pim/vn/2401/gallery/vn-galaxy-s24-s928-490234-sm-s928bzoqxxv-539386221?$650_519_PNG$',
      'https://images.samsung.com/is/image/samsung/p6pim/vn/2401/gallery/vn-galaxy-s24-s928-sm-s928bzvqxxv-539307706?$650_519_PNG$',
      'https://images.samsung.com/is/image/samsung/p6pim/vn/2401/gallery/vn-galaxy-s24-s928-sm-s928bztqxxv-539307591?$624_624_PNG$',
      'https://clickbuy.com.vn/uploads/pro/samsung-galaxy-s24-ultra_197559.jpg'
    ]
  },

  {
    id: 3,
    images: 'https://product.hstatic.net/200000547447/product/14-ultra-trang_9d9b62b4a6394c7ea0f13ce518aa784e.png',

    title: 'Xiaomi 14 ultra',
    oldprice: '21.000.000đ',
    newprice: '18.000.000đ',
    thumbnail: [
      'https://product.hstatic.net/200000547447/product/14-ultra-xanh_dbd2291a74e84b06a325adafd7fd4ff3.png',
      'https://cdn.mobilecity.vn/mobilecity-vn/images/2024/02/w300/xiaomi-14-ultra-den.jpg.webp',
      'https://www.xtmobile.vn/vnt_upload/File/10_2023/dien-thoai-xiaomi-14-ultra-xtmobile.jpg',
      'https://dienthoaihay.vn/images/products/2023/10/24/large/untitled-14-ultra_1698137464.gif'
    ]
  },

  {
    id: 4,
    images: 'https://clickbuy.com.vn/uploads/images/2022/03/avt-iphone-13-pro-max-green.png',

    title: 'Iphone 13 pro',
    oldprice: '21.000.000đ',
    newprice: '15.000.000đ',
    thumbnail: [
      'https://vcdn1-sohoa.vnecdn.net/2021/09/25/DSCF0057-1632545773.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=lkJOfvi9QMismR1XHcTGVQ',
      'https://clickbuy.com.vn//uploads/images/2022/04/avt-iphone-13-pro-max-gold.png',
      'https://cdn11.dienmaycholon.vn/filewebdmclnew/public/userupload/files/So-sanh-iPhone-13-Pro-va-iPhone-13-Pro-Max-6.png',
      'https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/4/_/4_36_3_2_1_9.jpg'
    ]
  },

  {
    id: 5,
    images: 'https://cdn.tgdd.vn/Products/Images/42/299250/samsung-galaxy-z-flip5-xanh-mint-thumb-600x600.jpg',
    title: 'Samsung Galaxy Z Flip5',
    oldprice: '22.000.000đ',
    newprice: '18.000.000đ',
    thumbnail: [
      'https://cdn-v2.didongviet.vn/files/products/2023/8/29/1/1695953279709_thumb_iphone_15_didongviet.jpg',
      'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-blue-pure-back-iphone-15-blue-pure-front-2up-screen-usen.png',
      'https://www.komplettbedrift.no/img/p/1080/1252210.jpg',
      'https://clickbuy.com.vn//uploads/images/2023/09/iphone-15-xanh-la-1.png'
    ]
  },

  {
    id: 6,
    title: 'Xiaomi 14 ultra',
    images: 'https://product.hstatic.net/200000547447/product/14-ultra-trang_9d9b62b4a6394c7ea0f13ce518aa784e.png',
    oldprice: '21.000.000đ',
    newprice: '18.000.000đ',
    thumbnail: [
      'https://cdn-v2.didongviet.vn/files/products/2023/8/29/1/1695953279709_thumb_iphone_15_didongviet.jpg',
      'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-blue-pure-back-iphone-15-blue-pure-front-2up-screen-usen.png',
      'https://www.komplettbedrift.no/img/p/1080/1252210.jpg',
      'https://clickbuy.com.vn//uploads/images/2023/09/iphone-15-xanh-la-1.png'
    ]
  },
  {
    id: 7,
    title: 'iPhone 15',
    images: 'https://cdn.viettelstore.vn/Images/Product/ProductImage/1544726730.jpeg',
    oldprice: '39.000.000đ',
    newprice: '29.000.000đ',
    thumbnail: [
      'https://cdn-v2.didongviet.vn/files/products/2023/8/29/1/1695953279709_thumb_iphone_15_didongviet.jpg',
      'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-blue-pure-back-iphone-15-blue-pure-front-2up-screen-usen.png',
      'https://www.komplettbedrift.no/img/p/1080/1252210.jpg',
      'https://clickbuy.com.vn//uploads/images/2023/09/iphone-15-xanh-la-1.png'
    ]
  },
  {
    id: 8,
    title: 'Samsung s24 ultra',
    images:
      'https://images.samsung.com/is/image/samsung/p6pim/uk/2401/gallery/uk-galaxy-s24-ultra-online-exclusive-sm-s928blbpeub-539464522?$650_519_PNG$',
    oldprice: '37.000.000đ',
    newprice: '26.000.000đ',
    thumbnail: [
      'https://cdn-v2.didongviet.vn/files/products/2023/8/29/1/1695953279709_thumb_iphone_15_didongviet.jpg',
      'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-blue-pure-back-iphone-15-blue-pure-front-2up-screen-usen.png',
      'https://www.komplettbedrift.no/img/p/1080/1252210.jpg',
      'https://clickbuy.com.vn//uploads/images/2023/09/iphone-15-xanh-la-1.png'
    ]
  },
  {
    id: 9,
    title: 'Iphone 13 pro',
    images: 'https://clickbuy.com.vn/uploads/images/2022/03/avt-iphone-13-pro-max-green.png',
    oldprice: '21.000.000đ',
    newprice: '15.000.000đ',
    thumbnail: [
      'https://cdn-v2.didongviet.vn/files/products/2023/8/29/1/1695953279709_thumb_iphone_15_didongviet.jpg',
      'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-blue-pure-back-iphone-15-blue-pure-front-2up-screen-usen.png',
      'https://www.komplettbedrift.no/img/p/1080/1252210.jpg',
      'https://clickbuy.com.vn//uploads/images/2023/09/iphone-15-xanh-la-1.png'
    ]
  },
  {
    id: 10,
    title: 'Samsung Galaxy Z Flip5',
    images: 'https://cdn.tgdd.vn/Products/Images/42/299250/samsung-galaxy-z-flip5-xanh-mint-thumb-600x600.jpg',
    oldprice: '22.000.000đ',
    newprice: '18.000.000đ',
    thumbnail: [
      'https://cdn-v2.didongviet.vn/files/products/2023/8/29/1/1695953279709_thumb_iphone_15_didongviet.jpg',
      'https://cdn.hoanghamobile.com/i/preview/Uploads/2023/09/13/iphone-15-blue-pure-back-iphone-15-blue-pure-front-2up-screen-usen.png',
      'https://www.komplettbedrift.no/img/p/1080/1252210.jpg',
      'https://clickbuy.com.vn//uploads/images/2023/09/iphone-15-xanh-la-1.png'
    ]
  }
]

export default product
