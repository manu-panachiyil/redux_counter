import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    <div className='d-flex justify-content-center mt-5 align-items-center flex-column w-100'>
      <div className='d-flex justify-content-center mt-5 align-items-center flex-column rounded p-4 bg-white'>
        <h1 className='text-black'>Counter Application</h1>
        
        <Counter />
      </div>
        
      
    </div>
  );
}

export default App;
