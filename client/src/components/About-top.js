import React, {Fragment, useState, useEffect} from "react";
import { Link } from "react-router-dom";
import figure1 from "../images/About-page-figure-1.jpg"
import './About.css';

function Abouttop() {
    useEffect( () => {
        fetchItems();
    }, []);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data = await fetch('/api/about');
        const items = await data.json();
        setItems(items);
    };
    const [ toggleTab, setToggleTab] = useState(1)
    const toggleState = (index) =>{
         setToggleTab(index)
    }

    const ScrollToSection = (section) => {
        // if(section === 1){
        //     document.querySelector('#our-story') && document.querySelector('#our-story').scrollIntoView({behavior:"smooth"})
        // }
        // alert("Yet to imeplement")
    }
    return(
        <>
        <React.Fragment>
            <div className="figure-1-div">
                <figure>
                    <img className="figure-1" src={figure1}/>
                </figure>
            </div>
        </React.Fragment>
        <React.Fragment>
            <div className="about-sidebar-div">
                <ul className="about-sidebar">
                    <li><Link to='/about' onClick={ScrollToSection(1)}>Our Story</Link></li>
                    <li><Link to='/about' onClick={ScrollToSection(2)}>What is WeDD?</Link></li>
                    <li><Link to='/about' onClick={ScrollToSection(3)}>Vision</Link></li>
                    <li><Link to='/about' onClick={ScrollToSection(4)}>WeDD for all</Link></li>
                </ul>
            </div>
        </React.Fragment>
        <React.Fragment>
            <div className="about-content-block">
                <div className="about-content about-content-left">
                    
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
                                <img className="figure-ceo" src={figure1}/>
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