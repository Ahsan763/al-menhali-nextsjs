import React,{useState,useEffect} from 'react'
import { useRouter } from "next/router";
import Language from "../components/Header/Language"
import Theme from "../components/Header/Theme"
import SocialMedia from "../components/SocialMedia"
import Image from 'next/image';
import Link from 'next/link';
const Header = () => {
    const route = useRouter();
    const [isActive, setActive] = useState(false);
    const toggleClass = () => {
        setActive(!isActive);
    };
    useEffect(() => {
        const manageOutsideClick = (e)=>{
            if(!nav.current.contains(e.target)){
            setActive(false);
            }
        }
        document.addEventListener("click", manageOutsideClick);
        return () => {
            document.removeEventListener("click", manageOutsideClick);
        }
        }, [])
    const nav = React.useRef();
    return (
        <div className={isActive ? "active header" : "header"}>
            <div className='navTop'>
                <div className="container">
                    <div className="navTop_wrapper flex items-center">
                    <ul className='socialMedia flex items-center smediaHdr'>
                        <li className="socialMedia_item">
                            <Link href={"#"}>
                                <div className="socialMedia_link">
                                    <Image src="/insta.svg" width="25" height="25" alt="instgram" />
                                </div>
                            </Link>
                        </li>
                        <li className="socialMedia_item">
                            <Link href={"#"}>
                                <div className="socialMedia_link">
                                    <Image src="/fb.svg" width="25" height="25" alt="facebook" />
                                </div>
                            </Link>
                        </li>
                        <li className="socialMedia_item">
                            <Link href={"#"}>
                                <div className="socialMedia_link">
                                    <Image src="/twt.svg" width="25" height="25" alt="twitter" />
                                </div>
                            </Link>
                        </li>
                        <li className="socialMedia_item">
                            <Link href={"#"}>
                                <div className="socialMedia_link">
                                    <Image src="/wp.svg" width="25" height="25" alt="whatsup" />
                                </div>
                            </Link>
                        </li>
                    </ul>
                        <div className='flex items-center lng-thm'>
                            <Language />
                            <Theme />
                        </div>
                        <div className="clock flex items-center">
                            <div className="flex items-center clcinr">
                                <Image src="/clock.svg" width="23" height="22" alt="clock icone" className='clockImg' />
                                <div className="text">أيام العمل الرسمية من  </div>
                            </div>
                            <div className='text2'>الإثنين  -  الجمعة</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navBottom">
                <div className="container">
                    <div className="navBottom_wrapper flex items-center">
                        <button role="button" className="navlist_btn flex items-center" onClick={toggleClass} ref={nav}>
                            <div className="flex items-center">
                                <Image src="/Menu.png"width="23"height="13"alt="nav " className='dark-none'/>
                                <Image src="/Menu.png"width="23"height="13"alt="nav btn" className=' d-none dark-show'/>
                            </div>
                        </button>
                        <ul className={isActive ? "active navList" : "navList"}>
                            <li className="navList_item">
                                <Link href="/">
                                    <div className={route.pathname == "/" ? "active navList_link" : "navList_link"}>الرئيسية</div>
                                </Link>
                            </li>
                            <li className="navList_item">
                                <Link href="/about">
                                    <div className={route.pathname == "/about" ? "active navList_link" : "navList_link" }>من نحن</div>
                                </Link>
                            </li>
                            <li className="navList_item">
                                <Link href="/services">
                                    <div className={route.pathname == "/services" ? "active navList_link" : "navList_link" }>الخدمات</div>
                                </Link>
                            </li>
                            <li className="navList_item">
                                <Link href="/lawyers">
                                    <div className={route.pathname == "/lawyers" ? "active navList_link" : "navList_link" }>المحامون</div>
                                </Link>
                            </li>
                            <li className="navList_item">
                                <Link href="/blog">
                                    <div className={route.pathname == "/blog" ? "active navList_link" : "navList_link" }>المدونة</div>
                                </Link>
                            </li>
                            <li className="navList_item">
                                <Link href="/contact">
                                    <div className={route.pathname == "/contact" ? "active navList_link" : "navList_link" }>إتصل بنا</div>
                                </Link>
                            </li>
                            <div className="navClose d-none">
                                <Image src="/close.png" width="30" height="30" alt="" className='close dark-none ' />
                                <Image src="/close1.png" width="30" height="30" alt="" className='close d-none dark-show' />
                            </div>
                        </ul>
                        <label htmlFor='HdrModal' className="modlBtn">
                            <h1 className="modlBtn_text">
                                اطلب إستشارتك
                            </h1>
                        </label>
                        <Link href={"/"}>
                            <div className="logo">
                                <Image src="/logo.svg" width="291" height="67" alt="" className='logoImg' />
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header