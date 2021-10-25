import React from "react";
import {
    Row,Col,Container, Card
} from "reactstrap";
import { Form, Button } from 'react-bootstrap';
import CardText from "reactstrap/es/CardText";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class ISlider extends React.Component {
    state = {};
    render() {
        // const classes = useStyles();
        // let resumeData = this.props.resumeData;
        return (
            <>
                <Container style={{backgroundColor:"#ffffff"}}>
                    <Carousel style={{backgroundColor:"#ff4067"}} showThumbs={false}>
                        <div style={{backgroundColor:"#6fff00"}}>
                            {/*<img*/}
                            {/*    className="columncenter"*/}
                            {/*    style={{}}*/}
                            {/*    alt="..."*/}
                            {/*    src={("img/sub3.png")}*/}
                            {/*    width="200%"*/}
                            {/*    height="260px"*/}

                            {/*/>*/}
                            {/*<p className="legend">Legend 1</p>*/}
                        </div>
                        <div>
                            <img
                                className="columncenter"
                                style={{}}
                                alt="..."
                                src={("img/sub2.png")}
                                width="200px"
                                height="260px"

                            />
                            {/*<p className="legend">Legend 2</p>*/}
                        </div>
                        <div>
                            <img
                                className="columncenter"
                                style={{}}
                                alt="..."
                                src={("img/sub3.png")}
                                width="200px"
                                height="260px"

                            />
                            {/*<p className="legend">Legend 3</p>*/}
                        </div>
                    </Carousel>
                </Container>
            </>
        );
    }
}

export default ISlider;


