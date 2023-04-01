import comket from "../../comket/html.js";


export default function Section2(){
    let Section2 = comket.div({class:"Section2",
                                        children:[

                                            // ••••••••••••••• ••••••••••••••• Explore •••••••••••••••• ••••••••••••••
                                            // ••••••••••••••• ••••••••••••••• Explore •••••••••••••••• ••••••••••••••

                                            comket.p({class:"Explore",text:"Explore Programs"}),


                                            // ••••••••••••••• ••••••••••••••• Our Most Popular Class •••••••••••••••• ••••••••••••••
                                            // ••••••••••••••• ••••••••••••••• Our Most Popular Class •••••••••••••••• •••••••••••••

                                            comket.h1({class:"OurMost",text:"Our Most Popular Class"}),


                                            // ••••••••••••••• ••••••••••••••• Let's join our famous class, the knowledge provided will definitely be useful for you. •••••••••••••••• •••••••••••••
                                            // ••••••••••••••• ••••••••••••••• Let's join our famous class, the knowledge provided will definitely be useful for you. •••••••••••••••• •••••••••••••

                                            comket.p({class:"Lets",text:"Let's join our famous class, the knowledge provided will definitely be useful for you."}),
                                            
                                            
                                            // ••••••••••••••• ••••••••••••••• Father Cards •••••••••••••••• ••••••••••••••
                                            // ••••••••••••••• ••••••••••••••• Father Cards •••••••••••••••• ••••••••••••••

                                            comket.div({class:"cards",
                                            children:[

                                                // ••••••••••••••• ••••••••••••••• card 1 •••••••••••••••• ••••••••••••••
                                                // ••••••••••••••• ••••••••••••••• card 1 •••••••••••••••• ••••••••••••••
                                                // ••••••••••••••• ••••••••••••••• card 1 •••••••••••••••• ••••••••••••••
                                        
                                                comket.div({class:"figmaCard",
                                                children:[comket.img({src:"medea/figma.png"}),
                                                comket.div({class:"text",
                                                children:[
                                                    comket.p({ class:"Design",text:"Design"}),
                                                            comket.div({ class:"figma-icon",children:[ comket.h1({text:"Figma UI UX Design.."}) , comket.img({src:"medea/Icon.png"}),]}),
                                                            comket.div({class:"textP",text:"Use Figma to get a job in UI Design, User Interface, User Experience design."}),
                                                            comket.img({src:"medea/star.png"}),
                                                            comket.div({class:"bottom",children:[
                                                                comket.div({class:"profile",
                                                                children:[comket.img({src:"medea/profile.png"}), comket.div({class:"name",children:[comket.h2({text:"Jane Cooper"}),comket.p({text:"2001 Enrolled"})]}),]}),
                                                                comket.h1({class:"h17",text:"$17.84"})
                                                            ]}),]}),]}),


                                                // ••••••••••••••• ••••••••••••••• card 2 •••••••••••••••• ••••••••••••••
                                                // ••••••••••••••• ••••••••••••••• card 2 •••••••••••••••• ••••••••••••••
                                                // ••••••••••••••• ••••••••••••••• card 2 •••••••••••••••• ••••••••••••••

                                                            comket.div({class:"LearnCard",
                                                children:[comket.img({src:"medea/Learn.png"}),
                                                comket.div({class:"text",
                                                children:[
                                                    comket.p({ class:"Design",text:"Design"}),
                                                            comket.div({ class:"figma-icon",children:[ comket.h1({text:"Learn With Shoaib"}) , comket.img({src:"medea/Icon.png"}),]}),
                                                            comket.div({class:"textP",text:"Design Web Sites and Mobile Apps that Your Users Love and Return to Again."}),
                                                            comket.img({src:"medea/star2.png"}),
                                                            comket.div({class:"bottom",children:[
                                                                comket.div({class:"profile",
                                                                children:[comket.img({src:"medea/profil2.png"}), comket.div({class:"name",children:[comket.h2({text:"Jenny Wilson"}),comket.p({text:"2001 Enrolled"})]}),]}),
                                                                comket.h1({class:"h17",text:"$8.99"})
                                                            ]}),]}),]}),
                                                            


                                                // ••••••••••••••• ••••••••••••••• card 3 •••••••••••••••• ••••••••••••••
                                                // ••••••••••••••• ••••••••••••••• card 3 •••••••••••••••• ••••••••••••••
                                                // ••••••••••••••• ••••••••••••••• card 3 •••••••••••••••• ••••••••••••••

                                                comket.div({class:"BuildingCard",
                                                children:[comket.img({src:"medea/Building.png"}),
                                                comket.div({class:"text",
                                                children:[
                                                    comket.p({ class:"Design",text:"Design"}),
                                                            comket.div({ class:"figma-icon",children:[ comket.h1({text:"Building User Interface.."}) , comket.img({src:"medea/Icon.png"}),]}),
                                                            comket.div({class:"textP",text:"Learn how to apply User Experience (UX) principles to your website designs."}),
                                                            comket.img({src:"medea/star3.png"}),
                                                            comket.div({class:"bottom",children:[
                                                                comket.div({class:"profile",
                                                                children:[comket.img({src:"medea/profil3.png"}), comket.div({class:"name",children:[comket.h2({text:"Esther Howard"}),comket.p({text:"2001 Enrolled"})]}),]}),
                                                                comket.h1({class:"h17",text:"$11.70"})
                                                            ]}),]}),]}), 
                                            ]}),
                                            

                                        /*••••••••••••••• ••••••••••••••• button •••••••••••••••• •••••••••••••• */

                                            comket.button({text:"Explore All Programs"})
                                        ]
                                })

    return Section2
}