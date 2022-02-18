import './Home.css';
import HomeHeaderCard from './HomeHeaderCard';
import HomeHosting from './HomeHosting';
import HomeExperiences from './HomeExperiences';
import HomeGift from './HomeGift';
import SearchBar from '../components/SearchBar/SearchBar';
import Footer from '../Component/Footer/Footer';

const Home = () => {
  return (
    <>
      <header className='h__header'>
        <SearchBar />
        <HomeHeaderCard />
      </header>
      <main className='h__main'>
        <HomeExperiences />
        <HomeGift />
        <HomeHosting />
        <div style={{
          width: '100%',
          minHeight: '5rem',
          textAlign: 'center'
        }}>composant temporaire inspiration</div>
      </main>
      <footer className='h__footer'>
        <Footer/>
      </footer>
    </>
  );
}

export default Home;
