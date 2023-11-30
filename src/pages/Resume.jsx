


// import React from 'react';
// import '../css/r.css';

// const Resume = () => {
//   return (
//     <div id="resume">
//       {/* Content of the About section */}
//       <h1 >#ＲＥＳＵＭＥ</h1>
//       <p >--​🇲​​🇾​ ​🇸​​🇹​​🇴​​🇷​​🇾​--</p>

//       <p className='resume'>​🇵​​🇷​​🇴​​🇫​​🇪​​🇸​​🇸​​🇮​​🇴​​🇳​​🇦​​🇱​ ​🇸​​🇰​​🇮​​🇱​​🇱​​🇸​</p>
      // <div className='resume-grid'>
      //   <div className='resume-card'>
      //     <p className='resume-title'>MERN</p>
      //     {/* <p className='resume-description'>Accurate</p> */}
      //   </div>
      //   <div className='resume-card'>
      //     <p className='resume-title'>JAVA</p>
      //     {/* <p className='resume-description'></p> */}
      //   </div>
      //   <div className='resume-card'>
      //     <p className='resume-title'>IOT</p>
      //     {/* <p className='resume-description'>Description for Job 3</p> */}
      //   </div>
      //   <div className='resume-card'>
      //     <p className='resume-title'>Html&css</p>
      //     {/* <p className='resume-description'>Description for Job 4</p> */}
      //   </div>
      // </div>
//     </div>

    
   
//   );
// };

// export default Resume;



import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import '../css/r.css';

const Resume = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,       
    autoplaySpeed: 2700,
      
  };
  

  return (
    <div id="resume">
      {/* Content of the About section */}
      <h1>#ＲＥＳＵＭＥ</h1>
      <p >--​🇲​​🇾​ ​🇸​​🇹​​🇴​​🇷​​🇾​--</p>



      {/* Carousel */}
      <Slider {...settings} >
        <div>



          <h3 className='resume'>​🇵​​🇷​​🇴​​🇫​​🇪​​🇸​​🇸​​🇮​​🇴​​🇳​​🇦​​🇱​ ​🇸​​🇰​​🇮​​🇱​​🇱​​🇸</h3>
          <div className='resume-grid'>
        <div className='resume-card'>
          <p className='resume-title'>MERN</p>
      
        </div>
        <div className='resume-card'>
          <p className='resume-title'>JAVA</p>
         
        </div>
        <div className='resume-card'>
          <p className='resume-title'>IOT</p>
       
        </div>
        <div className='resume-card'>
          <p className='resume-title'>Html&css</p>
         
        </div>
      </div>
        </div>


        <div>
          {/* Content for Education */}
          <h3 className='resume'>🇪​​🇩​​🇺​​🇨​​🇦​​🇹​​🇮​​🇴​​🇳​</h3>
        {/* <h4>2016-2018(CBSE-10th)</h4>
<p>Vidhyadhiraja vidhyabhavan Senior Secondary School,Angamaly</p> */}
  <div className='resume-grid1'>
        <div className='resume-card1'>
          <p className='resume-title1'>2016-2018(CBSE-10th)</p>
          <p >Vidhyadhiraja vidhyabhavan Senior Secondary School,Angamaly</p>
      <p>10th CBSE BOARD EXAM</p>
        </div>
        <div className='resume-card1'>
          <p className='resume-title1'>2018-2020(CBSE-12th)</p>
          <p >Vidhyadhiraja vidhyabhavan Senior Secondary School,Angamaly</p>
          <p>BIOCOMPUTER</p>
        </div>
        <div className='resume-card1'>
          <p className='resume-title1'>2020-2023</p>
          <p>Nirmala Colleage of Arts & Science,Chalakudy</p>
       <p>B.Sc COMPUTER SCIENCE</p>
        </div>
        </div>
        </div>


        <div>
         
          <h3 className='resume'>​🇵​​🇪​​🇷​​🇸​​🇴​​🇳​​🇦​​🇱​ ​🇸​​🇰​​🇮​​🇱​​🇱​​🇸​
</h3>

<div className='resume-grid2'>
        <div className='resume-card2'>
          <p className='resume-title2'>​* 🇦​​🇩​​🇦​​🇵​​🇹​​🇮​​🇧​​🇮​​🇱​​🇮​​🇹​​🇾</p>
      
        </div>
        <div className='resume-card2'>
          <p className='resume-title2'>* ᴘᴀᴛɪᴇɴᴄᴇ</p>
         
        </div>
        <div className='resume-card2'>
          <p className='resume-title2'>* ᴡʀɪᴛɪɴɢ</p>
       
        </div>
        <div className='resume-card2'>
          <p className='resume-title2'>* ᴄʀᴇᴀᴛɪᴠɪᴛʏ</p>
         
        </div>
        <div className='resume-card2'>
          <p className='resume-title2'>* ʜᴏɴᴇꜱᴛ</p>
         
        </div>

      </div>
        </div>
        {/* </div> */}

        {/* <p>Anime, Reading, Drawing, Listening music</p> */}
        <div>
          
          <h3 className='resume'>🇭​​🇴​​🇧​​🇧​​🇮​​🇪​​🇸​</h3>
          <div className="hobby-circle">Anime</div>
        <div className="hobby-circle">Reading</div>
        <div className="hobby-circle">Drawing</div>
        <div className="hobby-circle">Listening Music</div>
    
        </div>
      </Slider>
    </div>
  );
};

export default Resume;
