import React from "react";

const About = () => {
  return (
    <div className="mt-4 flex flex-wrap">
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl font-bold">Welcome to our camping paradise!</h2>
        <p className="mt-2 text-gray-600">
          At CampValley, we strive to provide the ultimate outdoor experience
          for nature lovers and adventure seekers. Nestled in the heart of
          breathtaking wilderness, our campground offers a tranquil escape from
          the hustle and bustle of city life.
          <br />
          Immerse yourself in the beauty of nature as you explore our pristine
          hiking trails, enjoy refreshing dips in crystal-clear lakes, and
          marvel at stunning sunsets over the mountains. Whether you're a
          seasoned camper or new to the camping scene, our friendly and
          knowledgeable staff are here to ensure your stay is both enjoyable and
          memorable.
          <br />
          Our campground facilities are designed to cater to your every need.
          From spacious and well-maintained campsites to modern amenities such
          as clean restrooms, hot showers, and a cozy campfire area, we strive
          to create a comfortable and welcoming environment for all our guests.
          <br />
          Join us for a variety of outdoor activities, including fishing,
          canoeing, bird watching, and stargazing. For those seeking a bit of
          adrenaline, we offer thrilling adventure sports like rock climbing and
          zip-lining. And when night falls, gather around the campfire for
          captivating stories, laughter, and delicious s'mores.
          <br />
          At CampValley, we are committed to preserving the natural beauty of
          our surroundings. We follow sustainable practices, promote Leave No
          Trace principles, and encourage our guests to appreciate and respect
          the environment.
          <br />
          Come and experience the magic of camping with us. Create lifelong
          memories, forge new friendships, and reconnect with nature at
          CampValley. Book your stay today and embark on an unforgettable
          adventure!
          <br />
          We look forward to welcoming you to our camping family.
        </p>
      </div>
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src="/images/pexels-tk.jpg"
          alt="CampValley"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default About;
