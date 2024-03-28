"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[9133],{12585:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return u}});var i,a=n(63366),o=(n(67294),n(64983)),r=n(8152),l=["components"],s={},p=(i="InlineNotification",function(e){return console.warn("Component "+i+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),d={_frontmatter:s},c=r.Z;function u(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)(c,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(p,{kind:"warning",mdxType:"InlineNotification"},(0,o.kt)("p",null,"Please note that as of November 1st, 2022 IBM has discontinued support for the Video Streaming Broadcaster SDK. It will not receive updates or technical support and may not fully function. For SDKs you have already downloaded, please do not use them to build applications to access the broadcasting functionality, and delete them from your archives. You may find information on alternative methods to broadcast live video to your channel on our ",(0,o.kt)("a",{parentName:"p",href:"https://support.video.ibm.com/hc/en-us/categories/200545448-Broadcasting-on-IBM-Watson-Media"},"Support Center"),".")),(0,o.kt)("p",null,"IBM Video Streaming SDK provides a secure way to authenticate users with IBM ID or legacy Ustream account and getting access for IBM Channel API features for example listing or broadcasting. ",(0,o.kt)("inlineCode",{parentName:"p"},"IBMWatsonMediaAuthClient")," wraps up ",(0,o.kt)("a",{parentName:"p",href:"https://developers.video.ibm.com/channel-api/getting-started.html#authorization-flows_2"},"IBM Video Streaming Channel APIs Authentication flow")," and implements a basic authentication service that present the IBM Video Streaming authentication site in an embedded ",(0,o.kt)("inlineCode",{parentName:"p"},"SFSafariViewController")," on iOS or in default browser on macOS."),(0,o.kt)("p",null,"Current authentication flow:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Set up the authentication client with ",(0,o.kt)("inlineCode",{parentName:"li"},"configureClientWithClientID:redirectURI:completion:")," must be called prior to any other requests."),(0,o.kt)("li",{parentName:"ul"},"Open login site with ",(0,o.kt)("inlineCode",{parentName:"li"},"requestLoginWithPresenter:completion:")," on iOS or ",(0,o.kt)("inlineCode",{parentName:"li"},"requestLoginWithCompletion:")," on macOS."),(0,o.kt)("li",{parentName:"ul"},"Place ",(0,o.kt)("inlineCode",{parentName:"li"},"handleRedirectURL:")," into AppDelegates ",(0,o.kt)("inlineCode",{parentName:"li"},"openURL")," callback for handling redirection."),(0,o.kt)("li",{parentName:"ul"},"If user successfully logged in credentials (access token, refresh token, id token payload) will be accessible via ",(0,o.kt)("inlineCode",{parentName:"li"},"IBMWatsonMediaAuthClient")," properties. See ",(0,o.kt)("inlineCode",{parentName:"li"},"IBMWatsonMediaAuthClient.h")," for more details."),(0,o.kt)("li",{parentName:"ul"},"If access token expires a new one can be requested with ",(0,o.kt)("inlineCode",{parentName:"li"},"requestFreshTokensWithCompletion:")," it gets a new access token with ",(0,o.kt)("inlineCode",{parentName:"li"},"IBMWatsonMediaAuthClient"),"s ",(0,o.kt)("inlineCode",{parentName:"li"},"refreshToken"),"."),(0,o.kt)("li",{parentName:"ul"},"For log out host app should call ",(0,o.kt)("inlineCode",{parentName:"li"},"requestLogoutWithPresenter:completion:")," on iOS or ",(0,o.kt)("inlineCode",{parentName:"li"},"requestLoginWithCompletion:")," on macOS. These methods opens authentication site for invalidate tokens and other credentials.")),(0,o.kt)("p",null,"For more details see sample apps or visit ",(0,o.kt)("a",{parentName:"p",href:"https://developers.video.ibm.com/channel-api/getting-started.html"},"IBM Video Streaming Channel API")," page for more information about Channel API usage."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-broadcaster-sdk-ios-authentication-mdx-69a4df801ce24e90d957.js.map