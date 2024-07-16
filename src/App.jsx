
import './App.css'
import CarouselPrimary from './Components/Carousel/CarouselPrimary'
import Footer from './Components/Footer/Footer'
import ContainerHome from './Components/HomeContainer/ContainerHome'
import Navbar from './Components/Navbar/Navbar'
import SideBar from './Components/SideBar/SideBar'

function App() {

  // #F5F5DC light gold
  // #E6F7FF light blue
  // #bfe5f7 nav blue

  return (
    <>
      <section className='bg-gradient-to-b from-[#bfe5f7] to-white'>
        <Navbar />
        <CarouselPrimary />

      </section>
      <section>
        <ContainerHome />
        <Footer />
      </section>

      <div className='flex'>
        <SideBar />
      </div>



    </>
  )
}

export default App
