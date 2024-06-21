import React from 'react'

const NewItem = ({title,description,url,img}) => {
   
  return (
<div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={img} alt={title} className="w-full h-48 object-cover"/>
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <a href={url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">Read more</a>
      </div>
    </div>
  )
}

export default NewItem
