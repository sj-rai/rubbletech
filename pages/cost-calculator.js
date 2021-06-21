import React, { useState } from "react";
import {
  Form,
  TextInput,
  NumberInput,
  TextArea,
  Select,
  Button,
  SelectItem,
  Loading,
  InlineLoading,
} from "carbon-components-react";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout/Layout";
import axios from "axios";

export default function CostCalculator() {
  let [totalAmount, setTotalAmount] = useState(0);
  let [spinner, setSpinner] = useState(false);
  return (
    <Layout>
      <div className={`${styles.container} ${styles.costCalculator}`}>
        <Form>
          <div className={styles.calcpage}>Please enter approx waste in Kg</div>
          <br /> <br />
          <div style={{ marginBottom: "2rem" }}>
            <NumberInput
              id="paper"
              // invalid="Invalid error message."
              label="Paper"
              placeholder="in kg"
              min={0}
              max={100}
            />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <NumberInput
              id="metal"
              // invalid="Invalid error message."
              label="Metal"
              placeholder="in kg"
              min={0}
              max={100}
            />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <NumberInput
              id="glass"
              // invalid="Invalid error message."
              label="Glass"
              placeholder="in kg"
              min={0}
              max={100}
            />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <NumberInput
              id="plastic"
              // invalid="Invalid error message."
              label="Plastic"
              placeholder="in kg"
              min={0}
              max={100}
            />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <NumberInput
              id="e-waste"
              // invalid="Invalid error message."
              label="E-waste"
              placeholder="in kg"
              min={0}
              max={100}
            />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <NumberInput
              id="bio-degradable"
              // invalid="Invalid error message."
              label="Bio-degradable waste"
              placeholder="in kg"
              min={0}
              max={100}
            />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <NumberInput
              id="other"
              // invalid="Invalid error message."
              label="Other"
              placeholder="in kg"
              min={0}
              max={100}
            />
          </div>
          <Button
            kind="primary"
            tabIndex={0}
            // type="submit"
            onClick={() =>
              calculate(totalAmount, setTotalAmount, spinner, setSpinner)
            }
          >
            Calculate
          </Button>
          <br />
          <br />
          <br />
          {/*<Loading description="Active loading indicator" withOverlay={false} small />*/}
          <div className={styles.calcpage}>
            <div className={styles.totalText}>Total approximate cost:</div>
            {spinner === true && <InlineLoading />}
            {spinner === false && <div>Rs. {totalAmount}</div>}
          </div>
        </Form>
      </div>
    </Layout>
  );
}

async function calculate(totalAmount, setTotalAmount, spinner, setSpinner) {
  setSpinner(true);
  console.log("[click]");
  let data = "";
  const ids = [
    "paper",
    "metal",
    "glass",
    "plastic",
    "e-waste",
    "bio-degradable",
    "other",
  ];
  let total = 0;

  for (const id of ids) {
    if (process.browser) {
      data = document.getElementById(id)
        ? document.getElementById(id).value
        : 0;
    }
    // console.log("[data]", data)
    if (data > 0) {
      let amount = await axios
        .get(`/api/price/${id}?qty=${data}`)
        .then((res) => {
          // console.log("[res]", res)
          // total = total + res.data.amount;
          return res.data.amount;
          // console.log("[total]", total)
          // setTotalAmount(total);
        })
        .catch((err) => {
          console.log("[err]", err);
        });
      total = total + amount;
    }
    // let amount = await axios.get(`/api/price/${id}?qty=${data}`)
    //   .then((res) => {
    //     // console.log("[res]", res)
    //     // total = total + res.data.amount;
    //     return res.data.amount
    //     // console.log("[total]", total)
    //     // setTotalAmount(total);
    //   })
    //   .catch((err) => {
    //     console.log("[err]", err)
    //   })
    // total = total + amount;
  }
  // Promise.all(promises => {
  //   setTotalAmount(total);
  //   Promise.resolve()
  // })
  setSpinner(false);
  setTotalAmount(total);
  console.log("[totalAmount]", totalAmount);
}
