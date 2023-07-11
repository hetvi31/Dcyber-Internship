// import './styles/App.css';
// import Navbar from './components/Navbar';
// import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
// import Home from './components/Home';
// import Service from './components/Service';
// import Partners from './components/Partners';
// import Framework from './components/Framework';
// import About from './components/About';
// import Contact from './components/Contact';
// import Team from './components/Team';
// import Blog from './components/Blog';
// function App() {
//   return (
//     <div className="App">
     
//      <Router>
//           <Navbar/> 
//             <Routes>
//             <Route path='/' exact component={Home} />
//             <Route path='/service' exact component={Service} />
//             <Route path='/partner' exact component={Partners} />
//             <Route path='/framework' exact component={Framework} />
//             <Route path='/about' exact component={About} />
//             <Route path='/team' exact component={Team} />
//             <Route path='/contact' exact component={Contact} />
//             <Route path='/blog' exact component={Blog} />
//             </Routes>
             
//      </Router>
       
//     </div>
//   );
// };

// export default App;


import './styles/App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router , Route , Routes} from 'react-router-dom';
import Home from './components/Home';
import Service from './components/Service';
import Partners from './components/Partners';
import Framework from './components/Framework';
import About from './components/About';
import Contact from './components/Contact';
import Team from './components/Team';
import Blog from './components/Blog';

function App() {
  return (
    <div className="App">
     <Router>
         <Navbar />
                <Routes>
                <Route path='/' component={Home}  element={<Home />} />
                <Route path='/service'  element={<Service />} />
                <Route path='/partner'  element={<Partners />} />
                <Route path='/framework'  element={<Framework />} />
                <Route path='/about'  element={<About />} />
                <Route path='/team'  element={<Team />} />
                <Route path='/contact'  element={<Contact />} />
                <Route path='/blog'  element={<Blog />} />
                 </Routes>
     </Router>
     
       
    </div>
  );
};

export default App;
