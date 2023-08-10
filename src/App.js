import MenuComponent from './modules/MenuComponent';
import HeaderComponent from './modules/HeaderComponent';
import ContentAreaComponent from './modules/ContentAreaComponent';
import ThreeColumnComponent from './modules/ThreeColumnComponent';
import CTAComponent from './modules/CTAComponent';
import FooterComponent from './modules/FooterComponent';
import APIComponent from './modules/APIComponent';
import logo from './logo.svg';
import './App.css';
import './fonts.css';

function App() {
  return (
    <div className="App">
      <MenuComponent />
      <HeaderComponent />
      <APIComponent />
      <ContentAreaComponent />
      <ThreeColumnComponent />
      <CTAComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
