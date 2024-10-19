import Image from 'next/image'
import React from 'react'

const NewsLetter = () => {
    return (
        <div className='newsLetter'>
            <Image src="/faqtop.png" width="122" height="32" alt="background" className='newsLettertop' />
            <Image src="/newsletterbg.png" width="325" height="385" alt="background" className='newsletterbg' />
            <Image src="/newsletterbg1.png" width="325" height="385" alt="background" className='newsletterbg1' />
            <div className="container">
                <h1 className="newsLetter_hdng">إشترك في نشرتنا البريدية لتصلك اخر الأخبار</h1>
                <form action="" className="newsLetterForm">
                    <input type="text" className="newsLetterInput" placeholder='بريدك الإلكتروني' />
                    <button className="newsLetterBtn">إشترك</button>
                </form>
            </div>
        </div>
    )
}

export default NewsLetter