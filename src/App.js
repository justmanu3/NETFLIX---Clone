import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import { action,orginals,horror,comedy,romance} from './Urls'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import Footer from './Components/Footer/Footer'


function App() {
  return (
    <div className="App">
        <NavBar/>
        <Banner/>
        <RowPost isSmall url={orginals} title={'Netflix Originals'} />
        <RowPost isSmall url={action} title={'Action Movies'} />
        <RowPost isSmall url={horror} title={'Horror Movies'}/>
        <RowPost isSmall url={comedy} title={'Comedy Movies'} />
        <RowPost isSmall url={romance} title={'Romantic Movies'}/>
        <Footer/>
    </div>
  );
}

export default App;