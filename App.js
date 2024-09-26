Date = [
    { name: "فلافل البركة", location: "شارع الصناعة", rate: 4.2 },
    { name: "فرايد تشكين", location: " شارع فلسطين", rate: 4.1 },
    { name: "سوبر جكن", location: "البنوك-الشارع التجاري", rate: 3.7 },
    { name: "اورجنال جكن", location: "شارع الربيع", rate: 4.8 },
    { name: "جكن اكسبريس", location: "المنصور - شارع 14 رمضان", rate: 2.8 },
];

console.log("the array is:", Date);

Date.map(function (item) {
    console.log(item);
    document.write(item.name, item.location, item.rate);
});
