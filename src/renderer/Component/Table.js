import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, IconButton } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Input, Row } from "antd";
import CreateCustomer from "./CreateCustomer";
import Typography from "@material-ui/core/Typography";

const columns = [
  { field: "id", headerName: "ID", width: 60 },
  { field: "customerName", headerName: "Tenant", width: 150 },
  { field: "dateCreate", headerName: "Date created", width: 150 },

  {
    field: "age",
    headerName: "Active users",
    // type: 'number',
    width: 140,
  },
  { field: "assigned", headerName: "Assigned", width: 150 },
  { field: "subscription", headerName: "Subscription Status", width: 150 },
];

const rows = [
  {
    id: 1,
    dateCreate: "13th March 2023",
    customerName: "Third Republic",
    age: "70 users",
    assigned: "",
    subscription: "",
  },
  {
    id: 2,
    dateCreate: "13th March 2023",
    customerName: "Maxwell Stevens",
    age: "50 users",
    assigned: "",
    subscription: "",
  },
  {
    id: 3,
    dateCreate: "13th March 2023",
    customerName: "Prism Digital Recruitment",
    age: "5 users",
    assigned: "",
    subscription: "",
  },
  {
    id: 4,
    dateCreate: "13th March 2023",
    customerName: "LifeWise PSHE",
    age: "5 users",
    assigned: "",
    subscription: "",
  },
  {
    id: 5,
    dateCreate: "13th March 2023",
    customerName: "SuperReach Demo",
    age: "25 users",
    assigned: "",
    subscription: "",
  },
  {
    id: 6,
    dateCreate: "13th March 2023",
    customerName: "SuperReach Internal",
    age: "5 users",
    assigned: "",
    subscription: "",
  },
  {
    id: 7,
    dateCreate: "13th March 2023",
    customerName: "SW6 Associates",
    age: "5 users",
    assigned: "",
    subscription: "",
  },
  {
    id: 8,
    dateCreate: "13th March 2023",
    customerName: "IgniteSAP",
    age: "5 users",
    assigned: "",
    subscription: "",
  },
];

function DataTable() {
  return (
    <div style={{ paddingLeft: 20 }}>
     <Typography
            variant="h6"
            gutterBottom
            component="h6"
            style={{ color: "grey" }}
          >
            Customers
          </Typography>
      <Row justify={"space-between"}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "70%",
          }}
        >
          <Input placeholder="Search customers" style={{ marginRight: 10 }} />
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
            All types
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
            Date added
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
      <div style={{ height: 600, width: "100%", marginTop: '20px'}}>
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
}

export default DataTable;
