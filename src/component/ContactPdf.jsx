import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  WhatsAppOutlined,
  InstagramOutlined,
  LinkedinOutlined,
} from '@ant-design/icons';

const ContactToPDF = () => {
  const pdfRef = useRef(null);

  const handleGeneratePDF = () => {
    const input = pdfRef.current;

    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');

      // Calculate the height of the content to add multiple pages if necessary
      const imgHeight = (canvas.height * 210) / canvas.width;
      let position = 0;
      const pageHeight = 297;

      pdf.addImage(imgData, 'PNG', 0, position, 210, imgHeight);
      position -= pageHeight;

      // Add more pages if the content exceeds one page
      while (position > -canvas.height) {
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 0, position, 210, imgHeight);
        position -= pageHeight;
      }

      pdf.save('contact.pdf');
    });
  };

  return (
    <div>
      <div ref={pdfRef}>
        <h1 style={{ color: 'darkblue' }}>#Ｃ Ｏ Ｎ Ｔ Ａ Ｃ Ｔ</h1>
        <div className="circle-container">
          <div className="circle">
            <EnvironmentOutlined className="icon" />
          </div>
          <div className="text">
            <p style={{ marginTop: 30 }}>
              Panakkaparambil(H) Karumallor P.O
              <br />
              Manakkapady pincode:683511
            </p>
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
            <img src="d.jpg" className="img" />
          </div>
        </div>
        <button className="antd-but" onClick={handleGeneratePDF}> ᴅᴏᴡɴʟᴏᴀᴅ ᴍʏ ᴄᴠ</button>
      </div>
      {/* <button onClick={handleGeneratePDF}>Generate PDF</button> */}
    </div>
  );
};

export default ContactToPDF;





