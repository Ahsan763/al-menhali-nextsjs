import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SocialMedia = () => {
    return (
        <ul className='socialMedia flex items-center'>
             <li className="socialMedia_item">
                <Link href={"#"}>
                    <div className="socialMedia_link">
                        <Image src="/insta.svg" width="25" height="25" alt="instagram" />
                    </div>
                </Link>
            </li>
            <li className="socialMedia_item">
                <Link href={"#"}>
                    <div className="socialMedia_link">
                        <Image src="/fb.svg" width="25" height="25" alt="facebook" />
                    </div>
                </Link>
            </li>
            <li className="socialMedia_item">
                <Link href={"#"}>
                    <div className="socialMedia_link">
                        <Image src="/twt.svg" width="25" height="25" alt="twitter" />
                    </div>
                </Link>
            </li>
            <li className="socialMedia_item">
                <Link href={"#"}>
                    <div className="socialMedia_link">
                        <Image src="/wp.svg" width="25" height="25" alt="whatsup" />
                    </div>
                </Link>
            </li>
        </ul>
    )
}

export default SocialMedia