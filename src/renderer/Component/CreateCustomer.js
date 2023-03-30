import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@material-ui/core/Typography";
import { Input, Row } from "antd";
import { Clear } from "@material-ui/icons";
import { Checkbox, FormControlLabel, FormGroup, Grid } from "@mui/material";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";

const CreateCustomer = () => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => {
    return (
      <div style={{ padding: "20px", width: "300px" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "60px",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            component="h6"
            style={{ color: "grey", fontSize: "16px" }}
          >
            Create Customer
          </Typography>

          <Button onClick={() => setState(false)}>
            <Clear />
          </Button>
        </div>
        <div>
          <Typography
            variant="h6"
            gutterBottom
            component="h6"
            style={{ color: "grey", fontSize: "14px" }}
          >
            Company details
          </Typography>
          <Input placeholder="Company Name" style={{ borderRadius: "0px" }} />
          <Input
            placeholder="Company Email Domain"
            style={{ borderRadius: "0px", marginTop: "10px" }}
          />
        </div>
        <Divider
          style={{
            backgroundColor: "#f7f7f7",
            marginTop: "20px",
            padding: "0px",
          }}
        />
        <div style={{ marginTop: "20px" }}>
          <Typography
            variant="h6"
            gutterBottom
            component="h6"
            style={{ color: "grey", fontSize: "14px" }}
          >
            Primary Contact/First User
          </Typography>
          <Input placeholder="First Name" style={{ borderRadius: "0px" }} />
          <Input
            placeholder="Last Name Domain"
            style={{ borderRadius: "0px", marginTop: "10px" }}
          />
          <Input
            placeholder="Company Email Domain"
            style={{ borderRadius: "0px", marginTop: "10px" }}
          />
          <Row justify={"end"}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Don’t send invite"
              />
            </FormGroup>
          </Row>
        </div>
        <Divider
          style={{
            backgroundColor: "#f7f7f7",
            marginTop: "10px",
            padding: "0px",
          }}
        />
        <div style={{ marginTop: "20px" }}>
          <Typography
            variant="h6"
            gutterBottom
            component="h6"
            style={{ color: "grey", fontSize: "14px" }}
          >
            Subscription details
          </Typography>
          <Input placeholder="Type" style={{ borderRadius: "0px" }} />
          <Input
            placeholder="Number of seats"
            style={{ borderRadius: "0px", marginTop: "10px" }}
          />
          <Input
            placeholder="Credits p/m"
            style={{ borderRadius: "0px", marginTop: "10px" }}
          />
          <Row justify={"space-between"}>
            <Input
              placeholder="Start date"
              style={{ borderRadius: "0px", marginTop: "10px", width: '45%' }}
            />
            <Input
              placeholder="Duration"
              style={{ borderRadius: "0px", marginTop: "10px", width: '45%' }}
            />
          </Row>

          <Row justify={"end"} style={{marginTop: "20px"}}>
           
           <Button
              // onClick={toggleDrawer(anchor, true)}
              variant="outlined"
              style={{
                backgroundColor: "#eeeeee",
                borderRadius: 8,
                borderColor: "#eeeeee",
                color: "#747474",
                fontSize: 10,
                fontWeight: 600,
                // width: '100%',
                height: "30px",
              }}
              size="medium"
            >
            <Link to="/customer">
            Create customer
            </Link>
            </Button>
          </Row>
        </div>
      </div>
    );
  };

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            onClick={toggleDrawer(anchor, true)}
            variant="outlined"
            style={{
              backgroundColor: "#eeeeee",
              borderRadius: 8,
              borderColor: "#eeeeee",
              color: "#747474",
              fontSize: 10,
              fontWeight: 600,
              // width: '100%',
              height: "30px",
            }}
            size="medium"
          >
            Create customer
          </Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CreateCustomer;
