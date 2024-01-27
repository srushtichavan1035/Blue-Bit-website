// App.js

import Navbar from './components/Navbar';
import StarrySky from './components/StarsBg';
import Timer from './components/Timer';

const App = () => {
  return (
    <div className="relative min-h-screen bg-[#0d1117] text-center font-mono font-bold text-4xl">
      {/*Remember taj to remove min-h-screen after the development*/}
      <div className="fixed z-50 top-0 w-full h-8">
        <Navbar />
      </div>
      <div className="absolute inset-0 z-0">
        <StarrySky />
      </div>
      <div className="relative z-10 flex items-center justify-center h-full">
        <div>
          {/* EveryBody put your component here */}
          <div className="flex items-center z-10 justify-center h-[70vh]">
            <Timer/>
          </div>
          <div className="flex items-center z-10 justify-center h-[70vh]">
            <Timer/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
