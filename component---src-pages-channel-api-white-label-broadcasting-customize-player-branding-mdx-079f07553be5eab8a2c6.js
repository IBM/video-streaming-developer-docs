"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[5216],{81680:function(t,e,n){n.r(e),n.d(e,{_frontmatter:function(){return d},default:function(){return k}});var a,l=n(63366),r=(n(67294),n(64983)),i=n(8152),p=["components"],d={},o=(a="Title",function(t){return console.warn("Component "+a+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",t)}),m={_frontmatter:d},u=i.Z;function k(t){var e=t.components,n=(0,l.Z)(t,p);return(0,r.kt)(u,Object.assign({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Control the branding of the player by uploading your own logo and removing the IBM watermark."),(0,r.kt)(o,{mdxType:"Title"},"Available branding types"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"co-branding")),(0,r.kt)("td",{parentName:"tr",align:null},"Display your logo in the player.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"full branding")),(0,r.kt)("td",{parentName:"tr",align:null},"Display your logo in the player and remove the IBM watermark.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"no branding")),(0,r.kt)("td",{parentName:"tr",align:null},"Remove the IBM watermark without uploading a logo (white label player).")))),(0,r.kt)("h3",null,"Check branding type"),(0,r.kt)("p",null,"Get the type of player branding set on a channel."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://api.video.ibm.com/channels/{channel_id}/branding.json\n")),(0,r.kt)("h3",null,"Parameters"),(0,r.kt)("p",null,"This request has no parameters."),(0,r.kt)("h3",null,"Success response"),(0,r.kt)("p",null,"Upon success, a set of key-value pair is returned under a ",(0,r.kt)("inlineCode",{parentName:"p"},"branding")," element."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"KEY"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of branding set on the channel. Possible values: ",(0,r.kt)("inlineCode",{parentName:"td"},"co")," (co-branding), ",(0,r.kt)("inlineCode",{parentName:"td"},"full")," (full-branding) or ",(0,r.kt)("inlineCode",{parentName:"td"},"no")," (no branding). The ",(0,r.kt)("inlineCode",{parentName:"td"},"disabled")," value is returned if player branding is not set for the channel.")))),(0,r.kt)("p",null,"Example of a success response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "branding": {\n    "type": "full"\n  }\n}\n')),(0,r.kt)("h3",null,"Error responses"),(0,r.kt)("p",null,"Possible error responses:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"402 Payment Required"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invalid_request")),(0,r.kt)("td",{parentName:"tr",align:null},"The user does not have the benefit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"not_found")),(0,r.kt)("td",{parentName:"tr",align:null},"Channel not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,r.kt)("h3",null,"Set branding type"),(0,r.kt)("p",null,"Set the type of player branding on a channel and enable the feature."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PUT https://api.video.ibm.com/channels/{channel_id}/branding.json\n")),(0,r.kt)("h3",null,"Parameters"),(0,r.kt)("p",null,"The parameters for the PUT request:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"IMPORTANCE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"type")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"The type of branding set on the channel. Supported values: ",(0,r.kt)("inlineCode",{parentName:"td"},"co")," (co-branding), ",(0,r.kt)("inlineCode",{parentName:"td"},"full")," (full-branding) or ",(0,r.kt)("inlineCode",{parentName:"td"},"no")," (no branding).")))),(0,r.kt)("h3",null,"Success response"),(0,r.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned."),(0,r.kt)("h3",null,"Error responses"),(0,r.kt)("p",null,"Possible error responses:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400 Bad Request"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"input_type")),(0,r.kt)("td",{parentName:"tr",align:null},"The specified type is invalid or unsupported")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"402 Payment Required"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invalid_request")),(0,r.kt)("td",{parentName:"tr",align:null},"The user does not have the embed_restriction benefit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403 Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,r.kt)("td",{parentName:"tr",align:null},"The API user is not allowed to manage the given channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"not_found")),(0,r.kt)("td",{parentName:"tr",align:null},"Channel not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,r.kt)("h3",null,"Disable branding"),(0,r.kt)("p",null,"Removes custom branding. Only the IBM watermark will be displayed in the player."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DELETE https://api.video.ibm.com/channels/{channel_id}/branding.json\n")),(0,r.kt)("h3",null,"Parameters"),(0,r.kt)("p",null,"This request has no parameters."),(0,r.kt)("h3",null,"Success response"),(0,r.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned."),(0,r.kt)("h3",null,"Error responses"),(0,r.kt)("p",null,"This request has no error responses."),(0,r.kt)("h2",null,"Upload logo"),(0,r.kt)("p",null,"Upload the image file of the logo for custom branding."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"PUT https://api.video.ibm.com/channels/{channel_id}/branding/logo/0.json\n")),(0,r.kt)("h3",null,"Request"),(0,r.kt)("p",null,"The logo must be passed in the HTTP body. Supported image types are image/jpeg, image/png, image/gif. Maximum dimension for the images are 288 x 96 pixels. Maximum file size is 10 MB."),(0,r.kt)("h3",null,"Success response"),(0,r.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned."),(0,r.kt)("h3",null,"Error responses"),(0,r.kt)("p",null,"Possible error responses:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400 Bad Request"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invalid_file")),(0,r.kt)("td",{parentName:"tr",align:null},"Validation failed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400 Bad Request"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invalid_image")),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"402 Payment Required"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invalid_request")),(0,r.kt)("td",{parentName:"tr",align:null},"The user does not have the benefit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403 Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,r.kt)("td",{parentName:"tr",align:null},"The API user is not allowed to manage the given channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"not_found")),(0,r.kt)("td",{parentName:"tr",align:null},"Channel not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))))}k.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-channel-api-white-label-broadcasting-customize-player-branding-mdx-079f07553be5eab8a2c6.js.map