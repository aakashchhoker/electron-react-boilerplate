import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, IconButton } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Image, Input, Row } from "antd";
import CreateCustomer from "./CreateCustomer";
import { Link as Linked } from "react-router-dom";
import { Link } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const columns = [
  { field: "id", headerName: "ID", width: 60 },
  { field: "customerName", headerName: "Username", width: 150 },
  { field: "dateCreate", headerName: "Email", width: 160 },

  {
    field: "age",
    headerName: "Active users",
    // type: 'number',
    width: 140,
  },
  { field: "assigned", headerName: "Office", width: 80 },
  { field: "subscription", headerName: "Team", width: 100 },
  { field: "permission", headerName: "Permission", width: 100 },
  { field: "status", headerName: "Status", width: 100 },
];

const rows = [
  {
    id: 1,
    dateCreate: "person@gmail.com",
    customerName: "Third Republic",
    age: "70 users",
    assigned: "London",
    status: "Active",
    subscription: "DevOps",
    permission: "Admin",
  },
  {
    id: 2,
    dateCreate: "person@gmail.com",
    customerName: "Maxwell Stevens",
    age: "50 users",
    assigned: "London",
    status: "Active",
    subscription: "SLT",
    permission: "Admin",
  },
  {
    id: 3,
    dateCreate: "person@gmail.com",
    customerName: "Prism Digital Recruitment",
    age: "5 users",
    assigned: "London",
    status: "Active",
    subscription: "Marketing",
    permission: "Admin",
  },
  {
    id: 4,
    dateCreate: "person@gmail.com",
    customerName: "LifeWise PSHE",
    age: "5 users",
    assigned: "London",
    status: "Active",
    subscription: "SLT",
    permission: "Admin",
  },
  {
    id: 5,
    dateCreate: "person@gmail.com",
    customerName: "SuperReach Demo",
    age: "25 users",
    assigned: "London",
    status: "Active",
    subscription: "Marketing",
    permission: "Admin",
  },
  {
    id: 6,
    dateCreate: "person@gmail.com",
    customerName: "SuperReach Internal",
    age: "5 users",
    assigned: "London",
    status: "Active",
    subscription: "SLT",
    permission: "Admin",
  },
  {
    id: 7,
    dateCreate: "person@gmail.com",
    customerName: "SW6 Associates",
    age: "5 users",
    assigned: "London",
    status: "Active",
    subscription: "Marketing",
    permission: "Admin",
  },

  {
    id: 8,
    dateCreate: "person@gmail.com",
    customerName: "IgniteSAP",
    age: "5 users",
    assigned: "London",
    status: "Active",
    subscription: "Subscription",
    permission: "Admin",
  },
];

const UserTable = () => {
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
      <Row justify={"space-between"} style={{ marginTop: "20px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "70%",
          }}
        >
          <Input placeholder="Search users" style={{ marginRight: 10 }} />
          <Button
            variant="outlined"
            style={{
              backgroundColor: "transparent",
              borderRadius: 8,
              borderColor: "#eeeeee",
              color: "#747474",
              fontSize: 10,
              fontWeight: 600,
              width: "50%",
              height: "30px",
              marginRight: 10,
            }}
            size="small"
          >
            All status
          </Button>
          <Button
            variant="outlined"
            size="small"
            style={{
              backgroundColor: "transparent",
              borderRadius: 8,
              borderColor: "#eeeeee",
              color: "#747474",
              fontSize: 10,
              fontWeight: 600,
              width: "50%",
              height: "30px",
              marginRight: 10,
            }}
          >
            All office
          </Button>
          <Button
            variant="outlined"
            size="small"
            style={{
              backgroundColor: "transparent",
              borderRadius: 8,
              borderColor: "#eeeeee",
              color: "#747474",
              fontSize: 10,
              fontWeight: 600,
              width: "50%",
              height: "30px",
            }}
          >
            All team
          </Button>
        </div>
        <CreateCustomer />
      </Row>
      <div style={{ height: 600, width: "100%", marginTop: 20 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
        />
      </div>
    </div>
  );
};

export default UserTable;
