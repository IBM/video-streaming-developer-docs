"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[348],{84990:function(t,e,n){n.r(e),n.d(e,{_frontmatter:function(){return p},default:function(){return s}});var a=n(63366),r=(n(67294),n(64983)),l=n(56928),i=["components"],p={},o={_frontmatter:p},m=l.Z;function s(t){var e=t.components,n=(0,a.Z)(t,i);return(0,r.kt)(m,Object.assign({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"Get the channel cover image"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://api.video.ibm.com/channels/{channel_id}/design/cover.json\n")),(0,r.kt)("h3",null,"Success response"),(0,r.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the following key-value structures."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"KEY"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"image")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Cover image URL")))),(0,r.kt)("h3",null,"Error responses"),(0,r.kt)("p",null,"Possible error responses:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"not_found")),(0,r.kt)("td",{parentName:"tr",align:null},"Channel not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,r.kt)("h2",null,"Upload cover image"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"POST https://api.video.ibm.com/channels/{channel_id}/design/cover.json\n")),(0,r.kt)("h3",null,"Request"),(0,r.kt)("p",null,"The image must be passed in the HTTP body as binary data."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The image dimensions must be: 2560 x 852 px"),(0,r.kt)("li",{parentName:"ul"},"Supported image types:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"image/jpeg"),(0,r.kt)("li",{parentName:"ul"},"image/png"),(0,r.kt)("li",{parentName:"ul"},"image/gif"))),(0,r.kt)("li",{parentName:"ul"},"Maximum image size: 5 MB")),(0,r.kt)("p",null,"CURL example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl --location --request POST 'https://git.api.video.ibm.com.lh/channels/1234/design/cover.json' \\\n--header 'Authorization: Bearer 3c2573673b782f6544405a22636f3d5d3b6f3950' \\\n--header 'Content-Type: image/png' \\\n--data-binary '@/path/to/your/new/cover/image.png'\n")),(0,r.kt)("p",null,"Note that the token in the above call is only an example."),(0,r.kt)("h3",null,"Success response"),(0,r.kt)("p",null,"Upon success the response body is empty with an HTTP Status code of 204."),(0,r.kt)("h3",null,"Error responses"),(0,r.kt)("p",null,"Possible error responses:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400 Bad Request"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"bad_request")),(0,r.kt)("td",{parentName:"tr",align:null},"Invalid input")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"invalid_token")),(0,r.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403 Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,r.kt)("td",{parentName:"tr",align:null},"The provided access token could not access the given channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,r.kt)("h2",null,"Delete cover image"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"DELETE https://api.video.ibm.com/channels/{channel_id}/design/cover.json\n")),(0,r.kt)("h3",null,"Success response"),(0,r.kt)("p",null,"Upon success, a response with HTTP status “204 No Content” is returned."),(0,r.kt)("h3",null,"Error responses"),(0,r.kt)("p",null,"Possible error responses:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"403 Forbidden"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,r.kt)("td",{parentName:"tr",align:null},"The API user is not allowed to manage the given channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"not_found")),(0,r.kt)("td",{parentName:"tr",align:null},"Channel not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-channel-api-channel-page-design-cover-image-mdx-8611d385012e4d3aa411.js.map