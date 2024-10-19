import Image from 'next/image'
import React from 'react'
import NewsLetter from '../components/NewsLetter'

const contact = () => {
    return (
        <div className='main'>
            <div className="banner banner--ser">
                <Image src="/bannerbg.png" width="2020" height="174" alt="" className='bannerbg dark-none' />
                <Image src="/bannerbg_dark.png" width="2020" height="174" alt="" className='bannerbg d-none dark-show' />
                <div className="container">
                    <div className="banner-wrapper banner-wrapper2">
                        <div className="bannerBox bannerBox1">
                            <Image src="/arabic-person.png" width="476" height="578" alt="banner img" className='bannerBox_img' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='ser ser--contact'>
                <Image src="/faqbg.png" width="128" height="314" alt="design" className='faqBg3 faqBg3--lawyer' />
                <Image src="/faqbg2.png" width="139" height="237" alt="design" className='faqBg4 faqBg4--lawyer' />
                <Image src="/Oval.png" width="500" height="450" alt="design" className='faqBg5' />
                <div className="container">
                    <div className="aboutbox_hdng text-center ml-auto mr-auto aboutbox_hdng2">
                        <span className="red">
                            تواصل معنا  
                        </span>
                    </div>
                    <div className="contWrapper">
                        <Image src="/contact.png" width="944" height="640" alt="contact us" className='contactImg dark-none' />
                        <Image src="/contact-dark.png" width="944" height="640" alt="contact us" className='contactImg d-none dark-show' />
                    </div>
                    <div className="contctFrmWrpr">
                        <div className="cntctFB1">
                            <h1 className="cntctFB__hdng">هل لديك أي
                                <span className="red"> سؤال </span> او أستشارة 
                            </h1>
                            <form action="" className="cntctFB_form">
                                <div className="cntctFB_row flex items-center justify-between row">
                                    <div className="col-6 col-sm-12">
                                        <input type="text" className="cntctFB_input" placeholder='الإسم كامل'/>
                                    </div>
                                    <div className="col-6 col-sm-12">
                                        <input type="text" className="cntctFB_input" placeholder='رقم الهاتف'/>
                                    </div>
                                </div>
                                <div className="cntctFB_row flex items-center justify-between row">
                                    <div className="col-12 ">
                                        <input type="text" className="cntctFB_input" placeholder='البريد الإلكتروني'/>
                                    </div>
                                </div>
                                <div className="cntctFB_row flex items-center justify-between row">
                                    <div className="col-12 ">
                                        <textarea type="text" className="cntctFB_input cntctFB_textarea" placeholder='الرسالة'></textarea>
                                    </div>
                                </div>
                                <div className="cntctFB_row flex items-center justify-between row mb-0">
                                    <div className="col-12 ">
                                        <button className="cntctFB_btn">إرسال</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="cntctFB2">
                            <h1 className="cntctFB__hdng"> 
                                تواصل معانا علي
                            </h1>
                            <div className="cntctFB2Row">
                                <div className="cntctFB2Box1">
                                    <Image src="/contact1.svg" width="21" height="21" alt="cal" className='cntctFB2Box__img' /> 
                                </div>
                                <div className="cntctFB2Box2">
                                    <h6 className="cntctFB2Box2_hdng">هاتف</h6>
                                    <div className="flex items-center cntctFB2Box2_p-wrp">
                                        <p className="cntctFB2Box2_p">+971507777292</p>
                                        <p className="cntctFB2Box2_p">-</p>
                                        <p className="cntctFB2Box2_p">024911154</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cntctFB2Row">
                                <div className="cntctFB2Box1 cntctFB2Box1--mail">
                                    <Image src="/contact2.svg" width="29" height="20" alt="mail" className='cntctFB2Box__img' /> 
                                </div>
                                <div className="cntctFB2Box2">
                                    <h6 className="cntctFB2Box2_hdng">البريد الإلكتروني</h6>
                                    <div className="flex items-center cntctFB2Box2_p-wrp">
                                        <p className="cntctFB2Box2_p">info@almenhaly.com</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cntctFB2Row">
                                <div className="cntctFB2Box1">
                                    <Image src="/contact3.svg" width="20" height="26" alt="map" className='cntctFB2Box__img cntctFB2Box__img2' /> 
                                </div>
                                <div className="cntctFB2Box2">
                                    <h6 className="cntctFB2Box2_hdng">العنوان</h6>
                                    <div className="flex items-center cntctFB2Box2_p-wrp">
                                        <p className="cntctFB2Box2_p">الإمارات العربية المتحدة - أبو ظبي</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cntctFB2Row">
                                <div className="cntctFB2Box1">
                                    <Image src="/contact4.svg" width="29" height="28" alt='clock' className="cntctFB2Box__img"></Image>
                                </div>
                                <div className="cntctFB2Box2">
                                    <h6 className="cntctFB2Box2_hdng">أيام العمل</h6>
                                    <div className="flex items-center cntctFB2Box2_p-wrp">
                                        <p className="cntctFB2Box2_p">من الأحد الي الجمعة  - من الساعة 8 صباحاً الي 6 مساء - السبت مغلق</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mapSec">
                <div className="container">
                    <h1 className="cntctFB__hdng">
                        موقعنا علي الخريطة
                    </h1>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29048.79119901673!2d54.35228159493142!3d24.48202989624316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6671079e3853%3A0x6142fa1df9085a2f!2sQasr%20AlHosn!5e0!3m2!1sen!2sae!4v1673442224182!5m2!1sen!2sae" className='map'></iframe>
                </div>
            </div>
            <NewsLetter />
        </div>
    )
}

export default contact