import React from 'react'

const Form = () => {
  return (
    <>
<div class="w-full">
  <div class="bg-black bg-opacity-50 rounded px-8 pt-6 pb-8 mb-4 text-white">
    <h2 class="text-2xl font-bold mb-4">Free Case Evaluation</h2>
    <div class="mb-4">
      <label  class="block text-sm font-bold mb-2 text-left" for="name">
        Name
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name"></input>
    </div>
    <div class="mb-4">
      <label  class="block text-sm font-bold mb-2 text-left" for="email">
        Email
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email"></input>
    </div>
    <div class="mb-4">
      <label  class="block text-sm font-bold mb-2 text-left" for="phone">
        Phone Number
      </label>
      <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" type="tel" placeholder="Phone Number"></input>
    </div>
    <div class="mb-6">
      <label  class="block text-sm font-bold mb-2 text-left" for="case-description">
        Case Description
      </label>
      <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="case-description" rows="6" placeholder="Describe your case..."></textarea>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Submit
      </button>
    </div>
  </div>
</div>



    </>
  )
}

export default Form
