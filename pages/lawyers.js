import Image from 'next/image'
import NewsLetter from '../components/NewsLetter'
import React from 'react'
import Link from 'next/link'
import lawyerimg1 from '../public/lawayer1.png'
import lawyerimg2 from '../public/lawayer2.png'
import lawyerimg3 from '../public/lawayer3.png'
import lawyerimg4 from '../public/lawayer4.png'
import lawyerimg5 from '../public/lawayer5.png'
const lawyerCard = [
    {
        id:1,
        lawyerCard__img:lawyerimg1,
        lawyerCard__type:"محامي",
        lawyerCard__name:"محمد العمر المنهالي",
        instLink:"#",
        fbLink:"#",
        twtLink:"#",
        wpLink:"#",
        lawyerDetails:"محمد العمر المنهالي حاصل علي شهادة البكالوريوس في القانون حاصل علي الماجستير في القانون الخاص كما أن لديه خبرة عمل لدي القيادة العامة لشرطة أبو ظبي لمدة 15 سنه ولديه العديد من الدورات في القطاع الجنائي والقطاع الخاص مثل القانون المدني والتجاري والأحوال الشخصيه مقيد لدي المحكمة الإتحاديه العليا وكما أنه مقيد لدي دائرة القضاء أبو ظبي ومحاكم دبي ؛ المحكمة الإتحاديه"
    },
    {
        id:2,
        lawyerCard__img:lawyerimg2,
        lawyerCard__type:"مستشار",
        lawyerCard__name:" أحمد صالح الغندور ",
        instLink:"#",
        fbLink:"#",
        twtLink:"#",
        wpLink:"#",
        lawyerDetails:"محمد العمر المنهالي حاصل علي شهادة البكالوريوس في القانون حاصل علي الماجستير في القانون الخاص كما أن لديه خبرة عمل لدي القيادة العامة لشرطة أبو ظبي لمدة 15 سنه ولديه العديد من الدورات في القطاع الجنائي والقطاع الخاص مثل القانون المدني والتجاري والأحوال الشخصيه مقيد لدي المحكمة الإتحاديه العليا وكما أنه مقيد لدي دائرة القضاء أبو ظبي ومحاكم دبي ؛ المحكمة الإتحاديه"
    },
    {
        id:3,
        lawyerCard__img:lawyerimg3,
        lawyerCard__type:"محامي",
        lawyerCard__name:" محمود محمد مهدي ",
        instLink:"#",
        fbLink:"#",
        twtLink:"#",
        wpLink:"#",
        lawyerDetails:"محمد العمر المنهالي حاصل علي شهادة البكالوريوس في القانون حاصل علي الماجستير في القانون الخاص كما أن لديه خبرة عمل لدي القيادة العامة لشرطة أبو ظبي لمدة 15 سنه ولديه العديد من الدورات في القطاع الجنائي والقطاع الخاص مثل القانون المدني والتجاري والأحوال الشخصيه مقيد لدي المحكمة الإتحاديه العليا وكما أنه مقيد لدي دائرة القضاء أبو ظبي ومحاكم دبي ؛ المحكمة الإتحاديه"
    },
    {
        id:4,
        lawyerCard__img:lawyerimg4,
        lawyerCard__type:"باحث قانوني",
        lawyerCard__name:"وليد علي عبدالحميد",
        instLink:"#",
        fbLink:"#",
        twtLink:"#",
        wpLink:"#",
        lawyerDetails:"محمد العمر المنهالي حاصل علي شهادة البكالوريوس في القانون حاصل علي الماجستير في القانون الخاص كما أن لديه خبرة عمل لدي القيادة العامة لشرطة أبو ظبي لمدة 15 سنه ولديه العديد من الدورات في القطاع الجنائي والقطاع الخاص مثل القانون المدني والتجاري والأحوال الشخصيه مقيد لدي المحكمة الإتحاديه العليا وكما أنه مقيد لدي دائرة القضاء أبو ظبي ومحاكم دبي ؛ المحكمة الإتحاديه"
    },
    {
        id:5,
        lawyerCard__img:lawyerimg5,
        lawyerCard__type:"محامي متدرب",
        lawyerCard__name:" علي محمد عبدالله بن عمرو ",
        instLink:"#",
        fbLink:"#",
        twtLink:"#",
        wpLink:"#",
        lawyerDetails:"محمد العمر المنهالي حاصل علي شهادة البكالوريوس في القانون حاصل علي الماجستير في القانون الخاص كما أن لديه خبرة عمل لدي القيادة العامة لشرطة أبو ظبي لمدة 15 سنه ولديه العديد من الدورات في القطاع الجنائي والقطاع الخاص مثل القانون المدني والتجاري والأحوال الشخصيه مقيد لدي المحكمة الإتحاديه العليا وكما أنه مقيد لدي دائرة القضاء أبو ظبي ومحاكم دبي ؛ المحكمة الإتحاديه"
    },
]

