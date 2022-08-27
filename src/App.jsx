import './App.css';
import EditPopup from './components/EditPopup/EditPopup';
import Header from './components/Header/Header';
import ImagesContainer from './components/ImagesContainer/ImagesContainer';
import ProfileInfo from './components/ProfileInfo/ProfileInfo';

const App = () => {
  return (
    <div className='app'>
      <Header />
      <ProfileInfo />
      <ImagesContainer />
    </div>
  );
};

export default App;
