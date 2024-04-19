
import React from 'react';
import jsonData from '../../../data/data.json'
import Card from '@/app/components/Card';
const Customers = () => {

  const Customers = jsonData.bookings


  return (
    <div className='relative h-full text-[#462B0A] font-bold font-sans '>
      <h1 className=' h-16 left-10 right-10  top-20  rounded-md text-3xl mx-10'>User Data</h1>
      <div className='w-full h-[50px]  flex justify-end mb-5 '>
        <div className='flex w-[426px] h-[45px] border-2 border-[#462B0A] rounded-xl'>
          <div className='w-[80%] flex justify-center items-center'>
            Enter Customer Id Here
          </div>
          <div className='w-[20%] border-l-2 bg-[#462B0A] rounded-xl text-[#D8C2A7] flex justify-center items-center'>
            Search
          </div>
        </div>
      </div>
      <Card data={Customers} col1={"customerId"} col2={"name"} col3={"phoneNumber"} col4={"email"} col5={"address"} />
      <div className="flex justify-end mx-10 my-5">
        <button className="bg-[#462B0A] text-[#D8C2A7] px-4 py-2 rounded-md">Load More</button>
      </div>
    </div>
  );
};

export default Customers;
{/* <div className='absolute top-40 bottom-0 left-10 right-10 bg-[#D8C2A7] flex  justify-around p-10  border-2 rounded-lg  border-black '>

        <div  >
          <h1 className=' opacity-70'>CustomerId</h1>
          {booking.map((booking, index) => (
            <div className='p-2' key={index}>
              <h2 >Booking {booking.bookingId}</h2>

            </div>
          ))}

        </div>
        <div  >
          <h1 className='  text-center opacity-70'>
            Name
          </h1>

          {booking.map((booking, index) => (
            <div className='p-2' key={index}>
              <h2 className='  '> {booking.name}</h2>

            </div>
          ))}




        </div>
        <div  >


          <h1 className=' text-center opacity-70'>  Phone Number</h1>

          {booking.map((booking, index) => (
            <div className='p-2' key={index}>
              <h2 className=' '> {booking.phoneNumber}</h2>

            </div>
          ))}
        </div>
        <div >


          <h1 className=' text-center opacity-70'>    Email</h1>
          {booking.map((booking, index) => (
            <div className='p-2' key={index}>
              <h2 className=' '> {booking.email}</h2>

            </div>
          ))}
        </div>
        <div>


          <h1 className=' text-center opacity-70'>     Address</h1>

          {booking.map((booking, index) => (
            <div className='p-2' key={index}>
              <h2 className=' '> {booking.address}</h2>

            </div>
          ))}
        </div>



      </div> */}