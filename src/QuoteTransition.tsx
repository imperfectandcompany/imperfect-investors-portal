import { FunctionalComponent, h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import './index.css';

const QuoteTransition: FunctionalComponent = () => {
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setToggle(prevToggle => !prevToggle);
    }, 5000); // Change quote every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`transition-all duration-1000 ease-in-out ${toggle ? 'light-theme' : 'dark-theme'} p-4 sm:p-12 w-full max-w-4xl text-center`}>
      {toggle ? (
        <div>
          <p className="text-xl sm:text-3xl font-semibold">
            “The ability to connect with others is what makes us human, and the social media platforms we build should reflect that.”
          </p>
          <p className="text-lg sm:text-xl font-semibold mt-2 sm:mt-4">
            MARK ZUCKERBERG
          </p>
        </div>
      ) : (
        <div>
          <p className="text-lg sm:text-xl font-semibold">
            Mark Zuckerberg 1984–<br />
            American computer entrepreneur
          </p>
          <p className="text-md sm:text-lg mt-2 sm:mt-4">
            "You have one identity…The days of you having a different image for your work friends or co-workers and for the other people you know are probably coming to an end pretty quickly…Having two identities for yourself is an example of a lack of integrity."
          </p>
          <p className="text-xs sm:text-sm italic mt-1 sm:mt-2">
            David Kirkpatrick — <i>The Facebook Effect</i> (2010)
          </p>
          <a href="https://www.oxfordreference.com/display/10.1093/acref/9780191826719.001.0001/q-oro-ed4-00017121" className="text-xs sm:text-sm underline">
            Source
          </a>
        </div>
      )}
    </div>
  );
};

export default QuoteTransition;
