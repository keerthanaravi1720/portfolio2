




import React from 'react';






import { EnvironmentOutlined, PhoneOutlined, MailOutlined,WhatsAppOutlined, InstagramOutlined,LinkedinOutlined } from '@ant-design/icons';
// import { Button } from 'antd';

import '../css/c.css';

const Contact = () => {

 
  


  return (
    <div id="contact">
      {/* Content of the Contact section */}
      <h1>#Ｃ Ｏ Ｎ Ｔ Ａ Ｃ Ｔ</h1>
      <p>--ᴍʏ ɪɴꜰᴏ--</p>
<p style={{color:'darkblue'}}>​𝒦𝑒𝑒𝓇𝓉𝒽𝒶𝓃𝒶 𝑅𝒶𝓋𝒾
​  ᴍᴇʀɴ ꜱᴛᴀᴄᴋ ᴅᴇᴠᴇʟᴏᴘᴇʀ</p>
      {/* Circular section with icons */}
      <div className="circle-container">
        <div className="circle">
          <EnvironmentOutlined className="icon" />
        </div>
        <div className="text">
        <p style={{marginTop:30}}>Panakkaparambil(H) Karumallor P.O 
        <br />Manakkapady pincode:683511</p>
         
        </div>
        <div className="circle">
          <PhoneOutlined className="icon" />
        </div>
        <div className="text">
          <p>8891073784</p>
        </div>
        <div className="circle">
          <MailOutlined className="icon" />
        </div>
        <div className="text">
          <p>keerthana23145@gmail.com</p>
        </div>


      </div>
      <div className="circle-container">
      <div className="circle2">
      <WhatsAppOutlined className="icon2" />
        </div>
        
        <div className="circle2">
        <LinkedinOutlined className="icon2" />
        </div>
       
        <div className="circle2">
        <InstagramOutlined className="icon2" />
        </div>
       
        <div className="circle2">
        <img src='d.jpg' className="img"/>
        </div>
      
      </div>
    

    </div>
  );
};

export default Contact;




// import React from 'react';
// import { Link } from 'react-router-dom'; // Assuming you are using React Router for routing

// import { EnvironmentOutlined, PhoneOutlined, MailOutlined, WhatsAppOutlined, InstagramOutlined, LinkedinOutlined } from '@ant-design/icons';
// import { Button } from 'antd';

// import '../css/c.css';

// const Contact = () => {
//   return (
//     <div id="contact">
//       {/* Content of the Contact section */}
//       <h1>#Ｃ Ｏ Ｎ Ｔ Ａ Ｃ Ｔ</h1>
//       <p>--ᴍʏ ɪɴꜰᴏ--</p>
//       <p style={{ color: 'darkblue' }}>​𝒦𝑒𝑒𝓇𝓉𝒽𝒶𝓃𝒶 𝑅𝒶𝓋𝒾
// ​  ᴍᴇʀɴ ꜱᴛᴀᴄᴋ ᴅᴇᴠᴇʟᴏᴘᴇʀ</p>
//       {/* Circular section with icons */}
//       <div className="circle-container">
//         <div className="circle">
//           <EnvironmentOutlined className="icon" />
//         </div>
//         <div className="text">
//           <p style={{ marginTop: 30 }}>Panakkaparambil(H) Karumallor P.O 
//           <br />Manakkapady pincode:683511</p>
//         </div>
//         <div className="circle">
//           <PhoneOutlined className="icon" />
//         </div>
//         <div className="text">
//           <p>8891073784</p>
//         </div>
//         <div className="circle">
//           <MailOutlined className="icon" />
//         </div>
//         <div className="text">
//           <p>keerthana23145@gmail.com</p>
//         </div>
//       </div>
//       <div className="circle-container">
//         <div className="circle2">
//           <WhatsAppOutlined className="icon2" />
//         </div>
//         <div className="circle2">
//           <LinkedinOutlined className="icon2" />
//         </div>
//         <div className="circle2">
//           <InstagramOutlined className="icon2" />
//         </div>
//         <div className="circle2">
//           <img src='d.jpg' className="img" />
//         </div>
//       </div>

//       {/* Link to download CV page */}
//       <Link to="/cv">Download CV Page</Link>
//     </div>
//   );
// };

// export default Contact;
