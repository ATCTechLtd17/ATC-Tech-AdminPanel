
import './App.css'
import CarouselPrimary from './Components/Carousel/CarouselPrimary'
import Footer from './Components/Footer/Footer'
import ContainerHome from './Components/HomeContainer/ContainerHome'



function App() {

  // #F5F5DC light gold
  // #E6F7FF light blue
  // #bfe5f7 nav blue

  return (
    <div>
      <section className='bg-gradient-to-b from-[#bfe5f7] to-white'>

        <CarouselPrimary />

      </section>

      <section>
        <ContainerHome />
        <Footer />
      </section>





    </div>
  )
}

export default App
