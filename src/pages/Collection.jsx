import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import { Title } from '../components/Title'

const Collection = () => {

  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>

      {/* Filter options */}

      <div className='min-w-60'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>

        {/* Category Filter */}

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Solids'} /> SOLIDS
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Women'} /> WOMEN
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Children'} /> CHILDREN
            </p>
          </div>
        </div>

        {/* SubCategory Filter options */}

        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>COLORS</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'RED'} /> RED
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Blue'} /> BLUE
            </p>
            <p className='flex gap-2'>
              <input className='w-3' type="checkbox" value={'Green'} /> GREEN
            </p>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Collection







