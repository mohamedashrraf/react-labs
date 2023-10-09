import React from 'react'

import notFoundPage from '../../images/notfound.jpg'; //نحط الصور جوا السورس مش البابلك عشان الويب باك ونامبوتها هنا

export default function NotFound() {
  return (
      <img src={notFoundPage} className='w-100 vh-100' alt="" />
  )
}
