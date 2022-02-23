import './Home.css';
import HomeHeaderCard from './HomeHeaderCard';
import HomeHosting from './HomeHosting';
import HomeExperiences from './HomeExperiences';
import HomeGift from './HomeGift';
import SearchBar from '../SearchBar/SearchBar';
import Footer from '../Footer/Footer';
import AccountMenuHeader from "../menu_account/AccountMenuHearder";
import Header from "../header/Header";

const Home = () => {
  return (
    <>
      <header className='h__header'>
          <div className="top-header">
                <Header/>
          </div>
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
