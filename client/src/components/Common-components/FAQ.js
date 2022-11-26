import React from "react";
import { Link } from 'react-router-dom';
import '../Common-components/Help-support.css';

export default function FAQ() {
    return(
        <>
        <div className="faq-container">
        <h2 className="help-h1"> Frequently Asked Questions (FAQ)</h2>
            <div className="FAQ">
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
            </div>
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