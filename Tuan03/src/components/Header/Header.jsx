import './Header.css'

const Header = () => {
    return (
        <>
            <header className='header'>
                <div className="header-left">
                    <img src="src/assets/images/chefify.png" alt="Cherify Image" width="100px" />
                    <input type="text" name="" id="" placeholder='cakescascasa' />
                </div>
                <div className="header-right">
                    <ul className='menu'>
                        <li><a href="#">What to cook</a></li>
                        <li><a href="#">Recipes</a></li>
                        <li><a href="#">Ingredients</a></li>
                        <li><a href="#">Occasions</a></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                    <div className="info">
                        <div className="mail">
                            <img src="src/assets/images/check.png" alt="" />
                            <span>Your Recipe Box</span>
                        </div>
                        <div className="avatar">
                            <img src="src/assets/images/avatar.png" alt="" />
                        </div>
                    </div>
                </div>
            </header>
        </>


    )

}

export default Header;