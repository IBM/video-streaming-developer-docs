"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[9850],{6852:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return u}});var n,r=a(63366),l=(a(67294),a(64983)),o=a(56928),i=["components"],s={},p=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)}),d={_frontmatter:s},m=o.Z;function u(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)(m,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(p,{kind:"warning",mdxType:"InlineNotification"},(0,l.kt)("p",null,"Please note that as of November 1st, 2022 IBM has discontinued support for the Video Streaming Player SDK. It will not receive updates or technical support and may not fully function. For SDKs you have already downloaded, please do not use them to build applications and delete them from your archives. You may find information for alternative methods to create customized viewer experiences with our APIs on our ",(0,l.kt)("a",{parentName:"p",href:"https://developers.video.ibm.com/player-api-examples/custom-ui"},"Developer Tools pages"),". Users may also continue to access Video Streaming through the web, both at ",(0,l.kt)("a",{parentName:"p",href:"https://video.ibm.com/"},"video.ibm.com")," and through Embedded modules.")),(0,l.kt)("p",null,"Certain SDK versions differ in significant ways, this section aims to help you with the migration between these versions."),(0,l.kt)("h2",null,"Migrating from 1.5.0 to 2.0.0"),(0,l.kt)("p",null,"The 2.0.0 version of the Player SDK contains many elements that have changed on the user facing API.\nThere were renames, moves, removals and additions of new API elements."),(0,l.kt)("h3",null,"Importing the SDK"),(0,l.kt)("p",null,"Both the Maven group and Maven artifact names have changed for the SDK.\nThe previous ",(0,l.kt)("inlineCode",{parentName:"p"},"tv.ustream.player")," group is now ",(0,l.kt)("inlineCode",{parentName:"p"},"com.ibm.video.android.player")," for every Player SDK library.\nThe artifact names have also been streamlined."),(0,l.kt)("p",null,"Thus the following changes need to be applied in your ",(0,l.kt)("inlineCode",{parentName:"p"},"build.gradle")," file:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Component \\ Version"),(0,l.kt)("th",{parentName:"tr",align:null},"1.5.0"),(0,l.kt)("th",{parentName:"tr",align:null},"2.0.0"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core Android player"),(0,l.kt)("td",{parentName:"tr",align:null},"tv.ustream.player:ibm-player-sdk-android-external:1.5.+"),(0,l.kt)("td",{parentName:"tr",align:null},"com.ibm.video.android.player:player-android-external:2.0.+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Ads Plugin"),(0,l.kt)("td",{parentName:"tr",align:null},"tv.ustream.player:ibm-player-sdk-android-plugin-ads-external:1.5.+"),(0,l.kt)("td",{parentName:"tr",align:null},"No longer supported, library removed, please remove from dependencies")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Google Cast Player"),(0,l.kt)("td",{parentName:"tr",align:null},"Not Available"),(0,l.kt)("td",{parentName:"tr",align:null},"com.ibm.video.android.player:player-android-plugin-cast-external:2.0.+")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Player UI"),(0,l.kt)("td",{parentName:"tr",align:null},"tv.ustream.player:ibm-player-sdk-android-ui:0.3.0"),(0,l.kt)("td",{parentName:"tr",align:null},"com.ibm.video.android.player:player-ui:0.3.0")))),(0,l.kt)("p",null,"Please note that the Ads plugin is no longer supported and we have removed it from version 2.0.0 of the SDK.\nAlso note that the new SDK version brings Google Cast support as a separate optional component for you to use."),(0,l.kt)("h3",null,"Dealing with package moves/renames"),(0,l.kt)("p",null,"Quite literally all of the SDK classes have been moved to new packages in order to streamline them.\nThis can be intimidating at first, as all of you SDK class imports are now broken.\nBut bear with us, this is easier to solve than it looks. After you’ve set up you new dependencies inside\nyour ",(0,l.kt)("inlineCode",{parentName:"p"},"build.gradle")," file then follow these simple steps:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Sync the changes using Gradle"),(0,l.kt)("li",{parentName:"ol"},"Go to the source files in which you use the IBM Player SDK"),(0,l.kt)("li",{parentName:"ol"},"Delete the now unknown, old, “red” imports of SDK classes"),(0,l.kt)("li",{parentName:"ol"},"Then you can just auto-import the files again with the help of your IDE."),(0,l.kt)("li",{parentName:"ol"},"When all seems good try and build your project"),(0,l.kt)("li",{parentName:"ol"},"If it fails it will tell you exactly where the problem is. Go back to step 2. Repeat until it compiles.")),(0,l.kt)("p",null,"To give you some deeper insight into the changes, in general only the top-level packages have changed.\nMeaning that ",(0,l.kt)("inlineCode",{parentName:"p"},"tv.ustream.*")," (or ",(0,l.kt)("inlineCode",{parentName:"p"},"ibm.playersdk.ui.*")," in case of UI components) have changed to ",(0,l.kt)("inlineCode",{parentName:"p"},"com.ibm.video.android.*"),".\nThe inner structure stayed the same as it was in case of the core components, however there were\nrestructures & simplifications in case of the UI components library."),(0,l.kt)("h3",null,"API class renames"),(0,l.kt)("p",null,"Some API classes had to be renamed in the SDK and some functionality had to be refactored slightly for flexibility.\nUnfortunately the IDE can not automatically resolve this, but you can use the handy table below as a guide."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Component \\ Version"),(0,l.kt)("th",{parentName:"tr",align:null},"1.5.0"),(0,l.kt)("th",{parentName:"tr",align:null},"2.0.0"),(0,l.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core Android player"),(0,l.kt)("td",{parentName:"tr",align:null},"UstreamPlayerFactory"),(0,l.kt)("td",{parentName:"tr",align:null},"PlayerFactory"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core Android player"),(0,l.kt)("td",{parentName:"tr",align:null},"UstreamPlayer"),(0,l.kt)("td",{parentName:"tr",align:null},"Player"),(0,l.kt)("td",{parentName:"tr",align:null},"Managing the MediaPlayerModule is removed from the interface’s responsibility.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Core Android player"),(0,l.kt)("td",{parentName:"tr",align:null},"UstreamPlayer"),(0,l.kt)("td",{parentName:"tr",align:null},"ModuleAwarePlayer"),(0,l.kt)("td",{parentName:"tr",align:null},"Managing the MediaPlayerModule is moved here.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"UI Components"),(0,l.kt)("td",{parentName:"tr",align:null},"SimpleErrorListener"),(0,l.kt)("td",{parentName:"tr",align:null},"NoOpErrorListener"),(0,l.kt)("td",{parentName:"tr",align:null},"To better reflect what it does.")))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-player-sdk-android-migration-guide-mdx-cd12b03ba449878d5577.js.map