import nav from "../scripts/component/nav.js";
import father from "../scripts/component/father.js";


export default function home(){
    document.body.innerHTML = ""
    document.body.append(nav(),father())
}