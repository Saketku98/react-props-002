import './App.css';
import Img from './Images/img1.jpg';
import Img2 from './Images/img2.jpg';
import Tag from './Components/moviecard';

function App() {

  return (
    <div className="App">
    <Tag name="Bright" director="2017, David Ayer" poster={Img} />
    <Tag name="Tomb Raider" director="2018, Roar Uthaug" poster={Img2}/>
  </div>
  );
}

export default App;