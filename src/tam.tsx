import { FunctionalComponent, h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import './index.css';

type Market = {
  name: string;
  value: string;
  color: string;
  size: number;
  details: string;
  onBack?: () => void;
};

const MarketCircle: FunctionalComponent<{
  value: string;
  label: string;
  color: string;
  size: number;
  onClick: () => void;
}> = ({ value, label, color, size, onClick }) => {
  const textSize = size * 0.2; // Adjust text size based on circle size
  return (
    <div
      className="flex flex-col items-center cursor-pointer hover:scale-105 transition-transform duration-300"
      onClick={onClick}
    >
      <div
        className={`flex items-center justify-center rounded-full ${color}`}
        style={{ width: `${size}px`, height: `${size}px` }}
      >
        <span className="font-semibold text-white" style={{ fontSize: `${textSize}px` }}>{value}</span>
      </div>
      <div className="mt-4 text-lg font-medium">{label}</div>
    </div>
  );
};

const MarketDetails: FunctionalComponent<{ market: Market }> = ({ market }) => (
  <div className="flex flex-col items-center justify-center min-h-screen p-4 animate-fadeIn">
    <div className="text-3xl font-semibold mb-12 text-center">{market.name} Details</div>
    <div className="max-w-4xl text-center p-4">
      <p className="text-lg">{market.details}</p>
    </div>
    <button
      className="mt-10 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors duration-300 flex items-center hover:scale-105 transition-transform duration-300"
      onClick={market.onBack}
    >
      <i className="fas fa-arrow-left mr-2"></i> Back
    </button>
  </div>
);

const Conclusion: FunctionalComponent = () => (
  <div className="text-center p-4 max-w-4xl mx-auto">
    <h2 className="text-xl font-semibold mb-4">Conclusion</h2>
    <p className="text-lg mb-4">
      In conclusion, our market potential is vast, and our unique features put us at a vantage point to tap into the growing disquiet with existing platforms. By championing values like privacy, authentic communication, and user control, we believe we are poised to make a significant impact in this market.
    </p>
    <div className="text-sm italic">
      <p>Citations:</p>
      <ul className="list-disc list-inside">
        <li>Digital 2022 Global Overview Report - Hootsuite and We Are Social</li>
        <li>Demographics of Social Media Users in 2021 - Pew Research Center</li>
        <li>Evolving Landscape of Social Media Platforms 2021 - Artemisia Group</li>
      </ul>
    </div>
  </div>
);

const Tam: FunctionalComponent = () => {
  const [currentView, setCurrentView] = useState('overview');
  const [selectedMarket, setSelectedMarket] = useState<Market | null>(null);

  const markets: Record<string, Market> = {
    tam: {
      name: 'Total Addressable Market',
      value: '4.88B',
      color: 'bg-green-200 text-black',
      size: 120,
      details: 'Our Total Addressable Market (TAM) accounts for everyone who could potentially use our service. As a digital platform, our market isn\'t restricted by geographical boundaries - it\'s global. According to Hootsuite\'s Digital 2022 report, the number of social media users worldwide has increased to 4.88 billion. Therefore, Postogon\'s TAM, in theory, is all these 4.88 billion users.'
    },
    sam: {
      name: 'Serviceable Available Market',
      value: '1.22B',
      color: 'bg-green-300 text-black',
      size: 90,
      details: 'Our Serviceable Available Market (SAM) pinpoints our immediate market - early adopters and those who are most likely to use our platform from the get-go. These are primarily individuals who value privacy, seamless differentiation between personal and professional life, and are seeking alternatives to existing social platforms. A study by Artemisia Group indicates that about 25% of global social media users are unsatisfied with the current platforms concerning privacy and segregation of work and personal life. This equates to approximately 1.22 billion users, our SAM.'
    },
    som: {
      name: 'Serviceable Obtainable Market',
      value: '2.72B',
      color: 'bg-gray-800',
      size: 60,
      details: 'Our Serviceable Obtainable Market (SOM) narrows down our target audience, focusing on those who are more likely to use our platform. With our emphasis on honest communication and privacy, we primarily target young adults and middle-aged adults who are technologically literate and put a high premium on these values. The Pew Research Center reported that 90% of the adult population ranging from 18-49 years old use social media, accounting for more than 2.72 billion users globally. Thus, this age group is, after being factored for global population age distribution, our SOM.'
    }
  };

  const handleCircleClick = (marketKey: string) => {
    setSelectedMarket({ ...markets[marketKey], onBack: () => setCurrentView('overview') });
    setCurrentView('details');
  };

  useEffect(() => {
    document.querySelector('.animate-fadeIn')?.classList.remove('animate-fadeIn');
    setTimeout(() => {
      document.querySelector('.animate-fadeIn')?.classList.add('animate-fadeIn');
    }, 10);
  }, [currentView]);

  return (
    <div>
      {currentView === 'overview' && (
        <div className="animate-fadeIn">
          <div className="text-3xl font-semibold mb-12 text-center">Total Addressable Market Overview</div>
          <p className="text-center text-gray-600 mb-8">Click on any market for more details.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-items-center">
            {Object.keys(markets).map((key) => (
              <MarketCircle
                key={key}
                value={markets[key].value}
                label={markets[key].name}
                color={markets[key].color}
                size={markets[key].size}
                onClick={() => handleCircleClick(key)}
              />
            ))}
          </div>
          <Conclusion />
        </div>
      )}
      {currentView === 'details' && selectedMarket && <MarketDetails market={selectedMarket} />}
    </div>
  );
};

export default Tam;
