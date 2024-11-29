import React from 'react'
import AdminSearch from './AdminSearch'
import Adminicons from './Adminicons'

export default function AdminNav() {
  return (
    <div className="flex justify-between items-center h-[10%] mx-4">
        <div><AdminSearch/></div>
        <div><Adminicons/></div>
    </div>
  )
}
