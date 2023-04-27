"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[672],{38097:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return d},default:function(){return m}});var n,r=a(63366),i=(a(67294),a(64983)),o=a(56928),l=["components"],d={},s=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",e)}),p={_frontmatter:d},u=o.Z;function m(e){var t=e.components,a=(0,r.Z)(e,l);return(0,i.kt)(u,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(s,{kind:"warning",mdxType:"InlineNotification"},(0,i.kt)("p",null,"Please note that as of November 1st, 2022 IBM has discontinued support for the Video Streaming Broadcaster SDK. It will not receive updates or technical support and may not fully function. For SDKs you have already downloaded, please do not use them to build applications to access the broadcasting functionality, and delete them from your archives. You may find information on alternative methods to broadcast live video to your channel on our ",(0,i.kt)("a",{parentName:"p",href:"https://support.video.ibm.com/hc/en-us/categories/200545448-Broadcasting-on-IBM-Watson-Media"},"Support Center"),".")),(0,i.kt)("p",null,"Certain SDK versions differ in significant ways, this section aims to help you with the migration between these versions."),(0,i.kt)("h2",null,"Migrating from 0.7.0 to 1.0.0"),(0,i.kt)("p",null,"The 1.0.0 version of the Broadcaster SDK for Android contains many elements that have changed on the user facing API.\nThere were renames, moves, removals and additions of new API elements."),(0,i.kt)("h3",null,"Importing the SDK"),(0,i.kt)("p",null,"Both the Maven group and Maven artifact names have changed for the SDK.\nThe previous ",(0,i.kt)("inlineCode",{parentName:"p"},"com.ibm.cloudvideo.android.broadcaster")," group is now ",(0,i.kt)("inlineCode",{parentName:"p"},"com.ibm.video.android.broadcaster")," for the Broadcaster SDK.\nThe libraries providing auxiliary (Authorization/Authentication, REST API) functionalities have also been renamed."),(0,i.kt)("p",null,"Thus the following changes need to be applied in your ",(0,i.kt)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Component \\ Version"),(0,i.kt)("th",{parentName:"tr",align:null},"0.7.0"),(0,i.kt)("th",{parentName:"tr",align:null},"1.0.0"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Broadcaster SDK"),(0,i.kt)("td",{parentName:"tr",align:null},"com.ibm.cloudvideo.android.broadcaster:sdk:0.7.+"),(0,i.kt)("td",{parentName:"tr",align:null},"com.ibm.video.android.broadcaster:sdk:1.0.+")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Rest API Client"),(0,i.kt)("td",{parentName:"tr",align:null},"com.ibm.cloudvideo.android.restapi:client-retrofit:0.2.1"),(0,i.kt)("td",{parentName:"tr",align:null},"com.ibm.video.android.restapi:client-retrofit:0.3.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Rest API Data"),(0,i.kt)("td",{parentName:"tr",align:null},"com.ibm.cloudvideo.android.restapi:data-structures:0.2.1"),(0,i.kt)("td",{parentName:"tr",align:null},"com.ibm.video.android.restapi:data-structures:0.3.0")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Authorizer Lib"),(0,i.kt)("td",{parentName:"tr",align:null},"com.ibm.cloudvideo.android.authorizer:lib:0.3.3"),(0,i.kt)("td",{parentName:"tr",align:null},"REPLACED with an open-source implementation: openid/AppAuth-Android")))),(0,i.kt)("h3",null,"Dealing with package moves/renames"),(0,i.kt)("p",null,"Quite literally all of the SDK classes have been moved to new packages in order to streamline them. This can be intimidating at first, as all of your SDK class imports are now broken.\nBut bear with us, this is easier to solve than it looks. After you’ve set up you new dependencies inside your ",(0,i.kt)("inlineCode",{parentName:"p"},"build.gradle")," file then follow these simple steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Sync the changes using Gradle"),(0,i.kt)("li",{parentName:"ol"},"Go to the source files in which you use the IBM Broadcaster SDK"),(0,i.kt)("li",{parentName:"ol"},"Delete the now unknown, old, “red” imports of SDK classes"),(0,i.kt)("li",{parentName:"ol"},"Then you can just auto-import the files again with the help of your IDE"),(0,i.kt)("li",{parentName:"ol"},"When all seems good try and build your project"),(0,i.kt)("li",{parentName:"ol"},"If it fails it will tell you exactly where the problem is. Go back to step 2. Repeat until it compiles")),(0,i.kt)("p",null,"To give you some deeper insight into the changes, in general only the top-level packages have changed. Meaning that ",(0,i.kt)("inlineCode",{parentName:"p"},"com.ibm.cloudvideo.*")," (or ",(0,i.kt)("inlineCode",{parentName:"p"},"tv.ustream.*")," in case of REST API components) have changed to ",(0,i.kt)("inlineCode",{parentName:"p"},"com.ibm.video.android.*"),".\nThe inner structure stayed the same as it was, however there were some API changes in the SDK and some class renames and API changes in the additional libraries providing the auxiliary functionalities."),(0,i.kt)("h3",null,"API changes & class renames"),(0,i.kt)("p",null,"Some API classes had to be renamed in the SDK’s auxiliary libraries and some functionality had to be refactored slightly for flexibility.\nUnfortunately the IDE can not automatically resolve this, but you can use the handy table below as a guide."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Component \\ Version"),(0,i.kt)("th",{parentName:"tr",align:null},"0.7.0"),(0,i.kt)("th",{parentName:"tr",align:null},"1.0.0"),(0,i.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Broadcaster"),(0,i.kt)("td",{parentName:"tr",align:null},"AndroidBroadcaster"),(0,i.kt)("td",{parentName:"tr",align:null},"AndroidBroadcaster"),(0,i.kt)("td",{parentName:"tr",align:null},"Class requires a new mandatory parameter when constructing: ",(0,i.kt)("inlineCode",{parentName:"td"},"regionalCluster"),". This is to add support for Regional Clusters. See the sample for examples.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"REST API library"),(0,i.kt)("td",{parentName:"tr",align:null},"UstreamApiClient"),(0,i.kt)("td",{parentName:"tr",align:null},"UstreamApiClient"),(0,i.kt)("td",{parentName:"tr",align:null},"Class requires a new mandatory parameter when constructing: ",(0,i.kt)("inlineCode",{parentName:"td"},"serviceUrl"),". OAuth capabilities had been removed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Authorizer library"),(0,i.kt)("td",{parentName:"tr",align:null},"OAuthAuthenticator"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Library has been removed and replaced with an open-source alternative.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Authorizer library"),(0,i.kt)("td",{parentName:"tr",align:null},"OAuthAuthenticatorState"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Library has been removed and replaced with an open-source alternative.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Authorizer library"),(0,i.kt)("td",{parentName:"tr",align:null},"ClientConfiguration"),(0,i.kt)("td",{parentName:"tr",align:null},"-"),(0,i.kt)("td",{parentName:"tr",align:null},"Library has been removed and replaced with an open-source alternative.")))),(0,i.kt)("p",null,"As you can see the biggest change comes from the sunset of the previous IBM WM maintained (and sadly sparsely documented) OpenID library.\nThe “Authorizer” library was responsible for Authentication and Authorization of your users into the IBM WM platform.\nThis component was aimed to make it easier for our partners to deal with the complexity of authenticating users to the platform.\nHowever due to the inflexible API (some IBM WM specifics were hardcoded) and the lack of a well detailed documentation, we concluded that it has not achieved its intended goals.\nTherefore we decided to replace the “Authorizer” component with an official, open-source, well documented & maintained OpenID implementation.\nOur selection in case of Android came down to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/openid/AppAuth-Android"},"AppAuth-Android")," library maintained by the ",(0,i.kt)("a",{parentName:"p",href:"https://openid.net/"},"OpenID Foundation"),"."),(0,i.kt)("p",null,"We’re confident that this change will make it easier to get familiar with the SDK and get to know which parts are IBM WM Broadcaster specific\nand which ones are open standards that need to be used (such as the Authentication). Beyond this, if you’re more deeply interested in\nhow your users will be authenticated to the platform, you’ve got much better resources and documentation available with the new component."),(0,i.kt)("p",null,"You can find a detailed example code in the provided sample project."),(0,i.kt)("p",null,"Of course if you wish, you can use your favourite OpenID & OAuth2.0 capable library.\nWe’d argue that this is even more straightforward to do so since this transition."),(0,i.kt)("p",null,"Further reading on authenticating to IBM Video Streaming can be found ",(0,i.kt)("a",{parentName:"p",href:"https://developers.video.ibm.com/api-basics-overview"},"here"),"."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-broadcaster-sdk-android-migration-guide-mdx-f175fd71f64efcde3e9a.js.map