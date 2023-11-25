import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { useTranslation } from 'react-i18next';


const Navbarcomponent=()=> {
  const [t,i18n]=useTranslation("global")
  const handleChangeSting=(lang)=>{
    i18n.changeLanguage(lang);
  }
  return (
    <Navbar expand="lg" className="position-absolute w-100">
      <Container>
        <Navbar.Brand href="#home" className='text-danger'>CATFLIX</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="language" id="basic-nav-dropdown">
              <NavDropdown.Item onClick={()=>{handleChangeSting("hi")}}>Hindi</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>{handleChangeSting("en")}}>English</NavDropdown.Item>
            </NavDropdown>
            <Button className='btn-signup' href="">{t("mainpage.nav")}</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarcomponent;