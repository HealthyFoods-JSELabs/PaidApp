import React from "react";
import CustomersComponent from "../components/CustomersComponent/CustomersComponent";



class CustomerView extends React.Component {

    render() {
        return (
            <div className="Blogs" style={{width: '100%', justifyContent: "center"}}>
            <Row style={{width: '100%', margin: 0}}>
                <Nav/>
            </Row>

            <PageTitleComponent pageTitle='BLOGS'/>


            <div style={{width: '100%', display: "inline-flex", justifyContent: "center", marginTop: 50}}>
                <Row style={{margin: 0, width: '80%', display: "inline-flex", justifyContent: "center"}}>


                    {
                        data.reverse().map((item) => (
                                <>
                                    <Col style={{display: "inline-flex", justifyContent: "center"}} md="4" xs="12">
                                        <div style={{
                                            paddingBottom: 10,
                                            width: '90%',
                                            backgroundColor: "#ffffff",
                                            marginBottom: 50,
                                            borderRadius: 30,
                                            webkitBoxShadow: "9px 12px 45px -5px #000000",
                                            boxShadow: "9px 12px 45px -8px #000000"
                                        }}>
                                            <div>
                                                <img style={{borderRadius: 30}} width='100%' src={item.image}/>
                                            </div>
                                            <div style={{margin: 25, fontWeight: "bold", fontSize: 18}}>
                                                {item.title}
                                            </div>
                                            <div style={{margin: 25, fontSize: 18, marginTop: -20}}>
                                                {item.description}
                                            </div>
                                            <a style={{color: "white", width: "100%"}} href={item.blogLink} target="_blank">
                                                <button style={{
                                                    margin: 25, fontSize: 18,
                                                    marginBottom: 20,
                                                    backgroundColor: "#003E9B",
                                                    width: '50%',
                                                    textAlign: "center",
                                                    padding: 5,
                                                    color: 'white',
                                                    fontWeight: "bold",
                                                    borderRadius: 14,
                                                    border: "none"
                                                }}>
                                                    Read More
                                                </button>
                                            </a>


                                        </div>
                                    </Col>
                                </>

                            )
                        )
                    }


                </Row>
            </div>


            <FooterComponent/>


        </div>

        );
    }
}

export default CustomerView;
