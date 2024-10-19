import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import NewsLetter from '../../components/NewsLetter'
import blogPostImg1 from '../../public/blog1.png'
import blogPostImg2 from '../../public/blog2.png'
import blogPostImg3 from '../../public/blog3.png'
import blogPostImg4 from '../../public/blog4.png'
import authorImg1 from '../../public/p1.png'
import { useRouter } from 'next/router'
import blogBoxNewsimg1 from '../../public/news1.jpg'
import blogBoxNewsimg2 from '../../public/news2.jpg'
import blogBoxNewsimg3 from '../../public/news3.jpg'
import blogBoxNews__twt1 from '../../public/twt.png'
import blogBoxNews__fb1 from '../../public/fb.png'
import blogSlCard__img1 from '../../public/blogSliderimg1.png'
import blogSlCard__img2 from '../../public/blogSliderimg2.png'
import blogSlCard__img3 from '../../public/blogSliderimg3.png'
import blogSlCard__img4 from '../../public/blogSliderimg4.png'
import blogSlCard_person1 from '../../public/p1.png'

const blogNews = [
    {
        key:1,
        blogBoxNews__img:blogBoxNewsimg1,
        blogBoxNews_hdng:"المادة 413 ألعاب القمار هي الألعاب",
        blogBoxNews_date:"25 / 10 /2023"
    },
    {
        key:2,
        blogBoxNews__img:blogBoxNewsimg2,
        blogBoxNews_hdng:"المادة 413 ألعاب القمار هي الألعاب",
        blogBoxNews_date:"25 / 10 /2023"
    },
    {
        key:3,
        blogBoxNews__img:blogBoxNewsimg3,
        blogBoxNews_hdng:"المادة 413 ألعاب القمار هي الألعاب",
        blogBoxNews_date:"25 / 10 /2023"
    },
]
const blogBoxTwitter = [
    {
        key:1,
        blogBoxNews__twt:blogBoxNews__twt1,
        blogtwt_hdng: "المادة 413 ألعاب القمار هي الألعاب",
        blogtwt_date: "25 / 10 /2023"
    },
    {
        key:2,
        blogBoxNews__twt:blogBoxNews__twt1,
        blogtwt_hdng: "المادة 413 ألعاب القمار هي الألعاب",
        blogtwt_date: "25 / 10 /2023"
    },
    {
        key:3,
        blogBoxNews__twt:blogBoxNews__twt1,
        blogtwt_hdng: "المادة 413 ألعاب القمار هي الألعاب",
        blogtwt_date: "25 / 10 /2023"
    },
    {
        key:3,
        blogBoxNews__twt:blogBoxNews__twt1,
        blogtwt_hdng: "المادة 413 ألعاب القمار هي الألعاب",
        blogtwt_date: "25 / 10 /2023"
    }
]
const blogBoxfb = [
    {
        key:1,
        blogBoxNews__fb:blogBoxNews__fb1,
        blogfb_hdng: "المادة 413 ألعاب القمار هي الألعاب",
        blogfb_date: "25 / 10 /2023"
    },
    {
        key:2,
        blogBoxNews__fb:blogBoxNews__fb1,
        blogfb_hdng: "المادة 413 ألعاب القمار هي الألعاب",
        blogfb_date: "25 / 10 /2023"
    },
    {
        key:3,
        blogBoxNews__fb:blogBoxNews__fb1,
        blogfb_hdng: "المادة 413 ألعاب القمار هي الألعاب",
        blogfb_date: "25 / 10 /2023"
    },
    {
        key:4,
        blogBoxNews__fb:blogBoxNews__fb1,
        blogfb_hdng: "المادة 413 ألعاب القمار هي الألعاب",
        blogfb_date: "25 / 10 /2023"
    },
]
const blogPost = [
    {
        id:1,
        blogPostImg:blogPostImg1,
        authorImg:authorImg1,
        authorName: " احمد المنهالي ",
        blogPostTime:" قبل ساعة ",
        blogPostHdng:" المادة 413 ألعاب القمار هي الألعاب ",
        blogPostPara:" سيت يتبيرسبايكياتيس يوندي أومنيس أستي ناتيس أيررور سيت فوليبتاتيم أكيسأنتييوم دولاريمكيو لايودانتيوم,توتام ريم أبيرأم,أيكيو أبسا كيواي ",

    },
    {
        id:2,
        blogPostImg:blogPostImg2,
        authorImg:authorImg1,
        authorName: " احمد المنهالي ",
        blogPostTime:" قبل ساعة ",
        blogPostHdng:" المادة 413 ألعاب القمار هي الألعاب ",
        blogPostPara:" سيت يتبيرسبايكياتيس يوندي أومنيس أستي ناتيس أيررور سيت فوليبتاتيم أكيسأنتييوم دولاريمكيو لايودانتيوم,توتام ريم أبيرأم,أيكيو أبسا كيواي ",

    },
    {
        id:3,
        blogPostImg:blogPostImg3,
        authorImg:authorImg1,
        authorName: " احمد المنهالي ",
        blogPostTime:" قبل ساعة ",
        blogPostHdng:" المادة 413 ألعاب القمار هي الألعاب ",
        blogPostPara:" سيت يتبيرسبايكياتيس يوندي أومنيس أستي ناتيس أيررور سيت فوليبتاتيم أكيسأنتييوم دولاريمكيو لايودانتيوم,توتام ريم أبيرأم,أيكيو أبسا كيواي ",

    },
    {
        id:4,
        blogPostImg:blogPostImg4,
        authorImg:authorImg1,
        authorName: " احمد المنهالي ",
        blogPostTime:" قبل ساعة ",
        blogPostHdng:" المادة 413 ألعاب القمار هي الألعاب ",
        blogPostPara:" سيت يتبيرسبايكياتيس يوندي أومنيس أستي ناتيس أيررور سيت فوليبتاتيم أكيسأنتييوم دولاريمكيو لايودانتيوم,توتام ريم أبيرأم,أيكيو أبسا كيواي ",

    },
]
const blogSlCard = [
    {
        key:1,
        blogSlCard__img:blogSlCard__img1,
        blogSlCard_person:blogSlCard_person1,
        blogSlCard__text:"قانون العقارات الجديد سيسري من بداية هذا العام"
    },
    {
        key:2,
        blogSlCard__img:blogSlCard__img2,
        blogSlCard_person:blogSlCard_person1,
        blogSlCard__text:"قانون العقارات الجديد سيسري من بداية هذا العام"
    },
    {
        key:3,
        blogSlCard__img:blogSlCard__img3,
        blogSlCard_person:blogSlCard_person1,
        blogSlCard__text:"قانون العقارات الجديد سيسري من بداية هذا العام"
    },
    {
        key:4,
        blogSlCard__img:blogSlCard__img4,
        blogSlCard_person:blogSlCard_person1,
        blogSlCard__text:"قانون العقارات الجديد سيسري من بداية هذا العام"
    },
    {
        key:5,
        blogSlCard__img:blogSlCard__img2,
        blogSlCard_person:blogSlCard_person1,
        blogSlCard__text:"قانون العقارات الجديد سيسري من بداية هذا العام"
    },
    {
        key:6,
        blogSlCard__img:blogSlCard__img3,
        blogSlCard_person:blogSlCard_person1,
        blogSlCard__text:"قانون العقارات الجديد سيسري من بداية هذا العام"
    },
]
const tag = [
    {
        key:1,
        tagname:"اسر"
    },
    {
        key:2,
        tagname:"القضاء"
    },
    {
        key:3,
        tagname:"نزاعات"
    },
    {
        key:4,
        tagname:"إستشارات"
    },
]
const blog = () => {
    return (
        <div className="main">
            <div className="banner banner--blog">
                <div className="container">
                    <div className="banner-wrapper banner-wrapper--blog">
                        <div className="bannerBlogBox1">
                            <Image src="/blog.png" width="574" height="596" alt="banner" className='bannerBlogBox_img' />
                        </div>
                        <div className="bannerBlogBox2">
                            <div className="bannerBox_btn bannerBox_btn2">المدونة</div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="blog relative">
                <Image src="/pp1.png" width="190" height="190" alt="design" className='blogwrprImg' />
                <Image src="/faqbg.png" width="128" height="314" alt="design" className='faqBg3 faqBg3--lawyer' />
                <Image src="/faqbg2.png" width="139" height="237" alt="design" className='faqBg4 faqBg4--lawyer' />
                <Image src="/Oval.png" width="500" height="450" alt="design" className='faqBg5' />
                <div className="container">
                    <div className="blogWrpr">
                        <div className="blogBox1">
                            {blogPost.map(({id,blogPostImg,authorImg,authorName,blogPostTime,blogPostHdng,blogPostPara})=>
                                <div className="blogPost" key={id}>
                                    <div className="blogPost__header">
                                        <Image src={blogPostImg} width="428" height="356" alt="blog post" className='blogPost__img' />
                                        <div className="blogPost__bottom">
                                            <div className="blogPost__bottom-b">
                                                <Image src={authorImg} width="145" height="145" alt="blog author" className='blogPost__bottom-img' />
                                                <h3 className="blogPost__bottom-name">{authorName}</h3>
                                            </div>
                                            <h6 className="blogPost__bottom-time">{blogPostTime}</h6>
                                        </div>
                                    </div>
                                    <div className="blogPost_body">
                                        <h1 className="blogPost_hdng">{blogPostHdng}</h1>
                                        <p className="blogPost_para">
                                            {blogPostPara}
                                        </p>
                                        <Link href={'blog/{id}'}>
                                            <div className="blogPost__btn">المزيد</div>
                                        </Link>
                                    </div>
                                </div>
                            )}
                            {/* blog post  end */}
                            <div className="blogSlider">
                                <h1 className="blogSlider_hding">اخر الأخبار</h1>
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    className="blogSliderInner"
                                    slidesPerView={5}
                                    navigation={false}
                                    pagination={{clickable:true}}
                                    breakpoints={{
                                        0: {
                                        slidesPerView: 1,
                                        },
                                        540: {
                                        slidesPerView: 2,
                                        },
                                        768: {
                                        slidesPerView: 3,
                                        },
                                        1024: {
                                        slidesPerView: 2,
                                        },
                                        1400: {
                                            slidesPerView: 4,
                                        }
                                    }}
                                    >
                                    {blogSlCard.map(({blogSlCard__img,blogSlCard_person,blogSlCard__text},l) =>
                                        <SwiperSlide key={l}>
                                            <div className="blogSlCard" key={l}>
                                                <div className="blogSlCard__hdr">
                                                    <Image src={blogSlCard__img} width="205" height="141" alt="blog slider" className='blogSlCard__img' />
                                                </div>
                                                <div className="blogSlCard__body">
                                                    <Image src={blogSlCard_person} width="145" height="145" alt="blog person" className='blogSlCard__body-img' />
                                                    <p className="blogSlCard__text"> {blogSlCard__text} </p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )}
                                </Swiper>
                            </div>
                        </div>
                        <div className="blogBox2">
                            <div className="blogBox2Card">
                                <h1 className="blogBox2Card__hdng">مواضيع وقضايا متداولة</h1>
                                <div className="tagsWpr">
                                    {tag.map(({tagname},y) =>
                                        <div className="tag" key={y}>
                                            {tagname}
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="blogBox2Card">
                                <h1 className="blogBox2Card__hdng"> اخر الأخبار </h1>
                                {blogNews.map(({blogBoxNews__img,blogBoxNews_hdng,blogBoxNews_date},q)=> 
                                    <div className="blogBoxNews" key={q}>
                                        <div className="blogBoxNews__Hdr">
                                            <Image src={blogBoxNews__img} width="190" height="190" alt="news" className='blogBoxNews__img' />
                                        </div>
                                        <div className="blogBoxNews__body">
                                            <h1 className="blogBoxNews_hdng"> {blogBoxNews_hdng} </h1>
                                            <p className="blogBoxNews_date">{blogBoxNews_date}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="blogBox2Card">
                                <h1 className="blogBox2Card__hdng">  آخر الاخبار من تويتر  </h1>
                                {blogBoxTwitter.map(({blogBoxNews__twt,blogtwt_hdng,blogtwt_date},w)=>
                                    <div className="blogBoxNews" key={w}>
                                        <div className="blogBoxNews__Hdr2">
                                            <Image src={blogBoxNews__twt} width="40" height="40" alt="twitter" className='blogBoxNews__twt' />
                                        </div>
                                        <div className="blogBoxNews__body2">
                                            <h1 className="blogBoxNews_hdng blue"> {blogtwt_hdng} </h1>
                                            <p className="blogBoxNews_date">{blogtwt_date}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                            <div className="blogBox2Card">
                                <h1 className="blogBox2Card__hdng">  آخر الاخبار من فيس بوك </h1>
                                {blogBoxfb.map(({blogBoxNews__fb,blogfb_hdng,blogfb_date},e)=>
                                    <div className="blogBoxNews" key={e}>
                                        <div className="blogBoxNews__Hdr2">
                                            <Image src={blogBoxNews__fb} width="40" height="40" alt="twitter" className='blogBoxNews__twt' />
                                        </div>
                                        <div className="blogBoxNews__body2">
                                            <h1 className="blogBoxNews_hdng blue"> {blogfb_hdng} </h1>
                                            <p className="blogBoxNews_date">{blogfb_date}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <NewsLetter />
        </div>
    )
} 

export default blog