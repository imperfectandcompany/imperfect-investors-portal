import { FunctionalComponent } from 'preact';
import MindMap from './Mindmap';
import { TheProblem } from './TheProblem';
import { useEffect } from 'preact/hooks';
import { QuoteTransition } from './QuoteTransition';
import Header from './Header';
import Navbar from './Navbar';
import DateInfo from './DateInfo';
import CalendarCTA from './CalendarCTA';
import Footer from './Footer';
import Tam from './Tam';
import ProductGoals from './ProductGoals';



function NoiseEffect() {
  useEffect(() => {
    const updateNoiseOffset = () => {
      document.documentElement.style.setProperty('--x-offset', `${Math.random() * 20 - 10}px`);
      document.documentElement.style.setProperty('--y-offset', `${Math.random() * 20 - 10}px`);
    };

    updateNoiseOffset(); // Initial update
    const interval = setInterval(updateNoiseOffset, 20); // Update the offset less frequently

    return () => clearInterval(interval);
  }, []);

  return <div className="noise" />;
}



export const App: FunctionalComponent = () => {
  return (
<>
<NoiseEffect />

<Navbar/>
      <Header/>
<div className="container items-center flex flex-col mx-auto justify-center min-h-screen p-4 ">

      <MindMap/>
      <TheProblem/>
        <ProductGoals/>
        <QuoteTransition />
        <div className='w-full'>
                <Tam />
        <CalendarCTA/>

        </div>
    </div>
<DateInfo publishedOn="May 21, 2021" lastUpdated="May 22, 2024" />
<Footer/>
</>
  );
};
