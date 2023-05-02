import logo from './logo.svg';
import './App.css';
import NavbarMenu from './componnents/NavbarMenu';

function AppTestTailwind() {
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
    
  <div>
    <div className="text-xl font-medium text-primary">ChitChat</div>
    <p className="text-blue-450">You have a new message!</p>
    <TailWindCSSButton>
      This Is
    </TailWindCSSButton>
  </div>
</div>

  );

}
function TailWindCSSButton(props){
  return(
    <button className='bg-blue-500 text-white font-medium px-4 py-2 rounded hover:bg-blue-600'>

      {props.children}
    </button>
  )
}

export default App;
