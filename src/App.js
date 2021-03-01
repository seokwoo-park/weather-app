import { useSelector } from 'react-redux';
import './App.css';
import BackgroundDay from './components/BackgroundDay';
import BackgroundNight from './components/BackgroundNight';
import Input from './components/Input'
import WeatherInfo from './components/WeatherInfo';

function App() {

  const weather = useSelector(state => state.weather)

  return (
    <div className="App">
      {
        weather?.icon?.slice(2)=== 'd' ?
        <BackgroundDay/>
        :
        <BackgroundNight/>
      }
      <Input/>
      <WeatherInfo/>
    </div>
  );
}

export default App;
