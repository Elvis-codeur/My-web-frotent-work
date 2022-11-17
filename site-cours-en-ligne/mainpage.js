datas = [
    {
        image: "./assets/course-python.jpg",
        text: "The best Python course ever",
        auteur_image: "./assets/avatar/avatar-6.jpg",
        auteur_nom: "Marc Lensil",
    },
    {
        image: "./assets/course-javascript.jpg",
        text: "Javascript Course to make you master",
        auteur_image: "./assets/avatar/avatar-4.jpg",
        auteur_nom: "Allan Johnson",
    },
    {
        image: "./assets/course-graphql.jpg",
        text: "Get start your Journey with GraphQL",
        auteur_image: "./assets/avatar/avatar-4.jpg",
        auteur_nom: "Allan Johnson",
    },
    {
        image: "./assets/course-react.jpg",
        text: "Get started with React Js",
        auteur_image: "./assets/avatar/avatar-4.jpg",
        auteur_nom: "Allan Johnson",
    },
    {
        image: "./assets/course-wordpress.jpg",
        text: "Create beautiful website with React Js",
        auteur_image: "./assets/avatar/avatar-4.jpg",
        auteur_nom: "Allan Johnson",
    }
]


function htmlToElement(html = "") {
    let temp = document.createElement("div");
    temp.innerHTML = html.trim();
    return temp.firstChild;
}
var carrouselContainer = document.getElementById("carrousel-container");

var carrouselIndice = 0;



var htmlCode = `<div class="rounded-2xl shadow  sm:basis-[45%] lg:basis-[30%] lg:w-[30%]">
    <img class="rounded-t-2xl top-0" src="` + datas[carrouselIndice].image +`" alt="cours-javascript">

    <div class="px-2 py-2 text-gray-500">
        <p class="text-lg">`+ datas[carrouselIndice].text + `</p>

        <div class="flex justify-between py-2">
            <div class="flex flex-row align-middle gap-2 h-5 text-gray-500">
                <img src="./assets/icons/clock.svg" alt="clock" class="h-5">
                <p class="self-center top-[-5px] inline-block">3h 40</p>
            </div>

            <div class="flex flex-row align-middle gap-2 h-5 text-gray-500">
                <img src="./assets/icons/signal.svg" alt="clock" class="h-5 text-gray-500">
                <p class="self-center top-[-5px] inline-block">Intermediate</p>
            </div>
        </div>

        <div class="flex flex-row py-2 gap-2 text-gray-500">
            <div>
                <span class="fa fa-star checked "></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>

            </div>
            <div>13,455 reviews</div>
        </div>

        <div class="flex flex-row border-t py-4 my-2 pb-5 mb-5 justify-start gap-2 h-6 align-middle ">
            <img src="` + datas[carrouselIndice].auteur_image +`" alt="avatar-4" class="avatar h-6">
            <p>` + datas[carrouselIndice].auteur_nom + `</p>
        </div>

    </div>


</div>`;


document.body.onload = function (){
    for(i = 0; i < datas.length;i++)
    {
        carrouselContainer.appendChild(htmlToElement(htmlCode));
        carrouselIndice += 1;
    }
}


/*

document.getElementById("forward-arrow").addEventListener("click", function (event) {
   
    if (carrouselIndice < datas.length-1) {
        var d = carrouselContainer.firstElementChild;
        //console.log(d, d.innerHTML);

        if (d) {
            carrouselContainer.removeChild(d);
        }
        console.log(carrouselContainer.children.length + " after remove");

        carrouselContainer.appendChild(htmlToElement(htmlCode));

        //console.log(carrouselContainer.children.length);

        carrouselIndice += 1;
    }

    console.log(carrouselIndice);

})

document.getElementById("back-arrow").addEventListener("click", function (event) {
   
    if (carrouselIndice > 0) {
        // The last element we will remove 
        var last = carrouselContainer.lastElementChild;

        // The first element before which we will insert new element
        var first = carrouselContainer.firstElementChild;


        parentDiv = last.parentNode;
        //console.log(d, d.innerHTML);

        if (last) {
            carrouselContainer.removeChild(last);
        }
        console.log(carrouselContainer.children.length + " after remove");

        parentDiv.insertBefore(htmlToElement(htmlCode),first);

        //console.log(carrouselContainer.children.length);

        carrouselIndice -= 1;
    }
    console.log("back");
    console.log(carrouselIndice);

})

*/