import React, { useState, useEffect } from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
  makeStyles,
  Button,
} from "@material-ui/core";
import { deleteStripeCoupons, getStripeCoupons } from "../../service/api";
// import { Link } from 'react-router-dom';

const useStyles = makeStyles({
  table: {
    width: "90%",
    margin: "50px 0 0 50px",
  },
  thead: {
    "& > *": {
      fontSize: 20,
      background: "#000000",
      color: "#FFFFFF",
    },
  },
  row: {
    "& > *": {
      fontSize: 18,
    },
  },
});
const ListAllCoupons = () => {
  const [coupons, setCoupons] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    getAllCoupons();
  }, []);

  const deleteCouponData = async (id) => {
    await deleteStripeCoupons(id);
    getAllCoupons();
  };

  const getAllCoupons = async () => {
    let response = await getStripeCoupons();

    setCoupons(response.data.data.data);
  };

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow className={classes.thead}>
          <TableCell>Id</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Percentage</TableCell>
          <TableCell>Duration</TableCell>
          <TableCell></TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {coupons.length > 0 &&
          coupons.map((item, i) => (
            <TableRow className={classes.row} key={i}>
              <TableCell>{item.id}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.percent_off}</TableCell>
              <TableCell>{item.duration_in_months}</TableCell>
              <TableCell>
                <Button
                  color="secondary"
                  variant="contained"
                  onClick={() => deleteCouponData(item.id)}
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default ListAllCoupons;
