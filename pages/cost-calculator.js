import React from 'react';
import {
    Form,
    TextInput,
    TextArea,
    Select,
    Button,
    SelectItem,
} from "carbon-components-react";
import styles from "../styles/Home.module.scss"
import Layout from "../components/Layout/Layout";

export default function costCalculator() {
    return (
        <Layout>
            <div className={`${styles.container} ${styles.costCalculator}`}>
            <Form>
            <div style={{ marginBottom: '2rem' }}>
                <TextInput
                    helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
                    id="test2"
                    invalidText="Invalid error message."
                    labelText="Text input label"
                    placeholder="Placeholder text"
                />
            </div>
            <div style={{ marginBottom: '2rem' }}>
                <TextArea
                    cols={50}
                    helperText="Optional helper text here; if message is more than one line text should wrap (~100 character count maximum)"
                    id="test5"
                    invalidText="Invalid error message."
                    labelText="Text area label"
                    placeholder="Placeholder text"
                    rows={4}
                />
            </div>
            <div style={{ marginBottom: '2rem' }}>
                <Select
                    defaultValue="placeholder-item"
                    id="select-1"
                    invalidText="This is an invalid error message."
                    labelText="Select"
                >
                    <SelectItem
                        text="Option 1"
                        value="option-1"
                    />
                    <SelectItem
                        text="Option 2"
                        value="option-2"
                    />
                    <SelectItem
                        text="Option 3"
                        value="option-3"
                    />
                </Select>
            </div>
            <Button
                kind="primary"
                tabIndex={0}
                type="submit"
            >
                Submit
            </Button>
        </Form>
        </div>
        </Layout>
    )
}