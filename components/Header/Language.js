import Image from 'next/image'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
function Language() {
    const { pathname, locale, push, asPath } = useRouter();
    const lng = locale == "en" ? "ar" : "en";
    const dir = locale === "en" ? "ltr" : "rtl";
    useEffect(() => {
        document.dir = dir;
        if (dir === "ltr") {
        document.body.classList.add("ltr");
        document.body.classList.remove("rtl");
        } else {
        document.body.classList.add("rtl");
        document.body.classList.remove("ltr");
        }
    }, [dir]);
    const toggleLanguage = () => {
        document.dir = dir;
        if (lng === "en") {
        document.body.classList.add("ltr");
        document.body.classList.remove("rtl");
        } else {
        document.body.classList.add("rtl");
        document.body.classList.remove("ltr");
        }
        push(pathname, asPath, { locale: lng });
    };
    return (
        <div className="language">
            <div className="lan__country active us flex items-center cursor-pointer" onClick={toggleLanguage} >
                <div className="flag flag1">
                    <Image src="/en.svg" width="61" height="33" alt="en" className=' dark-none' />
                    <Image src="/en-dark.svg" width="61" height="33" alt="en" className=' d-none dark-show' />
                </div>
                <div className="flag flag2">
                    <Image src="/ar.svg" width="61" height="33" alt="ar" className='dark-none'/>
                    <Image src="/ar-dark.svg" width="61" height="33" alt="en" className='d-none dark-show'  />
                </div>
            </div>
        </div>
    )
}

export default Language