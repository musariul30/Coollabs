import CardVideoNew from "./custom-element/card-video.js";
import data_dummy from "./dummydata.js";
import data_dummy_new from "./dummydata-new.js";

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const keyword = params.get('keyword');
    const mainElement = document.getElementsByTagName('main')[0];
    if(keyword){
        document.getElementsByClassName('judul-hal')[0].innerHTML = "" ;
        document.getElementsByClassName('judul-hal')[0].style.height = '20px !important';
        mainElement.innerHTML = "" ;   
        mainElement.classList.remove("no-result")
        mainElement.classList.add("result")
        const datadummy1 = data_dummy.filter(item => item.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
        const datadummy2 = data_dummy_new.filter(item => item.name.toLocaleLowerCase().includes(keyword.toLocaleLowerCase()));
        const dataall = datadummy1.concat(datadummy2);
        if (dataall.length > 0) {
            dataall.forEach(data => {
                const cardElement = document.createElement('card-video');
                cardElement.result = data;
                cardElement.classList.add('mb-5');
                mainElement.appendChild(cardElement);
            });
        } else {
            mainElement.classList.remove("result")
            mainElement.classList.add("no-result")
            const noResultsMessage = document.createElement('p');
            noResultsMessage.textContent = "We couldn't find what you were looking for!";
            noResultsMessage.style.textAlign = 'center';
            noResultsMessage.style.fontSize = '18px';
            noResultsMessage.style.color = 'white';
            mainElement.appendChild(noResultsMessage);
        }

        document.getElementById("searchText").value = keyword;
    }
    else {
        console.log("There are no keyword");
    }
})