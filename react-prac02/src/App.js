import './App.css';

function App() {
  let counter = 0;
  const increase = () => {
    counter = counter + 1;
    console.log('counter는', counter);
  };
  return (
    <div>
      <div>{counter}</div>
      <button onClick={increase}>클릭!</button>
    </div>
  );
}

export default App;
