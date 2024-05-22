import { FunctionalComponent } from 'preact';
import Tam from './tam';
import ProductGoals from './productGoals';
import QuoteTransition from './QuoteTransition';

export const App: FunctionalComponent = () => {
  return (
    <div className="items-center flex flex-col justify-center min-h-screen p-4 ">
        <ProductGoals/>
        <QuoteTransition />
      <Tam />
    </div>
  );
};
