import React from 'react'

const Card = ({cardTitle,cardDesc,cardImg}) => {
  return (
    <>  
        <div class="max-w-sm rounded overflow-hidden shadow-lg transition-transform transform hover:scale-105">
        <div class="px-6 py-4">
            <img src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80" alt=""/>
            <img src="" alt="" />
            <div class="font-bold text-xl mb-2">{cardTitle}</div>
            <p class="text-gray-700 text-base">
                {cardDesc}
            </p>
        </div>
        </div>
    </>
  )
}

export default Card
