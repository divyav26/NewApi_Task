import React from 'react'
import { NavLink } from 'react-router-dom'

const NewItem = ({title,description,url,img}) => {
  const fallbackImage = 'https://media.istockphoto.com/id/1323187298/vector/vector-illustration-modern-label-new-update-with-bell-web-banner-element.jpg?s=612x612&w=0&k=20&c=1DDPkWIG-XrBOswev6IeOFVuXgAZY-EjWjVQlre4p64='
  return (
<div className="bg-white rounded-lg shadow-lg w-full h-[70vh] overflow-hidden">
      <img src={img || fallbackImage} alt={title} className="w-full h-[200px] object-cover"/>
      <div className="p-4">
        <h2 className="text-sm font-bold mb-2">{title?.substring(0,25)}</h2>
        <p className="text-gray-700 mb-4 text-xs">{description?.substring(0,100).concat(".....")}<span></span></p>
        <NavLink to={url} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 text-xs px-4 border border-blue-500 hover:border-transparent rounded" target="_blank" rel="noopener noreferrer">Read more</NavLink>
      </div>
    </div>
  )
}

export default NewItem
