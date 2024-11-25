import React from 'react'
import { HeroSectionType } from '../../../types'
import { NextPage } from 'next'

const HeroSection: NextPage<HeroSectionType> = () => {
    return (
    <section
    className={`w-full flex flex-col items-center justify-center bg-[url('/home-section@3x.png')] bg-cover bg-no-repeat bg-[center] font-montserrat h-[636px] p-6 md:p-10`}
    >
        <div className="text-content w-full text-center">
            <div className="text-[4rem] font-bold mb-4 sm:text-[1.2rem]">
                <span className="flex flex-col">
                <span className="text-dark_bg">YOUR REALITY</span>
                <span className="text-blueviolet">OUR VISION</span>
                </span>
            </div>
            <h3 className="text-dark_bg text-[1rem] font-light mb-6 sm:text-[0.8rem]">
                Transforming Ideas into Innovative Solutions
            </h3>
        </div>
    </section>
    )
}

export default HeroSection