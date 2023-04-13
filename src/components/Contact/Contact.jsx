import React from 'react';
import { MdCall } from 'react-icons/md';
import {BsFillChatDotsFill} from 'react-icons/bs';
import {HiChatBubbleBottomCenter} from 'react-icons/hi2';
import './Contact.css';

const Contact = () => {
    return (
        <section className="c-wrapper">
            <div className="c-container paddings innerWidth flexCenter">
                  {/* left side */}
                <div className="c-left flexColStart">
                  <span className='orangeText'>Our Contact Us</span>
                  <span className='primaryText'>Easy to contact us</span>
                  <span className='secondryText'>We always ready to help by providijng the best services for you. We beleive a good blace to live can make your life better</span>

                  <div className="contactModes flexColStart">
                    {/* first row */}
                    <div className="row flexStart">
                        {/* first mode */}
                        <div className="mode flexColCenter">
                            <div className='flexStart'>
                            <div className="icon flexCenter">
                                <MdCall size={25}/>
                            </div>
                            <div className="detail flexColStart">
                                <span className='primaryText'>Call</span>
                                <span className='secondryText'>021 123 145 14</span>
                            </div>
                            </div>
                            <div className='button flexCenter' >Call Now</div>
                        </div>

                        {/* Second mode */}
                        <div className="mode flexColCenter">
                            <div className='flexStart'>
                            <div className="icon flexCenter">
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="detail flexColStart">
                                <span className='primaryText'>Chat</span>
                                <span className='secondryText'>021 123 145 14</span>
                            </div>
                            </div>
                            <div className='button flexCenter' >Chat Now</div>
                        </div>
                    </div>
                    {/* second row */}
                    <div className="row flexStart">
                        {/* third mode */}
                        <div className="mode flexColCenter">
                            <div className='flexStart'>
                            <div className="icon flexCenter">
                                <BsFillChatDotsFill size={25}/>
                            </div>
                            <div className="detail flexColStart">
                                <span className='primaryText'> Video Call</span>
                                <span className='secondryText'>021 123 145 14</span>
                            </div>
                            </div>
                            <div className='button flexCenter' > Video Call Now</div>
                        </div>

                        {/* fourth mode */}
                        <div className="mode flexColCenter">
                            <div className='flexStart'>
                            <div className="icon flexCenter">
                                <HiChatBubbleBottomCenter size={25}/>
                            </div>
                            <div className="detail flexColStart">
                                <span className='primaryText'>Message</span>
                                <span className='secondryText'>021 123 145 14</span>
                            </div>
                            </div>
                            <div className='button flexCenter' >Message Now</div>
                        </div>
                    </div>
                  </div>
                </div>
                {/* right side */}
                <div className="c-right flexEnd">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;