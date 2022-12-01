import React,{useState} from 'react'

const Myaccordian = ({question, answer}) => {
    const [show, setShow] = useState(false);
  return (
    <>
    <div className="main-heading">
        <p onClick={() => setShow(!show)}>{show? "-" : "+"}</p>
        <p>{question}</p>
    </div>
    {
        show && <p className="answers">{answer}</p>
    }
    
    </>
  )
}

export default Myaccordian
