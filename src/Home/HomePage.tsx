import { Container } from "react-bootstrap";
import AppList from "../Apps/AppList";
import NavBar from "./NavBar";

export default function HomePage() {
    return (
        <>
            <NavBar></NavBar>
            <Container>
                <AppList />
            </Container>
        </>
    );
}
