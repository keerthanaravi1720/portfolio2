// import React from 'react';
// import '../css/cv.css';


import { WhatsAppOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';

import React, { useRef } from 'react';
import '../css/cv.css';
import { Button } from 'antd';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';



const Cv = () => {
  
  const vitaeRef = useRef(null);

  // const generatePDF = () => {
  //   // Access the DOM element using the ref
  //   const elementToCapture = vitaeRef.current;

  //   if (elementToCapture) {
  //     // Use html2canvas to capture the element as a canvas
  //     html2canvas(elementToCapture).then((canvas) => {
  //       // Convert the canvas to a data URL
  //       const dataURL = canvas.toDataURL();

  //       // Create a new jsPDF instance
  //       const pdf = new jsPDF('p', 'mm', 'a4');

  //       // Add an image of the captured element to the PDF
  //       pdf.addImage(dataURL, 'JPEG', 0, 0, 210, 297);

  //       // Save or download the PDF
  //       pdf.save('cv.pdf');
  //     });
  //   }
  // };
 
  const generatePDF = () => {
    // Hide the download button
    const button = document.querySelector('.cv-button');
    if (button) {
      button.style.display = 'none';
    }
  
    // Use querySelector to select the vitae element by its class name
    const elementToCapture = document.querySelector('.vitae');
  
    if (elementToCapture) {
      // Use html2canvas to capture the element as a canvas
      html2canvas(elementToCapture).then((canvas) => {
        // Convert the canvas to a data URL
        const dataURL = canvas.toDataURL();
  
        // Create a new jsPDF instance
        const pdf = new jsPDF('p', 'mm', 'a4');
  
        // Add an image of the captured element to the PDF
        pdf.addImage(dataURL, 'JPEG', 0, 0, 210, 297);
  
        // Save or download the PDF
        pdf.save('cv.pdf');
  
        // Show the download button again after capturing is complete
        if (button) {
          button.style.display = 'block';
        }
      });
    }
  };
  
  

  return (
   
    <div ref={vitaeRef}  className='vitae'>
      <div className='cv-card'>
        <div className='cv-name'>
        {/* 𝔽 𝕌 𝕃 𝕃 ℕ 𝔸 𝕄 𝔼 */}
        𝕂𝔼𝔼ℝ𝕋ℍ𝔸ℕ𝔸 ℝ𝔸𝕍𝕀

<p className='text-cv'>
​🇼 ​​🇪 ​​🇧 ​ ​🇩​​ 🇪 ​​🇻 ​​🇪 ​​🇱​​ 🇴 ​​🇵 ​​🇪 ​​🇷​​</p>

        </div>

        
      </div>
      <div className='cv-card2'>
      <p className='cv-heading'> ᴘ ʀ ᴏ ꜰ ɪ ʟ ᴇ</p> 
        <p className='p-cv'>I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page.</p>
 
        </div>


<div className='cv-vitae'>
  <div className='contact-card'>
    <p className='cont-cv'>ᴄ ᴏ ɴ ᴛ ᴀ ᴄ ᴛ</p>
    <div className='cont-content'>
      {/* <p className='address-label'></p> */}
      <p className='address'>
        Panakkaparambil(H)Karumalloor<br />
        P.O, Manakkapady
      </p>
      {/* <p className='email-label'>Email:</p> */}
      <p className='email' >
        keerthana23145@gmail.com
      </p>
      {/* <p className='contact-label'>Contact:</p> */}
      <p className='contact'>8891073784</p>


     <div className='iconn'>
      <a href="https://wa.me/your-whatsapp-number" target="_blank" rel="noopener noreferrer">
    <WhatsAppOutlined  className='cv-icon' />
  </a>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
    <LinkedinOutlined  className='cv-icon1'/>
  </a>

  {/* Instagram */}
  <a href="https://www.instagram.com/your-instagram-profile" target="_blank" rel="noopener noreferrer">
    <InstagramOutlined  className='cv-icon2' />
  </a>
</div>
    </div>

<div className='interest'>
<p className='cont-cv1'>ɪ ɴ ᴛ ᴇ ʀ ᴇ ꜱ ᴛ ꜱ</p>




<div className='cv-i'>
  <div className='circle-icon'>Anime</div>
  
  <div className='circle-icon'> Sketch</div>
 
</div>
<div className='cv-i'>
  <div className='circle-icon'>  Music</div>

  <div className='circle-icon'> Reading</div>
 
</div>

{/* <p  className='cont-cv1'>ʟ ᴀ ɴ ɢ ᴜ ᴀ ɢ ᴇ ꜱ</p>
<p className='cv-l'>Malayalam</p>
<p className='cv-l'>English</p>
<p className='cv-l'>Tamil</p> */}

<p  className='cont-cv1'>ʟ ᴀ ɴ ɢ ᴜ ᴀ ɢ ᴇ ꜱ</p>
<div className='cv-l malayalam'>
  Malayalam
  <div className='progress-bar'>
    <div className='language-skill'></div>
  </div>
</div>
<div className='cv-l english'>
  English
  <div className='progress-bar'>
    <div className='language-skill'></div>
  </div>
</div>
<div className='cv-l tamil'>
  Tamil
  <div className='progress-bar'>
    <div className='language-skill'></div>
  </div>
</div>


    </div>


    <p  className='cont-cv1'>ꜱ ᴋ ɪ ʟ ʟ ꜱ</p>
    <p className='skill-text' >​🇭​​🇦​​🇷​​🇩​ ​🇸​​🇰​​🇮​​🇱​​🇱​​🇸​</p>
<div className='skills'>
 
  <p>Mern</p>
  <p>Java</p>
  <p>Html&css</p>
  <p>IoT</p>
 
</div>


<p className='skill-text' >​🇸​​🇴​​🇫​​🇹​ ​🇸​​🇰​​🇮​​🇱​​🇱​​🇸​</p>

<div className='skills'>
 
  <p>Adaptibity</p>
  <p>Patience</p>
  <p>Prospecting</p>
  <p>Honest</p>
  <p>Writing</p>
 
</div>



  </div>


  
  <div className='education-card'>

<p className='edu'>ᴇ ᴅ ᴜ ᴄ ᴀ ᴛ ɪ ᴏ ɴ</p>
  <div className='education-card glassmorphism-card'>
   
    <div className='edu-text'>
      <p >2018</p>
      <p className='num'>10th BOARD EXAMINATION</p>
      <p>VIdhyadhiraja Vidhyabhavan Senior Secondary School Meikkad, Ernakulam</p>
      <p>Central Board of Secondary Education</p>
    </div>
  </div>

  <div className='education-card glassmorphism-card'>
    <div className='edu-text'>
      <p>2018-2020</p>
      <p className='num'>PLUS-TWO BIO_COMPUTER</p>
      <p>VIdhyadhiraja Vidhyabhavan Senior Secondary School Meikkad, Ernakulam</p>
      <p>Central Board of Secondary Education</p>
    </div>
  </div>

  <div className='education-card glassmorphism-card'>
    <div className='edu-text'>
      <p>2020-2023</p>
      <p className='num'>BACHELOR OF COMPUTER SCIENCE</p>
      <p>Nirmala College of Arts & Science Chalakudy, Thrissur</p>
      <p>University of Calicut</p>
    </div>
  </div>


{/* Projects */}

<div className='prjt'>
  <p>ᴘ ʀ ᴏ ᴊ ᴇ ᴄ ᴛ ꜱ</p>
</div>
<div className='prjt-card-container'>
  <div className='prjt-card'>
    <p>Pulse oximeter using Max30102
      {/* <p className='prjt-text'>Pulse oximeter is a device used measure oxyen saturation in RBC cells.  </p> */}
    </p>
  </div>
  <div className='prjt-card'>
    <p>Online Reading Books</p>
  </div>
  <div className='prjt-card'>
    <p>Portfolio</p>
  </div>
  <div className='prjt-card'>
    <p>Billerex</p>
  </div>
</div>











</div>


  



</div>


 
<Button className='cv-button' onClick={generatePDF}>Download Cv</Button>

 </div>
)
}
export default Cv;




