import comket from "../../comket/html.js";



export default function Section4(){
    let Section4 = comket.div({class:"Section4",
                                children:[
                                    comket.img({src:"medea/ed.png"}),
                                    comket.h1({text:"Courses was fantastic! It is Master platform for those looking to start a new career, or need a refresher."}),
                                    comket.img({src:"medea/ja.png"}),
                                    comket.h4({text:"Jacob Jones"}),
                                    comket.p({text:"Student, National University"}),
                                    
                                ]
                    })

    return Section4              
}