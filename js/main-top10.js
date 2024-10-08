import CardVideoTop10 from "./custom-element/card-video-top10.js";
import CardVideoTop1 from "./custom-element/card-video-top1.js";
import data_dummy from "./dummydata.js";

document.addEventListener('DOMContentLoaded', () => {
    console.log("berhasil terhubung")
    // mengambil data rank 1
    const dataRank1 = data_dummy.filter(item => item.rank == 1);
    console.log(dataRank1)
    const headerTitle = document.getElementById('header-top10');
    const cardTop1Element = document.createElement('card-video-top1');
    cardTop1Element.result = dataRank1[0];
    headerTitle.appendChild(cardTop1Element);
    
    // Mengambil data yang memiliki rank 2 hingga 9
    const filteredData = data_dummy.filter(item => item.rank >= 2 && item.rank <= 9);
    const sortedData = filteredData.sort((a, b) => a.rank - b.rank);
    let code_data = 0;
    sortedData.forEach(data => {
        if (code_data === 0) {
            data.color = 'color-p'
            code_data = 1
        } else {
            data.color = 'color-b'
            code_data = 0
        }
        const cardElement = document.createElement('card-video-top10');
        cardElement.classList.add('row');
        cardElement.result = data;
        document.getElementById('video-cards-container').appendChild(cardElement);
    });
    // mengambil data rank 10
    const datake10 = data_dummy.filter(item => item.rank == 10);
    datake10[0].color = 'color-10'
    const cardElement = document.createElement('card-video-top10');
    cardElement.classList.add('row');
    cardElement.result = datake10[0];
    document.getElementById('video-cards-container').appendChild(cardElement);

})