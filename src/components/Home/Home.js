import './Home.css';
import HomeHeaderCard from './HomeHeaderCard';
import HomeHosting from './HomeHosting';
import HomeExperiences from './HomeExperiences';
import HomeGift from './HomeGift';

const Home = () => {
  return (
    <>
      <main className='h__main'>
          <HomeHeaderCard />
        <HomeExperiences />
        <HomeGift />
        <HomeHosting />
        <div style={{
          width: '100%',
          minHeight: '5rem',
          textAlign: 'center'
        }}>composant temporaire inspiration</div>
      </main>
    </>
  );
}

export default Home;
