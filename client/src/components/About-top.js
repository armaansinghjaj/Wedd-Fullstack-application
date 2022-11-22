import React, {Fragment, useState, useEffect} from "react";
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
    return(
      <Fragment>
        <section className="about">
            <div className="row">

                <div className="column">
                    <div className="about-img">

                    </div>
                </div>
                <div className="column">
                    <div className="tabs">
                        <div className={toggleTab ===1 ?"single-tab active-tab": "single-tab"}
                        onClick = {() => toggleState(1)}>
                            <h2>
                                About
                            </h2>
                        </div>

                        <div className={toggleTab === 2 ?"single-tab active-tab": "single-tab"}
                        onClick = {() => toggleState(2)}>
                            <h2>
                                Vision
                            </h2>
                        </div>

                        <div className={toggleTab === 3 ?"single-tab active-tab": "single-tab"}
                        onClick = {() => toggleState(3)}>
                            <h2>
                                Client
                            </h2>
                        </div>

                        {/* <div className={toggleTab === 4 ?"single-tab active-tab": "single-tab"}
                        onClick = {() => toggleState(4)}>
                            <h2>
                                Feedback
                            </h2>
                        </div>

                        <div className={toggleTab === 5 ?"single-tab active-tab": "single-tab"}
                        onClick = {() => toggleState(5)}>
                            <h2>
                                Events
                            </h2>
                        </div> */}
                    </div>
                    <div className="tab-content">
                    {/* About content */}
                    <div className={toggleTab === 1 ?"content active-content":"content"} >
                        <h2>Our Story</h2>
                    <p> {items.para1}</p>
                        <h3>Our Story</h3>
                        <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                       
                    </div>

                    {/* vision content */}

                    <div className={toggleTab === 2 ?"content active-content":"content"}>
                        <h2>Our Story</h2>
                        <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                        <h3>Our Story</h3>
                        <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                         
                         <div className="vision-row">

                            <div classname="vision-column">
                                <div className="progress-wrap">
                                    <h3>developers</h3>
                                    <div className="progress">
                                        <div className="progess-bar">
                                            <span>90%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div classname="vision-column">
                                <div className="progress-wrap">
                                    <h3>developers</h3>
                                    <div className="progress">
                                        <div className="progess-bar">
                                            <span>90%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div classname="vision-column">
                                <div className="progress-wrap">
                                    <h3>developers</h3>
                                    <div className="progress">
                                        <div className="progess-bar">
                                            <span>90%</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                         </div>
                    </div>

                    {/* next */}

                    <div className={toggleTab === 3 ?"content active-content":"content"}>
                        <div className="exp-column">
                            <h3>Who are we?</h3>
                            <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                         
                        </div>

                        <div className="exp-column">
                            <h3>How it works</h3>
                            <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                         
                        </div>

                        <div className="exp-column">
                            <h3>Events</h3>
                            <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
                            sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                         
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>
      </Fragment>

        // <div className='aboutus-top'>
        // <h3 className='title-h1'>About us</h3>
        //     <div className='spacing'>
        //         <div className='column' id="column1">
        //             <h1 id='aboutus-h1'>Our Purpose</h1>
        //             <p id='aboutus-p'>
        //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        //             </p>
        //             </div>
        //             <div className='column' id="column2">
        //             <h1 id='aboutus-h1'>Who we are</h1>
        //             <p id='aboutus-p'>
        //                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        //             </p>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Abouttop;