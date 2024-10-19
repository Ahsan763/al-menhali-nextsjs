import Image from 'next/image'
import Link from 'next/link'
import NewsLetter from '../components/NewsLetter'
import React from 'react'
import sercardImg1 from '../public/sercard1.png'
import sercardImg2 from '../public/sercard2.png'
import sercardImg3 from '../public/sercard3.png'
import sercardImg4 from '../public/sercard4.png'
import sercardImg5 from '../public/sercard5.png'
import sercardImg6 from '../public/sercard6.png'
import sercardImg7 from '../public/sercard7.png'
import sercardModalImg1 from '../public/modal1.png'
import sercardModalImg2 from '../public/modal2.png'
import sercardModalImg3 from '../public/modal3.png'
import sercardModalImg4 from '../public/modal4.png'
import sercardModalImg5 from '../public/modal5.png'
import sercardModalImg6 from '../public/modal6.png'
import sercardModalImg7 from '../public/modal7.png'
const sercard = [
    {
        id:1,
        sercardImg: sercardImg1,
        sercard_hdng:"الإستشارات القانونية",
        sercardModalImg:sercardModalImg1,
        sercardMdl_para:[
            " تعد الاستشارات القانونية السليمه الموثقه بالأدلة والبراهين القانونية وتقديم المشورة المطلوبة للعملاء من أهم وأفضل  الخطوات  قبل البدء بالإجراءات القانونية. و يقوم مكتب المحامى / محمد العمر المنهالى بتقديم الاستشارات القانونية من خلال أحدث وأفضل التقنيات سواء عن طريق التواصل إلكترونياً أو الذهاب إلى المكتب  او وسائل التواصل الإجتماعي حيث أن خدمة الاستشارات القانونية تتطلب السرعة في إبداء الرأي القانوني وإتخاذ الإجراءات اللازمه في الوقت المناسب لتمكين طالب المشورة في اتخاذ القرارات واتخاذ الإجراءات المطلوبه بسرعة ودقة عاليه            ",
            "يقدم مكتبنا أفضل الخدمات و الاستشارات القانونية وذلك في جميع نواحي القانون التي يقع فيها كلاً من الأفراد والشركات خلال حياتهم اليومية أوالعملية او في المدخرات و الاستثمار والأمور التجارية وذلك بتقديم أفضل الحلول  القانونية والنصح حول الاجراء المناسب لحماية مصالح العميل في كل مشكلة بما يضمن وصول العميل إلى فهم مشكلته وعواقبها والإجراءات الواجب اتخاذها لحل المشكلة ضمانا لتفادي العواقب الوخيمة لها"
        ],
        penText:"محمد العمر المنهالي"
    },
    {
        id:2,
        sercardImg: sercardImg2,
        sercard_hdng:"القضايا الجزائية",
        sercardModalImg:sercardModalImg2,
        sercardMdl_para:[
            " تعد الاستشارات القانونية السليمه الموثقه بالأدلة والبراهين القانونية وتقديم المشورة المطلوبة للعملاء من أهم وأفضل  الخطوات  قبل البدء بالإجراءات القانونية. و يقوم مكتب المحامى / محمد العمر المنهالى بتقديم الاستشارات القانونية من خلال أحدث وأفضل التقنيات سواء عن طريق التواصل إلكترونياً أو الذهاب إلى المكتب  او وسائل التواصل الإجتماعي حيث أن خدمة الاستشارات القانونية تتطلب السرعة في إبداء الرأي القانوني وإتخاذ الإجراءات اللازمه في الوقت المناسب لتمكين طالب المشورة في اتخاذ القرارات واتخاذ الإجراءات المطلوبه بسرعة ودقة عاليه            ",
        ],
        penText:"محمد العمر المنهالي"
    },
    {
        id:3,
        sercardImg: sercardImg3,
        sercard_hdng:"القضايا العمالية",
        sercardModalImg:sercardModalImg3,
        sercardMdl_para:[
            " تعد الاستشارات القانونية السليمه الموثقه بالأدلة والبراهين القانونية وتقديم المشورة المطلوبة للعملاء من أهم وأفضل  الخطوات  قبل البدء بالإجراءات القانونية. و يقوم مكتب المحامى / محمد العمر المنهالى بتقديم الاستشارات القانونية من خلال أحدث وأفضل التقنيات سواء عن طريق التواصل إلكترونياً أو الذهاب إلى المكتب  او وسائل التواصل الإجتماعي حيث أن خدمة الاستشارات القانونية تتطلب السرعة في إبداء الرأي القانوني وإتخاذ الإجراءات اللازمه في الوقت المناسب لتمكين طالب المشورة في اتخاذ القرارات واتخاذ الإجراءات المطلوبه بسرعة ودقة عاليه ",
        ],
        penText:"محمد العمر المنهالي"
    },
    {
        id:4,
        sercardImg: sercardImg4,
        sercard_hdng:"القضايا الأسرية",
        sercardModalImg:sercardModalImg4,
        sercardMdl_para:[
            " تعد الاستشارات القانونية السليمه الموثقه بالأدلة والبراهين القانونية وتقديم المشورة المطلوبة للعملاء من أهم وأفضل  الخطوات  قبل البدء بالإجراءات القانونية. و يقوم مكتب المحامى / محمد العمر المنهالى بتقديم الاستشارات القانونية من خلال أحدث وأفضل التقنيات سواء عن طريق التواصل إلكترونياً أو الذهاب إلى المكتب  او وسائل التواصل الإجتماعي حيث أن خدمة الاستشارات القانونية تتطلب السرعة في إبداء الرأي القانوني وإتخاذ الإجراءات اللازمه في الوقت المناسب لتمكين طالب المشورة في اتخاذ القرارات واتخاذ الإجراءات المطلوبه بسرعة ودقة عاليه ",
        ],
        penText:"محمد العمر المنهالي"
    },
    {
        id:5,
        sercardImg: sercardImg5,
        sercard_hdng:"صياغة العقود",
        sercardModalImg:sercardModalImg5,
        sercardMdl_para:[
            " تعد الاستشارات القانونية السليمه الموثقه بالأدلة والبراهين القانونية وتقديم المشورة المطلوبة للعملاء من أهم وأفضل  الخطوات  قبل البدء بالإجراءات القانونية. و يقوم مكتب المحامى / محمد العمر المنهالى بتقديم الاستشارات القانونية من خلال أحدث وأفضل التقنيات سواء عن طريق التواصل إلكترونياً أو الذهاب إلى المكتب  او وسائل التواصل الإجتماعي حيث أن خدمة الاستشارات القانونية تتطلب السرعة في إبداء الرأي القانوني وإتخاذ الإجراءات اللازمه في الوقت المناسب لتمكين طالب المشورة في اتخاذ القرارات واتخاذ الإجراءات المطلوبه بسرعة ودقة عاليه ",
        ],
        penText:"محمد العمر المنهالي"
    },
    {
        id:6,
        sercardImg: sercardImg6,
        sercard_hdng:"تسوية النزاعات",
        sercardModalImg:sercardModalImg6,
        sercardMdl_para:[
            " تعد الاستشارات القانونية السليمه الموثقه بالأدلة والبراهين القانونية وتقديم المشورة المطلوبة للعملاء من أهم وأفضل  الخطوات  قبل البدء بالإجراءات القانونية. و يقوم مكتب المحامى / محمد العمر المنهالى بتقديم الاستشارات القانونية من خلال أحدث وأفضل التقنيات سواء عن طريق التواصل إلكترونياً أو الذهاب إلى المكتب  او وسائل التواصل الإجتماعي حيث أن خدمة الاستشارات القانونية تتطلب السرعة في إبداء الرأي القانوني وإتخاذ الإجراءات اللازمه في الوقت المناسب لتمكين طالب المشورة في اتخاذ القرارات واتخاذ الإجراءات المطلوبه بسرعة ودقة عاليه ",
        ],
        penText:"محمد العمر المنهالي"
    },
    {
        id:7,
        sercardImg: sercardImg7,
        sercard_hdng:" المنازعات العقارية" ,
        sercardModalImg:sercardModalImg7,
        sercardMdl_para:[
            " تعد الاستشارات القانونية السليمه الموثقه بالأدلة والبراهين القانونية وتقديم المشورة المطلوبة للعملاء من أهم وأفضل  الخطوات  قبل البدء بالإجراءات القانونية. و يقوم مكتب المحامى / محمد العمر المنهالى بتقديم الاستشارات القانونية من خلال أحدث وأفضل التقنيات سواء عن طريق التواصل إلكترونياً أو الذهاب إلى المكتب  او وسائل التواصل الإجتماعي حيث أن خدمة الاستشارات القانونية تتطلب السرعة في إبداء الرأي القانوني وإتخاذ الإجراءات اللازمه في الوقت المناسب لتمكين طالب المشورة في اتخاذ القرارات واتخاذ الإجراءات المطلوبه بسرعة ودقة عاليه ",
        ],
        penText:"محمد العمر المنهالي"
    },
    {
        id:8,
        sercardImg: sercardImg5,
        sercard_hdng:"صياغة العقود",
        sercardModalImg:sercardModalImg5,
        sercardMdl_para:[
            " تعد الاستشارات القانونية السليمه الموثقه بالأدلة والبراهين القانونية وتقديم المشورة المطلوبة للعملاء من أهم وأفضل  الخطوات  قبل البدء بالإجراءات القانونية. و يقوم مكتب المحامى / محمد العمر المنهالى بتقديم الاستشارات القانونية من خلال أحدث وأفضل التقنيات سواء عن طريق التواصل إلكترونياً أو الذهاب إلى المكتب  او وسائل التواصل الإجتماعي حيث أن خدمة الاستشارات القانونية تتطلب السرعة في إبداء الرأي القانوني وإتخاذ الإجراءات اللازمه في الوقت المناسب لتمكين طالب المشورة في اتخاذ القرارات واتخاذ الإجراءات المطلوبه بسرعة ودقة عاليه ",
        ],
        penText:"محمد العمر المنهالي"
    },
]
const services = () => {
    return (
        <div className='main'>
            <div className="banner banner--ser">
                <Image src="/bannerbg.png" width="2020" height="174" alt="" className='bannerbg dark-none' />
                <Image src="/bannerbg_dark.png" width="2020" height="174" alt="" className='bannerbg d-none dark-show' />
                <div className="container">
                    <div className="banner-wrapper banner-wrapper2">
                        <div className="bannerBox bannerBox1">
                            <Image src="/arabic-person.png" width="476" height="578" alt="" className='bannerBox_img' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='ser'>
                <Image src="/faqbg.png" width="128" height="314" alt="" className='faqBg3' />
                <Image src="/faqbg2.png" width="139" height="237" alt="" className='faqBg4' />
                <div className="container">
                    <div className="aboutbox_hdng text-center ml-auto mr-auto aboutbox_hdng2">
                        خدمـاتنا
                    </div>
                    <div className="serWrapper serWrapper--ser">
                        <div className="serBox">
                            <h1 className="serBoxHdng">
                                ”
                                 خبرة  <span className="red"> قانونية  </span>
                                <br />
                                متميزة ورائـــــــــــــــــــدة في
                                <br />
                                المجال

                                “
                            </h1>
                        </div>
                        <div className="serBox">
                            <Image src="/services.png" width="640" height="649" alt="" className='serBoxImg' />
                        </div>
                    </div>
                    <div className="serboxesWrpr">
                        {sercard.map(({id,sercardImg,sercard_hdng,sercardModalImg,sercardMdl_para,penText})=>
                            <div className="sercard" key={id}>
                                <div className="sercard_holder">
                                    <Image src={sercardImg} width="250" height="250" alt="" className='sercardImg' />
                                </div>
                                <label className="sercard_hdng" htmlFor={id}>{sercard_hdng}</label>
                                <input type="checkbox" id={id} className="modal-toggle" />
                                <label htmlFor={id} className="modal cursor-pointer">
                                    <label className="modal-box  relative sercardModal" htmlFor="">
                                        <div className="sercardModalBody">
                                            <Image src="/serCardBg.png" width="1018" height="526" alt="" className='serCardBg' />
                                            <div className="sercardModalHolder">
                                                <Image src={sercardModalImg} width="502" height="508" alt="" className='sercardModalImg' />
                                            </div>
                                            <h1 className="sercardMdl_hdng">
                                                {sercard_hdng}
                                            </h1>
                                            <p className="sercardMdl_para">
                                                {sercardMdl_para}
                                            </p>
                                        </div>
                                        
                                        <div className="sercardModalFooter">
                                            <div className="penHolder">
                                                <Image src="/pen.svg" width="20" height="20" alt="" className='pen' />
                                            </div>
                                            <h4 className="penText"> بقلم :   {penText}
                                            </h4>
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

export default services