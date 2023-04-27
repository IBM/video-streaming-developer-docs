"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[4305],{8684:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return m}});var a,i=n(63366),l=(n(67294),n(64983)),r=n(56928),o=["components"],s={},u=(a="InlineNotification",function(e){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),d={_frontmatter:s},p=r.Z;function m(e){var t=e.components,n=(0,i.Z)(e,o);return(0,l.kt)(p,Object.assign({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(u,{kind:"warning",mdxType:"InlineNotification"},(0,l.kt)("p",null,"Please note that as of November 1st, 2022 IBM has discontinued support for the Video Streaming Broadcaster SDK. It will not receive updates or technical support and may not fully function. For SDKs you have already downloaded, please do not use them to build applications to access the broadcasting functionality, and delete them from your archives. You may find information on alternative methods to broadcast live video to your channel on our ",(0,l.kt)("a",{parentName:"p",href:"https://support.video.ibm.com/hc/en-us/categories/200545448-Broadcasting-on-IBM-Watson-Media"},"Support Center"),".")),(0,l.kt)("h2",null,"1.0.0 - 2022-06-10"),(0,l.kt)("h3",null,"Added"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"RegionalCluster support; enables the possibility to connect to the IBM WM instance running in EU too. See details in ",(0,l.kt)("a",{parentName:"li",href:"./getting-started#using-regions-clusters"},"getting started"))),(0,l.kt)("h3",null,"Changed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"A long due overhaul of namings and packages throughout the SDK"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"AndroidBroadcaster")," constructor requires ",(0,l.kt)("inlineCode",{parentName:"li"},"regionalCluster")," parameter explicitly specified"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"UstreamApiClient")," requires ",(0,l.kt)("inlineCode",{parentName:"li"},"serviceUrl")," parameter explicitly specified"),(0,l.kt)("li",{parentName:"ul"},"See the ",(0,l.kt)("a",{parentName:"li",href:"./migration-guide"},"migration guide")," and the sample project for details")),(0,l.kt)("h3",null,"Removed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"OAuth capabilities removed from ",(0,l.kt)("inlineCode",{parentName:"li"},"UstreamApiClient"),", it was limited anyway"),(0,l.kt)("li",{parentName:"ul"},"The “Authorizer” auxiliary library has been replaced with OpenID AppAuth-Android library."),(0,l.kt)("li",{parentName:"ul"},"See the ",(0,l.kt)("a",{parentName:"li",href:"./migration-guide"},"migration guide")," and the sample project for details")),(0,l.kt)("h2",null,"0.7.0 - 2020-07-21"),(0,l.kt)("h3",null,"Changed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Migrated from old Compat Lib to AndroidX"),(0,l.kt)("li",{parentName:"ul"},"Migrated to new restapi module (com.ibm.cloudvideo.android.restapi v0.2.3)"),(0,l.kt)("li",{parentName:"ul"},"Fixed connection issues on older Android versions")),(0,l.kt)("h2",null,"0.6.2 - 2020-05-08"),(0,l.kt)("h3",null,"Changed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fixed an issue where starting another broadcast quickly right after the first one is finished could in some cases cause the seconds to stall at starting state.")),(0,l.kt)("h2",null,"0.6.1 - 2020-03-24"),(0,l.kt)("h3",null,"Changed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Minor improvements and bug fixes around diagnostics to help us better trace potential issues.")),(0,l.kt)("h3",null,"Added"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"RTMPS support. The SDK automatically uses TLS secured RTMP connections by default from now on.")),(0,l.kt)("h3",null,"Known Issues"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The SDK on devices running Android 6.0 or earlier might crash when the internet connection goes down during a broadcast.")),(0,l.kt)("h2",null,"0.6.0 - 2019-11-25"),(0,l.kt)("h3",null,"Changed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Lifecycle of DiagnosticID. The implicit 30 minutes timeout of DiagnosticID has been removed, now it always resets after the end of a broadcast.\nThis way every broadcast session has its own diagnosticID. As a best practice we recommend using the ",(0,l.kt)("inlineCode",{parentName:"li"},"getDiagnosticId()")," function in ",(0,l.kt)("inlineCode",{parentName:"li"},"AndroidBroadcaster"),"\nwhen the preview is started (happens in the ",(0,l.kt)("inlineCode",{parentName:"li"},"onReady()")," state callback).\nConsult the documentation (README.md) section “Diagnosing a problem” for more information.")),(0,l.kt)("h3",null,"Added"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"5 seconds delay before the RTMP tunnel is closed to try to mitigate stream end cut-off. (Includes new ",(0,l.kt)("inlineCode",{parentName:"li"},"rtmpc-android")," 0.3.0 dependency)")),(0,l.kt)("h2",null,"0.5.0 - 2019-10-29"),(0,l.kt)("h3",null,"Changed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Use ",(0,l.kt)("inlineCode",{parentName:"li"},"rest-api-java")," ",(0,l.kt)("inlineCode",{parentName:"li"},"v0.0.43")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BroadcastSettings")," renamed to ",(0,l.kt)("inlineCode",{parentName:"li"},"IngestSettings")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"BroadcastSettingsLoaderError")," renamed to ",(0,l.kt)("inlineCode",{parentName:"li"},"IngestSettingsLoaderError"))),(0,l.kt)("h3",null,"Added"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"New HTTP error code parameter in ",(0,l.kt)("inlineCode",{parentName:"li"},"IngestSettingsLoaderError"))),(0,l.kt)("h2",null,"0.4.1 - 2019-10-16"),(0,l.kt)("h3",null,"Fixed"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"possible AAC issues")),(0,l.kt)("h2",null,"0.4.0 - 2019-09-23"),(0,l.kt)("p",null,"Initial release"),(0,l.kt)("h3",null,"Added"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Ability to broadcast"),(0,l.kt)("li",{parentName:"ul"},"Change camera between broadcasts"),(0,l.kt)("li",{parentName:"ul"},"Authenticator to help with IBM auth flow")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-broadcaster-sdk-android-changelog-mdx-4deda3a4bede674f9878.js.map