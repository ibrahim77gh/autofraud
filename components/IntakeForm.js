import React from 'react'

const Form = () => {
  return (
    <>
<div class="border border-gray-800 p-6 rounded-md max-w-md mx-auto mb-4">
    <h1 className='text-indigo-500 text-4xl text-center mb-4'>Auto Fraud Victim Intake Form</h1>

    <form class="space-y-6">
  <section>
    <h2 className="text-2xl font-bold text-left">Personal Information</h2>
    <div class="relative z-0 w-full mb-6 group">
      <label htmlFor="name" className="text-sm">Full Name:</label>
      <input type="text" name="name" id="name" className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-b-2 border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer" required />
    </div>
    <div class="relative z-0 w-full mb-6 group">
      <label htmlFor="email" className="text-sm">Email:</label>
      <input type="email" name="email" id="email" className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-b-2 border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer" required />
    </div>
    <div class="relative z-0 w-full mb-6 group">
      <label htmlFor="phone" className="text-sm">Phone Number:</label>
      <input type="tel" name="phone" id="phone" className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-b-2 border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer" required />
    </div>
    <div class="relative z-0 w-full mb-6 group">
      <label htmlFor="address" className="text-sm">Address:</label>
      <input type="text" name="address" id="address" className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-b-2 border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer" required />
    </div>
  </section>

  <section>
    <h2 className="text-2xl font-bold text-left">Vehicle Information</h2>
    <div class="relative z-0 w-full mb-6 group">
      <label htmlFor="makeModel" className="text-sm">Make, Model, and Year:</label>
      <div className="flex">
        <div className="flex-1 border-b-2 border-indigo-500">
          <input type="text" name="make" id="make" placeholder="Make" className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent focus:outline-none focus:ring-0 focus:border-indigo-600 peer" required />
        </div>
        <div className="flex-1 border-b-2 border-indigo-500">
          <input type="text" name="model" id="model" placeholder="Model" className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent focus:outline-none focus:ring-0 focus:border-indigo-600 peer" required />
        </div>
        <div className="flex-1 border-b-2 border-indigo-500">
          <input type="text" name="year" id="year" placeholder="Year" className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent focus:outline-none focus:ring-0 focus:border-indigo-600 peer" required />
        </div>
      </div>
    </div>


    <div class="relative z-0 w-full mb-6 group">
      <label htmlFor="vin" className="text-sm">Vehicle Identification Number (VIN):</label>
      <input type="text" name="vin" id="vin" className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-b-2 border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer" required />
    </div>
    <div class="relative z-0 w-full mb-6 group">
      <label htmlFor="purchaseDate" className="text-sm">Purchase Date:</label>
      <input type="date" name="purchaseDate" id="purchaseDate" className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-b-2 border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer" required />
    </div>
    <div class="relative z-0 w-full mb-6 group">
      <label htmlFor="mileage" className="text-sm">Mileage at Purchase:</label>
      <input type="number" name="mileage" id="mileage" className="block py-2.5 px-4 w-full text-sm text-gray-900 bg-transparent border-b-2 border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer" required />
    </div>
  </section>


  <section>
    <h2 className="text-2xl font-bold text-left">Consent and Agreement</h2>
    <div class="relative z-0 w-full mb-6 group">
      <input type="checkbox" name="consent" id="consent" required />
      <label htmlFor="consent" className="text-sm"> Consent to having my data processed in accordance with the privacy policy.</label>
    </div>
  </section>

  <button type="submit" className="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 dark:bg-indigo-600 dark:hover-bg-indigo-700 dark:focus:ring-indigo-800">SUBMIT</button>
</form>

</div>

    </>
  )
}

export default Form
