import '../Footer.css'
 
 const FooterPage = () => {
  return (
    <footer className='footers'>
      <div className='footer-contents'>
        <div className='footer-content'>
          <div className='col-inner'>
            <p className='gioithieu'>
              <span>
                Năm 2020, Chúng tôi trở thành đại lý ủy quyền của Apple. Chúng tôi phát triển chuỗi cửa hàng tiêu chuẩn
                và Apple Mono Store nhằm mang đến trải nghiệm tốt nhất về sản phẩm và dịch vụ của Apple cho người dùng
                Việt Nam.
              </span>
            </p>
            <div className='icons-ft'>
              <div className='icon'>
                <div className='ti-facebook'></div>
              </div>
              <div className='icon1'>
                <div className='ti-themify-favicon'></div>
              </div>
              <div className='icon2'>
                <div className='ti-youtube'></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='border-dai'></div>
      <div className='right-banquyen'>
        <div className='right-ft'>
          <p className='right-p'>
            © 2016 Công ty Cổ Phần ABC Việt Nam GPDKKD: 01074656xxx do Sở KH & ĐT TP. Hà Nội cấp ngày 08/06/20416.
            <br />
            Địa chỉ: Số 736 Thái Hà, phường Trung Anh, quận Đống Đa, thành phố Demo, Việt Nam
            <br />
            Email: minhnqph40837@fpt.edu.vn (@ Bản quyền thuộc email này)
          </p>
        </div>
        <div className='img-banquyen'>
          <img src='../../public/images/banquyen.png' alt='' />
        </div>
      </div>
    </footer>
  )
}
export default FooterPage
