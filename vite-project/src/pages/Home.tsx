
import { useNavigate } from 'react-router-dom'


import { productType } from '~/interfaces/product'

type Props = {
  products: productType[]
}


const HomePage = ({ products }: Props) => {

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

export default HomePage;
