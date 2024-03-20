import { Slide } from 'react-slideshow-image'

import 'react-slideshow-image/dist/styles.css'

const Header = () => {
  const images = [
    'https://www.macgasm.net/wp-content/uploads/2023/09/iphone-15-release.jpg',
    'https://tienganhnghenoi.vn/wp-content/uploads/2023/09/banner-iphone-7-min.jpg',
    'https://imagicbaroda.com/storage/new-silder/imagic-web-banner-iphone-15-2-min.jpg'
  ]

  return (
    <Slide>
      <div className='each-slide-effect'>
        <div style={{ backgroundImage: `url(${images[0]})` }}></div>
      </div>
      <div className='each-slide-effect'>
        <div style={{ backgroundImage: `url(${images[1]})` }}></div>
      </div>
      <div className='each-slide-effect'>
        <div style={{ backgroundImage: `url(${images[2]})` }}></div>
      </div>
    </Slide>
  )
}

export default Header
