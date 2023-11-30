


// import React from 'react';
// import '../css/a.css';
// import { Button } from 'antd';




// const About = () => {

 

//   return (
//     <div id="about" className="about-container">
//       <div className="about-content">
//         {/* Content of the About section */}
//         <h1 className='abt'>#ＡＢＯＵＴ</h1>
//         <p>--​🇦​ 🇧​ 🇮​ 🇹​ ​🇦​ 🇧​ 🇴​ 🇺​ 🇹​ ​🇲​ 🇪--​</p>
//         <p className='name'>ʜᴇʟʟᴏ!, ɪ'ᴍ 🇰​ 🇪​ 🇪​ 🇷​ 🇹​ 🇭​ 🇦​ 🇳​ 🇦​ ​🇷​ 🇦​ 🇻​ 🇮​,</p>
//         <p className='p-abt'>
//           I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
//         </p>
// <Button className='cv' >See full cv</Button>
        
//       </div>
//       <div className="card">
//         {/* Content of the card */}
//         <h4>WEB DEVELOPER</h4>
//         <p>This is some card content. You can add more information here.</p>
//       </div>
//     </div>
//   );
// };

// export default About;



import React from 'react';
import '../css/a.css';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const About = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleNavigateToCv = () => {
    navigate('/cv'); // Use navigate to go to the /cv route/l
  };

  return (
    <div id="about" className="about-container">
      <div className="about-content">
        {/* Content of the About section */}
        <h1 className='abt'>#ＡＢＯＵＴ</h1>
        <p className='abit'>--​🇦​  ​🇧​​🇮​​🇹​ ​🇦​​🇧​​🇴​​🇺​​🇹​ ​🇲​​🇪​--​</p>
        <p className='name'>ʜᴇʟʟᴏ!, ɪ'ᴍ 🇰​ 🇪​ 🇪​ 🇷​ 🇹​ 🇭​ 🇦​ 🇳​ 🇦​ ​🇷​ 🇦​ 🇻​ 🇮​,</p>
        <p className='p-abt'>
          I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. I’m a great place for you to tell a story and let your users know a little more about you.
        </p>
        {/* Use onClick to call handleNavigateToCv function */}
        <Button className='cv' onClick={handleNavigateToCv}>See full cv</Button>
      </div>
      {/* <div className="card">
      
        <h4>WEB DEVELOPER</h4>
        <p>This is some card content. You can add more information here.</p>
      </div> */}
    </div>
  );
};

export default About;
