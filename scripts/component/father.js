import comket from "../../comket/html.js";
import OurServices from "../component/OurServices.js";
import ExplorePrograms from "../component/ExplorePrograms.js";

export default function father(){
    let father = comket.div({class:"father"})
    father.append(OurServices(),ExplorePrograms())
    return father
}