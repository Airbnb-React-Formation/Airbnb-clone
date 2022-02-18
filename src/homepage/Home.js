import './Home.css';
import HomeHeaderCard from './HomeHeaderCard';
import HomeHosting from './HomeHosting';
import HomeExperiences from './HomeExperiences';
import HomeGift from './HomeGift';

const Home = () => {
  return (
    <>
      <header className='h__header'>
        <TmpHeaderMenu />
        <HomeHeaderCard />
      </header>
      <main className='h__main'>
        <HomeExperiences />
        <HomeGift />
        <HomeHosting />
        <TmpInspiration />
      </main>
      <footer className='h__footer'>
        <TmpFooter/>
      </footer>
    </>
  );
}

export default Home;

// Composants temporaires, à remplacer par les vrais
const TmpHeaderMenu = () => (
  <div style={{
    position: 'fixed',
    width: '70vw',
    minHeight: '10vmin',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: '50px',
    margin: '3vmin calc((100% - 70vw)/4)',
    display: 'grid',
    alignItems: 'center',
    justifyItems: 'center'
  }}>header menu</div>
);
const TmpFooter = () => (
  <div style={{
    width: '100%',
    minHeight: '5rem',
    textAlign: 'center'
  }}>footer</div>
);
const TmpInspiration = () => (
  <div style={{
    width: '100%',
    minHeight: '5rem',
    textAlign: 'center'
  }}>inspiration</div>
);
