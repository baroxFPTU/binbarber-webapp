import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import FluidSkeleton from 'components/skeletons/FluidSkeleton/FluidSkeleton'
import React, { useState } from 'react'
import CSSModule from './SaleCarousel.module.scss'

function SaleCarousel(props) {
  const [isPending, setIsPending] = useState(true)

  const initialData = [
    { id: 1, imageUrl: 'https://source.unsplash.com/random', description: 'Uu dai thang nay' },
    { id: 2, imageUrl: 'https://source.unsplash.com/random', description: 'Uu dai thang nay' },
    { id: 3, imageUrl: 'https://source.unsplash.com/random', description: 'Uu dai thang nay' },
    { id: 4, imageUrl: 'https://source.unsplash.com/random', description: 'Uu dai thang nay' },
    { id: 5, imageUrl: 'https://source.unsplash.com/random', description: 'Uu dai thang nay' },
    { id: 6, imageUrl: 'https://source.unsplash.com/random', description: 'Uu dai thang nay' }
  ]

  const carouselOptions = {
    arrows: false,
    rewind: true,
    interval: 4000,
    lazyload: true,
    speed: 1000,
    rewindSpeed: 500,
    pagination: false,
    cloneStatus: 'is-active',
    gap: '30px',
    slidesToShow: 1.5,
    perMove: 1,
    infinite: true,
    fixedWidth: '270px',
    fixedHeight: '350px'
  }

  return (
    <Splide hasTrack={false} aria-label='Main Carousel' options={carouselOptions} tag='section'>
      <SplideTrack>
        {initialData.map((item, index) => (
          <SplideSlide key={index}>
            <div className={CSSModule.carouselItem}>
              {isPending && <FluidSkeleton />}
              <img src={item.imageUrl} alt={item.description} onLoad={() => setIsPending(false)} />
            </div>
          </SplideSlide>
        ))}
      </SplideTrack>
    </Splide>
  )
}

export default SaleCarousel
