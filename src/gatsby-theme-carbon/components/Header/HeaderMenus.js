import React from 'react';

import HeaderMenu from "carbon-components-react/lib/components/UIShell/HeaderMenu";
import HeaderMenuItem from "carbon-components-react/lib/components/UIShell/HeaderMenuItem";
import {withPrefix} from "gatsby-link";

const HeaderMenus = () => {
    return (
        <>
            <HeaderMenu aria-label="APIs" menuLinkName="APIs">
                <HeaderMenuItem href={withPrefix('/api-basics-overview')}>
                    API basics
                </HeaderMenuItem>
                <HeaderMenuItem href={withPrefix('/channel-api-topic')}>
                    Channel API
                </HeaderMenuItem>
                <HeaderMenuItem href={withPrefix('/viewer-authentication-api-getting-started')}>
                    Viewer Authentication API
                </HeaderMenuItem>
                <HeaderMenuItem href={withPrefix('/player-api-getting-started')}>
                    Player API
                </HeaderMenuItem>
                <HeaderMenuItem href={withPrefix('/analytics-api-getting-started')}>
                    Analytics API
                </HeaderMenuItem>
            </HeaderMenu>
            <HeaderMenu aria-label="SDKs" menuLinkName="SDKs">
                <HeaderMenuItem href={withPrefix('/broadcaster-sdk')}>
                    Broadcaster SDK
                </HeaderMenuItem>
                <HeaderMenuItem href={withPrefix('/player-sdk')}>
                    Player SDK
                </HeaderMenuItem>
            </HeaderMenu>
        </>
    );
};

export default HeaderMenus;