const lawyers = () => {
    return (
        <div className='main'>
            <div className="banner banner--ser">
                <Image src="/bannerbg.png" width="2020" height="174" alt="" className='bannerbg dark-none' />
                <Image src="/bannerbg_dark.png" width="2020" height="174" alt="" className='bannerbg d-none dark-show' />
                <div className="container">
                    <div className="banner-wrapper banner-wrapper2">
                        <div className="bannerBox bannerBox1">
                            <Image src="/arabic-person.png" width="476" height="578" alt="almenhali-lawyers" className='bannerBox_img' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='ser'>
                <Image src="/faqbg.png" width="128" height="314" alt="background" className='faqBg3 faqBg3--lawyer' />
                <Image src="/faqbg2.png" width="139" height="237" alt="background" className='faqBg4 faqBg4--lawyer' />
                <Image src="/Oval.png" width="569" height="506" alt="background" className='faqBg5' />
                <div className="container">
                    <div className="aboutbox_hdng text-center ml-auto mr-auto aboutbox_hdng2">
                        <span className="red">
                            المحامون المحترفون
                        </span>
                    </div>
                    <div className="serWrapper serWrapper--ser">
                        <div className="serBox">
                            <h1 className="serBoxHdng">
                                ”
                                خبرة
                                <span className="red"> قانونية </span>
                                <br />
                                متميزة ورائـــــــــــــــــــدة في
                                <br />
                                المجال
                                “
                            </h1>
                        </div>
                        <div className="serBox">
                            <Image src="/modal1.png" width="502" height="508" alt="" className='serBoxImg' />
                        </div>
                    </div>
                    <div className="lawyerCardWrpr">
                        {lawyerCard.map(({id,lawyerCard__img,lawyerCard__type,lawyerCard__name,instLink,fbLink,twtLink,wpLink,lawyerDetails})=>
                            <div className="lawyerCard" key={id}>
                                <label htmlFor={id} className="lawyerCard__hol relative">
                                    <Image src={lawyerCard__img} width="394" height="353" alt="" className='lawyerCard__img' />
                                    <div className="lawyerCard__type">{lawyerCard__type}</div>
                                </label>
                                <div className="lawyerCard__body">
                                    <h1 className="lawyerCard__name">{lawyerCard__name}</h1>
                                    <ul className='socialMedia flex items-center socialMedia--lawyers'>
                                        <li className="socialMedia_item">
                                            <Link href={instLink}>
                                            <div className="socialMedia_link">
                                                <Image src="/insta.svg" width="25" height="25" alt="" />
                                            </div>
                                            </Link>
                                        </li>
                                        <li className="socialMedia_item">
                                            <Link href={fbLink}>
                                            <div className="socialMedia_link">
                                                <Image src="/fb.svg" width="25" height="25" alt="" />
                                            </div>
                                            </Link>
                                        </li>
                                        <li className="socialMedia_item">
                                            <Link href={twtLink}>
                                            <div className="socialMedia_link">
                                                <Image src="/twt.svg" width="25" height="25" alt="" />
                                            </div>
                                            </Link>
                                        </li>
                                        <li className="socialMedia_item">
                                            <Link href={wpLink}>
                                            <div className="socialMedia_link">
                                                <Image src="/wp.svg" width="25" height="25" alt="" />
                                            </div>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <input type="checkbox" id={id} className="modal-toggle" />
                                <label htmlFor={id} className="modal cursor-pointer">
                                    <label className="modal-box  relative lawyersDetailsModal" htmlFor="">
                                        <div className="sercardModalBody">
                                            <Image src="/serCardBg.png" width="1018" height="526" alt="" className='serCardBg' />
                                            <div className="lawyerDetHol">
                                                <Image src={lawyerCard__img} width="190" height="190" alt="" className='lawyerDet__img' />
                                            </div>
                                            <h1 className="lawyerDet__name">{lawyerCard__name}</h1>
                                            <p className="lawyerDet__para">{lawyerDetails}</p>
                                        </div>
                                    </label>
                                </label>
                            </div>
                            
                        )}
                    </div>
                </div>
            </div>
            <NewsLetter />
        </div>
    )
}

export default lawyers