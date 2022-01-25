import "./Styles/Navbar.css";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function NavBar() {
    return (
        <>
            <Navbar className="navbar">
                <Container>
                    <Navbar.Brand href="#home">
                        <i className="fas fa-pencil-alt"></i> My App Collection
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="nav-item" href="#home">
                                Home
                            </Nav.Link>
                            <Nav.Link className="nav-item" href="#link">
                                Settings
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}
