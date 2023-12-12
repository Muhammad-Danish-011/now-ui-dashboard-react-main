
import React, { Component } from "react";

// reactstrap components
import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Button,
} from "reactstrap";

// core components
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function Upgrade() {
  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <CardTitle>Xloop</CardTitle>
                <p className="category">
                  'Welcome to Xloop'
                </p>
                <i className="fa-solid fa-infinity fa-flip fa-2xs"></i>
              </CardHeader>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Upgrade;
