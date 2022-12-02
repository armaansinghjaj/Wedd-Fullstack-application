import React, {useState} from "react";
import { Link } from 'react-router-dom';
import '../Common-components/Help-support.css';
// import {questions} from '../Common-components/api';
// import Myaccordian from '../Common-components/Myaccordian';

export default function FAQ() {
   
    const [data, setData] = useState(questions);

    const [selected, setSelected] = useState(null)
    const toggle = i =>{
      if(selected == i ){
        return setSelected(null)
      }

      setSelected(i)
    }

    return(
        <>
        <div className="faq-container">
        <h2 className="help-h1"> Frequently Asked Questions (FAQ)</h2>

    <div className='wrapper-acc'>
    <div className='accordian'>

    {
        data.map((item, i) =>(
    <div className="item">
    <div className='title' onClick={() => toggle(i)}>
        <p>{item.question}</p>
        <span>{selected == i ? '-' : '+'}</span>
    </div>
    <div className={selected == i ? 'content show' : 'content'}>
        {item.answer}
    </div>
    </div>
        ))
    }
    </div>

    </div>


    {/* <section className="main-div">
    
        {
            data.map((curElem) => {
                return <Myaccordian key={curElem.id}
                {...curElem}/>;
            })
        }
    </section> */}

            {/* <div className="FAQ">
                <ul>
                    <div id="questions">
                    <h2 id="question">Question</h2>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas dolor, quis sollicitudin ligula. Aenean sodales in dui nec.</li>
                    <h2 id="answer">Answer</h2>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas dolor, quis sollicitudin ligula. Aenean sodales in dui nec.</li>
                    <br/>
                    </div>
                    <div id="questions">
                    <h2 id="question">Question</h2>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas dolor, quis sollicitudin ligula. Aenean sodales in dui nec.</li>
                    <h2 id="answer">Answer</h2>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas dolor, quis sollicitudin ligula. Aenean sodales in dui nec.</li>
                    <br/>
                    </div>
                    <div id="questions">
                    <h2 id="question">Question</h2>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas dolor, quis sollicitudin ligula. Aenean sodales in dui nec.</li>
                    <h2 id="answer">Answer</h2>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas dolor, quis sollicitudin ligula. Aenean sodales in dui nec.</li>
                    <br/>
                    </div>
                    <div id="questions">
                    <h2 id="question">Question</h2>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas dolor, quis sollicitudin ligula. Aenean sodales in dui nec.</li>
                    <h2 id="answer">Answer</h2>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas dolor, quis sollicitudin ligula. Aenean sodales in dui nec.</li>
                    <br/>
                    </div>
                    <div id="questions">
                    <h2 id="question">Question</h2>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas dolor, quis sollicitudin ligula. Aenean sodales in dui nec.</li>
                    <h2 id="answer">Answer</h2>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas dolor, quis sollicitudin ligula. Aenean sodales in dui nec.</li>
                    <br/>
                    </div>
                    <div id="questions">
                    <h2 id="question">Question</h2>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas dolor, quis sollicitudin ligula. Aenean sodales in dui nec.</li>
                    <h2 id="answer">Answer</h2>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas dolor, quis sollicitudin ligula. Aenean sodales in dui nec.</li>
                    <br/>
                    </div>
                </ul>
            </div> */}
            <div className="contact-wedd">
                <h2 className="contact-h2">Contact We Designated Drivers</h2>
                <ul>
                    <li>Email us!</li>
                    <li>Placeholder@email.com</li>
                    <br/>
                    <li>Call us!</li>
                    <li>(403)-201-8223</li>
                    <br/>
                    <li>Check our Social Media!</li>
                    <li><Link className="help-links" to=''>Facebook</Link></li>
                    <li><Link className="help-links" to=''>Instagram</Link></li>
                    <li><Link className="help-links" to=''>Twitter</Link></li>
                </ul>
            </div>
        </div>
        
        </>
    )
}
 const questions = [
    {
        
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas dolor, quis sollicitudin ligula. ',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas dolor, '
    },
    {
        
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas dolor, quis sollicitudin ligula.',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas dolor, quis sollicitudin ligula.'
    },
    {
       
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas dolor, quis sollicitudin ligula.',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas dolor, quis sollicitudin ligula.'
    },
    {
       
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas dolor, quis sollicitudin ligula.',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas dolor, quis sollicitudin ligula.'
    },
    {
       
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas dolor, quis sollicitudin ligula.',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas dolor, quis sollicitudin ligula.'
    },
    {
        
        question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas dolor, quis sollicitudin ligula.',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vitae egestas dolor, quis sollicitudin ligula.'
    }
]