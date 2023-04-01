import comket from "../../comket/html.js";


export default function Section6(){
    let Section6 = comket.div({class:"Section6",
                                children:[
                                    comket.div({class:"sectionTop",
                                        children:[
                                            comket.div({class:"top1",children:[comket.img({src:"medea/ed1.png"}),comket.p({text:"Top learning experiences that create more talent in the world."})]}),
                                            comket.div({class:"top2",children:[comket.span({text:"Product"}),comket.p({text:"Overview"}),comket.p({text:"Features"}),comket.p({text:"Solutions"}),comket.p({text:"Tutorials"}),comket.p({text:"Pricing"})]}),
                                            comket.div({class:"top3",children:[comket.span({text:"Company"}),comket.p({text:"About us"}),comket.p({text:"Careers"}),comket.p({text:"Press"}),comket.p({class:"News",text:"New"}),comket.p({text:"News"})]}),
                                            comket.div({class:"top4",children:[comket.span({text:"Social"}),comket.p({text:"Twitter"}),comket.p({text:"LinkedIn"}),comket.p({text:"GitHub"}),comket.p({text:"Dribbble"})]}),
                                            comket.div({class:"top5",children:[comket.span({text:"Legal"}),comket.p({text:"Terms"}),comket.p({text:"Privacy"}),comket.p({text:"Cookies"}),comket.p({text:"Contact"})]}),
                                            ]}),
                                            comket.div({class:"sectionBottom",
                                            children:[
                                                comket.p({text:"© 2022 Ed-Circle. All rights reserved."}),
                                                comket.div({class:"icons",children:[comket.img({src:"medea/towetr.png"}),comket.img({src:"medea/in.png"}),comket.img({src:"medea/facebook.png"}),comket.img({src:"medea/git.png"}),comket.img({src:"medea/web.png"})]})
                                            ]
                                        })
                                ]

})
return Section6
}





