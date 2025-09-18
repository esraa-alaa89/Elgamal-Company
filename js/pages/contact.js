
import { displayHeader } from "../handlePges/handlePagesHeader.js";
import { handleContactLogic } from "../handlePges/handleContactLogic.js";

export default function renderContactPage(container) {
    container.innerHTML= `
        <div class="contact-page">

            <section class="form-confirmation">
                <div class="confirmation-container">
                    <i class="fa-solid fa-xmark"></i>
                    <h4></h4>
                    <i class="fa-solid"></i>
                </div>
            </section>
        
            <!-- CONTACT-LAYOUT SECTION -->
            ${displayHeader('contact-layout' , 'contact-title' , 'thank tou for your attention' , 'Our contact' , 'Aseets/contact/contact-bg.jpg' , 'contact-body')}


            <section class="contact-body" id="contact-body">
                <div class="container"> 
                    <div class="row gx-lg-5">

                        <div class="col-12">
                            <div class="contact-intro">
                                <div class="contact-history">
                                    <h3>Get In Touch</h3>
                                    <p class="pb-3">
                                        If you want to get real results, contact with us via
                                    </p>
                                    <p>
                                        El-Gamal Group is your trusted partner in construction, trading, and import services. With a commitment to delivering high-quality projects on time and within budget, we’re here to turn your vision into reality. Whether you have inquiries, ideas, or a project ready to launch — our team is ready to support you every step of the way.
                                    </p>
                                </div>
                            </div>
                        </div>


                        <div class="col-lg-6 mt-3 mt-lg-5">
                            <div class="form-title">
                                <h3>Want to estimate a project?</h3>
                                <p>
                                    Just tell us about your project, what are your goals, and let's start.
                                </p>
                            </div>

                            <form id="contact-form" action="https://formsubmit.co/esraaalaa2288@gmail.com" method="POST">
                                <div class="mb-4">
                                    <label for="nameField" class="form-label">Your Name</label>
                                    <input type="text" class="form-control" id="nameField" name="user_name" aria-describedby="emailHelp" placeholder="Enter Your Name" required>
                                </div>

                                <div class="mb-4">
                                    <label for="emailField" class="form-label">Email</label>
                                    <input type="email" class="form-control" id="emailField" name="user_email" aria-describedby="emailHelp" placeholder="Enter Your Email" required>
                                </div>

                                <div class="mb-4">
                                    <label for="messageField" class="form-label">Message</label>
                                    <textarea class="form-control" id="messageField" name="user_message" rows="3" placeholder="Your Message" required></textarea>
                                </div>

                                <div class="mt-0 mb-4 d-flex justify-content-between align-items-center">

                                    <div class="uploadFile-div">
                                        <label for="fileField" class="form-label">
                                            <input type="file" class="form-control d-none" id="fileField" aria-describedby="fileHelp">

                                            <i class="fa-solid fa-paperclip"></i>
                                            Attach File
                                        </label>
                                    </div>

                                    <div class="about-btn contact d-flex">
                                        <div class="submit-btn m-auto m-lg-0">
                                            <button type="submit">
                                                <a target="_blank" class="custom-btn cta secondary">
                                                    <span>Send Message</span>
                                                </a>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>

                        <div class="col-lg-6 d-flex flex-wrap mt-3 mt-lg-5">
                            <div class="contact-info mb-lg-5">
                                <div class="contact-semiTitle">
                                    <h3>Let's get connect</h3>
                                    <p>
                                        We're here to help — get in touch with our team anytime.
                                    </p>
                                </div>
                                
                                <div class="contact-item mb-5">
                                    <i class="fa-solid fa-location-dot"></i>
                                    <div class="contact-text">
                                        <p>62 Hisham Labib Street – Eighth Zone – Nasr City – Cairo</p>
                                        <br />
                                        <p class="d-block">
                                            Heritage Building Abu Dhabi Airport Road next to Abu-Dhabi Commercial Bank.
                                        </p>
                                    </div>
                                </div>
                                <div class="contact-item mb-5">
                                    <i class="fa-solid fa-mobile-button"></i>
                                    <div class="contact-text">
                                        <p>01050000510</p>
                                        <p>+971522176355</p>
                                    </div>
                                </div>
                                <div class="contact-item mb-5">
                                    <i class="fa-solid fa-envelope"></i>
                                    <a href="mailto:info@el-gamalgroup.com" class="email-anchor" target="_blank">El-Gamal_Group.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;

    handleContactLogic();
    
}