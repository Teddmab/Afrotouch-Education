(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,function(e,a,t){e.exports=t.p+"static/media/logo.cacf8aad.png"},function(e,a,t){e.exports=t.p+"static/media/inspiring 1.5ce3ab7a.png"},function(e,a,t){e.exports=t(23)},,,,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),r=t(6),o=t.n(r),l=(t(17),t(3)),c=t(1),s=(t(18),t(7)),u=t.n(s);const m={Estonia:{"Estonian University of Life Sciences":["MSc Environmental Governance and Adaptation to Climate Change","MSc Landscape Architecture","MSc Planning and Analysis in Multifunctional Forestry","DVM Veterinary Medicine"],"Tallinn University":["MSc Interaction Design","MA Communication Management","MSc Human-Computer Interaction","MA Anthropology","MA Educational Innovation and Leadership","MA Information Technology Law","MA Digital Administration","MSc Digital Learning Games","MA Documentary Film","MA Human Rights in the Digital Society","MA Well-Being and Health Behaviour","MA Literature, Visual Culture and Film Studies","MA Estonian Studies","MA European Languages and Cultures","MA Folkloristics and Applied Heritage Studies","MA Screen Media and Innovation","MA Semiotics","MA Social Entrepreneurship","BA Audiovisual Media","BA Law","BA Liberal Arts in Humanities","BA Liberal Arts in Social Sciences","BA Politics and Governance","BA Crossmedia"],"University of Tartu":["MSc Actuarial and Financial Engineering","MSc Applied Measurement Science","MSc Bioengineering","MSc Clinical Nutrition","MA Disinformation and Societal Resilience","MSc EACH - Excellence in Analytical Chemistry","MA Educational Technology","MA Entrepreneurship in Economic Policymaking","MSc Geoinformatics for Urbanised Society","MA International Law and Human Rights","MA International Relations and Regional Studies","MSc Robotics and Computer Engineering","MA Wellness and Spa Service Design and Management","MSc Clinical Pharmacy","BSc Science and Technology","BSc Commercial Air Transport Pilot","BSc Commercial Aviation Management","BA Business Administration","Bachelor+Master Medicine (Integrated curriculum)"],"Estonian Entrepreneurship University of Applied Sciences":["BA Creativity and Business Innovation","BA Game Design and Development","BA Impactful Entrepreneurship","BA International Business Administration","Software Development and Entrepreneurship","Startup Entrepreneurship"],"Estonian Aviation Academy":["BSc Commercial Air Transport Pilot","BSc Commercial Aviation Management"],"Estonian Academy of Music and Theatre":["MA Classical Music Performance (various specialities)","MA Composition and Music Technology","MA Contemporary Physical Performance Making (CPPM)","MA Jazz and Improvisational Music","BA Classical Music Performance (various specialities)","BA Composition and Music Technology","BA Jazz Music"],"Tallinn University Baltic Film, Media and Arts School":["MA Communication Management","MA Documentary Film","MA Screen Media and Innovation","BA Audiovisual Media","BA Crossmedia"],"Tallinn University School of Digital Technologies":["MSc Interaction Design","MSc Human-Computer Interaction","MSc Digital Learning Games","MA Human Rights in the Digital Society"],"Tallinn University School of Educational Sciences":["MA Educational Innovation and Leadership","MA Well-Being and Health Behaviour"],"Tallinn University School of Governance, Law and Society":["MA Human Rights in the Digital Society","MA International Relations","MA Social Entrepreneurship","BA Law","BA Liberal Arts in Social Sciences","BA Politics and Governance"],"Tallinn University School of Humanities":["MA Literature, Visual Culture and Film Studies","MA Estonian Studies","BA Liberal Arts in Humanities"],"Tallinn University School of Natural Sciences and Health":["MA Well-Being and Health Behaviour"],"University of Tartu Faculty of Arts and Humanities":["MA Estonian and Finno-Ugric Languages","MA European Languages and Cultures","MA Folkloristics and Applied Heritage Studies","MA Semiotics"],"University of Tartu Faculty of Medicine":["MSc Clinical Nutrition","Bachelor+Master Medicine (Integrated curriculum)"],"University of Tartu Faculty of Science and Technology":["MSc Actuarial and Financial Engineering","MSc Applied Measurement Science","MSc Bioengineering","MSc EACH - Excellence in Analytical Chemistry","MSc Geoinformatics for Urbanised Society","MSc Robotics and Computer Engineering","MSc Materials Science and Technology","BSc Science and Technology"],"University of Tartu Faculty of Social Sciences":["MA Disinformation and Societal Resilience","MA Educational Technology","MA Entrepreneurship in Economic Policymaking","MA International Law and Human Rights","MA International Relations and Regional Studies","MA Wellness and Spa Service Design and Management","MA Politics and Governance in the Digital Age","MA Quantitative Economics","MSc Software Engineering","MA Information Technology Law","MA Innovation and Technology Management","MA International Law and Human Rights","MA International Relations and Regional Studies","MA Creative Project Management"],"Estonian Business School":["MBA International Business Administration","MBA One-year MBA","MBA Two-year MBA","BA Impactful Entrepreneurship","BA International Business Administration"]},Latvia:{"Faculty of Social Sciences, Riga":["Master Cultural and Social Anthropology","Bachelor Cultural and Social Anthropology"],"Faculty of Medicine, Riga":["Master Epidemiology and Medical Statistics"],"Faculty of Business, Management and Economics, Riga":["Master European Studies and Economic Diplomacy","Master International Business with specialization in Export Management","Master Project Management","Bachelor Business Administration","Bachelor International Economics and Commercial Diplomacy"],"Faculty of Education, Psychology and Art, Riga":["Masters Technological innovations and design for education"],"Riga Tehnical University, Riga":["Bachelor Biotechnology and Bioengineering in cooperation with Riga Technical University"],"Faculty of Computing, Riga":["Bachelor Computer Science"],"University of Lincoln, Lincoln":["Bachelor Computer Science Dual Award Programme with the University of Lincoln UK and University of Latvia"],"Faculty of Humanities, Riga":["Bachelor English, European Languages and Business Studies"],"Faculty of Physics, Mathematics and Optometry, Riga":["Bachelor Optometry"]}};var d=function(){const[e,a]=Object(n.useState)(""),[t,r]=Object(n.useState)(""),[o,l]=Object(n.useState)(""),[c,s]=Object(n.useState)(""),[d,h]=Object(n.useState)(!0),[p,f]=Object(n.useState)([]),[g,y]=Object(n.useState)([]),E=e=>{const a=e.target.value;y(t=>e.target.checked?[...t,a]:t.filter(e=>e!==a))};return i.a.createElement("header",{className:"header-content"},i.a.createElement("div",{className:"logo-container"},i.a.createElement("img",{src:u.a,alt:"AfroTouch Education Logo",className:"logo"})),i.a.createElement("h2",{onClick:()=>{h(!d)},className:"toggle-form"},"Launch Your Academic Journey!"),d&&i.a.createElement("div",{className:"form-container ".concat(d?"active":"")},i.a.createElement("p",null," Set Your Sights on Success! Select your country, pick your university, and secure your spot in the program that will define your future.",i.a.createElement("br",null)," Start your journey with AfroTouch Education now!"),i.a.createElement("form",{onSubmit:async n=>{n.preventDefault();const i={email:e,whatsapp:t,country:o,university:c,programs:g};try{(await fetch("http://localhost:5001/submit-form",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)})).ok?(a(""),r(""),l(""),s(""),y([]),alert("Your data has been saved. We will get back to you with more details.")):alert("There was an issue with your submission. Please try again.")}catch(u){console.error("There was an error!",u)}}},i.a.createElement("select",{value:o,onChange:e=>{const a=e.target.value;l(a),s(""),f([])},required:!0},i.a.createElement("option",{value:""},"Select a country"),Object.keys(m).map(e=>i.a.createElement("option",{key:e,value:e},e))),o&&i.a.createElement("select",{value:c,onChange:e=>{const a=e.target.value;s(a),o&&m[o][a]?f(m[o][a]):f([])},required:!0},i.a.createElement("option",{value:""},"Select a university"),Object.keys(m[o]||{}).map(e=>i.a.createElement("option",{key:e,value:e},e))),i.a.createElement("input",{type:"email",value:e,onChange:e=>a(e.target.value),placeholder:"Your email",required:!0}),i.a.createElement("input",{type:"text",value:t,onChange:e=>r(e.target.value),placeholder:"Your WhatsApp number",required:!0}),c&&i.a.createElement("div",{class:"checkbox_container"},p.map(e=>i.a.createElement("div",{key:e},i.a.createElement("input",{type:"checkbox",id:e,value:e,checked:g.includes(e),onChange:E}),i.a.createElement("label",{htmlFor:e},e)))),i.a.createElement("button",{type:"submit"},"Sign up")),i.a.createElement("p",{className:"privacy-message"},"Your contact information is safe with us. We respect your privacy and will never share your information without your consent.")))};t(19),t(20);var h,p,f=function(){return i.a.createElement("article",{className:"candidate-journey"},i.a.createElement("h2",null,"Your Journey to Success"),i.a.createElement("p",null,"Starting your academic journey can seem daunting, but with AfroTouch Education, you have a partner every step of the way. Here's how we help you transition from application to settling in Estonia or Latvia:"),i.a.createElement("ol",null,i.a.createElement("li",null,i.a.createElement("h3",null,i.a.createElement("strong",null,"Choosing the Right University and Program"))," First things first, let's pick your academic adventure! Our website is like a treasure map, guiding you to the perfect university and program. With a mix of expert advice and your aspirations, we'll find the perfect fit. It's like matchmaking, but for your education!"),i.a.createElement("li",null,i.a.createElement("h3",null,i.a.createElement("strong",null,"IELTS Exam (Optional but Encouraged)"))," Some universities in Latvia may not require it, but being prepared never hurts! Think of the IELTS as your linguistic gym session, flexing those English muscles to impress. We'll support you through booking, preparation, and even celebratory high-fives post-exam."),i.a.createElement("li",null,i.a.createElement("h3",null,i.a.createElement("strong",null,"Awaiting University Confirmation"))," After you've applied, we enter the anticipation phase. It's a bit like waiting for a lunar eclipse \u2013 rare and exciting! We stay with you every step, ready to pop the virtual confetti once that confirmation comes in."),i.a.createElement("li",null,i.a.createElement("h3",null,i.a.createElement("strong",null,"Interview with the University"))," Interview time? More like your time to shine! We turn your nerves into superpowers, equipping you with tips, mock interviews, and confidence boosters. It's your moment to show the university they're about to get their newest star student."),i.a.createElement("li",null,i.a.createElement("h3",null,i.a.createElement("strong",null,"Securing Your Spot: Tuition Fee Payment"))," Consider this the 'official' stamp on your educational journey. Paying your tuition fee is like unlocking the door to your future. We'll guide you through the payment process, ensuring it's as smooth as your transition from student to scholar."),i.a.createElement("li",null,i.a.createElement("h3",null,i.a.createElement("strong",null,"Visa Application: Your Gateway to New Beginnings"))," No matter if you're in Egypt or India, applying for a visa to Latvia or Estonia can be as intricate as a dance. But fear not! We lead you step-by-step, ensuring every document is perfect. It's your backstage pass to a whole new world!"),i.a.createElement("li",null,i.a.createElement("h3",null,i.a.createElement("strong",null,"Arranging Accommodation"))," Let's not forget where you'll be dreaming of your future successes. We assist in finding accommodation that's as comfy and welcoming as your favorite coffee shop. From cozy dorms to private apartments, we've got you covered."),i.a.createElement("li",null,i.a.createElement("h3",null,i.a.createElement("strong",null,"Set Sail: Travel to Latvia or Estonia"))," Bags packed? Check. Passport in hand? Check. A heart full of dreams? Double check! As you embark on this amazing journey, remember, we're just a call away, cheering you on as you soar towards your educational horizon.")),i.a.createElement("p",null,"Ready to start your journey? Apply now and take the first step towards a world-class education in the Baltics."))};t(21);function g(){return(g=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const y=e=>{let{svgRef:a,...t}=e;return i.a.createElement("svg",g({viewBox:"0 0 48 48",width:"48px",height:"48px",ref:a},t),h||(h=i.a.createElement("path",{fill:"#039be5",d:"M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"})),p||(p=i.a.createElement("path",{fill:"#fff",d:"M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"})))},E=i.a.forwardRef((e,a)=>i.a.createElement(y,g({svgRef:a},e)));var v,M,A,w,S,b,C;t.p;function k(){return(k=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const B=e=>{let{svgRef:a,...t}=e;return i.a.createElement("svg",k({viewBox:"0 0 48 48",width:"48px",height:"48px",ref:a},t),v||(v=i.a.createElement("radialGradient",{id:"yOrnnhliCrdS2gy~4tD8ma",cx:19.38,cy:42.035,r:44.899,gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{offset:0,stopColor:"#fd5"}),i.a.createElement("stop",{offset:.328,stopColor:"#ff543f"}),i.a.createElement("stop",{offset:.348,stopColor:"#fc5245"}),i.a.createElement("stop",{offset:.504,stopColor:"#e64771"}),i.a.createElement("stop",{offset:.643,stopColor:"#d53e91"}),i.a.createElement("stop",{offset:.761,stopColor:"#cc39a4"}),i.a.createElement("stop",{offset:.841,stopColor:"#c837ab"}))),M||(M=i.a.createElement("path",{fill:"url(#yOrnnhliCrdS2gy~4tD8ma)",d:"M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"})),A||(A=i.a.createElement("radialGradient",{id:"yOrnnhliCrdS2gy~4tD8mb",cx:11.786,cy:5.54,r:29.813,gradientTransform:"matrix(1 0 0 .6663 0 1.849)",gradientUnits:"userSpaceOnUse"},i.a.createElement("stop",{offset:0,stopColor:"#4168c9"}),i.a.createElement("stop",{offset:.999,stopColor:"#4168c9",stopOpacity:0}))),w||(w=i.a.createElement("path",{fill:"url(#yOrnnhliCrdS2gy~4tD8mb)",d:"M34.017,41.99l-20,0.019c-4.4,0.004-8.003-3.592-8.008-7.992l-0.019-20 c-0.004-4.4,3.592-8.003,7.992-8.008l20-0.019c4.4-0.004,8.003,3.592,8.008,7.992l0.019,20 C42.014,38.383,38.417,41.986,34.017,41.99z"})),S||(S=i.a.createElement("path",{fill:"#fff",d:"M24,31c-3.859,0-7-3.14-7-7s3.141-7,7-7s7,3.14,7,7S27.859,31,24,31z M24,19c-2.757,0-5,2.243-5,5 s2.243,5,5,5s5-2.243,5-5S26.757,19,24,19z"})),b||(b=i.a.createElement("circle",{cx:31.5,cy:16.5,r:1.5,fill:"#fff"})),C||(C=i.a.createElement("path",{fill:"#fff",d:"M30,37H18c-3.859,0-7-3.14-7-7V18c0-3.86,3.141-7,7-7h12c3.859,0,7,3.14,7,7v12 C37,33.86,33.859,37,30,37z M18,13c-2.757,0-5,2.243-5,5v12c0,2.757,2.243,5,5,5h12c2.757,0,5-2.243,5-5V18c0-2.757-2.243-5-5-5H18z"})))},L=i.a.forwardRef((e,a)=>i.a.createElement(B,k({svgRef:a},e)));var I,T,x,N,R;t.p;function q(){return(q=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}const F=e=>{let{svgRef:a,...t}=e;return i.a.createElement("svg",q({viewBox:"0 0 48 48",width:"48px",height:"48px",clipRule:"evenodd",ref:a},t),I||(I=i.a.createElement("path",{fill:"#fff",d:"M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"})),T||(T=i.a.createElement("path",{fill:"#fff",d:"M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"})),x||(x=i.a.createElement("path",{fill:"#cfd8dc",d:"M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"})),N||(N=i.a.createElement("path",{fill:"#40c351",d:"M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"})),R||(R=i.a.createElement("path",{fill:"#fff",fillRule:"evenodd",d:"M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z",clipRule:"evenodd"})))},P=i.a.forwardRef((e,a)=>i.a.createElement(F,q({svgRef:a},e)));t.p;var O=function(){return i.a.createElement("div",{className:"social-links"},i.a.createElement("a",{href:"https://www.facebook.com/YourPage",target:"_blank",rel:"noopener noreferrer","aria-label":"Facebook"},i.a.createElement(E,null)),i.a.createElement("a",{href:"https://www.instagram.com/YourPage",target:"_blank",rel:"noopener noreferrer","aria-label":"Instagram"},i.a.createElement(L,null)),i.a.createElement("a",{href:"https://wa.me/YourWhatsAppNumber",target:"_blank",rel:"noopener noreferrer","aria-label":"WhatsApp"},i.a.createElement(P,null)))},j=t(8),H=t.n(j);var D=function(){return i.a.createElement("main",{className:"main-content"},i.a.createElement(O,null),i.a.createElement("div",{className:"inspiring-image-container"},i.a.createElement("img",{src:H.a,alt:"Inspiring",className:"inspiring-image"})),i.a.createElement(f,null),i.a.createElement("a",{href:"/faq",className:"back-to-main"},"Frequently Asked Questions"))};var W=function(){return i.a.createElement("footer",null,i.a.createElement("p",null,"\xa9 ",(new Date).getFullYear()," My Education Site. All rights reserved."))};t(22);var U=function(){return i.a.createElement("div",{className:"faq-page"},i.a.createElement("h1",null,"Frequently Asked Questions (FAQ)"),i.a.createElement("section",{className:"faq-section"},i.a.createElement("article",{className:"faq-article"},i.a.createElement("h3",null,"What types of programs are available in Estonia and Latvia?"),i.a.createElement("p",null,"In Estonia and Latvia, you can choose from a wide range of academic programs including arts, engineering, IT, business, humanities, and environmental sciences. Whether you're targeting a bachelor's, master's, or PhD, these countries offer courses that are bound to ignite your intellectual passion.")),i.a.createElement("article",{className:"faq-article"},i.a.createElement("h3",null,"Is it necessary to know Estonian or Latvian to study there?"),i.a.createElement("p",null,"Knowing the local language isn't mandatory for your studies, as many programs are available in English, particularly at the master's and PhD levels. Yet, immersing yourself in Estonian or Latvian can certainly enrich your overall experience.")),i.a.createElement("article",{className:"faq-article"},i.a.createElement("h3",null,"How long does the application process usually take?"),i.a.createElement("p",null,"The university application process varies, taking from a few weeks to several months, depending on the university and program. This period is a time of anticipation and hope, culminating in the joy of acceptance.")),i.a.createElement("article",{className:"faq-article"},i.a.createElement("h3",null,"What documents are required for the application?"),i.a.createElement("p",null,"Your application will generally need a passport, academic transcripts, proof of language proficiency (like IELTS scores), recommendation letters, and a motivational letter, presenting a comprehensive picture of your academic journey.")),i.a.createElement("article",{className:"faq-article"},i.a.createElement("h3",null,"How do I prepare for the university interview?"),i.a.createElement("p",null,"For your university interview, thorough research about the university and program, along with practicing common interview questions, will help you confidently express your passion and suitability for the program.")),i.a.createElement("article",{className:"faq-article"},i.a.createElement("h3",null,"What tips do you have for writing a strong motivational letter?"),i.a.createElement("p",null,"In your motivational letter, narrate your academic and career aspirations, your reasons for choosing the program, and what makes you an ideal candidate. A blend of honesty, personal touch, and enthusiasm will make your letter stand out.")),i.a.createElement("article",{className:"faq-article"},i.a.createElement("h3",null,"How can I ensure my visa application is successful?"),i.a.createElement("p",null,"To ensure a successful visa application, make sure to gather all the necessary documents, accurately complete forms, and provide proofs of your student status and financial stability. A meticulous approach here is key to unlocking your study abroad journey.")),i.a.createElement("article",{className:"faq-article"},i.a.createElement("h3",null,"What should I know about tuition fee payment and financial planning?"),i.a.createElement("p",null,"Understanding tuition fees, living costs, and exploring options like scholarships or part-time work are essential for financial planning. A well-thought-out plan is crucial for a seamless educational experience.")),i.a.createElement("article",{className:"faq-article"},i.a.createElement("h3",null,"How can I best prepare for living in a new country?"),i.a.createElement("p",null,"Preparing for life in a new country involves learning about local culture and customs, connecting with fellow students, securing accommodation, and effective budgeting. It's an exciting journey of discovery and adaptation.")),i.a.createElement("article",{className:"faq-article"},i.a.createElement("h3",null,"What are the common challenges international students face and how can I overcome them?"),i.a.createElement("p",null,"International students often encounter challenges like culture shock and homesickness. Overcoming these involves staying open-minded, building a support network, and actively participating in local activities and communities.")),i.a.createElement("article",{className:"faq-article"},i.a.createElement("h3",null,"What is the cost of living like in Estonia and Latvia?"),i.a.createElement("p",null,"Estonia and Latvia are known for their affordability. With options for budget-friendly housing and eating, your expenses here can be managed more effectively compared to many Western European countries.")),i.a.createElement("article",{className:"faq-article"},i.a.createElement("h3",null,"Are there scholarships available for international students?"),i.a.createElement("p",null,"Both Estonia and Latvia offer a range of scholarships for international students, from tuition waivers to living expense stipends. We assist you in finding the right scholarship that aligns with your needs and academic goals.")),i.a.createElement("article",{className:"faq-article"},i.a.createElement("h3",null,"How is the student life in Estonia and Latvia?"),i.a.createElement("p",null,"Student life in Estonia and Latvia is vibrant and culturally rich, offering a blend of educational experiences, social activities, and outdoor adventures, creating an environment where students from around the world feel welcomed and engaged.")),i.a.createElement("article",{className:"faq-article"},i.a.createElement("h3",null,"What are the visa requirements for studying in Estonia or Latvia?"),i.a.createElement("p",null,"To study in Estonia or Latvia, you'll need a student visa, for which you must provide proof of admission, financial stability, and health insurance. Our guidance simplifies this process, helping you navigate the necessary steps with ease.")),i.a.createElement("article",{className:"faq-article"},i.a.createElement("h3",null,"Can I work while I study in Estonia or Latvia?"),i.a.createElement("p",null,"In Estonia and Latvia, students are allowed to work part-time alongside their studies. This opportunity helps in gaining practical experience and managing living expenses, balancing academic commitments with work responsibilities.")),i.a.createElement("article",{className:"faq-article"},i.a.createElement("h3",null,"What post-graduation opportunities are there in Estonia and Latvia?"),i.a.createElement("p",null,"Post-graduation, Estonia and Latvia offer numerous career opportunities, especially in growing sectors like technology and innovation. The welcoming policies of these countries also support those who wish to stay and work after completing their studies.")),i.a.createElement("article",{className:"faq-article"},i.a.createElement("h3",null,"How safe are Estonia and Latvia for international students?"),i.a.createElement("p",null,"Estonia and Latvia are safe countries with low crime rates and friendly communities, providing a secure environment for international students. Awareness and common sense further ensure a safe and enjoyable study experience.")),i.a.createElement("article",{className:"faq-article"},i.a.createElement("h3",null,"What is the climate like in Estonia and Latvia?"),i.a.createElement("p",null,"Experiencing all four seasons, Estonia and Latvia offer a diverse climate. From snowy winters ideal for cozy indoor activities to warm summers perfect for exploring the outdoors, the weather here adds to the richness of your study abroad experience.")),i.a.createElement("article",{className:"faq-article"},i.a.createElement("h3",null,"Can I travel easily from Estonia or Latvia to other European countries?"),i.a.createElement("p",null,"Studying in Estonia or Latvia positions you perfectly for exploring Europe. Their strategic locations make traveling to other European countries easy, allowing for exciting weekend trips and cultural explorations.")),i.a.createElement("article",{className:"faq-article"},i.a.createElement("h3",null,"How accessible are healthcare services for students?"),i.a.createElement("p",null,"Healthcare services in Estonia and Latvia are accessible and efficient, ensuring students have access to necessary medical care. We recommend securing health insurance to facilitate a smooth healthcare experience during your studies.")),i.a.createElement("article",{className:"faq-article"},i.a.createElement("h3",null,"What are the accommodation options for students?"),i.a.createElement("p",null,"Students in Estonia and Latvia can choose from a variety of housing options, including university dormitories and private apartments. These options cater to different preferences and budgets, ensuring you find a place that feels like home.")),i.a.createElement("article",{className:"faq-article"},i.a.createElement("h3",null,"How is the food in Estonia and Latvia?"),i.a.createElement("p",null,"The local cuisines of Estonia and Latvia offer a delightful gastronomic experience, combining traditional flavors with modern culinary trends. From savory dishes to delectable pastries, the food here is sure to satisfy diverse palates.")),i.a.createElement("article",{className:"faq-article"},i.a.createElement("h3",null,"Are there opportunities for internships or research while studying?"),i.a.createElement("p",null,"Many educational programs in Estonia and Latvia incorporate practical elements like internships and research projects, providing valuable hands-on experience that complements your academic learning and enhances your career prospects.")),i.a.createElement("article",{className:"faq-article"},i.a.createElement("h3",null,"What kind of support services are available for international students?"),i.a.createElement("p",null,"Estonia and Latvia's universities offer comprehensive support services for international students, ranging from academic counseling to assistance with cultural adaptation, ensuring a smooth and enriching educational journey."))),i.a.createElement("a",{href:"/",className:"back-to-main"},"Back to Main Page"))};var z=function(){return i.a.createElement(l.a,null,i.a.createElement("nav",{className:"navbar"},i.a.createElement(l.b,{to:"/"},"Home"),i.a.createElement(l.b,{to:"/faq"},"FAQ")),i.a.createElement(d,null)," ",i.a.createElement(c.c,null,i.a.createElement(c.a,{path:"/",element:i.a.createElement(D,null)}),i.a.createElement(c.a,{path:"/faq",element:i.a.createElement(U,null)})),i.a.createElement(W,null)," ")};var Y=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,24)).then(a=>{let{getCLS:t,getFID:n,getFCP:i,getLCP:r,getTTFB:o}=a;t(e),n(e),i(e),r(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(z,null))),Y()}],[[9,1,2]]]);
//# sourceMappingURL=main.319f49b2.chunk.js.map