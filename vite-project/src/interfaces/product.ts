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
    images: '../../public/images/images.sp/iphone15-pro-max-titan-xanh.webp',
    oldprice: '39.000.000đ',
    newprice: '29.000.000đ'
  },
  {
    id: 2,
    images: '../../public/images/images.sp/galaxy-s24-ultra-xam_1_3.webp',

    title: 'Samsung s24 ultra',
    oldprice: '37.000.000đ',
    newprice: '26.000.000đ'
  },

  {
    id: 3,
    images: '../../public/images/images.sp/aaa_0d334ec9bded4e0b967f073aa38b3e3b_master.webp',

    title: 'Xiaomi 14 ultra',
    oldprice: '21.000.000đ',
    newprice: '18.000.000đ'
  },

  {
    id: 4,
    images: '../../public/images/images.sp/photo_2022-09-28_21-58-57_2.webp',

    title: 'Iphone 13 pro',
    oldprice: '21.000.000đ',
    newprice: '15.000.000đ'
  },

  {
    id: 5,
    images: '../../public/images/images.sp/xnah_las_1.webp',
    title: 'Samsung Galaxy Z Flip5',
    oldprice: '22.000.000đ',
    newprice: '18.000.000đ'
  },

  {
    id: 6,
    title: 'Samsung Galaxy Z Flip5',
    images: '../../public/images/images.sp/xnah_las_1.webp',
    oldprice: '22.000.000đ',
    newprice: '18.000.000đ'
  }
]

export default product
