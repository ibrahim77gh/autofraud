import React from 'react';

const IntakeForm = () => {
  return (
    <div className="w-full">
      <div className="bg-black bg-opacity-0 rounded px-8 pt-6 pb-8 mb-4 text-white">
        <h2 className="text-2xl font-bold mb-4">Auto Fraud Victim Intake Form</h2>
        <form action="process_form.php" method="POST" enctype="multipart/form-data">
          {/* Personal Information Section */}
          <fieldset>
            <legend>Personal Information</legend>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-left" htmlFor="name">
                Full Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                required
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-left" htmlFor="email">
                Email:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                required
                placeholder="Your Email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-left" htmlFor="phone">
                Phone Number:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                type="tel"
                name="phone"
                required
                placeholder="Phone Number"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-left" htmlFor="address">
                Address:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                name="address"
                required
                placeholder="Address"
              />
            </div>
          </fieldset>

          {/* Vehicle Information Section */}
          <fieldset>
            <legend>Vehicle Information</legend>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-left" htmlFor="makeModel">
                Make, Model, and Year:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="makeModel"
                type="text"
                name="makeModel"
                required
                placeholder="Make, Model, and Year"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-left" htmlFor="vin">
                Vehicle Identification Number (VIN):
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="vin"
                type="text"
                name="vin"
                required
                placeholder="Vehicle Identification Number (VIN)"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-left" htmlFor="purchaseDate">
                Purchase Date:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="purchaseDate"
                type="date"
                name="purchaseDate"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-left" htmlFor="mileage">
                Mileage at Purchase:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="mileage"
                type="number"
                name="mileage"
                required
                placeholder="Mileage at Purchase"
              />
            </div>
          </fieldset>

          {/* Consent and Agreement Section */}
          <fieldset>
            <legend>Consent and Agreement</legend>
            <div className="mb-4">
              <input
                className="mr-2"
                type="checkbox"
                id="consent"
                name="consent"
                required
              />
              <label className="text-sm font-bold" htmlFor="consent">
                I consent to having my data processed in accordance with the privacy policy.
              </label>
            </div>
          </fieldset>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default IntakeForm;
