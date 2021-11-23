import {Genre, bData} from "./list";
const render = () =>{
    // Genre: Fantastine, Kriminaline, Grozine
    for(let i =0;i<3;i++) {
        document.getElementsByClassName('btn btn-link btn-block text-center')[i].innerText =Genre()[i]+" Literatūra";
    // Books(4) to each Genre
        let cBody = document.getElementsByClassName('card-body');
        let ul = document.createElement('ul');
        cBody[i].appendChild(ul);
        for(let i=0;i<4;i++) {
            let h3 = document.createElement('h3');
            h3.innerText = 'Knyga ' + '#' + (i + 1);
            ul.appendChild(h3);
            let button = document.createElement("button");
            h3.appendChild(button);
            button.setAttribute("class","btn-link text-center");
            button.innerText = "Add to Wish List";

            for(let j= 0;j<5;j++) {
    // Book data for each book in the genre
                let li = document.createElement('li');
                ul.appendChild(li);
            }
        }

    }
    for(let i = 0;i<60;i++) {
        document.getElementsByTagName('li')[i].innerText = bData()[i];
    }

}
export default render