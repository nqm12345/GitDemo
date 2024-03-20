import React from 'react'

const NewsComponent: React.FC = () => {
  return (
    <div>
      <h1 id='tainghe'>Tin tức</h1>
      <div className='newtintuc'>
        <div className='tintuc'>
          <div className='img-tintuc'>
            <img src='../../public/images/tintuc-1.webp' alt='' />
          </div>
          <div className='nametintuc'>
            <p>Chung nhưng lại thành riêng: iPhone 15 Series sẽ sử dụng USB Type-C nhưng phải có chuẩn MFi</p>
          </div>
          <div className='timett'>06/01/2024</div>
        </div>
        <div className='tintuc'>
          <div className='img-tintuc'>
            <img src='../../public/images/tintuc-1.webp' alt='' />
          </div>
          <div className='nametintuc'>
            <p>Chung nhưng lại thành riêng: iPhone 15 Series sẽ sử dụng USB Type-C nhưng phải có chuẩn MFi</p>
          </div>
          <div className='timett'>06/01/2024</div>
        </div>
        <div className='tintuc'>
          <div className='img-tintuc'>
            <img src='../../public/images/tintuc-1.webp' alt='' />
          </div>
          <div className='nametintuc'>
            <p>Chung nhưng lại thành riêng: iPhone 15 Series sẽ sử dụng USB Type-C nhưng phải có chuẩn MFi</p>
          </div>
          <div className='timett'>06/01/2024</div>
        </div>
      </div>
    </div>
  )
}

export default NewsComponent
