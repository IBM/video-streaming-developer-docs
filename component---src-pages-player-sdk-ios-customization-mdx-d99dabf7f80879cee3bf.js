"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[1292],{32068:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return d},default:function(){return m}});var n,r=a(63366),l=(a(67294),a(64983)),o=a(56928),i=["components"],d={},p=(n="InlineNotification",function(t){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)}),u={_frontmatter:d},s=o.Z;function m(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)(s,Object.assign({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(p,{kind:"warning",mdxType:"InlineNotification"},(0,l.kt)("p",null,"Please note that as of November 1st, 2022 IBM has discontinued support for the Watson Media Player SDK. It will not receive updates or technical support and may not fully function. For SDKs you have already downloaded, please do not use them to build applications and delete them from your archives. You may find information for alternative methods to create customized viewer experiences with our APIs on our ",(0,l.kt)("a",{parentName:"p",href:"https://developers.video.ibm.com/player-api-examples/custom-ui"},"Developer Tools pages"),". Users may also continue to access Watson Media through the web, both at ",(0,l.kt)("a",{parentName:"p",href:"https://video.ibm.com/"},"video.ibm.com")," and through Embedded modules.")),(0,l.kt)("h2",null,"Player UI"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"USUstreamPlayer")," includes a full-featured user interface by default, including a control bar, loading and error views. You can change this behavior by setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"playerControlStyle")," property of the player. By setting it to ",(0,l.kt)("inlineCode",{parentName:"p"},"USPlayerControlStyleNone")," you can instruct the player to display media only, without any decoration views.\nIn case you don’t want to handle all the player states and error cases manually, you can also reconfigure the control bars by setting their content using the ",(0,l.kt)("inlineCode",{parentName:"p"},"USUstreamPlayer (USToolbar)")," category.\nYou can set any of the player toolbar’s contents using the ",(0,l.kt)("inlineCode",{parentName:"p"},"-[USToolbar setToolbarItems:animated:]")," API. The standard toolbar items are accessible in the ",(0,l.kt)("inlineCode",{parentName:"p"},"USUstreamPlayer (USToolbar)")," category Of course you can create your own items as well by subclassing ",(0,l.kt)("inlineCode",{parentName:"p"},"USToolbarItem"),"."),(0,l.kt)("h2",null,"Background audio"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"USUstreamPlayer")," can be configured for background playback, meaning that if the app goes to background the audio will continue to play.\nTo enable the feature: change your application’s “Background Mode” to ",(0,l.kt)("em",{parentName:"p"},"Audio, AirPlay, and Picture in Picture")," (select your project file, select “Capabilities” tab, open “Background Mode”, and select “Audio, AirPlay, and Picture in Picture”).\nPlease note that this feature needs to be enabled per ",(0,l.kt)("inlineCode",{parentName:"p"},"USUstreamPlayer")," instance, by setting the ",(0,l.kt)("inlineCode",{parentName:"p"},"continuePlaybackInBackground")," property to ",(0,l.kt)("inlineCode",{parentName:"p"},"YES"),". To configure the Control Center and Lock Screen audio control widget please refer to “Background Player” sample in our ",(0,l.kt)("em",{parentName:"p"},"Sample App"),"."),(0,l.kt)("h2",null,"Localization"),(0,l.kt)("p",null,"The SDK by default provides all texts in English only.\nIf you want to support other languages and/or redefine certain text, add the keys listed below into the localization files of your application. If you don’t redefine these keys, then the SDK will fall back to the localizations included in the resource bundle of the SDK."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Keys"),(0,l.kt)("th",{parentName:"tr",align:null},"English values"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.content.status.offline"),(0,l.kt)("td",{parentName:"tr",align:null},"This channel is off-air.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.content.status.realizing"),(0,l.kt)("td",{parentName:"tr",align:null},"Initializing…")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.content.status.unrealized"),(0,l.kt)("td",{parentName:"tr",align:null},"Loading failed, please try again.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.content.status.unrealized"),(0,l.kt)("td",{parentName:"tr",align:null},"Loading failed, please try again.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.content.lock.ageLock"),(0,l.kt)("td",{parentName:"tr",align:null},"This content is age restricted.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.content.lock.birthdateLock"),(0,l.kt)("td",{parentName:"tr",align:null},"This content is restricted. Please provide your birthdate.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.content.lock.geoLimitLock"),(0,l.kt)("td",{parentName:"tr",align:null},"Too many viewers in your area.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.content.lock.geoLock"),(0,l.kt)("td",{parentName:"tr",align:null},"This content is not available in your area.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.content.lock.hashLock"),(0,l.kt)("td",{parentName:"tr",align:null},"This content is not supported in the mobile apps. Please use a browser for watching.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.content.lock.IPLock"),(0,l.kt)("td",{parentName:"tr",align:null},"This content is not available in your network.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.content.lock.passwordLock"),(0,l.kt)("td",{parentName:"tr",align:null},"This content is password protected.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.content.lock.refererLock"),(0,l.kt)("td",{parentName:"tr",align:null},"Viewer limit exceeded.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.content.lock.unknownLock"),(0,l.kt)("td",{parentName:"tr",align:null},"This content is not supported.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.content.error.update"),(0,l.kt)("td",{parentName:"tr",align:null},"Sorry, something went wrong. Please try again.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.content.error.connect"),(0,l.kt)("td",{parentName:"tr",align:null},"Connection error. Please try again.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.content.error.unsuported"),(0,l.kt)("td",{parentName:"tr",align:null},"Unsupported content.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.content.error.deleted"),(0,l.kt)("td",{parentName:"tr",align:null},"This video has been removed by the owner.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.content.error.inexistent"),(0,l.kt)("td",{parentName:"tr",align:null},"This content is inaccessible. Try again later.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.content.error.unknown"),(0,l.kt)("td",{parentName:"tr",align:null},"Sorry, something went wrong. Please try again.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.content.error.authentication"),(0,l.kt)("td",{parentName:"tr",align:null},"Invalid password.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.content.error.timeout"),(0,l.kt)("td",{parentName:"tr",align:null},"Loading timeout, please try again.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.player.external.title"),(0,l.kt)("td",{parentName:"tr",align:null},"AirPlay")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.player.external.message"),(0,l.kt)("td",{parentName:"tr",align:null},"This video is playing on “Apple TV”.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.player.audioOnly"),(0,l.kt)("td",{parentName:"tr",align:null},"Playing audio only…")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.player.status.buffering"),(0,l.kt)("td",{parentName:"tr",align:null},"Buffering…")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.control.viewerCount"),(0,l.kt)("td",{parentName:"tr",align:null},"%d viewers")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.player.started.justNow"),(0,l.kt)("td",{parentName:"tr",align:null},"Started just now")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.player.started.years"),(0,l.kt)("td",{parentName:"tr",align:null},"Started years ago")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.player.started.months"),(0,l.kt)("td",{parentName:"tr",align:null},"Started months ago")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.player.started.weeks"),(0,l.kt)("td",{parentName:"tr",align:null},"Started weeks ago")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.player.started.days"),(0,l.kt)("td",{parentName:"tr",align:null},"Started days ago")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.player.started.hours"),(0,l.kt)("td",{parentName:"tr",align:null},"Started %dh %dm ago")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.player.started.minutes"),(0,l.kt)("td",{parentName:"tr",align:null},"Started %dm ago")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.player.status.finished"),(0,l.kt)("td",{parentName:"tr",align:null},"finished")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"USPlayer.content.error.age"),(0,l.kt)("td",{parentName:"tr",align:null},"Age unconfirmed or too young user")))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-player-sdk-ios-customization-mdx-d99dabf7f80879cee3bf.js.map