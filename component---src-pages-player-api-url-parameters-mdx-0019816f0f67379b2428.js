"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[4719],{32177:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return o},default:function(){return m}});var n=a(63366),l=(a(67294),a(64983)),r=a(8152),i=["components"],o={},d={_frontmatter:o},p=r.Z;function m(t){var e=t.components,a=(0,n.Z)(t,i);return(0,l.kt)(p,Object.assign({},d,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"Overview"),(0,l.kt)("p",null,"There are a lot of options to configure the feature set and behavior during player initialization. The player looks for URL query parameters included in the src of the Player iframe to set these prefences to the whole playback session."),(0,l.kt)("h3",null,"Example"),(0,l.kt)("p",null,"This example shows an iframe in which the player would hide the title bar, the LIVE badge and the viewer numbers from viewers:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<iframe id="PlayerIframe" src="https://video.ibm.com/embed/6540154?hideTitle&hideLiveBadge&hideViewerNumbers" width="640" height="480" allowfullscreen webkitallowfullscreen referrerpolicy="no-referrer-when-downgrade"></iframe>\n')),(0,l.kt)("h2",null,"URL parameters to change the behavior of the Player"),(0,l.kt)("p",null,"The default behavior of the player can be modified by extending the src URL with any of the following parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Effect"),(0,l.kt)("th",{parentName:"tr",align:null},"Values"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"allowfullscreen"),(0,l.kt)("td",{parentName:"tr",align:null},"Enables full-screen. False value makes the full-screen button inactive."),(0,l.kt)("td",{parentName:"tr",align:null},"true/false"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"api-target-origin"),(0,l.kt)("td",{parentName:"tr",align:null},"Origin of the page where player api is included. Use ",(0,l.kt)("inlineCode",{parentName:"td"},"encodeURIComponent")," to URL encode origin. This parameter is only required in case of SSO authentication."),(0,l.kt)("td",{parentName:"tr",align:null},"URL encoded origin e.g. output of ",(0,l.kt)("inlineCode",{parentName:"td"},"encodeURIComponent('https://video.ibm.com')")),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"autoplay"),(0,l.kt)("td",{parentName:"tr",align:null},"Starts video playback automatically. Browser settings are stronger and may override the value of this parameter."),(0,l.kt)("td",{parentName:"tr",align:null},"true/false"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"controls"),(0,l.kt)("td",{parentName:"tr",align:null},"When set to false it hides all UI elements."),(0,l.kt)("td",{parentName:"tr",align:null},"true/false"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"forced-quality"),(0,l.kt)("td",{parentName:"tr",align:null},"Turns off the automatic quality selection and selects the appropriate quality. Low is the smallest available quality, high is the largest and med is the middlemost choice."),(0,l.kt)("td",{parentName:"tr",align:null},"low, med, high"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"initial-quality"),(0,l.kt)("td",{parentName:"tr",align:null},"Sets the initial quality for the automatic quality selection. The quality selection logic is still turned on and can switch to another quality after playback is started."),(0,l.kt)("td",{parentName:"tr",align:null},"low, med, high"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showtitle"),(0,l.kt)("td",{parentName:"tr",align:null},"Shows title and viewer count information inside the player area."),(0,l.kt)("td",{parentName:"tr",align:null},"true/false"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showtheatre"),(0,l.kt)("td",{parentName:"tr",align:null},"Shows the Theater button in an embedded player. Only works with the video.ibm.com sidebar, used internally."),(0,l.kt)("td",{parentName:"tr",align:null},"true/false"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"showpopout"),(0,l.kt)("td",{parentName:"tr",align:null},"Shows the Popout button in the control bar. Viewers can view the player in a browser popout window."),(0,l.kt)("td",{parentName:"tr",align:null},"true/false"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"volume"),(0,l.kt)("td",{parentName:"tr",align:null},"Set volume for playback as a percentage of the max volume. Overrides the default volume (100)."),(0,l.kt)("td",{parentName:"tr",align:null},"0-100"),(0,l.kt)("td",{parentName:"tr",align:null},"100")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"slideShowSpeed"),(0,l.kt)("td",{parentName:"tr",align:null},"Set the duration (in seconds) an off-air image is shown if an off-air image slideshow is set for a channel."),(0,l.kt)("td",{parentName:"tr",align:null},"1,2,3,…"),(0,l.kt)("td",{parentName:"tr",align:null},"5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"loop"),(0,l.kt)("td",{parentName:"tr",align:null},"Playback of current video will continue from the beginning after it’s ended, automatically."),(0,l.kt)("td",{parentName:"tr",align:null},"nothing"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A")))),(0,l.kt)("h2",null,"Hide individual UI elements with URL parameters"),(0,l.kt)("p",null,"Many UI elements on the player can be hidden from viewers by using URL parameters. These parameters do not need values to work."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Effect"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideAudioSwitch"),(0,l.kt)("td",{parentName:"tr",align:null},"Hides the audio selector icon of multi-language videos")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hidePlayScreen"),(0,l.kt)("td",{parentName:"tr",align:null},"Hides the play screen after initial player load (does not cause autoplay)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideCaptionSearch"),(0,l.kt)("td",{parentName:"tr",align:null},"Hides the magnifying glass icon for Speach Search in Videos with CC")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideChapters"),(0,l.kt)("td",{parentName:"tr",align:null},"Hides the Chapter Selector panel icon and the Chapter Markings from the seekbar")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideCustomLogo"),(0,l.kt)("td",{parentName:"tr",align:null},"Hides the uploaded Custom Branding Logo from the player")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideCTA"),(0,l.kt)("td",{parentName:"tr",align:null},"Disables CTA overlays. Rely on the liveCtaUpdate event to trigger your own CTA.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideLogo"),(0,l.kt)("td",{parentName:"tr",align:null},"Hides the IBM logo from the player")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideShare"),(0,l.kt)("td",{parentName:"tr",align:null},"Hides the Share icon from the player")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideFacebook"),(0,l.kt)("td",{parentName:"tr",align:null},"Hides the Facebook option from the Share menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideTwitter"),(0,l.kt)("td",{parentName:"tr",align:null},"Hides the Twitter option from the Share menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideCopyLink"),(0,l.kt)("td",{parentName:"tr",align:null},"Hides the “Copy Link” option from the Share menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideEmbedCode"),(0,l.kt)("td",{parentName:"tr",align:null},"Hides the “Embed Code” option from the Share menu")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideCC"),(0,l.kt)("td",{parentName:"tr",align:null},"Hides the CC selector icon from the player controls (does not affect displaying CC set to appear by default)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideTitle"),(0,l.kt)("td",{parentName:"tr",align:null},"Hides the broadcast/channel title from the top of the player")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideViewerNumbers"),(0,l.kt)("td",{parentName:"tr",align:null},"Hides the display of the current and total viewership from the top of the player")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideLiveBadge"),(0,l.kt)("td",{parentName:"tr",align:null},"Hides the “LIVE” badge from the player")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideReplayBadge"),(0,l.kt)("td",{parentName:"tr",align:null},"Hides the “REPLAY” badge from the player")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideFullscreen"),(0,l.kt)("td",{parentName:"tr",align:null},"Hides the full-screen icon from the controls")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hidePlaybackSpeed"),(0,l.kt)("td",{parentName:"tr",align:null},"Hides the playback speed icon from the controls")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hideSeekbar"),(0,l.kt)("td",{parentName:"tr",align:null},"Hides the seekbar from video controls, viewers can not seek in videos but can pause/play and control other features")))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-player-api-url-parameters-mdx-0019816f0f67379b2428.js.map