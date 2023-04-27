"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[5058],{10976:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return u}});var n,i=a(63366),r=(a(67294),a(64983)),l=a(56928),o=["components"],s={},p=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",e)}),c={_frontmatter:s},d=l.Z;function u(e){var t=e.components,a=(0,i.Z)(e,o);return(0,r.kt)(d,Object.assign({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(p,{kind:"warning",mdxType:"InlineNotification"},(0,r.kt)("p",null,"Please note that as of November 1st, 2022 IBM has discontinued support for the Video Streaming Player SDK. It will not receive updates or technical support and may not fully function. For SDKs you have already downloaded, please do not use them to build applications and delete them from your archives. You may find information for alternative methods to create customized viewer experiences with our APIs on our ",(0,r.kt)("a",{parentName:"p",href:"https://developers.video.ibm.com/player-api-examples/custom-ui"},"Developer Tools pages"),". Users may also continue to access Video Streaming through the web, both at ",(0,r.kt)("a",{parentName:"p",href:"https://video.ibm.com/"},"video.ibm.com")," and through Embedded modules.")),(0,r.kt)("p",null,"Players initialized with ",(0,r.kt)("inlineCode",{parentName:"p"},"RECORDED")," content can be buffered ahead of time.\nThis way an illusion of instantly starting videos can be achieved.\nBy the time a player is needed (",(0,r.kt)("inlineCode",{parentName:"p"},"PlayerView")," is set and ",(0,r.kt)("inlineCode",{parentName:"p"},"play()")," is called) it is likely already in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Paused")," state, and playback can start immediately.\nThis feature’s most obvious use-case is a newsfeed like playback experience,\nwhen video contents are scrolling into the view and need to be started as soon as possible."),(0,r.kt)("h2",null,"Usage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create a ",(0,r.kt)("inlineCode",{parentName:"li"},"Player")," instance with an ID. (The ID can be the ",(0,r.kt)("inlineCode",{parentName:"li"},"contentDescriptors.toString()")," value for simplicity, if duplicate contents are not required.)"),(0,r.kt)("li",{parentName:"ul"},"Initialize the created player with a ",(0,r.kt)("strong",{parentName:"li"},"RECORDED")," content."),(0,r.kt)("li",{parentName:"ul"},"Call ",(0,r.kt)("inlineCode",{parentName:"li"},"pause()")," on the player. The Player will buffer the content then it will wait.\nAt this stage it is not required to call ",(0,r.kt)("inlineCode",{parentName:"li"},"setPlayerListener()"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"setErrorListener()")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"attach()")," if the callbacks are not relevant for you.\nBut you are free to do so if you are interested in the callbacks, but make sure you call ",(0,r.kt)("inlineCode",{parentName:"li"},"detach()")," before changing listeners or playerView on the player,\nand call ",(0,r.kt)("inlineCode",{parentName:"li"},"attach()")," again so these changes can take effect."),(0,r.kt)("li",{parentName:"ul"},"Later when the player is needed set your listeners and the ",(0,r.kt)("inlineCode",{parentName:"li"},"playerView"),", call ",(0,r.kt)("inlineCode",{parentName:"li"},"attach()")),(0,r.kt)("li",{parentName:"ul"},"Call ",(0,r.kt)("inlineCode",{parentName:"li"},"player.play()")," and if it is buffered the playback will start instantly.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Example"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"PlayerFactory playerFactory = new PlayerFactory(RegionalCluster.WORLD_WIDE, API_KEY, activity);\nContentDescriptor contentDescriptor = new ContentDescriptor(ContentType.RECORDED, 123456L);\nPlayer player1 = playerFactory.createPlayer(contentDescriptor.toString());\nplayer1.initWithContent(contentDescriptor);\nplayer1.pause();\n\n//... AT A LATER POINT, WHEN THE PLAYER IS NEEDED:\n\nplayer1.setPlayerListener(playerListener);\nplayer1.setErrorListener(errorListener);\nplayer1.setPlayerView(playerView);\nplayer1.attach();\nplayer1.play();\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Only your device capabilities (mostly RAM) limit how many players you can pre-buffer. Keeping too many players can cause an OutOfMemoryError."),(0,r.kt)("li",{parentName:"ul"},"When the players are no longer needed don’t forget to ",(0,r.kt)("inlineCode",{parentName:"li"},"destroy()")," them.")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-player-sdk-android-pre-buffering-mdx-28a57225bc8cec1ed333.js.map