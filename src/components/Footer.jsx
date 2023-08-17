const Footer = () => {
    return (
        <>
            <div className="Footer pt-5">
                <div className="container">
                    <div className="row justify-content-center py-5">
                        <div className="col-3 ">
                            <div className="f-logo">
                                <img src="images/logo.webp" alt="" />
                            </div>
                            <div className="f-content">
                                <p className="text-white my-3 ">It long estabhed fact that reader
                                    will ditracted the readable content
                                    looking using readable.</p>
                            </div>
                            <div className="social-icon  d-flex ">
                                <div className="facebook me-3">
                                    <i class="bi bi-facebook"></i>
                                </div>
                                <div className="dribble me-3">
                                    <i class="bi bi-github"></i>
                                </div>
                                <div className="youtube me-3">
                                    <i class="bi bi-youtube"></i>
                                </div>
                                <div className="twitter me-3">
                                    <i class="bi bi-twitter"></i>
                                </div>
                            </div>

                        </div>

                        <div className="col-3 justify-content-center d-flex flex-column  ">
                            <div className="head">
                                <h3 className="text-uppercase text-white mb-4">Contact</h3>
                            </div>

                            <div className="location pe-5">
                                <span style={{ color: '#b154f0' }}>Location:</span>
                                <p className="text-white my-3 fw-normal ">136 Harding Ave
                                    Wheeling, West Virginia</p>
                            </div>
                            <div className="phone pe-3">
                                <span style={{ color: '#b154f0' }}>Phone:</span>
                                <p className="text-white my-3 fw-normal">00 (62) 632 867 4497</p>
                            </div>
                        </div>
                        <div className="col-3 justify-content-center d-flex flex-column pe-4 ">
                            <div className="head">
                                <h3 className="text-uppercase text-white mb-4">today’s winners</h3>
                            </div>
                            <div className="d-flex justify-content-between pe-5">
                                <div className="f-img mb-3">
                                    <img src="images/winners1.webp" alt="" />
                                </div>
                                <div className="f-img mb-3">
                                    <img src="images/winners2.webp" alt="" />
                                </div>
                                <div className="f-img mb-3">
                                    <img src="images/winners3.webp" alt="" />
                                </div>

                            </div>
                            <div className="d-flex justify-content-between pe-5">
                                <div className="f-img mb-3">
                                    <img src="images/winners4.webp" alt="" />
                                </div>
                                <div className="f-img mb-3">
                                    <img src="images/winners5.webp" alt="" />
                                </div>
                                <div className="f-img mb-3">
                                    <img src="images/winners6.webp" alt="" />
                                </div>

                            </div>

                        </div>
                        <div className="col-3 justify-content-center d-flex flex-column  ">
                            <div className="head">
                                <h3 className="text-uppercase text-white mb-4">Content</h3>
                            </div>
                            <div className="f-menu text-white d-flex flex-column">
                                <span className="pb-3"> Copywriting</span>
                                <span className="pb-3"> Social Media</span>
                                <span className="pb-3"> Interactive Media</span>
                                <span className="pb-3"> Motion Design</span>
                                <span className="pb-3"> Illustration</span>
                            </div>

                        </div>
                    </div>


                </div>
                <div className="footer-bottom py-3 mt-5" style={{ backgroundColor: '#140e38' }}>
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="copy-right">
                                <p className="text-uppercase m-0" style={{color:'#aaa6b9'}}> © 2021  BONX  Made with <i class="bi bi-heart-fill px-1" style={{color:'#b154f0'}}></i>By<span className="ps-2 text-white fw-bold">HasThemes</span> </p>
                            </div>
                            <div className="scroll-top">
                                <img src="images/scroll-top.webp" alt="" />
                            </div>
                            <div className="f-link text-uppercase " style={{color:'#aaa6b9'}}>
                                <span className="m-0">Terms & Condition  &nbsp; ||   &nbsp; Privacy Policy  </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;