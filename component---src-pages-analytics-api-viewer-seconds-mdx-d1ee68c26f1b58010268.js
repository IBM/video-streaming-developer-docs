"use strict";(self.webpackChunkexample=self.webpackChunkexample||[]).push([[8162],{71685:function(t,e,n){n.r(e),n.d(e,{_frontmatter:function(){return d},default:function(){return o}});var a=n(63366),r=(n(67294),n(64983)),l=n(56928),i=["components"],d={},p={_frontmatter:d},m=l.Z;function o(t){var e=t.components,n=(0,a.Z)(t,i);return(0,r.kt)(m,Object.assign({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",null,"Live and recorded viewer consumption of all content for a given time period by seconds"),(0,r.kt)("p",null,"Gives the total amount of time that all viewers spent watching live or on demand content within a given time period in an interval of seconds."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://analytics-api.video.ibm.com/v1/viewer-seconds\n")),(0,r.kt)("h3",null,"Parameters"),(0,r.kt)("p",null,"The query parameters for the GET request:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"IMPORTANCE"),(0,r.kt)("th",{parentName:"tr",align:null}," DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"granularity")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"OPTIONAL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hour"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"minute")," ",(0,r.kt)("inlineCode",{parentName:"td"},"day"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"month"),", the default value is ",(0,r.kt)("inlineCode",{parentName:"td"},"minute"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date_time_from")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"Start date and time for a period in ISO8601 format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date_time_to")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"End date and time for a period in ISO8601 format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"content_id")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"OPTIONAL"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of comma separated IDs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_page")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"OPTIONAL"),(0,r.kt)("td",{parentName:"tr",align:null},"Requested page number (value is 1 by default)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_limit")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"OPTIONAL"),(0,r.kt)("td",{parentName:"tr",align:null},"Requested page size (value is 10 by default, max. 10 000)")))),(0,r.kt)("h3",null,"Success response"),(0,r.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned with an array under a ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," key. The elements of the array contain every data point wrapped in a ",(0,r.kt)("inlineCode",{parentName:"p"},"ViewerSecondSeries")," object\nmatching the query parameters. Each object has the following attributes under the ",(0,r.kt)("inlineCode",{parentName:"p"},"attributes")," key:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"KEY"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"content_type")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the content, either ",(0,r.kt)("inlineCode",{parentName:"td"},"live")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"recorded"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"content_id")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Live or recorded id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Date and time for the datapoint in ISO8601 format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of peak viewers")))),(0,r.kt)("p",null,"Example of a success response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "attributes": {\n        "content_type": "live",\n        "content_id": 238589,\n        "time": "2020-07-16T00:00:00+01:00",\n        "value": 11\n      },\n      "type": "ViewerSecondSeries"\n    }\n  ],\n  "pagination": {\n    "count": 10,\n    "first": {\n      "href": "/viewer-seconds?_page=1&_limit=1"\n    },\n    "last": {\n      "href": "/viewer-seconds?_page=10&_limit=1"\n    },\n    "next": {\n      "href": "/viewer-seconds?_page=2&_limit=1"\n    },\n    "prev": null,\n    "self": {\n      "href": "/viewer-seconds?_page=1&_limit=1"\n    }\n  }\n}\n')),(0,r.kt)("h3",null,"Error responses"),(0,r.kt)("p",null,"Possible error responses:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400 Bad Request"),(0,r.kt)("td",{parentName:"tr",align:null},"Validation of the parameters has failed, the response contains a detailed explanation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource was not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,r.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,r.kt)("h2",null,"Live or recorded viewer consumption of all or given content IDs for a given time period in seconds"),(0,r.kt)("p",null,"Gives the total amount of time that all viewers spent watching all live and on demand content or limits this to just specific content by ID. The figure is limited toa given time period and is reported in an interval of seconds."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://analytics-api.video.ibm.com/v1/viewer-seconds/{content_type}\n")),(0,r.kt)("h3",null,"Parameters"),(0,r.kt)("p",null,"The query parameters for the GET request:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"IMPORTANCE"),(0,r.kt)("th",{parentName:"tr",align:null}," DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"content_type")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the content, either ",(0,r.kt)("inlineCode",{parentName:"td"},"live")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"recorded"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"granularity")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"OPTIONAL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hour"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"minute")," ",(0,r.kt)("inlineCode",{parentName:"td"},"day"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"month"),", the default value is ",(0,r.kt)("inlineCode",{parentName:"td"},"minute"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date_time_from")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"Start date and time for a period in ISO8601 format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date_time_to")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"End date and time for a period in ISO8601 format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"content_id")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"OPTIONAL"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of comma separated IDs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_page")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"OPTIONAL"),(0,r.kt)("td",{parentName:"tr",align:null},"Requested page number (value is 1 by default)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_limit")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"OPTIONAL"),(0,r.kt)("td",{parentName:"tr",align:null},"Requested page size (value is 10 by default, max. 10 000)")))),(0,r.kt)("h3",null,"Success response"),(0,r.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned with an array under a ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," key. The elements of the array contain every data point wrapped in a ",(0,r.kt)("inlineCode",{parentName:"p"},"ViewerSecondSeries")," object\nmatching the query parameters. Each object has the following attributes under the ",(0,r.kt)("inlineCode",{parentName:"p"},"attributes")," key:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"KEY"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"content_type")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the content, either ",(0,r.kt)("inlineCode",{parentName:"td"},"live")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"recorded"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"content_id")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Live or recorded id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Date and time for the datapoint in ISO8601 format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of peak viewers")))),(0,r.kt)("p",null,"Example of a success response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "attributes": {\n        "content_type": "live",\n        "content_id": 238589,\n        "time": "2020-07-16T00:00:00+01:00",\n        "value": 11\n      },\n      "type": "ViewerSecondSeries"\n    }\n  ],\n  "pagination": {\n    "count": 10,\n    "first": {\n      "href": "/viewer-seconds/live?_page=1&_limit=1"\n    },\n    "last": {\n      "href": "/viewer-seconds/live?_page=10&_limit=1"\n    },\n    "next": {\n      "href": "/viewer-seconds/live?_page=2&_limit=1"\n    },\n    "prev": null,\n    "self": {\n      "href": "/viewer-seconds/live?_page=1&_limit=1"\n    }\n  }\n}\n')),(0,r.kt)("h3",null,"Error responses"),(0,r.kt)("p",null,"Possible error responses:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400 Bad Request"),(0,r.kt)("td",{parentName:"tr",align:null},"Validation of the parameters has failed, the response contains a detailed explanation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource was not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,r.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,r.kt)("h2",null,"Recorded viewer consumption of all content on the defined channels for a given time period in seconds"),(0,r.kt)("p",null,"Gives the total amount of time that all viewers spent watching on demand content on defined channels within a given time period in an interval of seconds."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://analytics-api.video.ibm.com/v1/viewer-seconds/recorded/channel\n")),(0,r.kt)("h3",null,"Parameters"),(0,r.kt)("p",null,"The query parameters for the GET request:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"IMPORTANCE"),(0,r.kt)("th",{parentName:"tr",align:null}," DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"channel_id")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"A list of comma separated IDs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"granularity")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"OPTIONAL"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"hour"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"minute")," ",(0,r.kt)("inlineCode",{parentName:"td"},"day"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"month"),", the default value is ",(0,r.kt)("inlineCode",{parentName:"td"},"minute"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date_time_from")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"Start date and time for a period in ISO8601 format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date_time_to")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"End date and time for a period in ISO8601 format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_page")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"OPTIONAL"),(0,r.kt)("td",{parentName:"tr",align:null},"Requested page number (value is 1 by default)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"_limit")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"OPTIONAL"),(0,r.kt)("td",{parentName:"tr",align:null},"Requested page size (value is 10 by default, max. 10 000)")))),(0,r.kt)("h3",null,"Success response"),(0,r.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned with an array under a ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," key. The elements of the array contain every data point wrapped in a ",(0,r.kt)("inlineCode",{parentName:"p"},"ViewerSecondSeries")," object\nmatching the query parameters. Each object has the following attributes under the ",(0,r.kt)("inlineCode",{parentName:"p"},"attributes")," key:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"KEY"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"content_type")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the content, for this endpoint ",(0,r.kt)("inlineCode",{parentName:"td"},"recorded")," only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"content_id")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Video id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"time")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Date and time for the datapoint in ISO8601 format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of peak viewers")))),(0,r.kt)("p",null,"Example of a success response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "attributes": {\n        "content_type": "recorded",\n        "content_id": 238589,\n        "time": "2020-07-16T00:00:00+01:00",\n        "value": 11\n      },\n      "type": "ViewerSecondSeries"\n    }\n  ],\n  "pagination": {\n    "count": 10,\n    "first": {\n      "href": "/viewer-seconds/live?_page=1&_limit=1"\n    },\n    "last": {\n      "href": "/viewer-seconds/live?_page=10&_limit=1"\n    },\n    "next": {\n      "href": "/viewer-seconds/live?_page=2&_limit=1"\n    },\n    "prev": null,\n    "self": {\n      "href": "/viewer-seconds/live?_page=1&_limit=1"\n    }\n  }\n}\n')),(0,r.kt)("h3",null,"Error responses"),(0,r.kt)("p",null,"Possible error responses:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400 Bad Request"),(0,r.kt)("td",{parentName:"tr",align:null},"Validation of the parameters has failed, the response contains a detailed explanation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource was not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,r.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))),(0,r.kt)("h2",null,"Live or recorded viewer consumption summary for given content ID in time period in seconds"),(0,r.kt)("p",null,"Gives the total amount of time that all viewers spent watching on demand content within a given time period in an interval of seconds."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"GET https://analytics-api.video.ibm.com/v1/viewer-seconds/{content_type}/summary\n")),(0,r.kt)("h3",null,"Parameters"),(0,r.kt)("p",null,"The query parameters for the GET request:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"PARAMETER"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"IMPORTANCE"),(0,r.kt)("th",{parentName:"tr",align:null}," DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"content_id")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"Single content id")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date_time_from")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"Start date and time for a period in ISO8601 format")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"date_time_to")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"REQUIRED"),(0,r.kt)("td",{parentName:"tr",align:null},"End date and time for a period in ISO8601 format")))),(0,r.kt)("h3",null,"Success response"),(0,r.kt)("p",null,"Upon success a response with HTTP status “200 OK” is returned with a zero or one length array under a ",(0,r.kt)("inlineCode",{parentName:"p"},"data")," key. The element of the array contains a data point wrapped in a ",(0,r.kt)("inlineCode",{parentName:"p"},"PeakSeries")," object\nmatching the query parameters. It has the following attributes under the ",(0,r.kt)("inlineCode",{parentName:"p"},"attributes")," key:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"KEY"),(0,r.kt)("th",{parentName:"tr",align:null},"TYPE"),(0,r.kt)("th",{parentName:"tr",align:null},"DESCRIPTION"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"content_type")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"Type of the content, for this endpoint ",(0,r.kt)("inlineCode",{parentName:"td"},"recorded")," only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"media_id")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Video ID")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"value")),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"Number of peak viewers")))),(0,r.kt)("p",null,"Example of a success response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "data": [\n    {\n      "attributes": {\n        "content_type": "recorded",\n        "content_id": 238589,\n        "value": 11\n      },\n      "type": "ViewerSecondSummary"\n    }\n  ],\n  "pagination": {}\n}\n')),(0,r.kt)("h3",null,"Error responses"),(0,r.kt)("p",null,"Possible error responses:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"HTTP RESPONSE CODE"),(0,r.kt)("th",{parentName:"tr",align:null},"ERROR CONDITIONS"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"400 Bad Request"),(0,r.kt)("td",{parentName:"tr",align:null},"Validation of the parameters has failed, the response contains a detailed explanation")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"401 Unauthorized"),(0,r.kt)("td",{parentName:"tr",align:null},"The provided access token is missing, revoked, expired or malformed")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"404 Not Found"),(0,r.kt)("td",{parentName:"tr",align:null},"Resource was not found")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"503 Service Unavailable"),(0,r.kt)("td",{parentName:"tr",align:null},"There is a temporary error on the server which makes it impossible to serve the request")))))}o.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-analytics-api-viewer-seconds-mdx-d1ee68c26f1b58010268.js.map