import Navbar from './layouts/Navbar'
import Header from './layouts/Header'
import ChildBanner from './layouts/childbanner'
import HomePage from './pages/Home'
import ProductPage from './components/product'
import IntroductionPage from './pages/Introduction'
import ContactPage from './pages/Contact'
import LoginPage from './pages/Login'
import VideoComponent from './layouts/VideoComponent'
import NewsComponent from './layouts/tintuc.lienhe'
import FooterPage from './layouts/Footer'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { productType } from './interfaces/product'
import Dashboard from './pages/admin/Dashboard'
import ProductAdd from './pages/admin/ProductAdd'
import { hydrate } from 'react-dom'


function App() {
  const [products, setProducts] = useState<productType[]>([]) // Khai báo state 'products' để lưu trữ danh sách sản phẩm

  useEffect(() => {
    // Sử dụng useEffect để gửi yêu cầu fetch dữ liệu từ API khi thành phần được render lần đầu tiên
    fetch('http://localhost:3002/products')
      .then((res) => res.json())
      .then((data) => {
        setProducts(data) // Cập nhật state 'products' với dữ liệu nhận được từ fetch
      })
  }, []);
  const handleAdd = (product: productType) => {
    console.log(product)
  }
  return (
    <>
      <Navbar />
      <Header />
      <ChildBanner />

      <Routes>
        <Route path='/'>
        <Route path='/' element={<HomePage products={products} />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/introduction' element={<IntroductionPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/login' element={<LoginPage />} />
        </Route>
        <Route path='/admin'>
          <Route index element={<Dashboard products={products} />} />
          <Route path='/admin/add' element={<ProductAdd onAdd={handleAdd} />} />
        </Route>
      </Routes>

      <VideoComponent />
      <NewsComponent />
      <FooterPage />
    </>
  )
}

export default App
