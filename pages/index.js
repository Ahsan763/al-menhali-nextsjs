import Image from 'next/image'
import Link from 'next/link';
import { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useRouter } from "next/router";
import ServicesBox from '../components/ServicesBox'
import WhySec from '../components/home/WhySec'
import Accordion  from '../components/Accordion'
import FAQ from '../components/home/FAQ'
import News from '../components/home/News'
import AboutSec from '../components/home/AboutSec'
import ServicesSlider from '../components/home/ServicesSlider'
import NewsLetter from '../components/NewsLetter'
import serimg1 from '../public/ser1.png'
import serimg2 from '../public/ser2.png'
import serimg3 from '../public/ser3.png'
import serimg4 from '../public/ser4.png'
import serimg5 from '../public/ser5.png'
import serimg6 from '../public/ser6.png'
import serimg7 from '../public/ser7.png'
import p1 from '../public/p1.png'
import p2 from '../public/p2.png'
import p3 from '../public/p3.png'
import PdfViewerComponent from '../components/PdfViewerComponent';

export default function Home() {
  const { locale } = useRouter();
  const dir = locale === "ar" ? "rtl" : "ltr";
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div className='main homepage'>
      <div className="banner">
        <div className="container">
          <div className="banner-wrapper">
            <div className="bannerBox bannerBox1">
              <Image src="/arabic-person.png" width="476" height="578" alt="banner" className='bannerBox_img' />
            </div>
            <div className="bannerBox bannerBox2">
              <h1 className="bannerBox_hdng">مكتب المنهالي للمحاماة</h1>
              <p className="bannerBox_para">
                خـيـارك الـقــانــونــي الأمــثـــل من أفضل مكاتب المحاماة
                في دولة الإمارات العربية المتحدة
              </p>
              <Link href={"/services"}>
                <div className="bannerBox_btn">المزيد</div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* banner end */}
      {/* <div className="services">
        <Image src="/serBg.png" width="336" height="501" alt='background' className='servicesBg' />
        <Image src="/serBg2.png" width="382" height="501" alt='background' className='servicesBg2' />
        <div className="container">
          <ServicesSlider />
          <div className="lawyer">
            <h1 className="hdng red">المحامون</h1>
            <div className="pWrapper">
              {pBox.map(({pBox_img,pBox_footer_text,instLink,fbLink,twtLink,wpLink,pBox_footerLink,tagNumber},b) =>
                <div className="pBox" key={b}>
                  <div className="pBox_holder">
                    <div className="pBox_holder_tag">
                      <p className="pBox_holder_tag_sm_text">خبرة</p>
                      <div className="pBox_holder_tagNumber">{tagNumber}</div>
                    </div>
                    <Image src={pBox_img} width="145" height="145" alt="profile" className="pBox_img" />
                    <ul className='socialMedia flex items-center'>
                      <li className="socialMedia_item">
                        <Link href={instLink}>
                          <div className="socialMedia_link">
                            <Image src="/insta.svg" width="25" height="25" alt="instagram" />
                          </div>
                        </Link>
                      </li>
                      <li className="socialMedia_item">
                        <Link href={fbLink}>
                          <div className="socialMedia_link">
                            <Image src="/fb.svg" width="25" height="25" alt="facebook" />
                          </div>
                        </Link>
                      </li>
                      <li className="socialMedia_item">
                        <Link href={twtLink}>
                          <div className="socialMedia_link">
                            <Image src="/twt.svg" width="25" height="25" alt="twitter" />
                          </div>
                        </Link>
                      </li>
                      <li className="socialMedia_item">
                        <Link href={wpLink}>
                          <div className="socialMedia_link">
                            <Image src="/wp.svg" width="25" height="25" alt="whatsup" />
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <Link href={pBox_footerLink}>
                    <div className="pBox_footer">
                      <h3 className="pBox_footer_text">{pBox_footer_text}</h3>
                      <HiArrowNarrowLeft className='pBox_footerIcn' />
                    </div>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div> */}
      {/* services + lawyer end */}
      {/* <AboutSec /> */}
      {/* about section end */}
      {/* <News /> */}
      {/* news End */}
      {/* <WhySec /> */}
      {/* why us section end */}
      {/* <FAQ /> */}
      {/* faq end */}
      {/* <NewsLetter /> */}
      {/* News Letter */}
      <div className="download">
        <div className="container">
          <Link href="/yso-deck.pdf">
            <div download  className="download-btn">
              <div className="download-btn-box1">
                <Image src="/dowbload-pdf.png" width="476" height="578" alt="banner" className='download-btn-box1_img' />
              </div>
              <div className="download-btn-box2">Download PDF</div>
            </div>
          </Link>
        </div>
      </div>
      <div className="pagerviewer">
        <div className="container-fluid">
          <Swiper
            slidesPerView={1}
            pagination={pagination}
            modules={[Pagination]}
          >
            <SwiperSlide>
              <div className="pdfImgbox">
                <Image src="/pdf-pages/yso_pages-to-jpg-0001.jpg" width="3300" height={2550} alt="" className="pdfImgbox__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pdfImgbox">
                <Image src="/pdf-pages/yso_pages-to-jpg-0002.jpg" width="3300" height={2550} alt="" className="pdfImgbox__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="pdfImgbox">
                <Image src="/pdf-pages/yso_pages-to-jpg-0003.jpg" width="3300" height={2550} alt="" className="pdfImgbox__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pdfImgbox">
                <Image src="/pdf-pages/yso_pages-to-jpg-0004.jpg" width="3300" height={2550} alt="" className="pdfImgbox__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pdfImgbox">
                <Image src="/pdf-pages/yso_pages-to-jpg-0005.jpg" width="3300" height={2550} alt="" className="pdfImgbox__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pdfImgbox">
                <Image src="/pdf-pages/yso_pages-to-jpg-0006.jpg" width="3300" height={2550} alt="" className="pdfImgbox__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pdfImgbox">
                <Image src="/pdf-pages/yso_pages-to-jpg-0007.jpg" width="3300" height={2550} alt="" className="pdfImgbox__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pdfImgbox">
                <Image src="/pdf-pages/yso_pages-to-jpg-0008.jpg" width="3300" height={2550} alt="" className="pdfImgbox__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pdfImgbox">
                <Image src="/pdf-pages/yso_pages-to-jpg-0009.jpg" width="3300" height={2550} alt="" className="pdfImgbox__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pdfImgbox">
                <Image src="/pdf-pages/yso_pages-to-jpg-0010.jpg" width="3300" height={2550} alt="" className="pdfImgbox__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pdfImgbox">
                <Image src="/pdf-pages/yso_pages-to-jpg-0011.jpg" width="3300" height={2550} alt="" className="pdfImgbox__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pdfImgbox">
                <Image src="/pdf-pages/yso_pages-to-jpg-0012.jpg" width="3300" height={2550} alt="" className="pdfImgbox__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pdfImgbox">
                <Image src="/pdf-pages/yso_pages-to-jpg-0013.jpg" width="3300" height={2550} alt="" className="pdfImgbox__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pdfImgbox">
                <Image src="/pdf-pages/yso_pages-to-jpg-0014.jpg" width="3300" height={2550} alt="" className="pdfImgbox__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pdfImgbox">
                <Image src="/pdf-pages/yso_pages-to-jpg-0015.jpg" width="3300" height={2550} alt="" className="pdfImgbox__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pdfImgbox">
                <Image src="/pdf-pages/yso_pages-to-jpg-0016.jpg" width="3300" height={2550} alt="" className="pdfImgbox__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pdfImgbox">
                <Image src="/pdf-pages/yso_pages-to-jpg-0017.jpg" width="3300" height={2550} alt="" className="pdfImgbox__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pdfImgbox">
                <Image src="/pdf-pages/yso_pages-to-jpg-0018.jpg" width="3300" height={2550} alt="" className="pdfImgbox__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pdfImgbox">
                <Image src="/pdf-pages/yso_pages-to-jpg-0019.jpg" width="3300" height={2550} alt="" className="pdfImgbox__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pdfImgbox">
                <Image src="/pdf-pages/yso_pages-to-jpg-0020.jpg" width="3300" height={2550} alt="" className="pdfImgbox__img" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="pdfImgbox">
                <Image src="/pdf-pages/yso_pages-to-jpg-0021.jpg" width="3300" height={2550} alt="" className="pdfImgbox__img" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}
