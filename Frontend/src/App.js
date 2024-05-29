import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import Adddetails from './Components/Add Details/Adddetails';
import Updatedetails from './Components/Add Details/Updatedetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
     < Route path="/additem" element={<Adddetails />} />
     < Route path="/updateitem/:id" element={<Updatedetails />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
