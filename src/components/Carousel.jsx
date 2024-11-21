import petParadaisImg from '../imgs/PetParadiseCarousel.webp'


const Carousel = () => {
  return (
    <section>
      <div className='w-full carousel'>
        <div id='item1' className='w-full carousel-item'>
          <img
            src={petParadaisImg}
            className='rounded-lg w-full h-40 lg:h-96'
          />
        </div>
        <div id='item2' className='w-full carousel-item'>
          <img
            src='https://i.ibb.co/TgyM8m1/bigsale.jpg'
            className='rounded-lg w-full h-40 lg:h-96'
          />
        </div>
        <div id='item3' className='w-full carousel-item'>
          <img
            src='https://i.ibb.co/ZGgRvJm/bigsale2.jpg'
            className='rounded-lg w-full h-40 lg:h-96'
          />
        </div>
        <div id='item4' className='w-full carousel-item'>
          <img
            src='https://i.ibb.co/LkKhnKL/salediscount.webp'
            className='rounded-lg w-full h-40 lg:h-96'
          />
        </div>
        <div id='item4' className='w-full carousel-item'>
          <img
            src='https://i.ibb.co/7NRH74L/salediscountts.jpg'
            className='rounded-lg w-full h-40 lg:h-96'
          />
        </div>
      </div>
      <div className='flex justify-center gap-2 py-2 w-full'>
        <a href='#item1' className='btn btn-xs'>
          1
        </a>
        <a href='#item2' className='btn btn-xs'>
          2
        </a>
        <a href='#item3' className='btn btn-xs'>
          3
        </a>
        <a href='#item4' className='btn btn-xs'>
          4
        </a>
      </div>
    </section>
  )
}

export default Carousel
