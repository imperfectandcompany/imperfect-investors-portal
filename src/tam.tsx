import { FunctionComponent, h } from 'preact';
import { useState, useEffect } from 'preact/hooks';

// MarketCircle Component
interface MarketCircleProps {
  value: string;
  label: string;
  color: string;
  size: number;
  onClick: () => void;
  isExpanding: boolean;
}

const MarketCircle: FunctionComponent<MarketCircleProps> = ({ value, label, color, size, onClick, isExpanding }) => {
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    transition: 'all 0.5s ease-in-out',
    transform: isExpanding ? 'scale(30)' : 'scale(1)',
    opacity: isExpanding ? 0 : 1
};

return (
    <div className="market-circle cursor-pointer flex flex-col items-center justify-center p-4 hover:scale-110 transition-transform duration-300" onClick={onClick} role="button" aria-label={`Market circle for ${label}, click for more details`}>
        <div className={`circle ${color} flex items-center justify-center rounded-full shadow-inner`} style={style}>
            <span className="font-semibold text-white transition-colors duration-300" style={{ fontSize: `${size * 0.2}px` }}>{value}</span>
        </div>
        <div className="label mt-2 text-center text-gray-700 font-medium" style={{ opacity: isExpanding ? 0 : 1, transition: 'opacity 0.5s ease-in-out' }}>{label}</div>
    </div>
  );
};

// MarketDetails Component
interface MarketDetailsProps {
  market: {
    name: string;
    details: string;
    onBack: () => void;
  };
}

const MarketDetails: FunctionComponent<MarketDetailsProps> = ({ market }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center p-4">
        <div className="text-3xl font-semibold mb-12 text-center">Loading...</div>
        <div className="max-w-4xl text-center p-4">
          <div className="animate-pulse bg-gray-200 h-8  mb-4"></div>
          <div className="animate-pulse bg-gray-200 h-8 w-64 mb-4"></div>
          <div className="animate-pulse bg-gray-200 h-8 w-64 mb-4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="text-3xl font-semibold mb-12">{market.name} Details</div>
      <div className="max-w-4xl text-center p-4">
        <p className="text-lg">{market.details}</p>
      </div>
      <button
        className="mt-10 px-6 py-2 bg-black text-white rounded hover:bg-gray-800 transition-colors duration-300 flex items-center hover:scale-105 transition-transform duration-300"
        onClick={market.onBack}
        aria-label="Go back to market overview"
      >
        <i className="fas fa-arrow-left mr-2"></i> Back
      </button>
    </div>
  );
};

// Conclusion Component
const Conclusion: FunctionComponent = () => {
  return (
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
};

// Main TAM Component
const Tam: FunctionComponent = () => {
  const [currentView, setCurrentView] = useState<'overview' | 'details'>('overview');
  const [selectedMarket, setSelectedMarket] = useState<{
    name: string;
    value: string;
    color: string;
    size: number;
    details: string;
    onBack: () => void;
  } | null>(null);
  const [isExpanding, setIsExpanding] = useState(false);


  const markets: Record<string, {
    name: string;
    value: string;
    color: string;
    size: number;
    details: string;
  }> = {
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
    setIsExpanding(true);
    setTimeout(() => {
        const market = markets[marketKey];
        setSelectedMarket({
            ...market,
            onBack: () => {
                setIsExpanding(false);
                setTimeout(() => setCurrentView('overview'), 500);
            }
        });
        setCurrentView('details');
    }, 500);
  };

  return (
    <div>
      {currentView === 'overview' && (
        <div className=' '>
          <div className="text-4xl font-bold mt-8 mb-8">Total Addressable Market Overview</div>
          <p className="text-gray-600 mb-12">Click on any market for more details.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
            {Object.keys(markets).map((key) => (
              <MarketCircle
                key={key}
                value={markets[key].value}
                label={markets[key].name}
                color={markets[key].color}
                size={markets[key].size}
                onClick={() => handleCircleClick(key)}
                isExpanding={isExpanding}
              />
            ))}
          </div>
          <Conclusion />
        </div>
      )}
      {currentView === 'details' && selectedMarket && <MarketDetails market={selectedMarket} />}
      {currentView === 'details' && !selectedMarket && (
        <div className="flex flex-col items-center justify-center p-4">
          <div className="text-3xl font-semibold mb-12 text-center">Loading...</div>
          <div className="max-w-4xl text-center p-4">
            <div className="animate-pulse bg-gray-200 h-8  mb-4"></div>
            <div className="animate-pulse bg-gray-200 h-8 w-64 mb-4"></div>
            <div className="animate-pulse bg-gray-200 h-8 w-64 mb-4"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tam;
