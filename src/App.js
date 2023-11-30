




// import React from 'react';
// import Navbar from './component/Navbar';
// import { Element } from 'react-scroll'; // Import Element

// import './App.css';
// import About from './pages/About';
// import Resume from './pages/Resume';
// import Contact from './pages/Contacts';
// import Projects from './pages/Projects';


// function App() {
//   return (
//     <>
//     <div>
//       <Navbar />
//       <Element name="about">
//         <section id="about">
//           {/* About section content */}
//           <About />
//         </section>
//       </Element>
//       <Element name="resume">
//         <section id="resume">
//           <Resume />
//         </section>
//       </Element>
//       <Element name="projects">
//         <section id="projects">
//           <Projects />
//         </section>
//       </Element>
//       <Element name="contact">
//         <section id="contact">
//           <Contact />
//         </section>
//       </Element>

    
//     </div>
      
//     </>
//   );
// }

// export default App;



// App.js

// import React from 'react';

// import Navbar from './component/Navbar';
// import { Element } from 'react-scroll';
// import './App.css';
// import About from './pages/About';
// import Resume from './pages/Resume';
// import Contact from './pages/Contacts';
// import Projects from './pages/Projects';



// function App() {
//   return (
//     <>
//       <Navbar />
//       <Element name="about">
//         <section id="about">
//           {/* About section content */}
//           <About />
//         </section>
//       </Element>
//       <Element name="resume">
//         <section id="resume">
//           <Resume />
//         </section>
//       </Element>
//       <Element name="projects">
//         <section id="projects">
//           <Projects />
//         </section>
//       </Element>
//       <Element name="contact">
//         <section id="contact">
//           <Contact />
//         </section>
//       </Element>
     

//       {/* Define your routes */}
     
//     </>
//   );
// }

// export default App;

// route//




import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Sepage from './pages/Sepage'
import Cv from './pages/Cv'
 
const App = () => {
  return (
    <div>
<Routes>
  <Route path='/' element={<Sepage/>}/>
  <Route path='/cv' element={<Cv/>}/>
</Routes>

    </div>
  )
}

export default App