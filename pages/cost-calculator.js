import React from "react";
import {
  Form,
  TextInput,
  NumberInput,
  TextArea,
  Select,
  Button,
  SelectItem,
} from "carbon-components-react";
import styles from "../styles/Home.module.scss";
import Layout from "../components/Layout/Layout";

export default function costCalculator() {
  return (
    <Layout>
      <div className={`${styles.container} ${styles.costCalculator}`}>
        <Form>
          <div className={styles.calcpage}>
            Please enter approx waste in Kg
          </div>
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
              id="ewaste"
              // invalid="Invalid error message."
              label="E-waste"
              placeholder="in kg"
              min={0}
              max={100}
            />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <NumberInput
              id="biode"
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
          >
            Calculate
          </Button>
          <br /><br /><br />
          <div className={styles.calcpage}>
            Total approximate cost:
          </div>
        </Form>
      </div>
    </Layout>
  );
}
