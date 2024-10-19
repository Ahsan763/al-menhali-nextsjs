import Image from 'next/image'
import React, {useState, useEffect,useRef} from 'react'
import { FiPlus } from 'react-icons/fi'
import cl1 from '../../public/cl1.png'
import cl2 from '../../public/cl2.png'
import cl3 from '../../public/cl3.png'
import cl4 from '../../public/cl4.png'
import cl5 from '../../public/cl5.png'
import cl6 from '../../public/cl6.png'
import ab1 from '../../public/ab1.png'
import AccordionItem from '../AccordionItem'
const clientBox = [
    {
        key:1,
        clientName:"Client 1",
        clientImg: cl1,
    },
    {
        key:2,
        clientName:"Client 2",
        clientImg: cl2,
    },
    {
        key:3,
        clientName:"Client 3",
        clientImg: cl3,
    },
    {
        key:4,
        clientName:"Client 4",
        clientImg: cl4,
    },
    {
        key:5,
        clientName:"Client 5",
        clientImg: cl5,
    },
    {
        key:6,
        clientName:"Client 6",
        clientImg: cl6,
    },
]
const accordionData = [
    {
        key:1,
        title:"خبرة أكثر من 24 عاما",
        img:ab1,
        desc: "يجب على المكتب أن يبين للعميل بوضوح وصراحة الموقف القانوني الحقيقي لأي نزاع في ضوء الواقع والقانون وخبرة المكتب.",
    },
    {
        key:2,
        title:"خبرة أكثر من 24 عاما",
        img:ab1,
        desc: "يجب على المكتب أن يبين للعميل بوضوح وصراحة الموقف القانوني الحقيقي لأي نزاع في ضوء الواقع والقانون وخبرة المكتب.",
    },
    {
        key:3,
        title:"خبرة أكثر من 24 عاما",
        img:ab1,
        desc: "يجب على المكتب أن يبين للعميل بوضوح وصراحة الموقف القانوني الحقيقي لأي نزاع في ضوء الواقع والقانون وخبرة المكتب.",
    }
]
const WhySec = () => {
    const [open, setOpen] = useState(false)
    const toggle = (index) => {
        if(open === index){
            return setOpen(null)
        }
        setOpen (index)
        console.log(index)
    }
    return (
        <div className='whySec'>
            <div className="container">
                <div className="whySec_wrapper flex">
                    <div className="whySecCol">
                        <h1 className="whySecBox_hdng">عملاء سعداء </h1>
                        <div className="whySecBox">
                            {clientBox.map(({clientName,clientImg},d)=>
                                <div className="clientBox" key={d}>
                                    <div className="clientBox_name">
                                        {clientName}
                                    </div>
                                    <Image src={clientImg} width="106" height="106" alt="client logo" className='clientBox_Img'/>
                                </div>
                            )}
                            
                        </div>
                    </div>
                    <div className="whySecCol">
                        <h1 className="whySecBox_hdng">لماذا نحن</h1>
                        <div className="whySecBox whySecBox2">
                            {accordionData.map((data,index) => {
                                return <AccordionItem key={index} open={index === open} title={data.title} img={data.img} desc = {data.desc} toggle={()=>toggle(index)}/>;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WhySec