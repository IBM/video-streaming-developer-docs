"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[1422],{66579:function(t,e,n){n.r(e),n.d(e,{_frontmatter:function(){return o},default:function(){return s}});var a=n(63366),l=(n(67294),n(64983)),r=n(56928),i=["components"],o={},d={_frontmatter:o},p=r.Z;function s(t){var e=t.components,n=(0,a.Z)(t,i);return(0,l.kt)(p,Object.assign({},d,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"All IBM Video Streaming channels can be embedded anywhere across the internet by default.\nBy restricting the embed URLs, you can control the viewing experience and limit distribution to your own preferred partners."),(0,l.kt)("h2",null,"Get embed lock status"),(0,l.kt)("p",null,"This request returns the embed lock status."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET https://api.video.ibm.com/channels/{channel_id}/locks/embed.json\n")),(0,l.kt)("h3",null,"Parameters"),(0,l.kt)("p",null,"This request has no parameters."),(0,l.kt)("h3",null,"Success response"),(0,l.kt)("p",null,"Upon success, a key-value structure is returned."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"locked")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Returns ",(0,l.kt)("inlineCode",{parentName:"td"},"TRUE")," if the embed lock is enabled on the channel, otherwise ",(0,l.kt)("inlineCode",{parentName:"td"},"FALSE"),".")))),(0,l.kt)("p",null,"Example of a success response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "locked": "TRUE"\n}\n')),(0,l.kt)("h3",null,"Error responses"),(0,l.kt)("p",null,"Possible error responses:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"not_found")),(0,l.kt)("td",{parentName:"tr",align:null},"Channel not found")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,l.kt)("h2",null,"Modify embed lock"),(0,l.kt)("p",null,"Enable or disable embed restrictions on a channel. When embed lock is enabled (locked == TRUE), embedding the content of this channel is allowed only on ",(0,l.kt)("a",{parentName:"p",href:"#get-embed-lock-url-whitelist"},"whitelisted URLs"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"PUT https://api.video.ibm.com/channels/{channel_id}/locks/embed.json\n")),(0,l.kt)("h3",null,"Parameters"),(0,l.kt)("p",null,"The parameters for the PUT request:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"IMPORTANCE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"locked")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,l.kt)("td",{parentName:"tr",align:null},"Set embed lock on channel when this value is ",(0,l.kt)("inlineCode",{parentName:"td"},"TRUE"),". Removes embed lock when the value is ",(0,l.kt)("inlineCode",{parentName:"td"},"FALSE"),".")))),(0,l.kt)("h3",null,"Success response"),(0,l.kt)("p",null,"Upon success a response with HTTP status “204 No Content” is returned."),(0,l.kt)("h3",null,"Error responses"),(0,l.kt)("p",null,"Possible error responses:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"400 Bad Request"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"invalid_request")),(0,l.kt)("td",{parentName:"tr",align:null},"The request parameter is missing or invalid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403 Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,l.kt)("td",{parentName:"tr",align:null},"The API user is not allowed to manage the given channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"not_found")),(0,l.kt)("td",{parentName:"tr",align:null},"Channel not found")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,l.kt)("h2",null,"Get embed lock URL whitelist"),(0,l.kt)("p",null,"This request returns the list of whitelisted URLs."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET https://api.video.ibm.com/channels/{channel_id}/locks/embed/allowed-urls.json\n")),(0,l.kt)("h3",null,"Parameters"),(0,l.kt)("p",null,"This request has no parameters."),(0,l.kt)("h3",null,"Success response"),(0,l.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the following key-value structures."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"allowed_urls")),(0,l.kt)("td",{parentName:"tr",align:null},"array"),(0,l.kt)("td",{parentName:"tr",align:null},"URL list from the allowed URLs embed lock list no matter where it was set. Empty array if ",(0,l.kt)("inlineCode",{parentName:"td"},"locked == “FALSE”"),".")))),(0,l.kt)("h3",null,"Error responses"),(0,l.kt)("p",null,"Possible error responses:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403 Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,l.kt)("td",{parentName:"tr",align:null},"The API user is not allowed to manage the given channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"not_found")),(0,l.kt)("td",{parentName:"tr",align:null},"Channel not found")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,l.kt)("h2",null,"Add URL to the embed lock URL whitelist"),(0,l.kt)("p",null,"Add a specific URL to the whitelist that controls where embedding of channel content is allowed when embed lock is enabled."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"POST\nhttps://api.video.ibm.com/channels/{channel_id}/locks/embed/allowed-urls.json\n")),(0,l.kt)("h3",null,"Parameters"),(0,l.kt)("p",null,"The parameters for the POST request:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"IMPORTANCE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"url")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,l.kt)("td",{parentName:"tr",align:null},"The URL to be added to the whitelist")))),(0,l.kt)("p",null,"You can add one URL per API call."),(0,l.kt)("h3",null,"Success response"),(0,l.kt)("p",null,"Upon success a response with HTTP status “201 Created” is returned."),(0,l.kt)("h3",null,"Error responses"),(0,l.kt)("p",null,"Possible error responses:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"400 Bad Request"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"invalid_request")),(0,l.kt)("td",{parentName:"tr",align:null},"The request parameter is missing or invalid")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403 Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,l.kt)("td",{parentName:"tr",align:null},"The API user is not allowed to manage the given channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"not_found")),(0,l.kt)("td",{parentName:"tr",align:null},"Channel not found")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,l.kt)("h2",null,"Empty the embed lock URL whitelist"),(0,l.kt)("p",null,"Remove all URLs from the embed lock whitelist."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"DELETE https://api.video.ibm.com/channels/{channel_id}/locks/embed/allowed-urls.json\n")),(0,l.kt)("h3",null,"Parameters"),(0,l.kt)("p",null,"This request has no parameters."),(0,l.kt)("h3",null,"Success response"),(0,l.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned."),(0,l.kt)("h3",null,"Error responses"),(0,l.kt)("p",null,"Possible error responses:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"403 Forbidden"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lack_of_ownership")),(0,l.kt)("td",{parentName:"tr",align:null},"The API user is not allowed to manage the given channel")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"not_found")),(0,l.kt)("td",{parentName:"tr",align:null},"Channel not found")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-channel-api-security-embed-restriction-mdx-4f3eb764ef83921b43d6.js.map