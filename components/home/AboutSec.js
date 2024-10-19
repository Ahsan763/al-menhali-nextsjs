import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const AboutSec = () => {
    return (
        <div className="aboutSec">
            <div className="wrapper gap-4">
                <div className="aboutSec_wrapper">
                    <Image src="/aboutbg.png" width="1369" height="568" alt="background" className="aboutSec_wrapper_img dark-none" />
                    <Image src="/aboutbg-dark.png" width="1369" height="568" alt="background" className="aboutSec_wrapper_img d-none dark-show" />
                    <Image src="/about2.png" width="330" height="403" alt="background" className="aboutSec_wrapper_img2" />
                    <div className="aboutSec_content">
                        <h1 className="hdng red">
                            من نحن
                        </h1>
                        <p className="aboutSec_para">
                            خبرة الأستاذ محمد المنهالي القانونية تمتد جذورها للوقت الذي قضاه لدي القيادة العامه لشرطة أبو ظبي لمدة 15 سنه – حامياً للحقوق و محافظاً على القانون ، حيث تعمقت خبرته و أزدادت معرفته بتفاصيل و مبادئ القانون الإماراتي. وبعد ذلك أسس  مكتب ”محمد العمر المنهالي للمحاماة و الاستشارات القانونية“ ويعد من أفضل مكاتب المحاماة في دولة الإمارات العربيه المتحده ويسعي هادفاً إلى تقديم خدمات قانونية شاملة مبنية على فهم عميق لروح القانون و أحوال المتقاضين
                        </p>
                        <p className="aboutSec_para">
                            و انطلاقاً من طموح لخدمة دولة الأمارات و شعبها و مقيميها، و بخبرة قانونية متنامية، يحرص الأستاذ محمد المنهالي و فريقه على تحقيق أعلى نسبة نجاح في القضايا ، و على زيادة الخدمات القانونية المقدمة لتغطي فئات أكثر من العملاء
                        </p>
                        <Link href={"/about"}>
                            <div className="aboutSec_btn">المزيد</div>
                        </Link>
                    </div>
                    <Link href={"/lawyers"}>
                        <Image src="/aboutPersons.svg" width="138" height="72" alt="profile" className="aboutPersons" />
                    </Link>
                </div>
                <Image src="/about-bg2.png" width="361" height="603" alt="background" className="aboutSec_bg" />
            </div>
      </div>
    )
}

export default AboutSec