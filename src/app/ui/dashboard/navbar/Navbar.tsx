
'use client'
import { VscBellDot } from "react-icons/vsc";
import Image from 'next/image'
import user from "../../../../../public/user.jpg"

const Navbar = () => {
  return (
    <div>
      <div className="w-full h-[5rem] bg-[#EBD1B0] border-none  flex justify-between items-center border-2 rounded-xl">
        <h2 className="text-[#EBD1B0]">Navbar</h2>
        <div className="flex items-center justify-center">
          <div style={{ width: '30px', height: '30px', opacity: '0px', marginRight: 40, marginBottom: 10 }}>
            <VscBellDot size={45} color={'#462B0A'} />
          </div>
          <Image
            src={user}
            width={100}
            height={100}
            alt="Picture of the author"
            className="rounded-full mx-2"
            style={{ width: '55px', height: '55px', top: '22px', left: '1186px', gap: '0px', opacity: '0px' }}
          />

          <div className="items-end">
            <h4 className="text-lg font-semibold leading-tight text-[#462B0A] mr-[80px]" style={{ fontFamily: 'Open Sans', width: '77px', height: '22px', top: '33px', left: '1258px', gap: '0px', opacity: '0px', textAlign: 'left' }}>John Doe</h4>
            <h6 className="text-sm font-normal leading-tight text-[#462B0A]" style={{ fontFamily: 'Open Sans', width: '147px', height: '16px', top: '54px', left: '1255px', gap: '0px', opacity: '0px', textAlign: 'left' }}>johndoe@gmail.com</h6>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Navbar
