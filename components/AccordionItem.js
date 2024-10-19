import Image from 'next/image'
import {Collapse} from  "react-collapse"
import { FiPlus,FiMinus, } from 'react-icons/fi'
const AccordionItem = ({open, toggle, title, desc,img,}) => {
    return (
        <>
            <div className={open ? "active flex items-center justify-between exprRow" : "flex items-center justify-between exprRow"} onClick={toggle}>
                <h1 className="expr_hdng">{title}</h1>
                <div className="exprBtn">
                    {open ? <FiMinus className='exprBtnIcn' /> : <FiPlus className='exprBtnIcn' /> }
                </div>
                <Collapse isOpened={open}  >
                    <div className='bg-white flex whyAcc'>
                        <div className="expr_ab_holder">
                            <Image src={img} width="156" height="135" alt="image" className='expr_ab_img'/>
                        </div>
                        <p className='expr_abText'>
                            {desc}
                        </p>
                        
                    </div>
                </Collapse>
            </div>
        </>
    )
}

export default AccordionItem