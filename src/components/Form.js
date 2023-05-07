import React from 'react'
import Image from 'next/image';

function Form() {
  return (
    <>
    <div className='form-banner absolute top-[25%] left-0 right-0 z-20'>
<div className='container'>
   <form>
   <div className='flexible-form mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 flex items-center'>
        <div className='form-part w-[35%] ml-9 text-center pt-4 pb-8 px-10 bg-black bg-opacity-50 rounded-[30px]'>
            <h1 className=''> <span > Register </span>  Now</h1>
            <h4 className='text-white'>make a booking now</h4>
            <div className='main-form-part'>
                <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                    <div className="sm:col-span-12">
                        <div className="mt-4">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ">
                                <input type="text" name="name" id="name" className="block custom-form flex-1 border-0 " placeholder="Full Name"/>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ">
                                <input type="text" name="email-address" id="email-address" className="block custom-form flex-1 border-0 " placeholder="Email Address"/>
                            </div>
                        </div>
                        <div className="mt-4">
                            <div className="flex rounded-md shadow-sm ring-1 ring-inset ">
                                <input type="text" name="phone-number" id="phone-number" className="block custom-form flex-1 border-0 " placeholder="Phone Number"/>
                            </div>
                        </div>
                        <div className='mt-4'>
                        <select id="countries" className=" block w-full  custom-form">
                            <option selected>Choose Service</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                          </select>
                        </div>
                        <div className='mt-7'>
                          <button className='rounded-[10px] gradient-button-common py-2 px-11 text-white text-[28px]'>Register</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='content-banner pl-16'>
            <h2 className='text-white'> <span className='text-theme'>KARAOKE</span>  <br/> PROGRAM </h2>
        </div>
    </div>
   </form>
 
</div>
</div>
    </>
  )
}

export default Form;