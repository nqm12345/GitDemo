

import { Link } from "react-router-dom";
import { productType } from "~/interfaces/product";

type Props = {
    products: productType[]
};

const Dashboard = ({products}: Props ) => {

return (
    <>
    <h1>Đây là trang DS Admin</h1>
    <Link className='btn btn-primary' to='/admin/add'>
        Add new Product
      </Link>
    <table className="table table-dark table-hover">
  <thead>
   
    <tr>
      <th scope="col">ID</th>
      <th scope="col">Hình ảnh</th>
      <th scope="col">Price new</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {products.map((product, index) => (
        <tr key={index}>
        <td>{product.id}</td>
        <td><img width={100} src={product.images} alt="" /></td>
        <td>{product.title}</td>
        <td>
          <button className="btn btn-success  ">Sửa</button> || <button className="btn btn-danger">Xóa</button>
        </td>
    </tr>
    ))}
    
  </tbody>
</table>

  
    </>
);

}
export default Dashboard;