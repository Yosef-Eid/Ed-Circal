import comket from "../../comket/html.js";



export default function Section1(){
    let Section1 = comket.div({class:"Section1",
                                    children:[
                                        comket.p({text:"Our Services", class:"our"}),
                                        comket.h1({text:"Fostering a playful & engaging learning environment", class:"Fostering"}),
                                        comket.div({class:"cards-in-Section1",
                                        children:[

                                            comket.div({class:"User-Experience",children:[
                                                comket.div({class:"icon-h1" , children:[comket.img({src:"medea/1.png"}),comket.h1({text:"User Experience"})]}),
                                                comket.div({class:"pk",children:[comket.p({text:"Lessons on design that cover the "}),comket.p({text:"most recent developments."})]}),
                                                comket.p({text:"Learn More >"})]}),

                                                comket.div({class:"Web-Development",children:[
                                                    comket.div({class:"icon-h1" , children:[comket.img({src:"medea/1.png"}),comket.h1({text:"Web Development"})]}),
                                                    comket.div({class:"pk",children:[comket.p({text:"Classes in development that cover the"}),comket.p({text:"most recent advancements in web."})]}),
                                                    comket.p({text:"Learn More >"})]}),

                                                    comket.div({class:"Marketing",children:[
                                                        comket.div({class:"icon-h1" , children:[comket.img({src:"medea/1.png"}),comket.h1({text:"User Experience"})]}),
                                                        comket.div({class:"pk",children:[comket.p({text:"Lessons on design that cover the "}),comket.p({text:"most recent developments."})]}),
                                                        comket.p({text:"Learn More >"})]}),

                                            
                                        ]
                                    })
                                    ],
                                })

    return Section1
}