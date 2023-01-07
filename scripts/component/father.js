import comket from "../../comket/html.js";
import OurServices from "../component/OurServices.js";

export default function father(){
    let father = comket.div({class:"father"})
    father.append(OurServices(),)
    return father
}