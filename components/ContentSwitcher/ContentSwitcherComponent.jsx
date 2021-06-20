import React, { useState } from "react";
import { ContentSwitcher, Switch } from "carbon-components-react";
import "./content-switcher.module.scss";

export default function ContentSwitcherComponent(props) {
  let [selected, setSelected] = useState("hazardous");
  // const {callBackFromComponent} = this.props;

  React.useEffect(() => {
    props.callBackFromComponent(selected);
  });
  return (
    <div>
      <ContentSwitcher
        onChange={(e) => {
          switchType(e, setSelected, selected, props);
        }}
        size="lg"
      >
        <Switch name={"hazardous"} text="HAZARDOUS WASTE" />
        <Switch name={"recyclable"} text="RECYCLABLE WASTE" />
        <Switch name={"liquid"} text="LIQUID OR SOLID HOUSEHOLD WASTE" />
        <Switch name={"green"} text="GREEN WASTE" />
      </ContentSwitcher>
    </div>
  );
}

let switchType = (e, setSelected, selected, props) => {
  console.log("[e]", e);
  setSelected(e.name);
  // props.callBackFromComponent(selected)
};
