function Navbar() {
    return (
        <nav className="bg-header py-2 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center flex-wrap">
<div className="flex items-center space-x-1"> 
<a href="https://imperfectandcompany.com" aria-label="Main site" className="flex items-center pl-4 space-x-6">
                    <img src="https://cdn.postogon.com/assets/img/logo/umbrella.svg" alt="Imperfect and Company Logo" className="h-8"/>
                    <div className="hidden sm:block">Imperfect and Company</div>
                </a><div className="hidden md:inline-block">/ <a href="/" aria-label="Home">Investors</a></div>
</div>
                <div className="text-lg">
                    <a href="https://imperfectandcompany.com/about" className="nav-link">About Us</a>
                    <a href="https://imperfectandcompany.com/contact" className="nav-link">Contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
