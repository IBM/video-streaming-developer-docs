"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[9667],{2463:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return l}});var o,n=a(63366),s=(a(67294),a(64983)),i=a(8152),r=["components"],d={},c=(o="InlineNotification",function(e){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)}),p={_frontmatter:d},u=i.Z;function l(e){var t=e.components,a=(0,n.Z)(e,r);return(0,s.kt)(u,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(c,{kind:"warning",mdxType:"InlineNotification"},(0,s.kt)("p",null,"Please note that as of November 1st, 2022 IBM has discontinued support for the Video Streaming Broadcaster SDK. It will not receive updates or technical support and may not fully function. For SDKs you have already downloaded, please do not use them to build applications to access the broadcasting functionality, and delete them from your archives. You may find information on alternative methods to broadcast live video to your channel on our ",(0,s.kt)("a",{parentName:"p",href:"https://support.video.ibm.com/hc/en-us/categories/200545448-Broadcasting-on-IBM-Watson-Media"},"Support Center"),".")),(0,s.kt)("h2",null,"Session log"),(0,s.kt)("p",null,"After a finished broadcast session, you can access the diagnostic data using the ",(0,s.kt)("inlineCode",{parentName:"p"},"sessionLog")," method of ",(0,s.kt)("inlineCode",{parentName:"p"},"IBMWatsonMediaBroadcaster"),". The log contains the transmit stats of the last 2000 seconds of the broadcast session, and all the broadcaster and capture events. These data are the same that ",(0,s.kt)("inlineCode",{parentName:"p"},"IBMWatsonMediaBroadcaster"),"s ",(0,s.kt)("inlineCode",{parentName:"p"},"debugView")," shows."),(0,s.kt)("h2",null,"Diagnostic ID"),(0,s.kt)("p",null,"IBM Video Streaming SDK sends diagnostic data along with the video stream to IBM servers. Diagnostic data is similar to session log: contains only transmit stats, capture events, it does not contain any personal information."),(0,s.kt)("p",null,"Session diagnostic ID is an autogenerated unique identifier that helps IBM identify diagnostic data — that were produced during the current broadcast session — across IBM systems. SDK users can’t access the diagnostic data using the diagnostic ID, rather SDK users should use this ID to report a possible problem during a broadcast session. The accompanying diagnostic data will be used by IBM internally to debug your specific issue. If you want to access the current session logs use ",(0,s.kt)("inlineCode",{parentName:"p"},"IBMWatsonMediaBroadcaster"),"’s ",(0,s.kt)("inlineCode",{parentName:"p"},"sessionLog")," method. Please note that the diagnostic ID may change over time, therefore it is best to not cache or store this value. You can always access the current ID via ",(0,s.kt)("inlineCode",{parentName:"p"},"diagnosticID")," property in ",(0,s.kt)("inlineCode",{parentName:"p"},"IBMWatsonMediaBroadcaster"),". If you want to store a diagnostic ID for a later bug report, we recommend to save it when the SDK reports that the broadcast has stopped or if your app has its own diagnostics reporting you can send the diagnostic ID to your own records."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-broadcaster-sdk-ios-diagnosing-a-problem-mdx-a3933524a36771204d2a.js.map