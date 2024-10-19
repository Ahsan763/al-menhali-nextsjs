import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import ServicesSlider from '../components/home/ServicesSlider'
import FAQ from '../components/home/FAQ'
import NewsLetter from '../components/NewsLetter'
import WhySec from '../components/home/WhySec'
import { HiArrowNarrowLeft } from 'react-icons/hi'
// commnt
const about = () => {
    return (
        <div className='main'>
            <div className="banner banner2">
                <div className="container">
                    <div className="banner-wrapper banner-wrapper2">
                        <div className="bannerBox bannerBox1">
                            <Image src="/arabic-person.png" width="476" height="578" alt="about al-menhali" className='bannerBox_img' />
                        </div>
                        <div className="bannerBox bannerBox2">
                            <Link href={"/#"}>
                                <div className="bannerBox_btn bannerBox_btn2">من نحن</div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='ser'>
                <Image src="/faqbg.png" width="128" height="314" alt="" className='faqBg3' />
                <Image src="/faqbg2.png" width="139" height="237" alt="" className='faqBg4' />
                <div className="container">
                    <ServicesSlider className={"servicesWrapper2"} />
                    <div className="serWrapper">
                        <div className="serBox">
                            <h1 className="serBoxHdng">
                                ”
                                إلتزامك
                                ب<span className="red">القانون
                                </span>

                                <br />
                                يعني مساهمتك في توفير
                                <br />
                                الحرية لك
                                “
                            </h1>
                        </div>
                        <div className="serBox">
                            <Image src="/img1.png" width="640" height="649" alt="services" className='serBoxImg' />
                        </div>
                    </div>
                </div>
            </div>
            < WhySec />
            <div className="about">
                <Image src="/abt4.png" width="971" height="506" alt="" className='aboutbg' />
                <div className="container">
                    <div className="aboutWrper flex items-center justify-between">
                        <div className="aboutbox aboutbox1">
                            <Image src="/abt1.png" width="719" height="672" alt="" className='aboutboxImg' />
                        </div>
                        <div className="aboutbox aboutbox2">
                            <h1 className="aboutbox_hdng">قيمتنا</h1>
                            <h1 className="aboutbox_subhdng">
                                الشفافية والنزاهة
                            </h1>
                            <p className="aboutbox_para">
                                يجب على المكتب أن يبين للعميل بوضوح وصراحة الموقف القانوني الحقيقي لأي نزاع في ضوء الواقع والقانون وخبرة المكتب. لا يجوز للمكتب أن يخجل من الإفصاح عن موقف العميل السيئ ومحاولة تقليل الضرر أو المخاطر للتأكد من أن العميل قادر على اتخاذ القرار السليم
                            </p>
                            <h1 className="aboutbox_subhdng">
                                الوعي القانوني
                            </h1>
                            <p className="aboutbox_para">
                                الوعي القانوني يعمل المكتب على الوعي القانوني للعميل من خلال شرح الإجراءات المتبعة في  النزاع والمدة المتوقعة للإجراءات وإجراءات الطعن والإيقاف عنه أو المعارضين أو المعارضة في تنفيذها بالشكل الذي يضمن للعميل أن يكون في راحة نفسية من مدة الإجراءات أو تقصيرها لمعرفة طبيعة ما سيكون متضاربًا
                            </p>
                            <h1 className="aboutbox_subhdng">
                                رعاية مصالح العميل
                            </h1>
                            <p className="aboutbox_para">
                                في كثير من الحالات يكون العميل غير قادر على الاتصال مع الخصم ، مما يجعل المكتب ملتزمًا باتخاذ الإجراء المناسب لصالح العميل ، من أجل ضمان حماية مصلحته حتى يتم التوفيق بين العميل لضمان الحفاظ على حقوقه
                            </p>
                        </div>
                    </div>
                    <div className="aboutWrper aboutWrper2 flex items-center justify-between">
                        <div className="aboutbox aboutbox1">
                            <Image src="/abt2.png" width="719" height="672" alt="about" className='aboutboxImg' />
                        </div>
                        <div className="aboutbox aboutbox2">
                            <h1 className="aboutbox_hdng">رسالتنا</h1>
                            <p className="aboutbox_para">
                                رسالتنا هي أن نقدم لعملائنا أفضل الخدمات القانونية المتكاملة والتي  يكون أساسها الإخلاص والتفاني مصطحبين معنا أفضل  المهارات المهنية والإحترافية الرفيعة ، ونحرص على تحقيق أفضل النتائج ونقدم في ذلك حلول فعّالة مع التزام قوي بالتميّز والتفكير الإبداعي والابتكار
                            </p>
                        </div>
                    </div>
                    <div className="aboutWrper flex items-center justify-between">
                        <div className="aboutbox aboutbox1">
                            <Image src="/abt3.png" width="719" height="672" alt="about" className='aboutboxImg' />
                        </div>
                        <div className="aboutbox aboutbox2">
                            <h1 className="aboutbox_hdng">رؤيتنا</h1>
                            <p className="aboutbox_para">
                                تتمثل رؤيتنا في تعميم العدالة بين أفراد المجتمع ، الذين لا يمتلكون الحماية القانونية اللازمة التي تحصّن لهم حياتهم من المخاطر   القانونية التي تواجههم في حياتهم و أعمالهم اليومي
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <FAQ />
            <NewsLetter />
        </div>
    )
}

export default about