import React from 'react'

const ManageUser = () => {
    return (
        <div className=' flex  justify-evenly items-end '>

            <div>

                <h4 className='ml-4 text-lg text-[#462B0A] m-1'>Name</h4>
                <input className='border-2 border-black p-2 rounded-xl bg-[#D8C2A7] mx-4  w-[350px] h-[50px] placeholder:text-[#462B0A] placeholder:text-xl ' placeholder='Surya Sharma' />

            </div>
            <div>

                <h4 className='ml-4 text-lg text-[#462B0A]'>   Email-Id</h4>
                <input className='border-2 border-black p-2 rounded-xl bg-[#D8C2A7] mx-4  w-[350px] h-[50px] placeholder:text-[#462B0A] placeholder:text-xl ' placeholder='admin123@gmail.com' />

            </div>

            <div>

                <h4 className='ml-4 text-lg text-[#462B0A]'>Password</h4>
                <input className='border-2 border-black p-2 rounded-xl bg-[#D8C2A7] mx-4  w-[350px] h-[50px] placeholder:text-[#462B0A] placeholder:text-xl placeholder:items-center' placeholder='***********' />

            </div>

            <button className='bg-[#462B0A] h-[50px] w-[80px] p-0 rounded-lg '>Save</button>


        </div>

    )
}

export default ManageUser