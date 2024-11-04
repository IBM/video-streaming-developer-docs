"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[4989],{5917:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return m}});var a=n(5987),s=(n(7294),n(3905)),r=n(7621);const o=["components"],i={},h=(u="InlineNotification",function(e){return console.warn("Component "+u+" was not imported, exported, or provided by MDXProvider as global scope"),(0,s.kt)("div",e)});var u;const p={_frontmatter:i},c=r.Z;function m(e){let{components:t}=e,n=(0,a.Z)(e,o);return(0,s.kt)(c,Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)(h,{kind:"warning",mdxType:"InlineNotification"},(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"Deprecation Warning:")," This API is deprecated and it is scheduled to be removed on 03/01/2022. Please use (or migrate to) the new version of the ",(0,s.kt)("a",{parentName:"p",href:"/viewer-authentication-api-v2-getting-started"},"Viewer Authentication"),".")),(0,s.kt)("p",null,"Besides the player there are some services (such as Chat, Q&A and Combined Embed) that may also require viewer authentication. In order to make the authentication work across these services, additional steps need to be taken at the end of the authentication flow."),(0,s.kt)("p",null,"These services provide a URL, that must be used instead of the default pass url. This URL is sent in the hashConsumer query parameter by the service to the application."),(0,s.kt)("p",null,"Example url in the hashConsumer for chat:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre"},"https://video.ibm.com/chat/authorize/12345678?resource=%2Fchat%2F12345678\n")),(0,s.kt)("p",null,"Example script in native PHP that can authenticate the player and the services as well"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js"},"// Given a json token has already been constructed\n$json = json_encode($response);\n\n// Default hash consumer for the player\n$hashConsumer = 'https://video.ibm.com/embed/hashlock/pass';\n$query = [];\n\n// Check if there is a special hash consumer\nif (!empty($_GET['hashConsumer'])) {\n    $hashConsumer = $_GET['hashConsumer'];\n\n    // It's recommended to use a better URL parsing\n    // technique (like PSR-7 implementations)\n    $parts = parse_url($hashConsumer);\n\n    if (!empty($parts['query'])) {\n        parse_str($parts['query'], $query);\n    }\n\n    // Instead of concatenating url parts it's recommended to use\n    // a better URL parsing technique (like PSR-7 implementations)\n    $hashConsumer = $parts['scheme'].'://'.$parts['host'].$parts['path'];\n}\n\n$query['hash'] = $json;\n\n$hashConsumer = $hashConsumer.'?'.http_build_query($query);\n\nheader('Location: '.$hashConsumer);\n")))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-viewer-authentication-api-using-viewer-authentication-with-other-services-mdx-045f42d01713566a6684.js.map