




// import React from 'react';
// import '../css/p.css';

// const Projects = () => {
//   return (
//     <div id="projects">
//       {/* Content of the About section */}
//       <h1>#Ｐ Ｒ Ｏ Ｊ Ｅ Ｃ Ｔ Ｓ</h1>
//       <p>--Works--</p>

//       {/* Single Project Card */}
//       <div className="project-card">
//         <h2>IOT</h2>
//         <p>Pulse Oximeter using IoT.</p>
//         {/* <a href="#">Learn More</a> */}
//       </div>
//     </div>
//   );
// };

// export default Projects;


// straight card//
// import React, { useState, useEffect } from 'react';
// import '../css/p.css';

// const Projects = () => {
//   const [selectedCard, setSelectedCard] = useState(0); // Initialize with the first card
//   const cards = [
//     {
//       title: 'IOT',
//       description: 'Pulse Oximeter using IoT.',
//     },
//     {
//       title: 'Books',
//       description: 'Online reading books.',
//     },
//     {
//       title: 'Portfolio',
//       description: 'Using React.',
//     },
//     {
//       title: 'IOT',
//       description: 'Pulse Oximeter using IoT.',
//     },
//     {
//       title: 'Books',
//       description: 'Online reading books.',
//     },
//     {
//       title: 'Portfolio',
//       description: 'Using React.',
//     },
//     // Add more card objects as needed
//   ];

//   useEffect(() => {
//     const rotateInterval = setInterval(() => {
//       // Increment the selected card index in a circular manner
//       setSelectedCard((prevSelectedCard) => (prevSelectedCard + 1) % cards.length);
//     }, 3000); // Rotate every 3 seconds

//     return () => {
//       clearInterval(rotateInterval); // Clean up the interval when the component unmounts
//     };
//   }, []);

//   const handleCardClick = (index) => {
//     setSelectedCard(index);
//   };

//   return (
//     <div id="projects">
//       <h1>#Ｐ Ｒ Ｏ Ｊ Ｅ Ｃ Ｔ Ｓ</h1>
//       <p>--Works--</p>

//       <div className="card-container">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className={`project-card ${selectedCard === index ? 'selected' : ''}`}
//             onClick={() => handleCardClick(index)}
//           >
//             <h2>{card.title}</h2>
//             <p>{card.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Projects;


// rotate card//
// import React, { useState, useEffect } from 'react';
// import '../css/p.css';
// import { CloseCircleOutlined } from '@ant-design/icons';

// const Projects = () => {
//   const [selectedCard, setSelectedCard] = useState(null); // Initialize with null
//   const [rotationAngle, setRotationAngle] = useState(0); // Track the rotation angle
//   const cards = [
//     {
//       title: 'IOT',
//       description: 'Pulse Oximeter using IoT.',
//     },
//     {
//       title: 'Books',
//       description: 'Online reading books using react.',
//     },
//     {
//       title: 'Portfolio',
//       description: 'Using React.',
//     },
//     {
//       title: 'Billerex',
//       description: 'using react frontend design',
//     },
//     {
//       title: 'Books',
//       description: 'Online reading books.',
//     },
//     {
//       title: 'Portfolio',
//       description: 'Using React.',
//     },
//     // Add more card objects as needed
//   ];

//   useEffect(() => {
//     const rotateInterval = setInterval(() => {
//       // Increment the rotation angle
//       setRotationAngle((prevRotationAngle) => (prevRotationAngle + 60) % 360);
//     }, 3000); // Rotate every 3 seconds

//     return () => {
//       clearInterval(rotateInterval); // Clean up the interval when the component unmounts
//     };
//   }, []);

//   const handleCardClick = (index) => {
//     setSelectedCard(index); // Set the selected card when clicked
//   };

//   const closePopup = () => {
//     setSelectedCard(null); // Close the pop-up by resetting selectedCard to null
//   };

//   return (
//     <div id="projects">
//       <h1>#Ｐ Ｒ Ｏ Ｊ Ｅ Ｃ Ｔ Ｓ</h1>
//       <p>--ᴡᴏʀᴋꜱ--</p>

//       <div className="sphere-container">
//         {cards.map((card, index) => (
//           <div
//             key={index}
//             className={`project-card ${selectedCard === index ? 'selected' : ''}`}
//             onClick={() => handleCardClick(index)}
//             style={{
//               transform: `rotateY(${60 * index + rotationAngle}deg) translateZ(200px)`,
//             }}
//           >
//             <h2>{card.title}</h2>
//             <p>{selectedCard === index ? card.description : ''}</p>
//           </div>
//         ))}
//       </div>

//       {selectedCard !== null && (
//         <div className="popup-container">
//           <div className="popup">
//             <div className="popup-content">
//               <h2>{cards[selectedCard].title}</h2>
//               <p>{cards[selectedCard].description}</p>
//               <button onClick={closePopup}>
//               <CloseCircleOutlined style={{ fontSize: '20px' }} /></button>
//             </div>
        

