import MenuComponent from './modules/MenuComponent';
import HeaderComponent from './modules/HeaderComponent';
import ContentAreaComponent from './modules/ContentAreaComponent';
import ThreeColumnComponent from './modules/ThreeColumnComponent';
import CTAComponent from './modules/CTAComponent';
import FooterComponent from './modules/FooterComponent';
import logo from './logo.svg';
import './App.css';
import './fonts.css';

function App() {
  return (
    <div className="App">
      <MenuComponent />
      <HeaderComponent />
      <ContentAreaComponent />
      <ThreeColumnComponent />
      <CTAComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
