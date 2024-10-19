import Image from 'next/image'
import React,{useState} from 'react'
import {BsChevronDown} from 'react-icons/bs'
import blogCommBox__profile1 from '../public/cmnt.png'
const blogComm = [
    {
        key:1,
        blogCommBox__profile:blogCommBox__profile1,
        blogCommBox__name:"احمد ساهر",
        blogCommBox__time:"قبل ساعة",
        blogCommBox__para:"خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ"
    },
    {
        key:2,
        blogCommBox__profile:blogCommBox__profile1,
        blogCommBox__name:" مها الجعفري",
        blogCommBox__time:" قبل يومين",
        blogCommBox__para:"خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ"
    },
    {
        key:3,
        blogCommBox__profile:blogCommBox__profile1,
        blogCommBox__name:" سارة",
        blogCommBox__time:"قبل ساعة",
        blogCommBox__para:"خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ"
    },
    {
        key:4,
        blogCommBox__profile:blogCommBox__profile1,
        blogCommBox__name:"احمد ساهر",
        blogCommBox__time:"قبل ساعة",
        blogCommBox__para:"خلافاَ للإعتقاد السائد فإن لوريم إيبسوم ليس نصاَ عشوائياً، بل إن له جذور في الأدب اللاتيني الكلاسيكي منذ"
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
const Comments = () => {
    const [active, setActive] = useState(false)
    const toggle = (e) => {
        setActive(!active)
    }
    return (
        <div className="blogComments">
            <h1 className="blogComments__hdng">أضف تعليقاً</h1>
            <button className={active ? 'blogCommentsScroll' : 'blogCommentsScroll blogCommentsScroll2'} onClick={toggle} >
                <BsChevronDown  />
            </button>
            <div className={active ? "d-none" : "active" }>
                <form action="" className='cmntForm'>
                    <div className="blogComments_form flex items-center justify-between">
                        <input type="text" placeholder='أكتب تعليقك ' className="blogComments_form-input" />
                        <button className='blogComments_submit'>نشر</button>
                    </div>
                </form>
                <div className="blogCommBox">
                    {blogComm.map(({blogCommBox__profile,blogCommBox__name,blogCommBox__time,blogCommBox__para},t)=>
                        <div className="blogCommBoxRow" key="t">
                            <div className="blogCommBox__profile">
                                <Image src={blogCommBox__profile} width="22" height="26" alt="design" className='blogCommBox__img' />
                            </div>
                            <div className="blogCommBox__contnt">
                                <div className="flex items-center gap-3 mab-2">
                                    <h1 className="blogCommBox__hdng"> {blogCommBox__name}</h1>
                                    <p className="blogCommBox__time">{blogCommBox__time} </p>
                                </div>
                                <p className="blogCommBox__para">
                                    {blogCommBox__para}
                                </p>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Comments