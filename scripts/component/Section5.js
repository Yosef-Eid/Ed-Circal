
import comket from "../../comket/html.js";






export default function Section5(){
    let Section5 = comket.div({class:"Section5",
                                children:[
                                    comket.h1({text:"Our recent blogs"}),
                                    comket.div({class:"cards-in-Section5",
                                        children:[
                                            comket.div({class:"nav-cards-in-Section5",
                                            children:[

                                                comket.div({class:"top",
                                                    children:[
                                                        comket.img({src:"medea/top.png"}),
                                                        comket.div({children:[
                                                            comket.h5({text:"November 16, 2014"}),
                                                            comket.h3({text:"Three Pillars of User Delight"}),
                                                            comket.p({text:"Delight can be experienced viscerally, behaviourally, and reflectively. A great design is ..."}),
                                                            comket.div({children:[comket.h6({text:"Research"}),comket.h5({text:"UI UX"}),]}),
                                                            ]}),]}),

                                                comket.div({class:"bottom",
                                                    children:[
                                                        comket.img({src:"medea/bottom.png"}),
                                                        comket.div({children:[
                                                            comket.h5({text:"September 24, 2017"}),
                                                            comket.h3({text:"UX Mapping Methods"}),
                                                            comket.p({text:"Visual-design principles can be applied consistently throughout the process of creating a polished UX map..."}),
                                                            comket.div({children:[comket.h6({text:"Research"}),comket.h5({text:"UI UX"}),]}),
                                                            ]}),]}),
                                            ]
                                        }),

                                            comket.div({class:"right-cards-in-Section5",
                                                        children:[
                                                            comket.img({src:"medea/nav.png",}),
                                                            comket.div({children:[
                                                                comket.h5({text:"March 13, 2014"}),
                                                                comket.h2({text:"Agile Development Projects and Usability"}),
                                                                comket.p({text:"Agile methods aim to overcome usability barriers in traditional development, but post new threats to user experience quality. "}),
                                                                comket.div({ class:"bot", children:[comket.h3({text:"Programming"}),comket.h4({text:"Research"}),comket.h6({text:"Developments"}),]}),
                                                            ]})
                                                        ]
                                        }),

                                        ]
                                })
                                ]
                        })

    return Section5
}










