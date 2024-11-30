import { ScrollingProvider, Section } from 'react-scroll-section';
import MainHeader from '../../components/menu/MainHeader';
import MainFooter from '../../components/menu/MainFooter';
import Banner from '../../components/home/banner';
import Service from '../../components/home/service';
// import Tokenomics from '../../components/home/tokenomics';
// import RoadMap from '../../components/home/roadmap';
import Blog from '../../components/home/blog1';
import Team from '../../components/home/team';
import Shop from '../../components/home/shop';
import Contact from '../../components/home/Contact';
import './home.scss';

const Home = () => {
  return (
    <div className='home'>
      <ScrollingProvider offset={-65}>
        <MainHeader />
        <Section id="section1">
          <Banner />
        </Section>
        <Section id="section2">
          <Service />
        </Section>
        <Section id="section3">
          {/* <Tokenomics /> */}
          <Shop />
        </Section>
        {/* <Section id="section4">
          <RoadMap />
        </Section> */}
        <Section id="section6">
          <Blog />
        </Section>
        <Section id="section5">
          <Team />
        </Section>
        <Section id="section7">
          <Contact />
        </Section>
        <MainFooter />
      </ScrollingProvider>
    </div>
  )
}

export default Home;