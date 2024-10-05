import Logo2 from '../../assets/Logo2.svg'
import Image from 'next/image'
import { RiInstagramLine } from "react-icons/ri";
import { AiOutlineFacebook } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
    return (
        <div className='flex items-center justify-between lg:justify-center lg:gap-32 bg-[#19224D] gap-2 py-8 px-3'>
            <div>
                <Image src={Logo2} alt='logo' className='w-20' />
            </div>

            <div className='flex flex-col items-center'>
                <h3 className='text-white text-sm mb-2 text-left'>DISCOVER <br /> DESTINATION</h3>
                <ul>
                    <li className='text-gray-300 text-sm'>Bali</li>
                    <li className='text-gray-300 text-sm'>Karimun Jawa</li>
                    <li className='text-gray-300 text-sm'>Jepara</li>
                    <li className='text-gray-300 text-sm'>Yogyakarta</li>
                    <li className='text-gray-300 text-sm'>Flores</li>
                </ul>
            </div>

            <div>
                <h3 className='text-white text-sm'>CONTACT US</h3>

                <div>
                    <p className='text-gray-300 text-xs'>24 Shipley St.Arvada, CO 80003 <br />
                        09378493810 <br />
                        TravelBuddy@gmail.com
                    </p>

                    <p className='text-gray-300 text-xs'>TravelBuddy@gmail.com</p>
                </div>

                <div className='mt-3'>
                    <span className='text-sm text-red-500'>Social Media</span>
                    <div className='flex gap-3 mt-1'>
                        <a href="#">
                            <RiInstagramLine color='white' size={25} />
                        </a>

                        <a href="#">
                            <AiOutlineFacebook color='white' size={25} />
                        </a>

                        <a href="#">
                            <FaXTwitter color='white' size={25} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}