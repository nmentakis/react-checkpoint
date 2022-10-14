function DetailView(props) {
  return (
  <>
    <h2>Sender: {props.email.sender}</h2>
    <h3>Subject: {props.email.subject}</h3>
    <h5>Recipient: {props.email.recipient}</h5>
    <p>{props.email.message}</p>
    <button onClick={() => props.setCurrentEmail({})}>Return to List</button>
  </>
  )
}

export default DetailView;