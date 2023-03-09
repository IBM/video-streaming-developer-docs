"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[9414],{58196:function(e,t,o){o.r(t),o.d(t,{_frontmatter:function(){return l},default:function(){return d}});var a,n=o(63366),i=(o(67294),o(64983)),s=o(56928),r=["components"],l={},c=(a="InlineNotification",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),u={_frontmatter:l},p=s.Z;function d(e){var t=e.components,o=(0,n.Z)(e,r);return(0,i.kt)(p,Object.assign({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c,{kind:"warning",mdxType:"InlineNotification"},(0,i.kt)("p",null,"Please note that as of November 1st, 2022 IBM has discontinued support for the Watson Media Player SDK. It will not receive updates or technical support and may not fully function. For SDKs you have already downloaded, please do not use them to build applications and delete them from your archives. You may find information for alternative methods to create customized viewer experiences with our APIs on our ",(0,i.kt)("a",{parentName:"p",href:"https://developers.video.ibm.com/player-api-examples/custom-ui"},"Developer Tools pages"),". Users may also continue to access Watson Media through the web, both at ",(0,i.kt)("a",{parentName:"p",href:"https://video.ibm.com/"},"video.ibm.com")," and through Embedded modules.")),(0,i.kt)("h2",null,"Introduction"),(0,i.kt)("p",null,"The IBM Video Streaming Player SDK lets you play IBM Video Streaming live and recorded videos in your native applications. Using the native SDK gives you full control over the player, including a customizable native user interface, callbacks on status changes, and many more."),(0,i.kt)("p",null,"This document describes the basic steps to make a mobile app using the Player SDK for iOS."),(0,i.kt)("h2",null,"Before you begin"),(0,i.kt)("h3",null,"Account prerequisites"),(0,i.kt)("p",null,"Please note that document assumes the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You have a registered user at ",(0,i.kt)("a",{parentName:"li",href:"http://video.ibm.com/"},"IBM Watson Media")," (or at ",(0,i.kt)("a",{parentName:"li",href:"http://eu.video.ibm.com/"},"IBM WM EU Cluster"),")."),(0,i.kt)("li",{parentName:"ul"},"Your IBM Video Streaming user is entitled to use the IBM Video Streaming Player SDK specifically. Log-in to ","[Dashboard]",",\nand check ","[“API/SDK access”]"," under the “Integrations & Apps” section.")),(0,i.kt)("p",null,"If you have any questions, please ",(0,i.kt)("a",{parentName:"p",href:"https://video.ibm.com/enterprise-video/contact"},"contact us"),"."),(0,i.kt)("h3",null,"Development prerequisites"),(0,i.kt)("h4",null,"IDE"),(0,i.kt)("p",null,"We recommend using the most recent version of Xcode."),(0,i.kt)("h4",null,"Minimum OS version"),(0,i.kt)("p",null,"The Player SDK requires iOS 11.0 or above."),(0,i.kt)("h3",null,"Using Regional Clusters"),(0,i.kt)("p",null,"IBM Watson Media hosts an additional Server Cluster in the EU, besides the original world-wide one.\nThese so called regional clusters are completely distinct entities, there’s no data transfer among them. A customer account can only reside in one of them.\nYou can read more about the topic in ",(0,i.kt)("a",{parentName:"p",href:"https://blog.video.ibm.com/streaming-product-updates/server-cluster-in-europe-for-streaming-video/"},"this article"),"."),(0,i.kt)("p",null,"Because of the complete separation of data summarized above, the updated Player SDK will need to be explicitly supplied with a “regional cluster” parameter.\nGiven this parameter the SDK will know which servers it can access to reach the resources that belong to the desired customer account."),(0,i.kt)("p",null,"Please also note that an SDK access always belongs to a specific ",(0,i.kt)("em",{parentName:"p"},"IBM WM Account")," on a specific IBM WM cluster. If you’d like to access different accounts,\nyou will need to setup multiple SDK accesses, more specifically “Mobile Player SDK Accesses” in case of the Player SDK for each regional cluster.\nThen you can use these accesses in your application, you can find an example in the supplied sample project."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-player-sdk-ios-getting-started-mdx-7901a139d796f03d35c1.js.map