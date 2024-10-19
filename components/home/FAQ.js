import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Image from 'next/image';
const faq = [
    {
        key:1,
        accHder:"ماذا يقدم المكتب فعلا حول هذه القضايا ؟",
        accTxt:"يجب على المكتب أن يبين للعميل بوضوح وصراحة الموقف القانوني الحقيقي لأي نزاع في ضوء الواقع والقانون وخبرة المكتب.",
    },
    {
        key:2,
        accHder:"هل يمكننا مساعدة الشركات في القضايا ؟",
        accTxt:"يجب على المكتب أن يبين للعميل بوضوح وصراحة الموقف القانوني الحقيقي لأي نزاع في ضوء الواقع والقانون وخبرة المكتب.",
    },
    {
        key:3,
        accHder:"كم تكلفة القضايا التي تستمر اكثر من عامين ؟",
        accTxt:"يجب على المكتب أن يبين للعميل بوضوح وصراحة الموقف القانوني الحقيقي لأي نزاع في ضوء الواقع والقانون وخبرة المكتب.",
    },
]
const FAQ = () => {
    return (
        <div className='faq'>
            <Image src="/faqbg.png" width="128" height="314" alt="background" className='faqBg' />
            <Image src="/faqbg2.png" width="139" height="237" alt="background" className='faqBg2' />
            <div className="container">
                <h1 className="hdng red">الأسئلة الشائعة</h1>
                <div className="faqWrapper">
                    <div className="faqBox">
                        {faq.map(({accHder,accTxt},f)=>
                            <Accordion key={f} className={"acc"}>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                    <Typography className={"accHdng"}>{accHder}</Typography>
                                </AccordionSummary>
                                <AccordionDetails className={"accParaBox"}>
                                    <Typography className={"accPara"}>
                                        {accTxt}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        )}
                    </div>
                    <div className="faqBox">
                        <Image src="/faq.png" width="739" height="366" alt="FAQ" className='faqBoxImg' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