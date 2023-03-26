import Homescreen from './components/mainpage/homescreen/homescreen';
import Video from './components/mainpage/video/video';
import Benefit from './components/mainpage/benefit/benefit';
import Footer from './components/mainpage/footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Homescreen />
      <Video />
      <Benefit />
      <Footer />
    </div>

  );
}

export default App;