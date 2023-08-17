import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Second from './components/second';
import Third from './components/third';
import Fourth from './components/Fourth';
import Fifth from './components/fifth';
import Six from './components/sixth';
import Seven from './components/seven';
import Eight from './components/eight';
import Footer from './components/Footer';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (

    <>
      {
        <body>
                <Header />
                <Slider />
                <Second />
                <Third />
                <Fourth />
                <Fifth />
                <Six />
                <Seven />
                <Eight />
                <Footer/>
        </body>
      }

    </>
  );
}

export default App;
