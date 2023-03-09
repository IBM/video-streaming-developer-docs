"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[829],{15583:function(t,e,n){n.r(e),n.d(e,{_frontmatter:function(){return p},default:function(){return k}});var a,r=n(63366),o=(n(67294),n(64983)),l=n(56928),i=["components"],p={},s=(a="Title",function(t){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}),d={_frontmatter:p},c=l.Z;function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,o.kt)(c,Object.assign({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",null,"Overview"),(0,o.kt)("p",null,"In some cases, a user may want to revoke access given to an application. Programmatic revocation is important in instances where a user logs out, changes identity, unsubscribes, or uninstalls the application."),(0,o.kt)(s,{mdxType:"Title"},"Token revocation endpoint"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null}),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Location"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://video.ibm.com/oauth2/token/revoke"},"https://video.ibm.com/oauth2/token/revoke"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Supported HTTP method"),(0,o.kt)("td",{parentName:"tr",align:null},"POST")))),(0,o.kt)("h3",null,"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,o.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,o.kt)("th",{parentName:"tr",align:null},"IMPORTANCE"),(0,o.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"token")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,o.kt)("td",{parentName:"tr",align:null},"The token that the client wants to get revoked. Can be access token or refresh token.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"client_id")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,o.kt)("td",{parentName:"tr",align:null},"40-character long string that identifies the client the token belongs to.")))),(0,o.kt)("p",null,"In addition to the parameters above, the client must provide its client secret (provided along with the client key) to authenticate itself. The authentication is done with HTTP Basic authorization method."),(0,o.kt)("p",null,"Sample HTTP header:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Authorization: Basic bc345abc45d6789abcdef0123aef0126789def01\n")),(0,o.kt)("p",null,"For example, a client may request the revocation of a token with the following request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"POST /oauth2/token/revoke HTTP/1.1\nHost: video.ibm.com\nContent-Type: application/x-www-form-urlencoded\nAuthorization: Basic bc345abc45d6789abcdef0123aef0126789def01\n\ntoken=5fb2a4aba6157825929b78c56e623613f20033ff&client_id=50aefe42c68cf63b488fc6630b7f0b3b7ae00e8e\n")),(0,o.kt)("h3",null,"Revocation Response"),(0,o.kt)("p",null,"The authorization server responds with HTTP status code 200 if the token has been revoked successfully or if the client submitted an invalid token. The content of the response body can be ignored by the client as all necessary information is conveyed in the response code."))}k.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-api-basics-token-revocation-mdx-1f1fdf95e1ccbe660fab.js.map