function Footer() {
    return (
        <footer className="footer shadow-md">
            <div className="container">
                <div className="footer-nav">
                    <a href="https://imperfectandcompany.com/about">About Us</a>
                    <a href="https://imperfectandcompany.com/contact">Contact</a>
                    <a href="https://imperfectandcompany.com/terms-of-service">Terms of Service</a>
                </div>
                <div className="social-links">
                    <a href="https://discord.com/invite/yb524Ax" className="social-icon">
                        <i className="fab fa-discord"></i>
                    </a>
                    <a href="https://linkedin.com/company/imperfectandcompany" className="social-icon">
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
                <div className="copy">
                    &copy; {new Date().getFullYear()} Imperfect and Company LLC. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
