
function Footer() {
    return (
        <footer>
            <div className="flex justify-around">
                <ul className="footer-menu">
                    <li>
                        <h3 className="footer-heading"><a href="">Customer Servirce</a></h3>
                    </li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Track Your Order</a></li>
                    <li><a href="">Returns & Exchanges</a></li>
                    <li><a href="">Shipping Information</a></li>
                    <li><a href="">International Orders</a></li>
                    <li><a href="">Email Preferences</a></li>
                    <li><a href="">Help Topics</a></li>
                    <li><a href="">Give Us Feedback</a></li>
                </ul>
                <ul className="footer-menu">
                    <li>
                        <h3 className="footer-heading"><a href="">About US</a></h3>
                    </li>
                    <li><a href="">Our Story</a></li>
                    <li><a href="">Careers</a></li>
                    <li><a href="">Press</a></li>
                    <li><a href="">Influencers</a></li>
                    <li><a href="">Find a Store</a></li>
                    <li>
                        <h3 className="footer-heading"><a href="">BUSINESS TO BUSINESS</a></h3>
                    </li>
                    <li><a href="">Overview</a></li>
                    <li><a href="">Trade</a></li>
                    <li><a href="">Contract</a></li>
                    <li><a href="">Corporate Gifting</a></li>
                </ul>

                <ul className="footer-menu">
                    <li>
                        <h3 className="footer-heading"><a href="">DESIGN SERVICES</a></h3>
                    </li>
                    <li><a href="">Free Interior Design</a></li>
                    <li><a href="">Room Planner</a></li>
                    <li>
                        <h3 className="footer-heading"><a href="">RESOURCES</a></h3>
                    </li>
                    <li><a href="">Pottery Barn Credit Card</a></li>
                    <li><a href="">Pay Bill Online</a></li>
                    <li><a href="">View Online Catalog</a></li>
                    <li><a href="">Request a Catalog</a></li>
                    <li><a href="">Address Change</a></li>
                    <li><a href="">Gift Cards</a></li>
                    <li><a href="">Do Not Sell Or Share My Personal Information</a></li>
                </ul>
                <div className="social-icons">
                    <div className="footer-email-sign-up">
                        <p className="footer-email-text">Join our VIP list for inspiration, new arrivals & more.</p>
                        <form action="">
                            <label for="footer-email-sign-up" className="hiden">Join our VIP list for inspiration, new arrival & more.</label>
                            <div className="footer-sign-up flex justify-between">
                                <input type="email" name="email" id="email" placeholder="Enter Your Email" />
                                <button type="submit" className="Submit">Sign Up</button>
                            </div>
                        </form>
                    </div>

                    <div className="footer-fanacials">
                        <p>California residents, please see the<a href=""> Financial Incentive Terms for terms.</a></p>
                        <p></p>
                    </div>

                    <div className="footer-list">
                        <p className="social-icons">FOLLOW US</p>
                        <ul className="social-icons-list ">
                            <li>
                                <a href="#"><i className="fa-brands fa-facebook text-blue-700"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa-brands fa-square-twitter text-sky-600"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa-brands fa-youtube text-red-500"></i></a>
                            </li>
                            <li>
                                <a href="#"><i className="fa-brands fa-square-instagram text-pink-500"></i></a>
                            </li>

                        </ul>
                    </div>

                    <div className="footer-legal">
                        <div className="text-section">
                            <p>*Some exclusions apply. Click <a href="">here</a> for details</p>
                        </div>
                    </div>
                </div>


            </div>

        </footer >
    )
}
export default Footer;