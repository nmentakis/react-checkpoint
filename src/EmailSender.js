import { useState } from "react";

function EmailSender(props) {
  const [recipientText, setRecipientText] = useState("");
  const [subjectText, setSubjectText] = useState("");
  const [messageText, setMessageText] = useState("");



  const saveEmail = (e) => {
    e.preventDefault();
    fetch("http://localhost:3001/send", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sender: "jane@galvanize.com",
        recipient: recipientText,
        subject: subjectText,
        message: messageText
      })
    })
      .then((res) => {
        if  (!res.ok) {
          throw new Error("bad input values")    
        }
        return res.json()
      
      })
      .then(()=> {
        props.getAllEmails() ;
        setMessageText("");
        setRecipientText("");
        setSubjectText("");

      })
      .catch((e) => {
        console.error(e)
      });
  }

  return (
    <form onSubmit={(e)=> {saveEmail(e)}}>
      <input 
        placeholder="Recipient" 
        value={recipientText}
        onChange={(e) => {setRecipientText(e.target.value)}}
        ></input>
      <input placeholder="Subject" value={subjectText} onChange={(e) => {setSubjectText(e.target.value)}}></input>
       <input placeholder="Message" value={messageText} onChange={(e) => {setMessageText(e.target.value)}}></input>
       <button type="submit">Submit</button>
    </form>
  )



}

export default EmailSender;