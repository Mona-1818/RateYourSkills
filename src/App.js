import Homescreen from './components/mainpage/homescreen/homescreen';
import Video from './components/mainpage/video/video';
import Benefit from './components/mainpage/benefit/benefit';
import Carousel from './components/mainpage/coursel/coursel';
import Footer from './components/mainpage/footer/footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Homescreen />
      <Video />
      <Benefit />
      <section>
        <Carousel />
      </section>
      <Footer />
    </div>

  );
}

export default App;