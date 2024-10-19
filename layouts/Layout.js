import Image from 'next/image'
import Footer from './Footer'
import Header from './Header'

const Layout = ({children}) => {
    return (
        <>
            <Header />
                {children}
            <Footer />
            <input type="checkbox" id="HdrModal" className="modal-toggle" />
            <label htmlFor="HdrModal" className="modal cursor-pointer">
                <label className="modal-box sercardModal relative" htmlFor="">
                    <Image src="/consBg.png" width="1015" height="245" alt="" className='serCardBg' />
                    <div className="sercardModalBody">
                        <form className="form">
                        <h1 className="formHdng">طلب إستشارة قانونية</h1>
                            <input type="text" placeholder='إسمك كامل' className='form_input' />
                            <input type="text" placeholder='البريد الإلكتروني' className='form_input' />
                            <input type="text" placeholder='نوع الإستشارة' className='form_input' />
                            <select name="" id="" className='form_input'>
                                <option value="">نوع الإستشارة</option>
                                <option value="">إستشارة قانونية</option>
                                <option value="">عقودات</option>
                                <option value="">تسوية نزاعات</option>
                            </select>
                            <textarea name="" id="" placeholder='أكتب شرحاً موجزاً' className='form_input form_textarea'></textarea>
                            <button type='submit' className='formBtn'>إرسال</button>
                        </form>
                    </div>
                </label>
            </label>
        </>
    )
}

export default Layout