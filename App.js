Date = [
    { name: "فلافل البركة", location: "شارع الصناعة", rate: 4.2 },
    { name: "فرايد تشكين", location: " شارع فلسطين", rate: 4.1 },
    { name: "سوبر جكن", location: "البنوك-الشارع التجاري", rate: 3.7 },
    { name: "اورجنال جكن", location: "شارع الربيع", rate: 4.8 },
    { name: "جكن اكسبريس", location: "المنصور - شارع 14 رمضان", rate: 2.8 },
];


const cardContainer = document.getElementsByClassName('container')[0];


function createCard() {      
    Date.map(function (item) {
        const elementData = document.createElement('div');
        elementData.classList.add('card');
        elementData.innerHTML = `
                <div class="card-image">
                    <img src="https://cdn.pixabay.com/photo/2023/11/22/21/11/ai-generated-8406464_1280.png" alt="">
                </div>
                <div class="card-text">
                    <h2 class="card-title">${item.name}</h2>
                    <p class="card-body">${item.location}</p>
                </div>
                <div class="card-rate">${item.rate}
                    <i class="fa fa-star-o" style="font-size:20px;color:rgb(255, 238, 0);padding:5px;"></i>
                </div>
        `
        cardContainer.appendChild(elementData);
    })
}
createCard();


