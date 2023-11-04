import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MailSection from './components/MailSection/MailSection';
import PropertyList from './components/PropertyList/PropertyList';
import SideFilter from './components/SideFilter/SideFilter';
import TopFilter from './components/TopFilter/TopFilter';

function App() {
  return (
    <div className="App">
      <Header />
      <TopFilter />
      <div className='flex flex-row justify-between bg-white'>
      <SideFilter />
      <PropertyList />
      </div>
      <MailSection />
      <Footer />
    </div>
  );
}

export default App;
