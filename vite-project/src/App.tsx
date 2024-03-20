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

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <ChildBanner />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/product/:id' element={<ProductPage />} />
        <Route path='/introduction' element={<IntroductionPage />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/login' element={<LoginPage />} />
      </Routes>

      <VideoComponent />
      <NewsComponent />
      <FooterPage />
    </>
  )
}

export default App
