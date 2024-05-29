import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import contactImg from "../assets/img/contact-img.svg"

export const Contact = ({setStatus}) => {
  const formInitialDetails = {
    name: '',
    email: '',
    message: ''
  }
  
  const [formDetails, setFormDetails] = useState(formInitialDetails)
  const [buttonText, setButtonText] = useState('Send')
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(false)

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setButtonText('Sending...')
    setIsSubmitDisabled(true)
    try {
      let response = await fetch('http://localhost:5000/contact', {
        method: "POST",
        headers: {
          "Content-Type": "Application/json;charset=utf-8",
        },
        body: JSON.stringify(formDetails)
      })
      await response.json()
      setFormDetails(formInitialDetails)
      if (response.ok) {
        setStatus({ success: true, message: 'Message sent successfully'})
        setButtonText("Wait to Send Again")
      } else {
        setStatus({ success: false, message: "Something went wrong, Please try again later."})
      }
    } catch (error) {
      // console.log('Error:', error);
      setStatus({ success: false, message: "Something went wrong, Please try again later."})
      setButtonText("Send")
    }
    setTimeout(() => {
      setIsSubmitDisabled(false)
      setButtonText("Send")
    }, 20000)
    
  }

  return (
    <section className='contact' id='connect'>
      <Container>
        <Row className='align-items-center'>
          <Col md={6}>
            <img src={contactImg} alt='Contact Us' />
          </Col>
          <Col  md={6}>
            <h2>Get in Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col size={12} sm={6} className='px-1'>
                  <input required type='text' value={formDetails.name} placeholder='Name' onChange={(e) => onFormUpdate('name', e.target.value)} />
                </Col>
                <Col size={12} sm={6} className='px-1'>
                  <input required type='email' value={formDetails.email} placeholder='Email' onChange={(e) => onFormUpdate('email', e.target.value)} />  
                </Col>
                <Col size={12} className="px-1">
                  <textarea required rows='6' value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('message', e.target.value)}/>
                  <button type='submit' disabled={isSubmitDisabled}><span>{buttonText}</span></button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}