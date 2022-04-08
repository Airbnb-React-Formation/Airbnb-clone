import './Home.css';
import HomeHeaderCard from './HomeHeaderCard';
import HomeHosting from './HomeHosting';
import HomeExperiences from './HomeExperiences';
import HomeGift from './HomeGift';
import {useStyle} from "../context/StyleContext";
import {useEffect} from "react";

const Home = () => {
    const {setConfig} = useStyle()
    const headerConfig = {
        isStartExpanded: true,
        searchCollapsedType: "button",
    }
    useEffect(()=>{
        setConfig(headerConfig)
    },[])
    return (
        <>
            <main className='h__main'>
                <HomeHeaderCard/>
                <HomeExperiences/>
                <HomeGift/>
                <HomeHosting/>
                {/*<div style={{*/}
                {/*    width: '100%',*/}
                {/*    minHeight: '5rem',*/}
                {/*    textAlign: 'center'*/}
                {/*}}>*/}
                {/*    composant temporaire inspiration*/}
                {/*</div>*/}
            </main>
        </>
    );
}

export default Home;
