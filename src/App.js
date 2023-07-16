import { useRef,useState } from 'react';
import './App.css';

function App() {

  const inputRef=useRef(null);
  const [image,setimg] = useState("");
  const [show,setShow] = useState(false);
  const handleImageClick = () => {
    inputRef.current.click();
  };
  const handleImageChange = (event) => {
    const file=event.target.files[0];
    setimg(event.target.files[0]);
  };

  return (
    <div className="App">
      <div style={{padding:"1rem"}}>
        <div style={{fontSize:"3rem",marginBottom:"1rem"}}>
          <b>F</b>ood <b>I</b>mage <b>R</b>ecognition <b>S</b>ystem
        </div>
        <div style={{fontSize:"2rem",marginBottom:"0.5rem"}}>
          Choose an Image
        </div>
        <div style={{display:'flex',justifyContent:'center'}} onClick={handleImageClick}>
          {image ? <img src={URL.createObjectURL(image)} style={{height:'30rem',width:'50rem'}}/>: <img src='./imgdefault.png' />}
          <input type='file' ref={inputRef} onChange={handleImageChange} style={{display:'none'}}/>
        </div>
        <div>
          <button style={{backgroundColor:'cyan',width:'9rem',height:'3rem',borderRadius:'3rem',borderWidth:'0.05rem',cursor:'pointer',fontWeight:700,fontSize:'1rem',marginTop:"1rem"}} onClick={() => setShow(true)}>Detect</button>
        </div>
        { show && <div style={{backgroundColor:'black',opacity:'50%',borderRadius:'2rem',padding:'1rem',marginTop:'1rem'}}>
          <div style={{fontSize:"1.5rem",marginBottom:"0.5rem",color:'white'}}>
            Result
          </div>
          <div style={{fontSize:"1rem",marginBottom:"0.5rem",color:'white'}}>Result Placeholder</div>
          <div style={{fontSize:"1.5rem",marginBottom:"0.5rem",color:'white'}}>
            Review
          </div>
          <div>
            <div style={{color:'white'}}>Accuracy Of Clossness</div>
            <input type='number' placeholder='0' max={100}/>
            <div><button style={{backgroundColor:'cyan',width:'5rem',height:'2rem',borderRadius:'3rem',borderWidth:'0.05rem',cursor:'pointer',fontWeight:700,fontSize:'1rem',marginTop:"1rem"}}>Submit</button></div>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default App;
