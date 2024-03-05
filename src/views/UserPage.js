import React, { useState, useEffect } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Row,
  Col,
} from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";
import axios from "axios";

function UserPage() {
  const [formData, setFormData] = useState({
    company: "",
    username: "",
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    country: "",
    postalCode: "",
    aboutMe: "",
  });

  const resetFormData = () => {
    setFormData({
      company: "",
      user_name: "",
      email: "",
      first_name: "",
      last_name: "",
      address: "",
      city: "",
      country: "",
      postal_code: "",
      about_me: "",
    });
  };

  const closePopup = () => {
    setShowPopup(false);
    setSaveSuccess(false);
    resetFormData();
  };

  const [saveSuccess, setSaveSuccess] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  useEffect(() => {
    if (saveSuccess) {
      console.log("Data saved successfully!");
    }
  }, [saveSuccess]);

  const handleSaveClick = () => {
    axios
      .post("http://localhost:8081/UserInformations/add", formData)
      .then((response) => {
        console.log(response.data);
        setSaveSuccess(true);
        setShowPopup(true);
      })
      .catch((error) => {
        console.error("Error saving data:", error);
        setSaveSuccess(true);
      });

    setTimeout(() => {
      setSaveSuccess(true);
    }, 1000);
  };

  return (
    <>
      <PanelHeader size="sm" />
      <div className="content" style={{ margin: "0 auto"  , display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "10vh", }}>
        <Row>
          <Col>
            <Card style={{display: 'flex' , justifyContent:'center' , fontsize: 'large'}}>
              <CardHeader >
                <h5 className="title">User Information</h5>
              </CardHeader>
              <CardBody >
                <Form >
                  <Row>
                    <Col>
                      <FormGroup>
                        <label >Company</label>
                        <Input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          
                        />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <label  >Username</label>
                        <Input
                          type="text"
                          name="user_name"
                          value={formData.user_name}
                          onChange={handleInputChange}
                                               />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label >Email</label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <label >First Name</label>
                        <Input
                          type="text"
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleInputChange}
                                            />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label >Last Name</label>
                        <Input
                          type="text"
                          name="last_name"
                          value={formData.last_name}
                          onChange={handleInputChange}
                    />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <label >Address</label>
                        <Input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                                      />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label  >City</label>
                        <Input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                                               />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <label >Country</label>
                        <Input
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                                          />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <FormGroup>
                        <label >Postal Code</label>
                        <Input
                          type="number"
                          name="postal_code"
                          value={formData.postal_code}
                          onChange={handleInputChange}
                                                 />
                      </FormGroup>
                    </Col>
                    <Col>
                      <FormGroup>
                        <label  >About Me</label>
                        <Input 
                          type="textarea"
                          name="about_me"
                          value={formData.about_me}
                          onChange={handleInputChange}
                                                 />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row  style={{
                  // width: 'full' ,
                  display: "flex",
                  justifyContent: "center",
                  
                }}>
                  <Button
                 style={{
                  // width:"full",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#575758",
                  color: "white",
                  border: '2px solid black',
                  borderRadius :'10%',
                  padding: "0px 50px"
                  
              
                }}
                    className="btn-neutral btn-icon btn-round"
                    onClick={handleSaveClick}
                  >
                    Save
                  </Button>
                  </Row>
                 
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      {showPopup && (
        <div
          className="popup"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              borderRadius: "8px",
              textAlign: "center",
            }}
          >
            <p>Data Saved Successfully!</p>
            <button
              className="btn-neutral btn-icon btn-round"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default UserPage;
