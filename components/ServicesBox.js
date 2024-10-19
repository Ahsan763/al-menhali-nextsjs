import Image from 'next/image'
import React from 'react'

const ServicesBox = ({servicesBox_img,servicesBox_hdng}) => {
    return (
        <div className="servicesBox">
            <div className="servicesBox_holder">
                <Image src={servicesBox_img} width="64" height="65" alt="services" className='servicesBox_img' />
            </div>
            <h1 className="servicesBox_hdng">{servicesBox_hdng}</h1>
        </div>
    )
}

export default ServicesBox