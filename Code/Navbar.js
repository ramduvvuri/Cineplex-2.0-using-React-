import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();

    const handleSignInClick = () => {
        navigate('/signin');
    };

    return (
    <nav
    style={{ display: 'flex', flexDirection: 'row' }}>
        <div id="info"
        style={{ display: 'flex', flexDirection: 'row' }}>
            <img src="./imgs/logo2.png" alt="" className = "logo"/>
            <div id="search">
                <img src="./imgs/search.svg" alt="" width = "5px" className =  "search-logo"/>
            </div>
            <div id="home"  className= "window ">
                <img src="./imgs/home.svg" alt="" width="10px"/>
                <span> Home</span>
            </div>
            <div id="livetv"  className= "window ">
                <img src="./imgs/tv.svg" alt="" width="10px"/>
                <span>LiveTV</span>
            </div>
            <div id="demand"  className= "window ">
                <img src="./imgs/demand.svg" alt="" width="10px"/>
                <span>OnDemand</span>
            </div>
            <div id="discover"  className= "window ">
                <img src="./imgs/compass.svg" alt="" width="10px"/>
                <span>Discover</span>
            </div>
        </div>
        <button id="sign" onClick={handleSignInClick}>Sign In</button>
    </nav>
    )
}

export default Navbar ;

