import React, {useState, useEffect} from "react";
import { Link, Navigate } from "react-router-dom";
import Cookies from "universal-cookie";
import figure1 from "../../../images/About-page-figure-1.jpg"
import './About.css';

function Abouttop() {

    const cookies = new Cookies();

    const [accessForbidden, setAccessForbidden] = useState(false);

    useEffect(()=>{
        verifyUser();
    }, []);

    const verifyUser = ()=>{
        fetch(`/api/getuser/${cookies.get("__sid")}`, {
            credentials: 'same-origin',
            mode: 'cors',
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(verify_response => verify_response.json())
        .then(verify_responseData => {
            if(verify_responseData._id !== 3){
                setAccessForbidden(true);
            }
        })
    }

    return(
        <>

        {/* {(accessForbidden)?<Navigate replace to={"/admin"}/>:""} */}

        <React.Fragment>
            <div className="figure-1-div">
                <figure>
                    <img className="figure-1" src={figure1}/>
                </figure>
            </div>
        </React.Fragment>
        <React.Fragment>
            <div className="about-content-block">
                <div className="about-content about-content-left">
                    <div className="about-sidebar-div">
                        <ul className="about-sidebar">
                            <li className="about-sidebar-li-question">Questions?<br/>Call us at<br/><a href="tel:+14032018223" className='about-call-link' onclick="ga('send', 'event', { eventCategory: 'Contact', eventAction: 'Call', eventLabel: 'Mobile Button'});">+1-403-201-8223</a></li>
                        </ul>
                    </div>
                </div>

                <div className="about-content about-content-right">
                    <div className="content-1 content-block">
                        <div className="content-1-head content-head">
                            Bringing people together changes everything.
                        </div>
                        <div className="content-1-details  content-details">
                        From the start, Salesforce has sought to change the world for the better through technology that builds stronger relationships. Between companies and their customers. Between employees and far-flung teams. Between governments and their citizens. Between people who want to make a difference.
                        </div>
                    </div>

                    <div id="our-story" className="content-2 content-block">
                        <div className="content-2-head content-small-head content-head">
                            Our story
                        </div>
                        <div className="content-2-details  content-details">
                            When we come together, we unlock hidden potential. We unify people to help businesses and communities pursue their loftiest goals, solve their thorniest challenges, and harness their success to leave our planet a little better than we found it.
                        </div>
                        <div className="content-2-1-details  content-details">
                            The world will continue to change. Technology will evolve. Business will pivot and pivot again. But relationships, built on trust and respect, will help us face the future, come what may.
                        </div>
                    </div>

                    <div className="content-3 content-block">
                        <div className="content-3-head content-small-head content-head">
                            <figure>
                                <img className="figure-ceo" alt="The CEO" src={figure1}/>
                            </figure>
                        </div>
                        <div className="content-ceo-text content-details">
                            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, exercitationem sed ut molestiae autem nostrum illum."
                            <br/>
                            <div className="content-ceo-name">
                                Rahul Narang, CEO
                            </div>
                        </div>
                    </div>

                    <div className="content-4 content-block">
                        <div className="content-4-head content-small-head content-head">
                            We believe business is the greatest platform for change.
                        </div>
                        <div className="content-4-details  content-details">
                            We are passionate proponents of stakeholder capitalism, committed to doing well by all our stakeholders — our customers, employees, partners, communities, the planet, and society as a whole.
                        </div>
                        <div className="content-4-1-details  content-details">
                            And we lead by example, spearheading initiatives in philanthropy, racial equality and justice, climate action and advocacy, and the ethical and humane use of technology.
                        </div>
                    </div>

                    <div className="content-5 content-block">
                        <div className="content-5-head content-small-head content-head">
                            We believe business is the greatest platform for change.
                        </div>
                        <div className="content-5-details  content-details">
                            We are passionate proponents of stakeholder capitalism, committed to doing well by all our stakeholders — our customers, employees, partners, communities, the planet, and society as a whole.
                        </div>
                    </div>

                    <div className="content-6 content-block">
                        <div className="content-4-head content-small-head content-head">
                            We believe business is the greatest platform for change.
                        </div>
                        <div className="content-6-details  content-details">
                            We are passionate proponents of stakeholder capitalism, committed to doing well by all our stakeholders — our customers, employees, partners, communities, the planet, and society as a whole.
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
      </>
    )
}

export default Abouttop;