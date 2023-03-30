import { Link } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { Edit } from "@material-ui/icons";
import { Row, Col } from "antd";
import React from "react";
import Divider from "@mui/material/Divider";
import { Link as Linked} from "react-router-dom";

function CustomerDetail() {
  return (
    <div style={{ paddingLeft: "20px" }}>
      <Typography
        variant="h4"
        gutterBottom
        component="h4"
        style={{ color: "grey", fontSize: "18px" }}
      >
        Customers {">"} Third Republic
      </Typography>
      <Row
        justify={"space-between"}
        style={{ width: "60%", marginTop: "20px" }}
      >
        <Link style={{ fontSize: "12px", color: "#666666" }} href="#">
          Overview
        </Link>
        <Linked to="/customer/user">
          <Link style={{ fontSize: "12px", color: "#666666" }}>Users</Link>
        </Linked>

        <Linked to="/">
        <Link style={{ fontSize: "12px", color: "#666666" }} href="#">
          Settings
        </Link>
        </Linked>
        <Linked to="/customer/reporting">
          <Link style={{ fontSize: "12px", color: "#666666" }} href="#">
            Reporting
          </Link>
        </Linked>
        <Link style={{ fontSize: "12px", color: "#666666" }} href="#">
          Subscriptions
        </Link>
        <Link style={{ fontSize: "12px", color: "#666666" }} href="#">
          Integrations
        </Link>
      </Row>
      <Row
        justify={"space-between"}
        style={{ width: "150px", marginTop: "30px" }}
        align={"center"}
      >
        <Typography
          variant="h4"
          gutterBottom
          component="h4"
          style={{ color: "grey", fontSize: "14px", fontWeight: "500" }}
        >
          Customer details
        </Typography>
        <Edit />
      </Row>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          //   justifyContent: "flex-start",
          marginTop: "20px",
        }}
      >
        <Col>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "300px",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              component="h4"
              style={{ color: "grey", fontSize: "14px", fontWeight: "500" }}
            >
              Company name:
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              component="h4"
              style={{ color: "grey", fontSize: "14px", fontWeight: "500" }}
            >
              Third Republic
            </Typography>
          </div>
        </Col>

        <Col>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "5px",
              justifyContent: "space-between",
              width: "300px",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              component="h4"
              style={{ color: "grey", fontSize: "14px", fontWeight: "500" }}
            >
              Domain:
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              component="h4"
              style={{
                color: "grey",
                fontSize: "14px",
                fontWeight: "500",
                color: "blue",
              }}
            >
              thirdrepublic.com
            </Typography>
          </div>
        </Col>
        <Col>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "5px",
              justifyContent: "space-between",
              width: "300px",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              component="h4"
              style={{ color: "grey", fontSize: "14px", fontWeight: "500" }}
            >
              HQ Location:
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              component="h4"
              style={{ color: "grey", fontSize: "14px", fontWeight: "500" }}
            >
              London
            </Typography>
          </div>
        </Col>
        <Col>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "5px",
              justifyContent: "space-between",
              width: "300px",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              component="h4"
              style={{ color: "grey", fontSize: "14px", fontWeight: "500" }}
            >
              Primary contact:
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              component="h4"
              style={{ color: "grey", fontSize: "14px", fontWeight: "500" }}
            >
              Nick Hannan
            </Typography>
          </div>
        </Col>
        <Col>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "5px",
              justifyContent: "space-between",
              width: "300px",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              component="h4"
              style={{ color: "grey", fontSize: "14px", fontWeight: "500" }}
            >
              Email:
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              component="h4"
              style={{
                color: "grey",
                fontSize: "14px",
                fontWeight: "500",
                color: "blue",
              }}
            >
              nick@thirdrepublic.com
            </Typography>
          </div>
        </Col>
      </div>
      <Divider
        style={{
          backgroundColor: "#f7f7f7",
          marginTop: "20px",
          padding: "0px",
        }}
      />
      <Typography
        variant="h4"
        gutterBottom
        component="h4"
        style={{
          color: "grey",
          fontSize: "14px",
          fontWeight: "500",
          marginTop: "20px",
        }}
      >
        Subscription details
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          //   justifyContent: "flex-start",
          marginTop: "20px",
        }}
      >
        <Col>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "300px",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              component="h4"
              style={{ color: "grey", fontSize: "14px", fontWeight: "500" }}
            >
              Type:
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              component="h4"
              style={{ color: "grey", fontSize: "14px", fontWeight: "500" }}
            >
              Paid
            </Typography>
          </div>
        </Col>

        <Col>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "5px",
              justifyContent: "space-between",
              width: "300px",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              component="h4"
              style={{ color: "grey", fontSize: "14px", fontWeight: "500" }}
            >
              Seats:
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              component="h4"
              style={{ color: "grey", fontSize: "14px", fontWeight: "500" }}
            >
              11
            </Typography>
          </div>
        </Col>
        <Col>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "5px",
              justifyContent: "space-between",
              width: "300px",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              component="h4"
              style={{ color: "grey", fontSize: "14px", fontWeight: "500" }}
            >
              Credits:
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              component="h4"
              style={{ color: "grey", fontSize: "14px", fontWeight: "500" }}
            >
              150 credits per user
            </Typography>
          </div>
        </Col>
        <Col>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "5px",
              justifyContent: "space-between",
              width: "300px",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              component="h4"
              style={{ color: "grey", fontSize: "14px", fontWeight: "500" }}
            >
              End date:
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              component="h4"
              style={{ color: "grey", fontSize: "14px", fontWeight: "500" }}
            >
              12th January 2024
            </Typography>
          </div>
        </Col>
      </div>
      <Divider
        style={{
          backgroundColor: "#f7f7f7",
          marginTop: "20px",
          padding: "0px",
        }}
      />
      <Typography
        variant="h4"
        gutterBottom
        component="h4"
        style={{
          color: "grey",
          fontSize: "14px",
          fontWeight: "500",
          marginTop: "20px",
        }}
      >
        Customer success
      </Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          //   justifyContent: "flex-start",
          marginTop: "20px",
        }}
      >
        <Col>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: "300px",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              component="h4"
              style={{ color: "grey", fontSize: "14px", fontWeight: "500" }}
            >
              Sales:
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              component="h4"
              style={{ color: "grey", fontSize: "14px", fontWeight: "500" }}
            >
              Anil Vithani
            </Typography>
          </div>
        </Col>

        <Col>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "5px",
              justifyContent: "space-between",
              width: "300px",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              component="h4"
              style={{ color: "grey", fontSize: "14px", fontWeight: "500" }}
            >
              Success:
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              component="h4"
              style={{ color: "grey", fontSize: "14px", fontWeight: "500" }}
            >
              Harry Bradley
            </Typography>
          </div>
        </Col>
        <Col>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginTop: "5px",
              justifyContent: "space-between",
              width: "300px",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              component="h4"
              style={{ color: "grey", fontSize: "14px", fontWeight: "500" }}
            >
              NPS:
            </Typography>
            <Typography
              variant="h4"
              gutterBottom
              component="h4"
              style={{ color: "grey", fontSize: "14px", fontWeight: "500" }}
            >
              80
            </Typography>
          </div>
        </Col>
      </div>
    </div>
  );
}

export default CustomerDetail;
