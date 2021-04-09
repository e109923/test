import Jumbotron from 'react-bootstrap/Jumbotron';
import Image from 'react-bootstrap/Image';

const Header = () => {
    return (
        <>
        <Jumbotron className="bg-white text-center" style={{paddingTop:"10px",paddingBottom:"10px",marginBottom:"0px"}}>
                <Image width="300" src="images/mavimor.png" alt="Logo" />
        </Jumbotron>
        </>
    )
}

export default Header
