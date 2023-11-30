import React from 'react';
import '../css/cv.css';
import {
  WhatsAppOutlined,
  LinkedinOutlined,
  InstagramOutlined,
} from '@ant-design/icons';

const Cvpdf = () => {
  // Define the URL to your CV file
  const cvUrl = process.env.PUBLIC_URL + '/my-cv.pdf';

  return (
    <div className='vitae'>
      <div className='cv-card'>
        <div className='cv-name'>
          𝔽 𝕌 𝕃 𝕃 ℕ 𝔸 𝕄 𝔼
          <p className='text-cv'>
            ​🇼 ​​🇪 ​​🇧 ​ ​🇩​​ 🇪 ​​🇻 ​​🇪 ​​🇱​​ 🇴 ​​🇵 ​​🇪 ​​🇷​​</p>
        </div>
      </div>
      <div className='cv-card2'>
        <p className='cv-heading'> ᴘ ʀ ᴏ ꜰ ɪ ʟ ᴇ</p>
        <p className='p-cv'>
          I'm a paragraph. Click here to add your own text and edit me. It’s
          easy. Just click “Edit Text” or double click me to add your own
          content and make changes to the font. I'm a paragraph. Click here to
          add your own text and edit me. It’s easy. Just click “Edit Text” or
          double click me to add your own content and make changes to the font.
          Feel free to drag and drop me anywhere you like on your page.
        </p>
      </div>

      {/* ... (your existing CV content) ... */}

      <a
        className='cv-download-button'
        href={cvUrl}
        download='my-cv.pdf'
        target='_blank'
        rel='noopener noreferrer'
      >
        Download My CV
      </a>
    </div>
  );
};

export default Cvpdf;
