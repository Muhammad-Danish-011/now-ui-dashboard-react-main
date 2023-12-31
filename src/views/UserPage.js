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
      <div className="content">
        <Row>
          <Col md="8">
            <Card >
              <CardHeader>
                <h5 className="title">User Information </h5>
              </CardHeader>
              <CardBody>
                <Form>
                  <Row>
                    <Col className="pr-1" md="5">
                      <FormGroup>
                        <label>Company</label>
                        <Input
                          cols="80"
                          placeholder="Company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="3">
                      <FormGroup>
                        <label>UserName</label>
                        <Input
                          cols="80"
                          placeholder="Username"
                          type="text"
                          name="user_name"
                          value={formData.user_name}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label htmlFor="exampleInputEmail1">Email</label>
                        <Input
                          cols="80"
                          placeholder="Email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="6">
                      <FormGroup>
                        <label>FirstName</label>
                        <Input
                          cols="80"
                          placeholder="First name "
                          type="text"
                          name="first_name"
                          value={formData.first_name}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="6">
                      <FormGroup>
                        <label>LastName</label>
                        <Input
                          cols="80"
                          placeholder="Last Name"
                          type="text"
                          name="last_name"
                          value={formData.last_name}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>Address</label>
                        <Input
                          cols="80"
                          placeholder="Home Address"
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="pr-1" md="4">
                      <FormGroup>
                        <label>City</label>
                        <Input
                          cols="80"
                          placeholder="City"
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="px-1" md="4">
                      <FormGroup>
                        <label>Country</label>
                        <Input
                          cols="80"
                          placeholder="Country"
                          type="text"
                          name="country"
                          value={formData.country}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                    <Col className="pl-1" md="4">
                      <FormGroup>
                        <label>PostalCode</label>
                        <Input
                          cols="80"
                          placeholder="ZIP Code"
                          type="number"
                          name="postal_code"
                          value={formData.postal_code}
                          onChange={handleInputChange}
                        />
                      </FormGroup>
                    </Col>
                  </Row>

                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label>About Me</label>
                        <Input
                          cols="80"
                          placeholder="Here can be your description"
                          rows="4"
                          type="textarea"
                          name="about_me"
                          value={formData.about_me}
                          onChange={handleInputChange}
                        />
                        <Button
                          className="btn-neutral btn-icon btn-round"
                          onClick={()=>{
                            handleSaveClick();
                          }}
                        >
                          Save
                        </Button>
                      </FormGroup>
                    </Col>
                  </Row>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <p>Data Saved Successfully!</p>
            <button  className="btn-neutral btn-icon btn-round" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
      
    </>
  );
}

export default UserPage;
