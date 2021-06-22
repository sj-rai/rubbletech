import React from "react";
import {
  Header,
  HeaderMenuItem,
  HeaderName,
  HeaderNavigation,
  // HeaderNavigation
} from "carbon-components-react";

export default function Nav() {
  return (
    <div>
      <Header aria-label="IBM Platform Name">
        <HeaderName href="/" prefix="">
          [RUBBLETECH]
        </HeaderName>
        {/*<HeaderMenuItem href="#">*/}
        {/*    Share Food Items/leftovers*/}
        {/*</HeaderMenuItem>*/}
        {/*<HeaderMenuItem href="map">*/}
        {/*    Excess Food Map*/}
        {/*</HeaderMenuItem>*/}
        <HeaderNavigation>
          <HeaderMenuItem href="/cost-calculator">
            Waste Cost Calculator
          </HeaderMenuItem>
          <HeaderMenuItem href="/subscribe">
            Subscribe
          </HeaderMenuItem>
        </HeaderNavigation>

        {/*    <HeaderMenuItem href="#">Link 3</HeaderMenuItem>*/}
        {/* /*    <HeaderMenuItem href="#">Info</HeaderMenuItem> */}
      </Header>
    </div>
  );
}
