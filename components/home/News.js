import Image from 'next/image'
import React from 'react'
import news1 from '../../public/news1.jpg'
import news2 from '../../public/news2.jpg'
import news3 from '../../public/news3.jpg'
import p1 from '../../public/p1.png'
import p2 from '../../public/p2.png'
import p3 from '../../public/p3.png'
import p4 from '../../public/p4.png'
const newsBox = [
    {
      key:1,
      newsBox_img:news1,
      newsBox_tab:"المنازعات العقارية",
      newspostTime: "قبل يومين",
      newsBox_contentHdng:"قوانين العقارات الجديد بأبو ظبي الإماارات  يفرض علي المالكين",
      newBoxRB_profileImg:p1,
      newBoxRB_profileName:"محمد العمر"
    },
    {
      key:2,
      newsBox_img:news2,
      newsBox_tab:"تسوية النزاعات",
      newspostTime: "قبل سنة",
      newsBox_contentHdng:"قوانين العقارات الجديد بأبو ظبي الإماارات  يفرض علي المالكين",
      newBoxRB_profileImg:p2,
      newBoxRB_profileName:" احمد صالح"
    },
    {
      key:3,
      newsBox_img:news3,
      newsBox_tab:"القضايا العمالية",
      newspostTime: " قبل شهري",
      newsBox_contentHdng:"قوانين العقارات الجديد بأبو ظبي الإماارات  يفرض علي المالكين",
      newBoxRB_profileImg:p3,
      newBoxRB_profileName:" محمد العمر "
    },
]
const News = () => {
    return (
      <div className="news">
          <div className="container">
            <h1 className="hdng red">آخر الأخبار</h1>
            <div className="newsWrapper flex">
              {newsBox.map(({newsBox_img,newsBox_tab,newspostTime,newsBox_contentHdng,newBoxRB_profileImg,newBoxRB_profileName},c)=>
                <div className="newsBox" key={c}>
                <div className="newsBox_holder">
                    <Image src={newsBox_img} width="451" height="383" alt="news" className='newsBox_img' />
                    <div className="newsBox_tab">{newsBox_tab}</div>
                </div>
                <div className="newsBox_content">
                    <div className="newsBox_wrapper flex items-center justify-between flex-wrap">
                    <div className="newBoxRB">
                        <Image src="/tick.svg" width="25" height="25" alt="icon" className='newBoxRB_img' />
                        <div className="newBoxRB_text">جديد متداول</div>
                    </div>
                    <div className="newBoxRB">
                        <Image src="/clock2.svg" width="18" height="17" alt="clock" className='newBoxRB_img' />
                        <div className="newBoxRB_text">{newspostTime}</div>
                    </div>
                    </div>
                    <h1 className="newsBox_contentHdng">
                    {newsBox_contentHdng}
                    </h1>
                    <div className="pfRow flex items-center">
                    <Image src={newBoxRB_profileImg} width="45" height="45" alt="profile" className='newBoxRB_img2' />
                    <div className="pfRow_text">{newBoxRB_profileName}</div>
                    </div>
                </div>
                </div>
              )}
            </div>
          </div>
      </div>
    )
}

export default News