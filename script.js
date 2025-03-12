const form = document.querySelector("form");
const data = document.querySelector(".data");
const item_title = document.querySelector("h1");
const summary_item = document.querySelector("summary");
const image_item = document.querySelector("img");
const link_item = document.querySelector("a");
const input = document.querySelector("input");


form.onsubmit = async function (e) {
    e.preventDefault();

    try {
        const search = input.value;
        const apiLink = `https://en.wikipedia.org/api/rest_v1/page/summary/${search}`;
        const getData = await fetch(apiLink);
        const json = await getData.json();
        link_item.style.display = "block";
        image_item.style.display = "flex";

        item_title.innerText = json.title;
        summary_item.innerText = json.extract || "";
        image_item.setAttribute("src", json.thumbnail.source);
        link_item.setAttribute("href", json.content_urls.desktop.page);
    }catch(error){
        image_item.style.display = "none";
        link_item.style.display = "none";
        console.log(error)
    }
}

// const url = `https://en.wikipedia.org/api/rest_v1/page/summary/pakistan`;

// async function test() {
//     try {
//         const getData = await fetch(url);
//         const json = await getData.json();
//         console.log(jsno.title)
//         console.log(json.extract)
//         console.log(json.content_urls.desktop.page)
//         console.log(json.thumbnail.source)
//     } catch (error) {
//         console.log(error);
//     }
// }
// test();