//
// import React from "react";
// import AwesomeSlider from 'react-awesome-slider';
// import withAutoplay from 'react-awesome-slider/dist/autoplay';
//
// import {Row, Col} from "reactstrap";
// const AutoplaySlider = withAutoplay(AwesomeSlider);
//
// class ISlider extends React.Component {
//     render() {
//         return (
//
//             <section className="section section-hero section-shaped pt-0 mx-0" id="categories">
//                 <div className="shape mx-0">
//                     {/*<img*/}
//                     {/*    alt="..."*/}
//                     {/*    src={("img/Header/background7.jpg")}*/}
//                     {/*    style={{ width: "100%",height:"600px"}}*/}
//                     {/*/>*/}
//                 </div>
//
//                 <div className="shape-container mx-0">
//
//                     <AutoplaySlider
//                         play={true}
//                         cancelOnInteraction={false} // should stop playing on user interaction
//                         interval={1000}
//                         style={{ background: "rgba(255,255,255,0.78)", height:"600px" }}
//                         className="mx-0"
//
//                     >
//                         <div className="mx-0" style={{ width: "100%",height:"500px", background: "rgba(128,0,128, 0)" }}>
//                             <Row>
//                                 {/*1*/}
//                                 <Col md="3" xs="6">
//                                     <div className="icon-shape justify-content-center rounded-circle card-lift--hover shadow border-0" style={{ width: "200px",height:"200px", background: "rgb(23,43,77)" }}>
//                                         <img
//                                             alt="..."
//                                             className="img-center"
//                                             src={("img/SlideShow/a1.png")}
//                                             style={{ width: "100px",height:"100px" }}
//                                         />
//                                     </div>
//                                     <div className="pt-4 text-center">
//                                         <h5 className="title">
//                                             <span style={{ color: "#ffffff" }} className="mb-1 font-weight-bold">Advertising</span>
//                                         </h5>
//                                     </div>
//
//                                 </Col>
//                                 {/*2*/}
//                                 <Col md="3" xs="6">
//                                     <div className="icon-shape justify-content-center rounded-circle card-lift--hover shadow border-0" style={{ width: "200px",height:"200px", background: "rgb(23,43,77)" }}>
//                                         <img
//                                             alt="..."
//                                             className="img-center"
//                                             src={("img/SlideShow/a2.png")}
//                                             style={{ width: "100px",height:"100px" }}
//                                         />
//                                     </div>
//                                     <div className="pt-4 text-center">
//                                         <h5 className="title">
//                                             <span style={{ color: "#ffffff" }} className="mb-1 font-weight-bold">Agriculture</span>
//                                         </h5>
//                                     </div>
//
//                                 </Col>
//                                 {/*3*/}
//                                 <Col md="3" xs="6">
//                                     <div className="icon-shape justify-content-center rounded-circle card-lift--hover shadow border-0" style={{ width: "200px",height:"200px", background: "rgb(23,43,77)" }}>
//                                         <img
//                                             alt="..."
//                                             className="img-center"
//                                             src={("img/SlideShow/a3.png")}
//                                             style={{ width: "100px",height:"100px" }}
//                                         />
//                                     </div>
//                                     <div className="pt-4 text-center">
//                                         <h5 className="title">
//                                             <span style={{ color: "#ffffff" }} className="mb-1 font-weight-bold">Baby Goods</span>
//                                         </h5>
//                                     </div>
//
//                                 </Col>
//                                 {/*4*/}
//                                 <Col md="3" xs="6">
//                                     <div className="icon-shape justify-content-center rounded-circle card-lift--hover shadow border-0" style={{ width: "200px",height:"200px", background: "rgb(23,43,77)" }}>
//                                         <img
//                                             alt="..."
//                                             className="img-center"
//                                             src={("img/SlideShow/a4.png")}
//                                             style={{ width: "100px",height:"100px" }}
//                                         />
//                                     </div>
//                                     <div className="pt-4 text-center">
//                                         <h5 className="title">
//                                             <span style={{ color: "#ffffff" }} className="mb-1 font-weight-bold">Banking</span>
//                                         </h5>
//                                     </div>
//
//                                 </Col>
//                             </Row>
//
//                         </div>
//
//                         <div className="mx-0" style={{ width: "100%",height:"600px", background: "rgba(128,89,37,0)" }}>
//                             <Row>
//                                 {/*5*/}
//                                 <Col md="3" xs="6">
//                                     <div className="icon-shape justify-content-center rounded-circle card-lift--hover shadow border-0" style={{ width: "200px",height:"200px", background: "rgb(23,43,77)" }}>
//                                         <img
//                                             alt="..."
//                                             className="img-center"
//                                             src={("img/SlideShow/a5.png")}
//                                             style={{ width: "100px",height:"100px" }}
//                                         />
//                                     </div>
//                                     <div className="pt-4 text-center">
//                                         <h5 className="title">
//                                             <span style={{ color: "#ffffff" }} className="mb-1 font-weight-bold">Beauty Culture</span>
//                                         </h5>
//                                     </div>
//
//                                 </Col>
//                                 {/*6*/}
//                                 <Col md="3" xs="6">
//                                     <div className="icon-shape justify-content-center rounded-circle card-lift--hover shadow border-0" style={{ width: "200px",height:"200px", background: "rgb(23,43,77)" }}>
//                                         <img
//                                             alt="..."
//                                             className="img-center"
//                                             src={("img/SlideShow/a6.png")}
//                                             style={{ width: "100px",height:"100px" }}
//                                         />
//                                     </div>
//                                     <div className="pt-4 text-center">
//                                         <h5 className="title">
//                                             <span style={{ color: "#ffffff" }} className="mb-1 font-weight-bold">Computers</span>
//                                         </h5>
//                                     </div>
//
//                                 </Col>
//                                 {/*7*/}
//                                 <Col md="3" xs="6">
//                                     <div className="icon-shape justify-content-center rounded-circle card-lift--hover shadow border-0" style={{ width: "200px",height:"200px", background: "rgb(23,43,77)" }}>
//                                         <img
//                                             alt="..."
//                                             className="img-center"
//                                             src={("img/SlideShow/a7.png")}
//                                             style={{ width: "100px",height:"100px" }}
//                                         />
//                                     </div>
//                                     <div className="pt-4 text-center">
//                                         <h5 className="title">
//                                             <span style={{ color: "#ffffff" }} className="mb-1 font-weight-bold">Constructions</span>
//                                         </h5>
//                                     </div>
//
//                                 </Col>
//                                 {/*8*/}
//                                 <Col md="3" xs="6">
//                                     <div className="icon-shape justify-content-center rounded-circle card-lift--hover shadow border-0" style={{ width: "200px",height:"200px", background: "rgb(23,43,77)" }}>
//                                         <img
//                                             alt="..."
//                                             className="img-center"
//                                             src={("img/SlideShow/a8.png")}
//                                             style={{ width: "100px",height:"100px" }}
//                                         />
//                                     </div>
//                                     <div className="pt-4 text-center">
//                                         <h5 className="title">
//                                             <span style={{ color: "#ffffff" }} className="mb-1 font-weight-bold">Education</span>
//                                         </h5>
//                                     </div>
//
//                                 </Col>
//                             </Row>
//                         </div>
//
//
//
//
//                         <div className="mx-0" style={{ width: "100%",height:"600px", background: "rgba(63,231,159,0)" }}>
//                             <Row>
//                                 {/*9*/}
//                                 <Col md="3" xs="6">
//                                     <div className="icon-shape justify-content-center rounded-circle card-lift--hover shadow border-0" style={{ width: "200px",height:"200px", background: "rgb(23,43,77)" }}>
//                                         <img
//                                             alt="..."
//                                             className="img-center"
//                                             src={("img/SlideShow/a9.png")}
//                                             style={{ width: "100px",height:"100px" }}
//                                         />
//                                     </div>
//                                     <div className="pt-4 text-center">
//                                         <h5 className="title">
//                                             <span style={{ color: "#ffffff" }} className="mb-1 font-weight-bold">Electrical</span>
//                                         </h5>
//                                     </div>
//
//                                 </Col>
//                                 {/*10*/}
//                                 <Col md="3" xs="6">
//                                     <div className="icon-shape justify-content-center rounded-circle card-lift--hover shadow border-0" style={{ width: "200px",height:"200px", background: "rgb(23,43,77)" }}>
//                                         <img
//                                             alt="..."
//                                             className="img-center"
//                                             src={("img/SlideShow/a10.png")}
//                                             style={{ width: "100px",height:"100px" }}
//                                         />
//                                     </div>
//                                     <div className="pt-4 text-center">
//                                         <h5 className="title">
//                                             <span style={{ color: "#ffffff" }} className="mb-1 font-weight-bold">Embassy</span>
//                                         </h5>
//                                     </div>
//
//                                 </Col>
//                                 {/*11*/}
//                                 <Col md="3" xs="6">
//                                     <div className="icon-shape justify-content-center rounded-circle card-lift--hover shadow border-0" style={{ width: "200px",height:"200px", background: "rgb(23,43,77)" }}>
//                                         <img
//                                             alt="..."
//                                             className="img-center"
//                                             src={("img/SlideShow/a11.png")}
//                                             style={{ width: "100px",height:"100px" }}
//                                         />
//                                     </div>
//                                     <div className="pt-4 text-center">
//                                         <h5 className="title">
//                                             <span style={{ color: "#ffffff" }} className="mb-1 font-weight-bold">Emergency</span>
//                                         </h5>
//                                     </div>
//
//                                 </Col>
//                                 {/*12*/}
//                                 <Col md="3" xs="6">
//                                     <div className="icon-shape justify-content-center rounded-circle card-lift--hover shadow border-0" style={{ width: "200px",height:"200px", background: "rgb(23,43,77)" }}>
//                                         <img
//                                             alt="..."
//                                             className="img-center"
//                                             src={("img/SlideShow/a12.png")}
//                                             style={{ width: "100px",height:"100px" }}
//                                         />
//                                     </div>
//                                     <div className="pt-4 text-center">
//                                         <h5 className="title">
//                                             <span style={{ color: "#ffffff" }} className="mb-1 font-weight-bold">Entertainment</span>
//                                         </h5>
//                                     </div>
//
//                                 </Col>
//                             </Row>
//                         </div>
//                         <div className="mx-0" style={{ width: "100%",height:"600px", background: "rgba(92,46,255,0)" }}>
//                             <Row>
//                                 {/*13*/}
//                                 <Col md="3" xs="6">
//                                     <div className="icon-shape justify-content-center rounded-circle card-lift--hover shadow border-0" style={{ width: "200px",height:"200px", background: "rgb(23,43,77)" }}>
//                                         <img
//                                             alt="..."
//                                             className="img-center"
//                                             src={("img/SlideShow/a13.png")}
//                                             style={{ width: "100px",height:"100px" }}
//                                         />
//                                     </div>
//                                     <div className="pt-4 text-center">
//                                         <h5 className="title">
//                                             <span style={{ color: "#ffffff" }} className="mb-1 font-weight-bold">Essential Services</span>
//                                         </h5>
//                                     </div>
//
//                                 </Col>
//                                 {/*14*/}
//                                 <Col md="3" xs="6">
//                                     <div className="icon-shape justify-content-center rounded-circle card-lift--hover shadow border-0" style={{ width: "200px",height:"200px", background: "rgb(23,43,77)" }}>
//                                         <img
//                                             alt="..."
//                                             className="img-center"
//                                             src={("img/SlideShow/a14.png")}
//                                             style={{ width: "100px",height:"100px" }}
//                                         />
//                                     </div>
//                                     <div className="pt-4 text-center">
//                                         <h5 className="title">
//                                             <span style={{ color: "#ffffff" }} className="mb-1 font-weight-bold">Financing</span>
//                                         </h5>
//                                     </div>
//
//                                 </Col>
//                                 {/*15*/}
//                                 <Col md="3" xs="6">
//                                     <div className="icon-shape justify-content-center rounded-circle card-lift--hover shadow border-0" style={{ width: "200px",height:"200px", background: "rgb(23,43,77)" }}>
//                                         <img
//                                             alt="..."
//                                             className="img-center"
//                                             src={("img/SlideShow/a15.png")}
//                                             style={{ width: "100px",height:"100px" }}
//                                         />
//                                     </div>
//                                     <div className="pt-4 text-center">
//                                         <h5 className="title">
//                                             <span style={{ color: "#ffffff" }} className="mb-1 font-weight-bold">Food</span>
//                                         </h5>
//                                     </div>
//
//                                 </Col>
//                                 {/*16*/}
//                                 <Col md="3" xs="6">
//                                     <div className="icon-shape justify-content-center rounded-circle card-lift--hover shadow border-0" style={{ width: "200px",height:"200px", background: "rgb(23,43,77)" }}>
//                                         <img
//                                             alt="..."
//                                             className="img-center"
//                                             src={("img/SlideShow/a16.png")}
//                                             style={{ width: "100px",height:"100px" }}
//                                         />
//                                     </div>
//                                     <div className="pt-4 text-center">
//                                         <h5 className="title">
//                                             <span style={{ color: "#ffffff" }} className="mb-1 font-weight-bold">Government</span>
//                                         </h5>
//                                     </div>
//
//                                 </Col>
//                             </Row>
//                         </div>
//
//                         <div className="mx-0" style={{ width: "100%",height:"600px", background: "rgba(92,46,255,0)" }}>
//                             <Row>
//                                 {/*17*/}
//                                 <Col md="3" xs="6">
//                                     <div className="icon-shape justify-content-center rounded-circle card-lift--hover shadow border-0" style={{ width: "200px",height:"200px", background: "rgb(23,43,77)" }}>
//                                         <img
//                                             alt="..."
//                                             className="img-center"
//                                             src={("img/SlideShow/a17.png")}
//                                             style={{ width: "100px",height:"100px" }}
//                                         />
//                                     </div>
//                                     <div className="pt-4 text-center">
//                                         <h5 className="title">
//                                             <span style={{ color: "#ffffff" }} className="mb-1 font-weight-bold">Hardware</span>
//                                         </h5>
//                                     </div>
//
//                                 </Col>
//                                 {/*18*/}
//                                 <Col md="3" xs="6">
//                                     <div className="icon-shape justify-content-center rounded-circle card-lift--hover shadow border-0" style={{ width: "200px",height:"200px", background: "rgb(23,43,77)" }}>
//                                         <img
//                                             alt="..."
//                                             className="img-center"
//                                             src={("img/SlideShow/a18.png")}
//                                             style={{ width: "100px",height:"100px" }}
//                                         />
//                                     </div>
//                                     <div className="pt-4 text-center">
//                                         <h5 className="title">
//                                             <span style={{ color: "#ffffff" }} className="mb-1 font-weight-bold">Health</span>
//                                         </h5>
//                                     </div>
//
//                                 </Col>
//                                 {/*19*/}
//                                 <Col md="3" xs="6">
//                                     <div className="icon-shape justify-content-center rounded-circle card-lift--hover shadow border-0" style={{ width: "200px",height:"200px", background: "rgb(23,43,77)" }}>
//                                         <img
//                                             alt="..."
//                                             className="img-center"
//                                             src={("img/SlideShow/a19.png")}
//                                             style={{ width: "100px",height:"100px" }}
//                                         />
//                                     </div>
//                                     <div className="pt-4 text-center">
//                                         <h5 className="title">
//                                             <span style={{ color: "#ffffff" }} className="mb-1 font-weight-bold">Hotel</span>
//                                         </h5>
//                                     </div>
//
//                                 </Col>
//                                 {/*20*/}
//                                 <Col md="3" xs="6">
//                                     <div className="icon-shape justify-content-center rounded-circle card-lift--hover shadow border-0" style={{ width: "200px",height:"200px", background: "rgb(23,43,77)" }}>
//                                         <img
//                                             alt="..."
//                                             className="img-center"
//                                             src={("img/SlideShow/a17.png")}
//                                             style={{ width: "100px",height:"100px" }}
//                                         />
//                                     </div>
//                                     <div className="pt-4 text-center">
//                                         <h5 className="title">
//                                             <span style={{ color: "#ffffff" }} className="mb-1 font-weight-bold">Hardware</span>
//                                         </h5>
//                                     </div>
//
//                                 </Col>
//                             </Row>
//                         </div>
//                     </AutoplaySlider>
//                 </div>
//             </section>
//         );
//     }
// }
//
// export default ISlider;
//
