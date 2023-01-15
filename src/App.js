import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './pages/mainPage/MainPage';
import ContactsPage from './pages/contactspage/ContactsPage';
import AboutPage from './pages/aboutPage/AboutPage';
import NavBar from './components/navBar/NavBar';
import DataPage from './pages/dataPage/DataPage';



function App() {
  return (
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route index element={<MainPage/>} />
        <Route path="/contacts" element={<ContactsPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/data" element={<DataPage/>}/>
      </Routes>    
    </BrowserRouter>
  );
}

export default App;
