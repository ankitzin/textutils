import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {useState} from 'react'
import Alert from './components/Alert'
import About from './components/About'


import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";



function App() {

  const [mode,setMode] = useState('light');
  const [alert,setAlert] = useState(null);
  
  const showAlert = (message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },2000)
  }
    let changeMode = ()=>{
        if(mode === 'light'){
            setMode('dark')
            document.body.style.backgroundColor='#042743';
            showAlert("Dark mode has been enabled", "success")
            document.title = 'TextUtils: Dark'
            
        }else{
            setMode('light')
            document.body.style.backgroundColor='white';
            showAlert("Light mode has been enabled", "success")
            document.title = 'TextUtils: Light'

            
        }  
    }
  
  return (
    <>
      <Router>
        <Navbar title='TextUtils'  aboutTitle='About US' changeMode={changeMode} mode={mode}/>
        <div className='container my-5'>
        <Alert alert={alert}></Alert>
        {/* </div>
        <div className='container' style={{'marginTop':'100px'}}> */}
          <Routes>
            <Route path="/about"  element={<About mode = {mode}/>}>
            </Route>
            <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} changeMode={changeMode}></TextForm>}>
                  
            </Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
