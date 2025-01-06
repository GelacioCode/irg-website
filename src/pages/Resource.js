import React from "react";

function Resource() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Header Section */}
      <div className="max-w-6xl bg-white shadow-md rounded-lg p-8 mx-auto mb-12">
        <h1 className="text-4xl font-bold text-primary mb-6">Helpful Resources</h1>
        <p className="text-gray-600 text-lg mb-4 leading-relaxed">
          Find important contacts and resources for various services across the towns near Candlewood Lake. Whether you're looking for town hall details, emergency services, or local businesses, you'll find them here.
        </p>
      </div>

      {/* Town Services Section */}
      <div className="max-w-6xl bg-white shadow-md rounded-lg p-8 mx-auto overflow-x-auto">
        <h2 className="text-3xl font-bold text-primary mb-6">Town Services</h2>
        <table className="table-auto w-full border-collapse border border-gray-200 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Service Category</th>
              <th className="border border-gray-300 px-4 py-2">Sherman</th>
              <th className="border border-gray-300 px-4 py-2">New Fairfield</th>
              <th className="border border-gray-300 px-4 py-2">Brookfield</th>
              <th className="border border-gray-300 px-4 py-2">Danbury</th>
              <th className="border border-gray-300 px-4 py-2">New Milford</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                category: "Town Hall Main",
                sherman: "9 Route 39 North, Sherman, CT 06784 (860) 355-1139",
                newFairfield: "4 Brush Hill Road, New Fairfield, CT 06812 (203) 312-5600",
                brookfield: "100 Pocono Road, Brookfield, CT 06804 (203) 775-7300",
                danbury: "155 Deer Hill Avenue, Danbury, CT 06810 (203) 797-4500",
                newMilford: "10 Main Street, New Milford, CT 06776 (860) 355-6010",
              },
              {
                category: "Tax Assessor",
                sherman: "(860) 355-3717",
                newFairfield: "(203) 312-5625",
                brookfield: "(203) 775-7301",
                danbury: "(203) 797-4556",
                newMilford: "(860) 355-6070",
              },
              {
                category: "Tax Collector",
                sherman: "(860) 355-3297",
                newFairfield: "(203) 312-5016",
                brookfield: "(203) 775-7342",
                danbury: "(203) 797-4032",
                newMilford: "(860) 355-6088",
              },
              {
                category: "Town Clerk",
                sherman: "(860) 355-3715",
                newFairfield: "(203) 312-5615",
                brookfield: "(203) 775-7304",
                danbury: "(203) 797-4500",
                newMilford: "(860) 355-6020",
              },
              {
                category: "Building Department",
                sherman: "(860) 355-0818",
                newFairfield: "(203) 312-5022",
                brookfield: "(203) 775-7317",
                danbury: "(203) 797-4580",
                newMilford: "(860) 355-6090",
              },
              {
                category: "Land Use/Zoning",
                sherman: "(860) 355-3715",
                newFairfield: "(203) 312-5026",
                brookfield: "(203) 775-7316",
                danbury: "(203) 797-4525",
                newMilford: "(860) 355-6095",
              },
              {
                category: "Registrar of Voters",
                sherman: "(860) 355-3715",
                newFairfield: "(203) 312-5640",
                brookfield: "(203) 775-7314",
                danbury: "(203) 797-4550",
                newMilford: "(860) 355-6075",
              },
              {
                category: "Health Department",
                sherman: "(860) 355-0973",
                newFairfield: "(203) 312-5640",
                brookfield: "(203) 775-7325",
                danbury: "(203) 797-4542",
                newMilford: "(860) 355-6035",
              },
              {
                category: "Parks & Recreation",
                sherman: "(860) 355-3715",
                newFairfield: "(203) 312-5633",
                brookfield: "(203) 775-7310",
                danbury: "(203) 797-4632",
                newMilford: "(860) 355-6050",
              },
              {
                category: "Social Services",
                sherman: "(860) 355-3715",
                newFairfield: "(203) 312-5630",
                brookfield: "(203) 775-7312",
                danbury: "(203) 797-4569",
                newMilford: "(860) 355-6079",
              },
              {
                category: "Water Service",
                sherman: "Primarily private wells (860) 355-0973",
                newFairfield: "Primarily private wells (203) 312-5640",
                brookfield: "Mix of private wells and Aquarion Water (203) 445-7310",
                danbury: "Public Water Supply Division (203) 797-4637",
                newMilford: "New Milford Water Co. (860) 355-3013",
              },
              {
                category: "Trash & Recycling",
                sherman: "Transfer Station (860) 355-3297",
                newFairfield: "Transfer Station (203) 312-5016",
                brookfield: "Private Haulers (203) 775-7342",
                danbury: "City Sanitation (203) 797-4032",
                newMilford: "Transfer Station (860) 355-6088",
              },
              {
                category: "School District",
                sherman: "Sherman School (860) 355-3793",
                newFairfield: "New Fairfield Schools (203) 312-5900",
                brookfield: "Brookfield Schools (203) 775-7620",
                danbury: "Danbury Schools (203) 797-4700",
                newMilford: "New Milford Schools (860) 355-8406",
              },
              {
                category: "Emergency Services",
                sherman: "CT State Police (860) 355-3133",
                newFairfield: "(203) 312-5701",
                brookfield: "(203) 775-2575",
                danbury: "(203) 797-4611",
                newMilford: "(860) 355-3133",
              },
              {
                category: "Lake Access",
                sherman: "Sherman Town Beach",
                newFairfield: "Town Park Beach",
                brookfield: "Brookfield Town Beach",
                danbury: "Lattins Cove",
                newMilford: "Lynn Deming Park",
              },
              {
                category: "Post Office",
                sherman: "1 Route 39 North (860) 354-2756",
                newFairfield: "25 Route 39 (203) 746-5280",
                brookfield: "267 Federal Road (203) 775-0073",
                danbury: "23 Backus Ave (203) 744-4066",
                newMilford: "24 Bridge Street (860) 354-3978",
              },
              {
                category: "Public Library",
                sherman: "Sherman Library (860) 354-2455",
                newFairfield: "New Fairfield Library (203) 312-5679",
                brookfield: "Brookfield Library (203) 775-6241",
                danbury: "Danbury Library (203) 797-4505",
                newMilford: "New Milford Library (860) 355-1191",
              },
            ].map((service, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="border border-gray-300 px-4 py-2 font-bold">{service.category}</td>
                <td className="border border-gray-300 px-4 py-2">{service.sherman}</td>
                <td className="border border-gray-300 px-4 py-2">{service.newFairfield}</td>
                <td className="border border-gray-300 px-4 py-2">{service.brookfield}</td>
                <td className="border border-gray-300 px-4 py-2">{service.danbury}</td>
                <td className="border border-gray-300 px-4 py-2">{service.newMilford}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Local Businesses Section */}
      <div className="max-w-6xl bg-white shadow-md rounded-lg p-8 mx-auto mt-12 overflow-x-auto">
        <h2 className="text-3xl font-bold text-primary mb-6">Local Businesses</h2>
        <table className="table-auto w-full border-collapse border border-gray-200 text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Service</th>
              <th className="border border-gray-300 px-4 py-2">Name</th>
              <th className="border border-gray-300 px-4 py-2">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {[
              { service: "Accounting", name: "Melillo & Mitchell, LLC.", phone: "(203) 744-3450" },
              { service: "Appraiser", name: "R.J. Clark", phone: "(203) 775-4060" },
              { service: "Appraiser", name: "Kurt Kleiss", phone: "(203) 775-4060" },
              { service: "Attorney", name: "Anthony DiPerrio", phone: "(203) 744-5225" },
              { service: "Attorney", name: "Lisa Deldin", phone: "(203) 241-5675" },
              { service: "Attorney", name: "Larry Pereira, Esq.", phone: "(203) 792-1892" },
              { service: "Attorney", name: "Stephen G. Harding", phone: "(203) 482-2186" },
              { service: "Building Inspector", name: "Allied Home Inspections", phone: "(203) 748-0400" },
              { service: "Building Inspector", name: "Pillar To Post Home Inspectors", phone: "(203) 374-5448" },
              { service: "Building Inspector", name: "Tiger Home and Building Inspections", phone: "(800) 328-4677" },
              { service: "Building Services", name: "Mike Gratzl LLC", phone: "(203) 241-9674" },
              { service: "Building Services", name: "All Phase Construction", phone: "(203) 770-1861" },
              { service: "Building Services", name: "DeMarco Construction Co.", phone: "(203) 744-5298" },
              { service: "Building Services", name: "Marco Mendieta", phone: "(203) 628-8235" },
              { service: "Building Services", name: "NTC Contracting LLC", phone: "(203) 948-4493" },
              { service: "Building Services", name: "Gerald Reynolds Cabinetry", phone: "(203) 788-0705" },
              { service: "Building Services", name: "Connecticut Basement Systems Radon", phone: "(203) 381-9633" },
              { service: "Building Services", name: "Energy Efficient Healthy Homes", phone: "(203) 381-9633" },
              { service: "Lake Resources", name: "Candlewood Lake Authority", phone: "(860) 354-6928" },
              { service: "Civil Engineering", name: "Ralph Gallagher", phone: "(203) 798-9640" },
              { service: "Electric Service", name: "Eversource Electric & Power", phone: "(800) 286-2000" },
              { service: "Electric Service", name: "First Light Power", phone: "(860) 350-3294" },
              { service: "Electrician", name: "Hantsch Electric", phone: "(860) 354-0148" },
              { service: "Electrician", name: "Lincoln Illumination", phone: "(845) 541-7806" },
              { service: "Garbage Pickup", name: "Winter Brothers", phone: "(203) 743-9940" },
              { service: "Garbage Pickup", name: "Lostocco", phone: "(203) 743-9940" },
              { service: "Home Staging", name: "Geri Greco", phone: "(914) 610-6519" },
              { service: "Home Security", name: "Knight Security Systems", phone: "(914) 232-0003" },
              { service: "Mold Abatement", name: "PuroClean", phone: "(203) 616-9988" },
              { service: "Mold Abatement", name: "Green Home Solutions", phone: "(203) 628-2227" },
              { service: "Mortgage Services", name: "Tom Lutz - Newtown Savings Bank", phone: "(203) 364-2970" },
              { service: "Mortgage Services", name: "Steven Greenberg - Newtown Savings Bank", phone: "(203) 364-2970" },
              { service: "Mortgage Services", name: "James Philipakos - Newtown Savings Bank", phone: "(203) 856-4771" },
              { service: "Moving Companies", name: "Vanguard Moving & Storage", phone: "(203) 798-6060" },
              { service: "Moving Companies", name: "Clancy Relocation & Logistics", phone: "(203) 948-7633" },
              { service: "Oil & Propane", name: "Leahys", phone: "(203) 748-3535" },
              { service: "Oil & Propane", name: "Mitchell Fuel", phone: "(800) 237-3835" },
              { service: "Oil & Propane", name: "Jennings Fuel", phone: "(203) 529-4958" },
              { service: "Painter", name: "JR Astro Painting", phone: "(203) 460-7157" },
              { service: "Plumber", name: "Brookfield Plumbing and Heating", phone: "(203) 775-8393" },
              { service: "Plumber", name: "Ricks Pump and Water Service", phone: "(203) 775-9869" },
              { service: "Roofer", name: "Affordable Roofing", phone: "(203) 948-7393" },
              { service: "Septic Inspector", name: "Lathrop Septic - Michael Lathrop", phone: "(203) 746-4501" },
              { service: "Septic Inspector", name: "J.C. Nota Septic", phone: "(860) 350-3297" },
              { service: "Septic Inspector", name: "A-1 Septic - Dennis Carlson", phone: "(203) 746-5482" },
              { service: "Tank Removal", name: "Tank Masters Inc.", phone: "(203) 885-1211" },
              { service: "Phone, Internet, & TV", name: "Charter Communications", phone: "(855) 466-1942" },
              { service: "Phone, Internet, & TV", name: "Comcast - XFINITY", phone: "(855) 711-6156" },
              { service: "Tree Services", name: "Budget Tree & Stump Removal", phone: "(203) 746-3718" },
              { service: "Tree Services", name: "Knapps Bros. Tree Service", phone: "(203) 438-6475" },
            ].map((business, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                <td className="border border-gray-300 px-4 py-2 font-bold">{business.service}</td>
                <td className="border border-gray-300 px-4 py-2">{business.name}</td>
                <td className="border border-gray-300 px-4 py-2">{business.phone}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Contact Form Section */}
      <div className="max-w-6xl bg-white shadow-md rounded-lg p-8 mx-auto mt-12">
        <h2 className="text-3xl font-bold text-primary mb-6">Want your business to be part of this?</h2>
        <p className="text-gray-600 text-lg mb-4">
          Contact us now for details:
        </p>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="Write your message here"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-primary text-white font-bold py-2 px-4 rounded-lg hover:bg-primary-dark"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

export default Resource;
