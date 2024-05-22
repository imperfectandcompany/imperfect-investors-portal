import { FunctionalComponent } from 'preact';
import Tam from './tam';

export const App: FunctionalComponent = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <Tam />
    </div>
  );
};
