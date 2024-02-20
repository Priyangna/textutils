import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './components/Navbar';
import TxtUtils from './components/TxtUtils';

function App() {
  //const sampelTxt="Enter some text here!!"
  return (
  <>
   <Navbar colortheme="primary"/>
   <div className='container my-3'>
   <TxtUtils sampelTxt="Enter some text here!!...kkk" buttonName="Convert to Upper Case" />
   </div>
   </>
  );
}

export default App;
