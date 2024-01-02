import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';




function App() {

  return (
<> 
   <div>
            
        
   <Navbar title="TextUtils" aboutText="Home"  about="About" / > 
   
   <div class="container my-3">
   
   <TextForm heading="Enter the text to analyze" />
   </div>
   </div>
</>


  );          
}

export default App;
