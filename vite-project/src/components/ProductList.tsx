import { useState, useEffect } from 'react'
import product, { productType } from '~/interfaces/product'
import '../index.css'
import { NavLink, useNavigate, useParams } from 'react-router-dom'

const ProductList = () => {
  const [products, setProducts] = useState<productType[]>([]) // Khai báo state 'products' để lưu trữ danh sách sản phẩm

  useEffect(() => {
    // Sử dụng useEffect để gửi yêu cầu fetch dữ liệu từ API khi thành phần được render lần đầu tiên
    fetch('http://localhost:3002/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data) // Cập nhật state 'products' với dữ liệu nhận được từ fetch
      })
  }, []);

  const navigate = useNavigate(); // Hook navigate để điều hướng qua các trang trong ứng dụng

  const hanldRender = (product: productType) => {
    navigate(`/product/${product.id}` , {state: product}) // Điều hướng sang trang chi tiết sản phẩm với dữ liệu sản phẩm được chuyển đi
  };

  return (
    <div>
      <h1 id='iphone'>Smartphone</h1>
      <div className='iphones'>
        {products.map((product, index) => (
          <div onClick={() => hanldRender(product)} key={index} className='iphone-sp'>
            <div className='img-sp'>
              <img src={product.images} alt='' />
            </div>
            <div className='name-sp'>
              <p>{product.title}</p>
            </div>
            <div className='giasp'>
              <s className='giacu-sp'>{product.oldprice}</s>
              <p className='gianew-sp'>{product.newprice}</p>
            </div>
            <div className='button-sp'>
              <button className='ti-shopping-cart'></button>
              <button onClick={() => hanldRender(product)} className='dathang'>Xem chi tiết</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList
