import React, { useState } from "react";
import {
  FormGroup,
  FormControl,
  InputLabel,
  Input,
  Button,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { createStripeCoupons } from "../../service/api";
import { useHistory } from "react-router-dom";

const initialValue = {
  name: "",
  percent_off: "",
  duration: "repeating",
  duration_in_months: "",
};

const useStyles = makeStyles({
  container: {
    width: "50%",
    margin: "5% 0 0 25%",
    "& > *": {
      marginTop: 20,
    },
  },
});

const AddCoupons = () => {
  const [coupon, setCoupon] = useState(initialValue);
  const { name, percent_off, duration, duration_in_months } = coupon;
  const classes = useStyles();
  let history = useHistory();

  const onValueChange = (e) => {
    console.log(e.target.value);
    setCoupon({ ...coupon, [e.target.name]: e.target.value });
  };

  const addCouponDetails = async () => {
    await createStripeCoupons(coupon);
    history.push("./get-stripe-coupons");
  };

  return (
    <FormGroup className={classes.container}>
      <Typography variant="h4">Add User</Typography>
      <FormControl>
        <InputLabel htmlFor="my-input">Name</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="name"
          value={name}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Percentage Off</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="percent_off"
          value={percent_off}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Duration (Hint: repeating)</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="duration"
          value={duration}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <InputLabel htmlFor="my-input">Duration In Months</InputLabel>
        <Input
          onChange={(e) => onValueChange(e)}
          name="duration_in_months"
          value={duration_in_months}
          id="my-input"
        />
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => addCouponDetails()}
        >
          Add User
        </Button>
      </FormControl>
    </FormGroup>
  );
};

export default AddCoupons;
