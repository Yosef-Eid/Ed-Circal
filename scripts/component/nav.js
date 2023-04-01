import comket from "../../comket/html.js";


export default function nav(){
    let nav = comket.div({class:"nav",
                        children:[
                            comket.div({class:"navTop",
                            children:[
                                comket.div({class:"icon-and-input-and-option",
                                    children:[
                                        comket.div({class:"icon",children:[comket.Element("ion-icon", {name:"ellipse-outline" , class:"circle"}),comket.Element("ion-icon", {name:"ellipse-outline" , class:"circle1"}),comket.h1({text:"Ed-Circle."})] }),
                                        comket.div({class:"input" , children:[ comket.Element("ion-icon",{name:"search-outline", class:"icon-search"}), comket.input({type:"search"}), comket.button({text:"Explore ∨ "})]}) ,   
                                        comket.div({class:"option" , children:[comket.button({text:"Program"}),comket.button({text:"Enterprise"}),comket.button({text:"Universities"}),]})]}),
                                        comket.div({class:"signIn",children:[comket.button({class:"sign-in",text:"sign in"}),comket.button({text:"Create free account",class:"Create"}),]})
                            ]}),
                            comket.div({class:"navLeft-and-navRight",
                                        children:[
                                            comket.div({class:"navLeft",
                                            children:[
                                                        comket.div({class:"navLeft-text",children:[comket.h1({text:"Up Your",class:"black",}),comket.h1({text:"Skill",class:"purple1"}),comket.h1({text:"to",class:"black2"}),comket.h1({text:"Advance",class:"purple2"}),comket.h1({text:"Your",class:"black3"}),comket.h1({text:"Career",class:"purple3"}),comket.h1({text:"Path",class:"black4"}),
                                                        comket.p({ class:"p", text:"Provides you with the latest online learning system and material "}),
                                                        comket.p({text:"that help your knowledge growing."}),
                                                    ]}),   
                                            comket.div({class:"navLeft-button", children:[comket.button({text:"Get Started",class:"but1"}),comket.button({text:"Get Started",class:"but2"})]}),
                                            comket.div({class:"navLeft-icon",children:[
                                                comket.div({class:"ion-1", children:[comket.img({src:"medea/ion1.png"}),comket.p({text:"Public Speaking"})]}),
                                                comket.div({class:"ion-2", children:[comket.img({src:"medea/ion2.png"}),comket.p({text:"Career-Oriented"})]}),
                                                comket.div({class:"ion-3", children:[comket.img({src:"medea/ion3.png"}),comket.p({text:"Creative Thinking"})]}),
                                            ]}),
                                                
                                            ]

                                        }),
                                            comket.div({class:"navRight",
                                            children:[
                                                comket.div({class:"Online-Courses",children:[comket.img({src:"medea/Progress circle.png"}),comket.h1({text:"5K",}),comket.p({text:"Online Courses"})]}),
                                                comket.div({class:"Video-Courses",children:[comket.img({src:"medea/video curse.PNG"}),comket.div({class:"k2",children:[comket.h1({text:"2K+"}),comket.p({text:"VideoCourses"})]})]}),
                                                comket.div({class:"Tutors",children:[comket.img({src:"medea/tutors.PNG"}),comket.div({class:"k50",children:[comket.h1({text:"250+"}),comket.p({text:"Tutors"})]})]}),
                                                comket.div({class:"circle"}),
                                            comket.div({class:"circle-purple", children:[comket.img({src:"medea/woman.png"})]})

                                            ]}),]}),
                                        
                                            comket.div({class:"nav-bottom",
                                            children:[comket.div({class:"Collaboration",children:[comket.h1({text:"250+"}),comket.p({text:"Collaboration"})]}),
                                                        comket.div({class:"links",children:[comket.img({src:"medea/duolingo.png"}),comket.img({src:"medea/codecov.png"}),comket.img({src:"medea/user.png"}),comket.img({src:"medea/magic.png"})]}), 
                                        ]
                                        })
                                        


                            
                        ]})
    return nav
}