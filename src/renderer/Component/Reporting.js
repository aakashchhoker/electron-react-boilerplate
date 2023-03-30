import { Box, Button } from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@material-ui/icons";
import React from "react";
import Typography from "@material-ui/core/Typography";
import { Link as Linked } from "react-router-dom";
import { Link } from "@material-ui/core";
import { Image, Input, Row } from "antd";
import CreateCustomer from "./CreateCustomer";

const Reporting = () => {
  let data = [
    { reportName: "Enroll", count: 250 },
    { reportName: "Active sequences", count: 15 },
    { reportName: "Contacts added", count: 350 },
    { reportName: "completed sequences", count: 14 },
    { reportName: "Contacts per sequence", count: 16 },
    { reportName: "Data", count: 5 },
  ];

  let moredata = [
    { reportName: "Task Errors", count: 0 },
    { reportName: "Due Tasks", count: 15 },
    { reportName: "Open", count: 2 },
    { reportName: "Replies", count: 14 },
    { reportName: "Interested", count: 16 },
    { reportName: "Not Interested", count: 5 },
  ];

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
        <Linked to="/customer/overview">
          <Link style={{ fontSize: "12px", color: "#666666" }} href="#">
            Overview
          </Link>
        </Linked>

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

      <Button
        startIcon={<KeyboardArrowLeft />}
        endIcon={<KeyboardArrowRight />}
        variant="contained"
        style={{ borderRadius: "0px", marginTop: "30px" }}
        size={"small"}
      >
        Today
      </Button>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {data.map((item) => {
          return (
            <div style={{ marginTop: "20px" }}>
              <Box
                sx={{
                  width: 130,
                  height: 130,
                  backgroundColor: "#eeeeee",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    height: "130px",
                  }}
                >
                  <Typography
                    variant="h4"
                    gutterBottom
                    component="h4"
                    style={{
                      color: "black",
                      fontSize: "14px",
                      textAlign: "center",
                    }}
                  >
                    {item.reportName}
                  </Typography>
                  <Typography
                    variant="h4"
                    gutterBottom
                    component="h4"
                    style={{ color: "black", fontSize: "18px" }}
                  >
                    {item.count}
                  </Typography>
                </div>
              </Box>
            </div>
          );
        })}
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {moredata.map((item) => {
          return (
            <div style={{ marginTop: "20px" }}>
              <Box
                sx={{
                  width: 130,
                  height: 130,
                  backgroundColor: "#eeeeee",
                  "&:hover": {
                    backgroundColor: "primary.main",
                    opacity: [0.9, 0.8, 0.7],
                  },
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    height: "130px",
                  }}
                >
                  <Typography
                    variant="h4"
                    gutterBottom
                    component="h4"
                    style={{
                      color: "black",
                      fontSize: "14px",
                      textAlign: "center",
                    }}
                  >
                    {item.reportName}
                  </Typography>
                  <Typography
                    variant="h4"
                    gutterBottom
                    component="h4"
                    style={{ color: "black", fontSize: "18px" }}
                  >
                    {item.count}
                  </Typography>
                </div>
              </Box>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Reporting;
