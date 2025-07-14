import Navbar from 'react-bootstrap/Navbar'

function CustomNavbar ()
{
    return (
        <Navbar bg="dark" variant="dark">
            <div className='container-fluid'>
                <a className="navbar-brand" href="#">Home</a>
                <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
            </div>
        </Navbar>
    )
}

export default Navbar