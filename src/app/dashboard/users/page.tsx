import React from 'react'
import { FaUsers } from "react-icons/fa6";
import { TbChecklist } from "react-icons/tb";
import { FaUserPlus } from "react-icons/fa"
import ManageUser from '@/app/components/manageUser';
const Users = () => {
  return (
    <div >
      <h1 className='absolute top-[140px] left-[342px] text-4xl font-semibold text-[#462B0A]'>
        Manage Users
      </h1>
      <div className='absolute top-[203px] left-[327px]'>
        <ManageUser />
        <ManageUser />
        <ManageUser />
        <ManageUser />
      </div>

      <div className='absolute top-[600px] left-[367px]' >
        <button className='bg-[#462B0A] h-[50px] w-[213px] p-0 rounded-lg  p-y-25 '>Add User</button>
      </div>

    </div>
  )
}

export default Users