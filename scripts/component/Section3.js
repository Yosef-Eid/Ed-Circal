import comket from "../../comket/html.js";


export default function Section3(){
    let Section3 = comket.div({class:"Section3",
                            children:[

                                comket.p({class:"Section3",text:"Tutors"}),
                                comket.h1({class:"Meet",text:"Meet the Heroes"}),
                                comket.p({class:"on-ed",text:"On Ed-Circle, instructors from all over the world instruct millions of students. We offer the knowledge and abilities."}),
                                comket.div({class:"Section3-cards",
                                children:[ 
                                    comket.div({class:"Section3-cards-1",
                                        children:[
                                        comket.img({src:"medea/Avatar.png"}),
                                        comket.h3({text:"Theresa Webb"}),
                                        comket.p({text:"Application Support Analyst Lead "}),
                                        comket.p({class:"Former",text:"Former co-founder of Opendoor. Early staff at Spotify and Clearbit."}),
                                        comket.div({class:"Section3-cards-1-icon",children:[comket.img({src:"medea/towetr.png"}),comket.img({src:"medea/in.png"}),]})]}),

                                        comket.div({class:"Section3-cards-1",
                                        children:[
                                        comket.img({src:"medea/c2.png"}),
                                        comket.h3({text:"Courtney Henry"}),
                                        comket.p({text:"Director, Undergraduate Analytics and Planning"}),
                                        comket.p({class:"Former",text:"Lead engineering teams at Figma, Pitch, and Protocol Labs."}),
                                        comket.div({class:"Section3-cards-1-icon",children:[comket.img({src:"medea/towetr.png"}),comket.img({src:"medea/in.png"}),]})]}),


                                        comket.div({class:"Section3-cards-1",
                                        children:[
                                        comket.img({src:"medea/c3.png"}),
                                        comket.h3({text:"Albert Flores"}),
                                        comket.p({text:"Former PM for Linear, Lambda School, and On Deck."}),
                                        comket.div({style:{marginTop:"100px"},class:"Section3-cards-1-icon",children:[comket.img({src:"medea/towetr.png"}),comket.img({src:"medea/in.png"}),]})]}),

                                        
                                        comket.div({class:"Section3-cards-1",
                                        children:[
                                        comket.img({src:"medea/c4.png"}),
                                        comket.h3({text:"Marvin McKinney"}),
                                        comket.p({text:"Co-op & Internships Program & Operations Manager"}),
                                        comket.p({class:"Former",text:"Former frontend dev for Linear, Coinbase, and Postscript."}),
                                        comket.div({class:"Section3-cards-1-icon",children:[comket.img({src:"medea/towetr.png"}),comket.img({src:"medea/in.png"}),]})]}),


                                    ],

                            })
                            ]
    })
return Section3
}