//           </div>
//         </div>
//       )}

//     </div>
//   );
// };

// export default Projects;



// slightly corrected//


// import React, { useState, useEffect, } from 'react';
// import '../css/p.css';
// import { CloseCircleOutlined } from '@ant-design/icons';




// const Modal = ({ isVisible, onClose, card }) => {
//   return (
//     isVisible && (
//       <div className="modal">
//         <div className="modal-card" style={{ backgroundColor: card.backgroundColor }}>
//           {/* Title and Description */}
//           <div className="modal-header">
//             <h2>{card.title}</h2>
//             <p>{card.description}</p>
//           </div>
//           <button onClick={onClose} className="close-button">
//             <CloseCircleOutlined style={{ fontSize: '20px' }} />
//           </button>
//         </div>
//         <div className="modal-content">
//           {/* Left side image */}
//           <div className="modal-image">
//             <img src={card.imageSrc} className="image" alt={card.title} />
//           </div>
//           {/* Right side additional information */}
//           <div className="modal-text">
//             <h2>Additional Information</h2>
//             <p>{card.components}</p>
//             <p>{card.additionalInfo}</p>
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

import React, { useState, useEffect, useRef } from 'react';
import '../css/p.css';
import { CloseCircleOutlined } from '@ant-design/icons';

const Modal = ({ isVisible, onClose, card }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isVisible) {
      window.addEventListener('mousedown', handleClickOutside);
    } else {
      window.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, onClose]);

  return (
    isVisible && (
      <div className="modal">
        <div className="modal-card" style={{ backgroundColor: card.backgroundColor }} ref={modalRef}>
          {/* Title and Description */}
          <div className="modal-header">
            <h2>{card.title}</h2>
            <p>{card.description}</p>
          </div>
          <button onClick={onClose} className="close-button">
            <CloseCircleOutlined style={{ fontSize: '20px' }} />
          </button>
        </div>
        <div className="modal-content">
          {/* Left side image */}
          <div className="modal-image">
            <img src={card.imageSrc} className="image" alt={card.title} />
          </div>
          {/* Right side additional information */}
          <div className="modal-text">
            <h2>Additional Information</h2>
            <p>{card.components}</p>
            <p>{card.additionalInfo}</p>
          </div>
        </div>
      </div>
    )
  );
};



const Projects = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [rotationAngle, setRotationAngle] = useState(0);
  const [isModalVisible, setModalVisible] = useState(false);

  const cards = [
    {
      title: 'IOT',
      description: 'Pulse Oximeter using IoT.',
      imageSrc: 'p.jpg',
      components: 'IoT components',
      additionalInfo: 'More details about IoT project.',
    },
    {
      title: 'Books',
      description: 'Online reading books using react.',
      imageSrc: 'b.png',
      components: 'React components',
      additionalInfo: 'More details about Books project.',
    },

    {
      title: 'Portfolio',
      description: 'using React..',
      imageSrc: 'port.png',
      components: 'React components',
      additionalInfo: 'More details about Portfolio project.',
    },
    {
      title: 'Books',
      description: 'Online reading books using react.',
      imageSrc: 'books.jpg',
      components: 'React components',
      additionalInfo: 'More details about Books project.',
    },
    {
      title: 'IOT',
      description: 'Pulse Oximeter using IoT.',
      imageSrc: 'iot.jpg',
      components: 'IoT components',
      additionalInfo: 'More details about IoT project.',
    },
    {
      title: 'Books',
      description: 'Online reading books using react.',
      imageSrc: 'books.jpg',
      components: 'React components',
      additionalInfo: 'More details about Books project.',
    },
    // Add more card objects as needed
  ];

  useEffect(() => {
    const rotateInterval = setInterval(() => {
      setRotationAngle((prevRotationAngle) => (prevRotationAngle + 60) % 360);
    }, 3000);

    return () => {
      clearInterval(rotateInterval);
    };
  }, []);

  const handleCardClick = (index) => {
    setSelectedCard(index);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedCard(null);
    setModalVisible(false);
  };

  return (
    <div id="projects">
      <h1>#Ｐ Ｒ Ｏ Ｊ Ｅ Ｃ Ｔ Ｓ</h1>
      <p>--ᴡᴏʀᴋꜱ--</p>

      <div className="sphere-container">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`project-card ${selectedCard === index ? 'selected' : ''}`}
            onClick={() => handleCardClick(index)}
            style={{
              transform: `rotateY(${60 * index + rotationAngle}deg) translateZ(200px)`,
              backgroundColor: card.backgroundColor,
            }}
          >
            <h2>{card.title}</h2>
            <p>{selectedCard === index ? card.description : ''}</p>
          </div>
        ))}
      </div>

      <Modal isVisible={isModalVisible} onClose={closeModal} card={cards[selectedCard]} />
    </div>
  );
};

export default Projects;
