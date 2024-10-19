import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import {FiSmartphone} from 'react-icons/fi'
import {HiOutlineMail} from 'react-icons/hi'
import {GoLocation} from 'react-icons/go'
import SocialMedia from '../components/SocialMedia'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footertop">
                <div className="container">
                    <div className="footertopWrapper">
                        <div className="footerBox footerBox1">
                            <Link href={"/"}>
                                <div className="footerBox_logo">
                                    <Image src="/logo.svg" width="291" height="67" alt="al-menhali logo" className="footerBox_logoImg" />
                                </div>
                            </Link>
                            <h3 className="footerBox_text">
                                خـيـارك الـقــانــونــي الأمــثـــل من أفضل مكاتب المحاماة في دولة الإمارات العربية المتحدة
                            </h3>
                            <div className="footerBoxRow">
                                <div className="footerBoxEllipse">
                                    <FiSmartphone className='footerBoxIcn' />
                                </div>
                                <Link href={"#"}>
                                    <div className="footerBoxRow_link">+971507777292 - 024911154</div>
                                </Link>
                            </div>
                            <div className="footerBoxRow">
                                <div className="footerBoxEllipse">
                                    <HiOutlineMail className='footerBoxIcn' />
                                </div>
                                <Link href={"mailto:info@almenhaly.com"}>
                                    <div className="footerBoxRow_link">info@almenhaly.com</div>
                                </Link>
                            </div>
                            <div className="footerBoxRow mb-0">
                                <div className="footerBoxEllipse">
                                    <GoLocation className='footerBoxIcn' />
                                </div>
                                <Link href={"#"}>
                                    <div className="footerBoxRow_link">الإمارات العربية المتحدة - أبو ظبي</div>
                                </Link>
                            </div>
                        </div>
                        <div className="footerBox footerBox2">
                            <ul className="footerBox_list">
                                <li className="footerBox_listItem">
                                    <Link href={"#"}>
                                        <div className="footerBox_listLink">
                                            الرئيسية    
                                        </div>
                                    </Link>
                                </li>
                                <li className="footerBox_listItem">
                                    <Link href={"#"}>
                                        <div className="footerBox_listLink">
                                            من نحن    
                                        </div>
                                    </Link>
                                </li>
                                <li className="footerBox_listItem">
                                    <Link href={"#"}>
                                        <div className="footerBox_listLink">
                                        خدماتنا    
                                        </div>
                                    </Link>
                                </li>
                                <li className="footerBox_listItem">
                                    <Link href={"#"}>
                                        <div className="footerBox_listLink">
                                        المحامون    
                                        </div>
                                    </Link>
                                </li>
                                <li className="footerBox_listItem">
                                    <Link href={"#"}>
                                        <div className="footerBox_listLink">
                                        المدونة    
                                        </div>
                                    </Link>
                                </li>
                                <li className="footerBox_listItem">
                                    <Link href={"#"}>
                                        <div className="footerBox_listLink">
                                        إتصل بنا    
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                            <ul className="footerBox_list footerBox_list2">
                                <li className="footerBox_listItem">
                                    <Link href={"#"}>
                                        <div className="footerBox_listLink">
                                        الاستشارات القانونية    
                                        </div>
                                    </Link>
                                </li>
                                <li className="footerBox_listItem">
                                    <Link href={"#"}>
                                        <div className="footerBox_listLink">
                                        القضايا الجزائية   
                                        </div>
                                    </Link>
                                </li>
                                <li className="footerBox_listItem">
                                    <Link href={"#"}>
                                        <div className="footerBox_listLink">
                                        القضايا العمالية    
                                        </div>
                                    </Link>
                                </li>
                                <li className="footerBox_listItem">
                                    <Link href={"#"}>
                                        <div className="footerBox_listLink">
                                        القضايا الأسرية    
                                        </div>
                                    </Link>
                                </li>
                                <li className="footerBox_listItem">
                                    <Link href={"#"}>
                                        <div className="footerBox_listLink">
                                        صياغة العقود    
                                        </div>
                                    </Link>
                                </li>
                                <li className="footerBox_listItem">
                                    <Link href={"#"}>
                                        <div className="footerBox_listLink">
                                        تسوية النزاعات    
                                        </div>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div className="footerBox footerBox3">
                            <div className="footerBoxImgH">
                                <Image src="/ft1.jpg" width="176" height="159" alt="news" className='footerBoxImg' />
                                <h4 className="footerBoximgText">قوانين العقارات الجديد</h4>
                            </div>
                            <div className="footerBoxImgH mb-0">
                                <Image src="/ft2.jpg" width="176" height="159" alt="news" className='footerBoxImg' />
                                <h4 className="footerBoximgText">قوانين العقارات الجديد</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footerBottom">
                <div className="container">
                    <div className="footerBottomWrapper">
                        <SocialMedia />
                        <p className="footerBottom_text">الحقوق محفوظة لدي مكتب المنهالي للإستشارات القانونية</p>
                        <p className="footerBottom_text2">Powered By Skilled Tech - 2023</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Footer