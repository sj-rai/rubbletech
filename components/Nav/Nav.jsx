import React from 'react'
import {
    Header,
    // HeaderMenuItem,
    HeaderName,
    // HeaderNavigation
} from 'carbon-components-react'

export default function Nav() {
    return (
        <div>
            <Header aria-label="IBM Platform Name">
                <HeaderName href="/" prefix="IBM">
                    [WM-APP]
                </HeaderName>
                {/*<HeaderNavigation aria-label="IBM [X]">*/}
                {/*    <HeaderMenuItem href="#">*/}
                {/*        Share Food Items/leftovers*/}
                {/*    </HeaderMenuItem>*/}
                {/*    <HeaderMenuItem href="map">*/}
                {/*        Excess Food Map*/}
                {/*    </HeaderMenuItem>*/}
                {/*    <HeaderMenuItem href="#">Link 3</HeaderMenuItem>*/}
                {/*    <HeaderMenuItem href="#">Info</HeaderMenuItem>*/}
                {/*</HeaderNavigation>*/}
            </Header>
        </div>
    )
}