import comket from "../../comket/html.js";
import Section1 from "../component/Section1.js";
import Section2 from "./Section2.js";
import Section3 from "./Section3.js"; 
import Section4 from "./Section4.js";
import Section5 from "./Section5.js";
import Section6 from "./Section6.js";

export default function father(){
    let father = comket.div({class:"father"})
    father.append(Section1(),Section2(),Section3(),Section4(),Section5(),Section6())
    return father
}