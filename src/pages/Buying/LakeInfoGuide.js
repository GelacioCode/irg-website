import React, { useState } from "react";
import image1 from "../../assets/images/LakeGuides/Boat/1.jpg";
import image2 from "../../assets/images/LakeGuides/Boat/2.jpg";
import image3 from "../../assets/images/LakeGuides/Boat/3.jpg";
import image4 from "../../assets/images/LakeGuides/Boat/4.jpg";
import image5 from "../../assets/images/LakeGuides/Boat/5.jpg";
import image6 from "../../assets/images/LakeGuides/Boat/6.jpg";
import image7 from "../../assets/images/LakeGuides/Boat/7.jpg";
import image8 from "../../assets/images/LakeGuides/Boat/8.jpg";

import image9 from "../../assets/images/LakeGuides/Park/1.jpg";
import image10 from "../../assets/images/LakeGuides/Park/2.jpg";
import image11 from "../../assets/images/LakeGuides/Park/3.jpg";
import image12 from "../../assets/images/LakeGuides/Park/4.jpg";
import image13 from "../../assets/images/LakeGuides/Park/5.jpg";
import image14 from "../../assets/images/LakeGuides/Park/6.jpg";

function LakeInfoGuide() {
  const [activeTab, setActiveTab] = useState("Boating");

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      {/* Header Section */}
      <div className="max-w-6xl bg-white shadow-md rounded-lg p-8 mx-auto mb-12">
        <h1 className="text-center text-4xl font-bold text-primary italic mb-6">
          Candlewood Lake Activities
        </h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Candlewood Lake offers a variety of recreational activities, from boating and fishing to hiking and more. Explore the different opportunities available for fun and relaxation.
        </p>

        <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Boating and Water Sports</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
            With over 60 miles of shoreline, Candlewood Lake is a paradise for boating enthusiasts. Whether you're cruising along in a sailboat, speeding through the waters on a powerboat, or enjoying the thrill of jet skiing, the lake provides endless opportunities for fun on the water. Kayaking and paddleboarding are also popular, offering a peaceful way to explore the lake's hidden coves and inlets.
            </p>
        </div>
        <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Fishing</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
            Candlewood Lake is renowned for its excellent fishing, attracting anglers from all over. The lake is home to a variety of fish species, including bass, trout, and walleye, making it a prime spot for both casual and competitive fishing. Whether you're casting from a boat or fishing off the shore, you're sure to find a great catch.
            </p>
        </div>
        <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Parks and Hiking</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
            The natural beauty surrounding Candlewood Lake extends beyond the water. Numerous parks and hiking trails offer stunning views of the lake and its surrounding landscapes. Whether you're taking a leisurely stroll or embarking on a more challenging hike, you'll find plenty of opportunities to connect with nature and enjoy the peaceful ambiance of the area.
            </p>
        </div>
        <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Winter Activities</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
            Candlewood Lake isn't just a summer destination. In the winter, the lake transforms into a winter wonderland, perfect for ice skating, ice fishing, and even snowmobiling. The surrounding hills also provide opportunities for sledding and snowshoeing, ensuring there's always something to do no matter the season.
            </p>
        </div>
        <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Explore More</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
            Below, you'll find a comprehensive directory of all the marinas, parks, and other activities available around Candlewood Lake. Whether you're looking to rent a boat, find the perfect picnic spot, or discover new adventures, our directory has everything you need to make the most of your time at Candlewood Lake.
            </p>
        </div>

      </div>


      {/* Tabs Section */}
      <div className="max-w-6xl bg-white shadow-md rounded-lg p-8 mx-auto">
        {/* Tabs Navigation */}
        <div className="flex justify-center mb-8">
          {["Boating", "Parks", "Other Activities"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 font-bold ${
                activeTab === tab
                  ? "text-white bg-primary rounded-lg"
                  : "text-primary bg-gray-100"
              } mx-2 transition-all`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tabs Content */}
        {activeTab === "Boating" && (
            <div>
                <h2 className="text-3xl font-bold text-primary mb-4">Boating</h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                There are many opportunities on Candlewood Lake for boating recreation. Watercraft can be rented from Echo Bay Marina in Brookfield or Gerard's Waters Edge Marina in New Milford. Below you will find the locations of all the marinas on Candlewood Lake.
                </p>
                <h3 className="text-2xl font-bold text-primary mb-4">Marinas on Candlewood Lake</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    {
                    name: "Brookfield Bay Marina",
                    address: "476 Candlewood Lake Rd, Brookfield, CT 06804",
                    phone: "203.740.2628",
                    amenities: "Gas Dock Available",
                    image: image1, // Replace with actual image path
                    },
                    {
                    name: "Candlewood East Marina",
                    address: "204 Candlewood Lake Rd, Brookfield, CT 06804",
                    phone: "203.775.2253",
                    amenities: "Gas Dock Available, Boat Rentals Available",
                    image: image2, // Replace with actual image path
                    },
                    {
                    name: "Chatterton Point",
                    address: "5 Shore Drive, New Fairfield, CT 06812",
                    phone: "203.746.9138",
                    amenities: "Gas Dock Available",
                    image: image3, // Replace with actual image path
                    },
                    {
                    name: "Echo Bay Marina",
                    address: "227 Candlewood Lake Rd, Brookfield, CT 06804",
                    phone: "203.775.7077",
                    amenities: "Gas Dock Available, Boat Rentals Available",
                    image: image4, // Replace with actual image path
                    },
                    {
                    name: "Gerard's Waters Edge Marina",
                    address: "120 Old Town Park Rd, New Milford, CT 06776",
                    phone: "860.350.2628",
                    amenities: "Gas Dock Available",
                    image: image5, // Replace with actual image path
                    },
                    {
                    name: "Nina Marina",
                    address: "10 Hayestown Rd, Danbury, CT 06811",
                    phone: "203.798.7527",
                    amenities: "Gas Dock Available",
                    image: image6, // Replace with actual image path
                    },
                    {
                    name: "Pocono Point Marina",
                    address: "16 Forty Acre Mountain Rd, Danbury, CT 06811",
                    phone: "203.778.6000",
                    amenities: "Gas Dock Available",
                    image: image7, // Replace with actual image path
                    },
                    {
                        name: "Boat Launches",
                        address: "Lattins Cove, Danbury Squantz Pond, New Fairfield",
                        phone: "203.778.6000",
                        amenities: "Gas Dock Available",
                        image: image8, // Replace with actual image path
                        },
                ].map((marina, index) => (
                    <div key={index} className="bg-gray-100 shadow-md rounded-lg p-4">
                    <img
                        src={marina.image}
                        alt={marina.name}
                        className="w-full h-40 object-cover rounded-md mb-4"
                    />
                    <h4 className="text-lg font-bold text-gray-800">{marina.name}</h4>
                    <p className="text-gray-600">{marina.address}</p>
                    <p className="text-gray-600">
                        <a href={`tel:${marina.phone}`} className="text-primary underline">
                        {marina.phone}
                        </a>
                    </p>
                    <p className="text-gray-600 italic">{marina.amenities}</p>
                    </div>
                ))}
                </div>
            </div>
        )}
        {activeTab === "Parks" && (
        <div>
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">Town Parks</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 text-center">
            Explore the beautiful parks around Candlewood Lake. Each offers unique amenities and scenic views for everyone to enjoy.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
                {
                name: "Candlewood Town Park - Danbury",
                description:
                    "Candlewood Town Park is in the town of Danbury and includes playgrounds, picnic tables, boat docks, benches, and a concession stand, in addition to a 600-foot swimming beach. Lifeguards are typically on duty between Memorial Day and Labor Day.",
                address: "36 East Hayestown Road, Danbury, CT 06810",
                phone: "203.797.4632",
                image: image9, // Replace with actual image path
                },
                {
                name: "Brookfield Town Beach",
                description:
                    "Brookfield Town Beach features picnic areas, a concession stand, and basketball and volleyball courts, in addition to swimming. It is open only to town residents and their guests.",
                address: "500 Candlewood Lake Road, Brookfield, CT 06804",
                phone: "203.775.7311",
                image: image10, // Replace with actual image path
                },
                {
                name: "Squantz Pond State Park",
                description:
                    "Located in New Fairfield on a branch of Candlewood Lake, this state park offers a sandy beach, picnic area, fishing, and a boat launch. Open daily during summer, with lifeguards on duty from 10 a.m. to 6 p.m.",
                address: "178 Shortwoods Road, New Fairfield, CT 06812",
                phone: "203.312.5023",
                image: image11, // Replace with actual image path
                },
                {
                name: "Sherman Town Park",
                description:
                    "Sherman Town Park offers a sandy beach, playground, and picnic pavilion. Open to Sherman residents and their guests, with boat slips and a launch available for town residents.",
                address: "74 Sawmill Road, Sherman, CT 06784",
                phone: "860.354.3629",
                image: image12, // Replace with actual image path
                },
                {
                name: "New Fairfield Town Park",
                description:
                    "Swimming facility with restrooms, changing areas, extended snack bar, and a picnic area overlooking the water.",
                address: "180 Route 39, New Fairfield, CT 06812",
                phone: "203.312.5633",
                image: image13, // Replace with actual image path
                },
                {
                name: "Lynn Deming Park - New Milford",
                description:
                    "Located on the shore of Candlewood Lake's New Milford Bay, Lynn Deming Park has a beach open between Memorial Day and Labor Day, with lifeguards on duty. Access is limited to New Milford residents and their guests.",
                address: "134 Candlewood Lake Road North, New Milford, CT 06776",
                phone: "860.355.6050",
                image: image14, // Replace with actual image path
                },
            ].map((park, index) => (
                <div key={index} className="bg-gray-100 shadow-md rounded-lg p-4">
                <img
                    src={park.image}
                    alt={park.name}
                    className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h4 className="text-lg font-bold text-gray-800">{park.name}</h4>
                <p className="text-gray-600 mb-2">{park.description}</p>
                <p className="text-gray-600">{park.address}</p>
                <p className="text-gray-600">
                    <a href={`tel:${park.phone}`} className="text-primary underline">
                    {park.phone}
                    </a>
                </p>
                </div>
            ))}
            </div>
        </div>
        )}

        {activeTab === "Other Activities" && (
        <div>
            <h2 className="text-3xl font-bold text-primary mb-4 text-center">Other Lake Activities</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6 text-center">
            Discover additional activities around Candlewood Lake, from watersports and skiing to enjoying the nightlife.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Watersports Section */}
            <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Watersports</h3>
                <ul className="space-y-4">
                {[
                    {
                    name: "Lakeside Watersports",
                    address: "16 Forty Acre Mountain Rd, Danbury, CT",
                    phone: "203.744.9884",
                    },
                    {
                    name: "Candlewood Stand Up Paddleboard",
                    address: "5 Shore Rd, New Fairfield, CT",
                    phone: "203.312.7704",
                    },
                    {
                    name: "Bassman Fishing Tours",
                    address: "6 Progress Dr, New Fairfield, CT",
                    phone: "203.570.7952",
                    },
                ].map((activity, index) => (
                    <li key={index}>
                    <h4 className="text-lg font-bold text-gray-800">{activity.name}</h4>
                    <p className="text-gray-600">{activity.address}</p>
                    <p className="text-gray-600">
                        <a href={`tel:${activity.phone}`} className="text-primary underline">
                        {activity.phone}
                        </a>
                    </p>
                    </li>
                ))}
                </ul>
            </div>

            {/* Skiing Section */}
            <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Skiing</h3>
                <ul className="space-y-4">
                {[
                    {
                    name: "Mohawk Mountain",
                    address: "46 Great Hollow Rd, West Cornwall, CT",
                    phone: "800.895.5222",
                    },
                    {
                    name: "Mount Southington",
                    address: "396 Mt Vernon Rd, Plantsville, CT",
                    phone: "860.628.0954",
                    },
                    {
                    name: "Ski Butternut",
                    address: "380 State Rd, Great Barrington, MA",
                    phone: "413.528.2000",
                    },
                ].map((activity, index) => (
                    <li key={index}>
                    <h4 className="text-lg font-bold text-gray-800">{activity.name}</h4>
                    <p className="text-gray-600">{activity.address}</p>
                    <p className="text-gray-600">
                        <a href={`tel:${activity.phone}`} className="text-primary underline">
                        {activity.phone}
                        </a>
                    </p>
                    </li>
                ))}
                </ul>
            </div>

            {/* Nightlife Section */}
            <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Nightlife</h3>
                <ul className="space-y-4">
                {[
                    {
                    name: "Down the Hatch Restaurant",
                    address: "292 Candlewood Lake Road, Brookfield, CT",
                    phone: "203.775.6635",
                    },
                    {
                    name: "Prime Pub",
                    address: "2 Nabby Rd, Danbury, CT",
                    phone: "203.456.6935",
                    },
                    {
                    name: "The 440 Line",
                    address: "249 State Route 39, New Fairfield, CT",
                    phone: "203.746.8888",
                    },
                ].map((activity, index) => (
                    <li key={index}>
                    <h4 className="text-lg font-bold text-gray-800">{activity.name}</h4>
                    <p className="text-gray-600">{activity.address}</p>
                    <p className="text-gray-600">
                        <a href={`tel:${activity.phone}`} className="text-primary underline">
                        {activity.phone}
                        </a>
                    </p>
                    </li>
                ))}
                </ul>
            </div>
            </div>
        </div>
        )}

      </div>
    </div>
  );
}

export default LakeInfoGuide;
