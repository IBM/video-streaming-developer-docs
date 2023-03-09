"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[351],{93971:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return c},default:function(){return u}});var n,i=a(63366),o=(a(67294),a(64983)),s=a(56928),r=["components"],c={},l=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",e)}),p={_frontmatter:c},d=s.Z;function u(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)(d,Object.assign({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l,{kind:"warning",mdxType:"InlineNotification"},(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Deprecation Warning:")," This API is deprecated and it is scheduled to be removed on 03/01/2022. Please use (or migrate to) the new version of the ",(0,o.kt)("a",{parentName:"p",href:"/viewer-authentication-api-v2-getting-started"},"Viewer Authentication"),".")),(0,o.kt)("h2",null,"Introduction"),(0,o.kt)("p",null,"Viewer Authentication API lets you implement a custom authentication process. This prevents live and recorded videos on your account from being accessed until the viewer authenticates in."),(0,o.kt)("p",null,"You need the following before you start implementing viewer authentication:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Channel"),", which you can create on the Your channels page of your IBM Video Streaming dashboard"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Client id"),", which you can obtain on the API/SDK access page of your IBM Video Streaming dashboard"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Token"),", which you can obtain through the IBM Video Streaming authorization endpoint"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Secret")," key, a string that will be used to create the hash in the authentication response your service passes to the IBM Video Streaming player. This secret key needs to be provided by you.")),(0,o.kt)("h2",null,"Viewer authentication flow"),(0,o.kt)("p",null,"To implement the viewer authentication flow you need to create an application that includes the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Screens your viewers need to go through to authenticate"),(0,o.kt)("li",{parentName:"ul"},"Backend code that validates these authentication requests"),(0,o.kt)("li",{parentName:"ul"},"Process to pass the authentication response to the IBM Video Streaming player")),(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"85.41666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAIAAABSJhvpAAAACXBIWXMAAAsTAAALEwEAmpwYAAACMElEQVQ4y41TSY7cMAz085MXBPlDcg7yhlxySGbBYHratrzIbrVkiZJIbQ7UDQxmyWGIOggUikWqqCaXknN5jpzL/uFoci455xCT81hKiTGN88LGeeJLP879OFnncykp5fd1KzmlZKyTGmJKMaanjrUdY8N47Nmx7dt+GPly7AYD9i1Z2CxM0GBXuXkKSCHnnHJWECSQhKCA0iVTyn5BeW6gsRgdButRaespOgohJuvjlx+Pn7/ff/p2//Xnk8WaxBBjLimXmEtIGUNslHFs1ScFJwVCgdQWHFlPG6AyqAC1RecJHBmLT9146IZDO/TjAp4aZWzPz/NpW89aKCM3QKTxBP1q2AqP4/Y4bWw1HskhKQ1CbhosOG89NYuy3Sy5UO0kHphqF5gUHbh75O6OwZ/O3DK4YzBJWnVMOTuP+TJ/JTPhW64XsfVcHie5KrtZMi4YF8CFy4tE68MGtAE5DBo8OO8pVLInOnL960H8Psi7frOeXkJox8/2pFy3mJtW3rTyb2+Mq8w6M4YIVaRW9VitohCvQIrGVas2IGVQGjQW+1Pti0JAis37patrk2tczlfX075Xh/dSYiqXpax4Rb66LwyJzWqwDklIxVexCuk8hVhLgPUUwlXjP8qAGXwd4aL23E52oW43hRhSKvueyzuyc55NnI18nBdt4OXVbScO/TTydZjXIxu1gbfkGJMB2/aDOCtEetURwMSXYeIXzEjUfPz3lrKHEE9CagPX5/wHgKnSFpsIfpAAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Viewer Authentication Flow",title:"Viewer Authentication Flow",src:"/static/4f1ef7ae5b2b65151ba0b41e8d41007a/3cbba/advanced-auth-2x.png",srcSet:["/static/4f1ef7ae5b2b65151ba0b41e8d41007a/7fc1e/advanced-auth-2x.png 288w","/static/4f1ef7ae5b2b65151ba0b41e8d41007a/a5df1/advanced-auth-2x.png 576w","/static/4f1ef7ae5b2b65151ba0b41e8d41007a/3cbba/advanced-auth-2x.png 1152w","/static/4f1ef7ae5b2b65151ba0b41e8d41007a/4c487/advanced-auth-2x.png 1280w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"102.43055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsTAAALEwEAmpwYAAACd0lEQVQ4y22S2a7kNBCG8/63SNzADbwCQkJIwzswYgRcnZws3Vm82ynbVV6Qk5lW0zO/flXKVn0Vb109VUqptXLB397epnEax3EYBsbY7Xabp/m9fx+GYRontrP6pK6UklJ6tHhWOPUyfw0RsZTSIaK1tv5fV9E8z33fP4YPIWLf90TUEZGUCpGQmuOZUEohhPt9XbeNiF5ahxCWdUXELuViHCRCABBcGCWE4FprIgwxYsr1W4rUVtPlXI6QKVeP2WNaVHI++UiYiovlCOmbcMDc4FKq9VnqQxmQ5ugX4NprC9qCCwnz80F8BasPf67/DLEQAHjvCT3A0ZbOuZRCtm9LvAeM/hIAHB7bVa3f/aI+vrfG+byG82wjIsZgD881aAP2CIBVHJVyxVRjqvKgnHO3//i7+jQ+3wciejgsJBuqDdlYEMouzPw7ai41k8a4IB1FxI79/If+e3qGtTHLbeoXUL41whiC9yF4jG1fZxJ8TCHEjv304QV+CAJp47QxnItmIa/oDmDSEKVu++E39dfw2PPzO/3cAkAIIaRknO87k1LllD+f9vr9r/Jj/wK/PFVEBPAA/jgOIiqlQkwNxmG3TPsY/Bcppa9fXVJKSSmNMf7cu/cBAIyDBqdSUykpl5TrFZFyxBSRTiekdMWz4ItLK+5mTp/e3bKLeRW3TU5nnFexCatclC6q09IGaYOyZ2KCctH41FmfVm7G+z4tfFrYdGfjbR/mbbzv422fFjbctoUpJh2Tjutjl3aXlmuwF7wwNS1sPuH7Jpl0Kze7dLuw2+mWN9s2w80urPWpwQZo5WZe+XRnDd7VBaxcr/xKzCbMVf3i/wDU0HzNHzfmxAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Viewer Authentication Flow",title:"Viewer Authentication Flow",src:"/static/910170689c1fc7180a545ad63baf873f/3cbba/advanced-auth2-2x.png",srcSet:["/static/910170689c1fc7180a545ad63baf873f/7fc1e/advanced-auth2-2x.png 288w","/static/910170689c1fc7180a545ad63baf873f/a5df1/advanced-auth2-2x.png 576w","/static/910170689c1fc7180a545ad63baf873f/3cbba/advanced-auth2-2x.png 1152w","/static/910170689c1fc7180a545ad63baf873f/0b124/advanced-auth2-2x.png 1728w","/static/910170689c1fc7180a545ad63baf873f/6a339/advanced-auth2-2x.png 2048w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"When the viewer clicks the log in button in the IBM Video Streaming player the entry point of your custom authentication flow is displayed in an iframe in the player."),(0,o.kt)("li",{parentName:"ol"},"When the authentication is completed your service passes an authentication response to the player."),(0,o.kt)("li",{parentName:"ol"},"If the authentication was successful, the player passes the authentication response to IBM Video Streaming infrastructure in a validation request."),(0,o.kt)("li",{parentName:"ol"},"The IBM Video Streaming infrastructure validates the authentication response received from your service and passes a validation response to the player. If the response is positive, the viewer can start watching the video.")))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-viewer-authentication-api-getting-started-mdx-3d735617d28e0201805d.js.map