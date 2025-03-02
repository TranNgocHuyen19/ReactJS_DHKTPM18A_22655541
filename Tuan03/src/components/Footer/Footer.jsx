import './Footer.css'
const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer-content">
                    <div className="footer-content-left">
                        <div className="footer-content-top">
                            <h3>About Us</h3>
                            <p>Welcome to our website, a wonderful place to explore and learn how to cook like a pro.</p>
                            <div className="newsletter">
                                <input type="email" placeholder="Enter your email" />
                                <button>Send</button>
                            </div>
                        </div>
                        <div className="footer-content-bottom">
                            <p>&copy; 2023 Your Company. All rights reserved.</p>
                        </div>

                    </div>
                    <div className="footer-content-right">
                        <div className="footer-content-right-section">
                            <div className="footer-section">
                                <div className="footer-section-top">
                                    <h3>Learn more</h3>
                                    <ul>
                                        <li><a href="#">Learn More</a></li>
                                        <li><a href="#">Our Cooks</a></li>
                                        <li><a href="#">See Our Features</a></li>
                                    </ul>
                                </div>
                                <div className="footer-section-bottom">
                                    <h3>Shop</h3>
                                    <ul>
                                        <li><a href="#">Gift Subscription</a></li>
                                        <li><a href="#">Send Us  Feedback</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-section-right-section">
                            <h3>Recipes</h3>
                            <ul>
                                <li><a href="#">What to Cook This Week</a></li>
                                <li><a href="#">Posts</a></li>
                                <li><a href="#">Dinner</a></li>
                                <li><a href="#">Healthy</a></li>
                                <li><a href="#">Vegetarian</a></li>
                                <li><a href="#">Vegan</a></li>
                                <li><a href="#">Christmas</a></li>
                            </ul>
                        </div>
                    </div>

                </div>

            </footer>
        </>


    )

}

export default Footer;