"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[1017],{52492:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return s}});var n=a(63366),l=(a(67294),a(64983)),r=a(8152),o=["components"],i={},d={_frontmatter:i},p=r.Z;function s(e){var t=e.components,a=(0,n.Z)(e,o);return(0,l.kt)(p,Object.assign({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"Get video download URL"),(0,l.kt)("p",null,"Returns information on the downloadable version of the video."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"GET https://api.video.ibm.com/videos/{video_id}/downloadable/{video_format}.json\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"{video_format}")," can be mp4 or flv."),(0,l.kt)("h3",null,"Parameters"),(0,l.kt)("p",null,"This request has no parameters."),(0,l.kt)("h3",null,"Success response"),(0,l.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned with the following key-value pairs under a ",(0,l.kt)("inlineCode",{parentName:"p"},"downloadable")," key."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"KEY"),(0,l.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,l.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"status")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"State of the downloadable video. Possible values: ",(0,l.kt)("inlineCode",{parentName:"td"},"available")," if the video is ready to download; ",(0,l.kt)("inlineCode",{parentName:"td"},"unavailable")," if the downloadable version is not (yet) available; ",(0,l.kt)("inlineCode",{parentName:"td"},"pending")," if the process of generation downloadable version is in progress")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"download_url")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"The video download URL. (Value is ",(0,l.kt)("inlineCode",{parentName:"td"},"null")," if the downloadable version is not available.)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"expires_at")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Date and time when the downloadable version will expire (Unix timestamp)")))),(0,l.kt)("p",null,"Example of a success response:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "downloadable": {\n    "status": "available",\n    "download_url": "https://download.domain/example_download_path?download_parameters",\n    "expires_at": 1471363639\n  }\n}\n')),(0,l.kt)("h3",null,"Error responses"),(0,l.kt)("p",null,"Possible error responses:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired, or malformed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"not_found")),(0,l.kt)("td",{parentName:"tr",align:null},"Video was not found")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"429 Too Many Requests"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"too_many_requests")),(0,l.kt)("td",{parentName:"tr",align:null},"Rate limit exceeded (",(0,l.kt)("a",{parentName:"td",href:"/api-basics-rate-limits"},"Read more"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,l.kt)("h2",null,"Requesting a downloadable version of a video"),(0,l.kt)("p",null,"The downloadable version of a video is not always available, and you have to request us to generate a temporary video file for download. The workflow is the following:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Use this call to request a downloadable file."),(0,l.kt)("li",{parentName:"ol"},"Poll the same API resource for status updates."),(0,l.kt)("li",{parentName:"ol"},"Use the value of the ",(0,l.kt)("inlineCode",{parentName:"li"},"download_url")," property as soon as it is available.")),(0,l.kt)("p",null,"You have 365 days to download the video file  after it becomes available. Please refer to the property ",(0,l.kt)("inlineCode",{parentName:"p"},"expires_at")," for the proper timing."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"POST https://api.video.ibm.com/videos/{video_id}/downloadable/{video_format}.json\n")),(0,l.kt)("p",null,"The ",(0,l.kt)("inlineCode",{parentName:"p"},"{video_format}")," can be mp4 or flv."),(0,l.kt)("p",null,"If everything works as expected, you’ll instantly get the same response format as the GET version provides, but the property ",(0,l.kt)("inlineCode",{parentName:"p"},"status")," will be ",(0,l.kt)("inlineCode",{parentName:"p"},"pending")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"available"),"."),(0,l.kt)("h3",null,"Error responses"),(0,l.kt)("p",null,"Possible error responses:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR VALUE"),(0,l.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired, or malformed")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"not_found")),(0,l.kt)("td",{parentName:"tr",align:null},"Video was not found")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"429 Too Many Requests"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"too_many_requests")),(0,l.kt)("td",{parentName:"tr",align:null},"Rate limit exceeded (",(0,l.kt)("a",{parentName:"td",href:"/api-basics-rate-limits"},"Read more"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-channel-api-video-management-download-your-videos-mdx-2099227f9b93dc932763.js.map