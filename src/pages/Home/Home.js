import React from 'react'
import Banner from '../../components/Banner/MainBanner/MainBanner'
import Hotel from '../../components/Cards/Hotel/Hotel'
import './Home.scss'

const Home = () => {
  return (
    <div>
        <Banner />
        <div className="hotels">
          <h1 className='title'>Best <span>Hotels</span></h1>
          <div className="hotels-4x">
            <Hotel />
            <Hotel />
            <Hotel />
            <Hotel />
          </div>
        </div>
        <div className="hotels">
          <h1 className='title'>Best <span>Restaurants</span></h1>
          <div className="hotels-4x">
            <Hotel />
            <Hotel />
            <Hotel />
            <Hotel />
          </div>
        </div>
        <div className="hotels">
          <h1 className='title'>Best <span>Attractions</span></h1>
          <div className="hotels-4x">
            <Hotel />
            <Hotel />
            <Hotel />
            <Hotel />
          </div>
        </div>
    </div>
  )
}

export default Home