import { useState } from 'react';
import axios from 'axios'
import './App.css';
import image from "./copy-svg.svg"

function App() {

  const [url , setUrl] = useState("");
  const [shortUrl , setShortUrl] = useState("");

  const handleGen = () => {
    // console.log(url);
    const payload = {
      "url" : url
    }
    axios.post(`http://localhost:8001/url/` , payload).then(res => {
      const newurl = "http://localhost:8001/" + res.data.id;
      console.log(newurl);
      setShortUrl(newurl);
    })
  }

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl).then(_ => {
      console.log('copied successfully!')
    })
  }

  return (
    <div className="App">
        <h1>Enter Url to be Shortened</h1>
        <input type="text" id="url" onChange={e => setUrl(e.target.value)}/>
        <button className='gen-btn' onClick={handleGen}>GENERATE</button>
        <div className="output">
          <div className="left">
              <a href= {shortUrl} target="_blank"> {shortUrl} </a>
          </div>
          <div className="logo">
              <img src={image} alt='copy' onClick={handleCopy}/>
          </div>
        </div>
    </div>
  );
}

export default App;
