import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";
import PanelHeader from "components/PanelHeader/PanelHeader.js";

function RegularTables() {
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8081/UserInformations/all");
        const data = await response.json();
        setTableData(data);
        console.log(data, "====");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card>
              <CardHeader>
                <CardTitle tag="h4">User Information Table</CardTitle>
              </CardHeader>
              <CardBody>
                <Table responsive style={{ borderCollapse: "collapse", width: "100%" }}>
                  <thead className="text-primary">
                    <tr>
                      <th style={cellStyle}>ID</th>
                      <th style={cellStyle}> FULL NAME</th>
                      <th style={cellStyle}>FIRST NAME </th>
                      <th style={cellStyle}>LAST NAME </th>
                      <th style={cellStyle}>ADDRESS</th>
                      <th style={cellStyle}>EMAIL</th>
                      <th style={cellStyle}>CITY</th>
                      <th style={cellStyle}>COUNTRY</th>
                      <th style={cellStyle}>POSTAL CODE </th>
                      <th style={cellStyle}>ABOUT ME </th>

                    </tr>
                  </thead>
                  <tbody>
                    {tableData.map((userData, index) => (
                      <tr key={index}>
                        <td style={cellStyle}>{userData.id}</td>
                        <td style={cellStyle}>{userData.user_name}</td>
                        <td style={cellStyle}>{userData.first_name}</td>
                        <td style={cellStyle}>{userData.last_name}</td>
                        <td style={cellStyle}>{userData.address}</td>
                        <td style={cellStyle}>{userData.email}</td>
                        <td style={cellStyle}>{userData.city}</td>
                        <td style={cellStyle}>{userData.country}</td>
                        <td style={cellStyle}>{userData.postal_code}</td>
                        <td style={cellStyle}>{userData.about_me}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

const cellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
};

export default RegularTables;
