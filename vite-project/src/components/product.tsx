import React from 'react'
import { useLocation } from 'react-router-dom';
import { productType } from '~/interfaces/product';

const ProductPage: React.FC = () => {
  const location = useLocation();

  const product: productType = location.state;
  return (
    <div className="boxs-ctsp">
    <div className="box-ctsps">
      <div className="box-ctsp">
        <div className="box-ctsp-img">
          <img src={product.images} alt="" />
        </div>
      </div>
      <div className="box-ctsp-imgs">
        <div className="box-ctsp-images">
          <img src={product.images} alt="" />
        </div>
        <div className="box-ctsp-images">
          <img src={product.images} alt="" />
        </div>
        <div className="box-ctsp-images">
          <img src={product.images} alt="" />
        </div>
        <div className="box-ctsp-images">
          <img src={product.images} alt="" />
        </div>
      </div>
    </div>
    <div className="box-ctsps">
      <div className="product-name-sp">
        <h3 className="text-product-name">{product.title}</h3>
      </div>
      <div className="product-price-sp">
        <s className="oldprice"> {product.oldprice} </s>
        <h5 className="newprice">{product.newprice}</h5>
      </div>
      <div className="product-description-sp">
        <h5 className="description">Mô tả:</h5>
        <p className="text-description">
          - Sản phẩm công nghệ đột phá, cụm cam nổ bật, nâng tầm thiết kế sang trọng
        </p>
      </div>
      <div className="color-product-sp">
        <h5 className="color-sp">Màu sắc:</h5>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
          <label className="form-check-label" htmlFor="flexRadioDefault1">Màu đen</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
          <label className="form-check-label" htmlFor="flexRadioDefault2">Màu trắng</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3" />
          <label className="form-check-label" htmlFor="flexRadioDefault3">Màu vàng</label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault4" />
          <label className="form-check-label" htmlFor="flexRadioDefault4">Màu xanh lam</label>
        </div>
        <div className="button-add-card">
          <button className="add-card">Thêm vào giỏ hàng</button>
        </div>
      </div>
    </div>
  </div> 
  )
}
export default ProductPage
