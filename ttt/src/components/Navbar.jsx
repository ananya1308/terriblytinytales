import logo from '../assets/tttlogo1.png'
function Navbar() {
    return (
        <div>
            <div className="flex flex-wrap">
                    <nav className=" bg-black text-white w-screen">
                        <div className="px-5 xl:px-12 py-6 flex w-full items-center justify-between">
                            <div>
                                <a className="text-3xl font-bold font-heading flex" href="#">
                                    <img className="h-12" src={logo} alt="logo" />
                                    <span className='text-white text-lg pr-2 flex items-center leading-10' style={{fontFamily: 'Josefin Sans'}}>|</span>
                                    <p className='uppercase text-white text-lg flex items-center tracking-widest' style={{fontFamily: 'Josefin Sans'}}>Stories</p>
                                </a>

                            </div>
                            <div className="xl:flex items-center space-x-5 items-center">
                                <button className='text-white bg-yellow-400'>Courses</button>

                            </div>
                        </div>
                        
                    </nav>
            </div>

        </div>
    )
}

export default Navbar
