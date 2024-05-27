import { useEffect, useState } from 'react';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

export const ToastMessage = ({message, setStatus}) => {
  const [show, setShow] = useState(false);
  let time = 3000

  let messageColor = ''
  switch (message) {
    case 'Message sent successfully': messageColor = 'chartreuse';
      break;
    case 'Something went wrong, Please try again later.': messageColor = 'crimson';
      break;
    default: 
      messageColor = "gray"
  }

  useEffect(() => {
    if (message) {
      setShow(true)
      const timer = setTimeout(() => {
        setStatus({})
      }, time + 1000)
    }
    
  }, [message])

  return (
    <ToastContainer className="p-3"  style={{ zIndex: 1, position: 'absolute', top: '90%', right: '0%'}}>
      <Toast onClose={() => setShow(false)} show={show} delay={time} autohide style={{backgroundColor: messageColor, borderRadius: '10px'}}>
        <Toast.Body >{message}</Toast.Body>
      </Toast>
    </ToastContainer>
  )
}