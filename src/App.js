
import { useEffect, useState } from 'react';
import './App.css';
import Email from './Email';
import EmailList from './EmailList';
import DetailView from './DetailView';
import EmailSender from './EmailSender';
import EmailSearch from './EmailSearch';


function App() {
  const [emails, setEmails] = useState([]);
  const [currentEmail, setCurrentEmail] = useState({});

  useEffect( () => {
    getAllEmails();
  }, [])


  const getAllEmails = () => {
    fetch("http://localhost:3001/emails")
      .then(res => {
        return res.json();
      })
      .then( (data) => {
        setEmails(data);
      })
  }

  const getOneEmail = (id) => {

      fetch(`http://localhost:3001/emails/${id}`)
        .then(res => res.json())
        .then(data => setCurrentEmail(data));

  }



  return (
    <div className="App">
      <h1>Mock Gmail</h1>
      {
        currentEmail.sender ? 
        <DetailView 
          email={currentEmail} 
          setCurrentEmail={setCurrentEmail}
        /> : 
        <>
          <EmailSearch setEmails={setEmails}/>
          <EmailList 
            emails={emails} 
            // setCurrentEmail={setCurrentEmail}
            getOneEmail={getOneEmail}
          />
          <EmailSender getAllEmails={getAllEmails} />
        </>
      }


      
    </div>
  );
}

export default App;
