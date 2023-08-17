const Header = () => {
    return (
        <div className="header py-2">
            <div className="container">

                <div className="row align-items-center">
                    <div className="col-2">
                        <div className="logo" width="215px" height="79px">
                            <img src="images/logo.webp" alt="" />
                        </div>
                    </div>
                    <div className="col-8">
                        <div className="menu">
                            <ul className="d-flex list-unstyled justify-content-center text-uppercase m-0">
                                <li className="px-4">
                                    <a href="#" className="text-decoration-none text-white fw-medium">Home</a>
                                </li>
                                <li className="px-4">
                                    <a href="#" className="text-decoration-none text-white fw-medium" >About</a>
                                </li>

                                <li className="px-4">
                                    <a href="#" className="text-decoration-none text-white fw-medium">contact</a>
                                </li>
                                <li className="px-4">
                                    <a href="#" className="text-decoration-none text-white fw-medium">page</a>
                                </li>
                                <li className="px-4">
                                    <a href="#" className="text-decoration-none text-white fw-medium">match</a>
                                </li>

                            </ul>

                        </div>
                    </div>
                    <div className="col-2 justify-content-center ">
                        <div className="btn-box d-flex justify-content-center align-items-center ">
                            <a href="#" className="text-decoration-none text-white  fw-medium"><h5 className="m-0">sign up</h5></a>
                        </div>


                    </div>
                </div>

            </div>
        </div>
    )
}

export default Header;