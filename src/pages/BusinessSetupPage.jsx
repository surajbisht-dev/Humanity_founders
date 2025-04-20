import React from "react";

export default function BusinessSetupPage() {
  return (
    <div className="min-h-screen bg-[#f9fbfd] flex items-start justify-center px-4 py-10">
      <div className="flex w-full max-w-6xl bg-white rounded-2xl shadow-md overflow-hidden">
        {/* Sidebar */}
        <div className="w-1/3 bg-[#f5f7fe] p-6">
          <h3 className="text-blue-600 font-semibold text-lg mb-2">
            Get Started with ReferralHub
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            To get started with better referrals & rewards, complete your
            account setup in a few easy steps.
          </p>
          <ul className="space-y-5">
            {[
              "Set Up Business Profile",
              "Sync Your Customer Data",
              "Set Up AI Agent Rules",
              "Set Up First Campaign",
            ].map((step, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full border-2 border-gray-300" />
                <div>
                  <p className="text-sm font-medium text-gray-800">{step}</p>
                  <p className="text-xs text-gray-500">Not Started</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Form Area */}
        <div className="w-2/3 p-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-1">
            Build Your Business Identity
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Help us tailor the referral experience by adding key details about
            your business
          </p>

          <div className="grid grid-cols-2 gap-6">
            {/* Row 1 */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Business Logo
              </label>
              <button className="border border-gray-300 px-4 py-2 text-sm rounded-md hover:bg-gray-100 transition">
                Choose Image
              </button>
            </div>

            {/* Row 2 */}
            <div className="col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Business Description
              </label>
              <textarea
                rows={3}
                placeholder="Enter business description..."
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              ></textarea>
            </div>

            {/* Row 3 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Business Name
              </label>
              <input
                type="text"
                placeholder="Enter business name"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Business Email
              </label>
              <input
                type="email"
                placeholder="e.g., robert.fox@myemail.com"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Row 4 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Business Phone No.
              </label>
              <input
                type="text"
                placeholder="Enter phone no."
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Industry
              </label>
              <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                <option>Select</option>
              </select>
            </div>

            {/* Row 5 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Services
              </label>
              <input
                type="text"
                placeholder="Enter services.."
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Products
              </label>
              <input
                type="text"
                placeholder="Enter products..."
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            {/* Row 6 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Company Size <span className="text-gray-400">(Optional)</span>
              </label>
              <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                <option>Select</option>
              </select>
            </div>

            {/* Row 7 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                State
              </label>
              <select className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300">
                <option>Select</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Zip Code
              </label>
              <input
                type="text"
                placeholder="Enter zip code"
                className="w-full border rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button className="w-full bg-gradient-to-r from-blue-500 to-blue-400 text-white py-2 rounded-md hover:from-blue-600 hover:to-blue-500 transition">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
