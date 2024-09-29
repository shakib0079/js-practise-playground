import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AppHeader from './components/AppHeader';
// import HeaderOne from './components/HeaderOne';
import Slider from './components/Slider';

function App() {
  return (
    <div id='header'>
      <AppHeader />
      <main>
      <Slider />
      </main>
      {/* <HeaderOne /> */}
      
    </div>
  );
}


export default App;
