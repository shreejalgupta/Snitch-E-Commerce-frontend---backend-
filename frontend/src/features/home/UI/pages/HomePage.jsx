import React from 'react'
import FirstPage from '../components/FirstPage'
import SecondPage from '../components/SecondPage'
import TrendingSection from '../components/TrendingSection'
import ReadPage from '../components/ReadPage'
import StyleGallery from '../components/StyleGallery'

const HomePage = () => {
  return (
    <div className='w-screen min-h-screen '>
        <FirstPage />
        <SecondPage />
        <TrendingSection />
        <ReadPage />
        <StyleGallery />

    </div>
  )
}

export default HomePage
