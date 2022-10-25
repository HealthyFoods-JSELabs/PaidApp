import '../App.css';
import Nav from '../components/nav.component'
import Carousel from '../components/homeCarousel.component'
import {Col, Row} from "reactstrap";

function Home() {
    return (
        <div className="Home">
            <Nav/>
            <Carousel/>
            <div>
                <Row>
                    <Col>
                        <Row>

                        </Row>
                        <Row>
                            <Col>
                            </Col>
                            <Col>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </div>
            <header className="App-header">

                {/*<img src={logo} className="App-logo" alt="logo" />*/}
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default Home;
