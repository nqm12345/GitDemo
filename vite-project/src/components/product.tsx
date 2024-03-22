
import { useLocation } from 'react-router-dom';
import { productType } from '~/interfaces/product';

const ProductPage = () => {
  const location = useLocation();

  const product: productType = location.state;
  
  return (
    

<>
  <div className="ctsp-product-name">
    <h5 className="product-name">{product.title}</h5>
    <div className="ctsp-start">⭐ ⭐ ⭐ ⭐ ⭐</div>
  </div>
  <div className="boxs-ctsp">
    <div className="box-ctsps">
      <img
        src={product.images}
        alt=""
        width="66%"
        height="100%"
        style={{ objectFit: "cover" }}
      />
    </div>
    <div className="box-ctsp2">
      <div className="capacity-version">
        <div className="capacity-versions">
          <h6 className="ctsp-capacity">128GB</h6>
          <h6 className="capacity-price">28.990.000đ</h6>
        </div>
        <div className="capacity-versions">
          <h6 className="ctsp-capacity">256GB</h6>
          <h6 className="capacity-price">32.990.000đ</h6>
        </div>
        <div className="capacity-versions">
          <h6 className="ctsp-capacity">512GB</h6>
          <h6 className="capacity-price">36.990.000đ</h6>
        </div>
      </div>
      <div className="ctsp-text-color">
        <h6 className="text-color">Chọn màu sắc</h6>
        <div className="box-color-sps">
          <div className="box-color-sp">
            <div className="color-sp1">
              <img
                src={product.images}
                alt=""
                width="30px"
              />
            </div>
            <div className="color-sp2">
              <h6 className="text-color-price">Xám</h6>
              <h6 className="price-color">39.180.000đ</h6>
            </div>
          </div>
          <div className="box-color-sp">
            <div className="color-sp1">
              <img
                src={product.images}
                alt=""
                width="30px"
              />
            </div>
            <div className="color-sp2">
              <h6 className="text-color-price">Xám</h6>
              <h6 className="price-color">39.180.000đ</h6>
            </div>
          </div>
          <div className="box-color-sp">
            <div className="color-sp1">
              <img
                src={product.images}
                alt=""
                width="30px"
              />
            </div>
            <div className="color-sp2">
              <h6 className="text-color-price">Xám</h6>
              <h6 className="price-color">39.180.000đ</h6>
            </div>
          </div>
          <div className="box-color-sp">
            <div className="color-sp1">
              <img
                src={product.images}
                alt=""
                width="30px"
              />
            </div>
            <div className="color-sp2">
              <h6 className="text-color-price">Xám</h6>
              <h6 className="price-color">39.180.000đ</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="old-new-price">
        <div className="border-old-new-price1">
          <div className="border-old-new-prices1">
            <div className="ti-github"></div>
          </div>
          <div className="border-old-new-prices2">
            <h6 className="text-prices2">26.000.000đ</h6>
            <h6 className="text-prices3">Khi thu cũ lên đời</h6>
          </div>
        </div>
        <div className="border-old-new-price2">
          <div className="new-price">{product.newprice}</div>
          <s className="old-price">{product.oldprice}</s>
        </div>
      </div>
      <div className="button-add-card">
        <div className="ti-credit-card"></div>
        <div className="button-add-card-text">ADD CARD</div>
      </div>
    </div>
  </div>
</>
 
  )
}
export default ProductPage;
