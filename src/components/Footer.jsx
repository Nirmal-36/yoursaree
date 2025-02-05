import React from 'react'
import { assets } from '../assets/assets'
const Footer = () => {


    return (
        <div>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

                <div>
                    <img src={assets.logo} className='mb-5 w-32' alt="The Saree Story" />
                    <p className='w-full md:w-2/3 text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus impedit ad alias commodi a beatae repellat, cupiditate sint dolorum fuga tempore unde sit ducimus excepturi animi quaerat quae, maxime quod.</p>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>COMPANY</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>

                <div>
                    <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                    <ul className='flex flex-col gap-1 text-gray-600'>
                        <li>+1 136 036 092</li>
                        <li>yoursaree@gmail.com</li>
                    </ul>
                </div>

                <div className='col-span-3'>
                    <hr />
                    <p className='text-center py-5 text-sm font-medium'>Copyright 2025@ yoursaree.com - All Rights Reserved.</p>
                </div>

            </div>
        </div>

    )
}

export default Footer