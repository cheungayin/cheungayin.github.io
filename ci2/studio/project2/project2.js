// define our variables
let toggleMenu = document.querySelector(".mobile-menu");
let headerStatus = document.querySelector(".header");

// when user clicks on "menu", open and close the mobile navigation
toggleMenu.addEventListener( "click", () => {
    if (headerStatus.classList.contains("open")) {
        headerStatus.classList.remove("open");
    }
    else{
        headerStatus.classList.add("open");
    }
},
false,
);


fetch('./kaigo.json')
.then(response => response.json())
.then(data => {
    // Access the div element
    const kaigodata = document.getElementById('kaigodata');
            
    // Loop through the data and add each item to the div
    data.forEach(item => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const p6 = document.createElement('p');
    const img = document.createElement('img');
    /* const audio = document.createElement('audio'); */

    // Set the text content and href attributes for the link
    p.textContent = item.emoji;
    p2.textContent = 'gender: ' + item.gender;
    p3.textContent = 'appearance: ' + item.appearance;
    p4.textContent = item.name;
    p5.textContent = 'order: ' + item.order;
    p6.textContent = 'notes: ' + item.notes;
    img.src = "./img/" + item.img;
    /* audio.src = "audio/" + item.audio; */

    /* 
    * Onclick function
    * whenever a image is clicked
    * associated audio will be played
    */
    /* img.onclick = function() {
        audio.play();
    } */
    
    // Add the HTML tags to webpage
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(p4);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p5);
    div.appendChild(p6);
    /* div.appendChild(audio); */
    kaigodata.appendChild(div);
    });
})
.catch(error => console.error(error));


fetch('./dreamers.json')
.then(response => response.json())
.then(data => {
    // Access the div element
    const dreamersdata = document.getElementById('dreamersdata');
            
    // Loop through the data and add each item to the div
    data.forEach(item => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const p6 = document.createElement('p');
    const img = document.createElement('img');

    // Set the text content and href attributes for the link
    p.textContent = item.emoji;
    p2.textContent = 'gender: ' + item.gender;
    p3.textContent = 'appearance: ' + item.appearance;
    p4.textContent = item.name;
    p5.textContent = 'order: ' + item.order;
    p6.textContent = 'notes: ' + item.notes;
    img.src = "./img/" + item.img;
    
    // Add the HTML tags to webpage
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(p4);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p5);
    div.appendChild(p6);
    dreamersdata.appendChild(div);
    });
})
.catch(error => console.error(error));


fetch('./haven.json')
.then(response => response.json())
.then(data => {
    // Access the div element
    const havendata = document.getElementById('havendata');
            
    // Loop through the data and add each item to the div
    data.forEach(item => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const p6 = document.createElement('p');
    const img = document.createElement('img');

    // Set the text content and href attributes for the link
    p.textContent = item.emoji;
    p2.textContent = 'gender: ' + item.gender;
    p3.textContent = 'appearance: ' + item.appearance;
    p4.textContent = item.name;
    p5.textContent = 'order: ' + item.order;
    p6.textContent = 'notes: ' + item.notes;
    img.src = "./img/" + item.img;
    
    // Add the HTML tags to webpage
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(p4);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p5);
    div.appendChild(p6);
    havendata.appendChild(div);
    });
})
.catch(error => console.error(error));


fetch('./baxterst.json')
.then(response => response.json())
.then(data => {
    // Access the div element
    const baxterstdata = document.getElementById('baxterstdata');
            
    // Loop through the data and add each item to the div
    data.forEach(item => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const p6 = document.createElement('p');
    const img = document.createElement('img');

    // Set the text content and href attributes for the link
    p.textContent = item.emoji;
    p2.textContent = 'gender: ' + item.gender;
    p3.textContent = 'appearance: ' + item.appearance;
    p4.textContent = item.name;
    p5.textContent = 'order: ' + item.order;
    p6.textContent = 'notes: ' + item.notes;
    img.src = "./img/" + item.img;
    
    // Add the HTML tags to webpage
    div.appendChild(img);
    div.appendChild(p);
    div.appendChild(p4);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p5);
    div.appendChild(p6);
    baxterstdata.appendChild(div);
    });
})
.catch(error => console.error(error));

    
fetch('./cafeinfo.json')
.then(response => response.json())
.then(data => {
    // Access the div element
    const cafedata = document.getElementById('cafedata');
            
    // Loop through the data and add each item to the div
    data.forEach(item => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    const p2 = document.createElement('p');
    const p3 = document.createElement('p');
    const p4 = document.createElement('p');
    const p5 = document.createElement('p');
    const p6 = document.createElement('p');
    const p7 = document.createElement('p');
    const p8 = document.createElement('p');
    const p9 = document.createElement('p');
    const img = document.createElement('img');
    const a = document.createElement('a');

    // Set the text content and href attributes for the link
    a.textContent = item.shop;
    a.href = item.link;
    p2.textContent = 'date visited: ' + item.datevisited;
    p3.textContent = 'address: ' + item.address;
    p4.textContent = 'open hours: ' + item.openhours;
    p5.textContent = 'phone no.: ' + item.phonenumber;
    p6.textContent = 'what we aim to do: ' + item.description;
    p7.textContent = 'is there a bathroom? ' + item.bathroom;
    p8.textContent = 'what did i do and order? ' + item.whatididandorder;
    p9.textContent = 'my thoughts on the space: ' + item.notes;
    img.src = "./img/" + item.img;
    
    // Add the HTML tags to webpage
    div.appendChild(img);
    div.appendChild(a);
    div.appendChild(p2);
    div.appendChild(p3);
    div.appendChild(p4);
    div.appendChild(p5);
    div.appendChild(p6);
    div.appendChild(p7);
    div.appendChild(p8);
    div.appendChild(p9);
    cafedata.appendChild(div);
    });
})
.catch(error => console.error(error));


fetch('./alldata.json')
.then(response => response.json())
.then(data => {

    // add a click event listener to each button that will trigger a function to filter the data.
    /* 
    document.getElementById('allshops').addEventListener('click', filterData);
    document.getElementById('btnkaigo').addEventListener('click', filterData);
    document.getElementById('btndreamers').addEventListener('click', filterData);
    document.getElementById('btnhaven').addEventListener('click', filterData);
    document.getElementById('btnbaxter').addEventListener('click', filterData); 
    */
    
    /*
    const filterButtons = document.querySelectorAll('.filter .button');
    const alldata = document.getElementById('alldata');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('id');
            filterButtons.forEach(button => button.classList.remove('active'));
            button.classList.add('active');
            filterCollection(filter);
        });
    });
    */
    
    // Get the button elements and add event listeners
    const btn1 = document.getElementById('allshops');
    const btn2 = document.getElementById('btnkaigo');
    const btn3 = document.getElementById('btndreamers');
    const btn4 = document.getElementById('btnhaven');
    const btn5 = document.getElementById('btnbaxter');

    
    btn1.addEventListener('click', () => {
        filterData('allshops');
    });

    // Define filtering function
    function filterData(shop) {
        const filteredData = jsonData.filter(item => item.shop === shop);
        updatePage(filteredData);
    }

    // define function to update page with filtered data
    function updatePage(data) {
        // clear existing data on page
        // iterate through filtered data and create HTML elements
        // append new HTML elements to page
    }


    data.forEach(item => {
    const div = document.createElement('div');
    const p = document.createElement('p');
    
    p.textContent = item.emoji;

    div.appendChild(p);
    alldata.appendChild(div);
    });
})
.catch(error => console.error(error));



// fetch('./alldata.json')
// .then(response => response.json())
// .then(data => {
//     const alldata = document.getElementById('alldata');
//     const locations = [];

//     // extract the unique locations from the data
//     data.forEach(item => {
//         if (!locations.includes(item.shop)){
//             locations.push(item.shop);
//         }
//     });

//     // populate the filter buttons with the unique locations
//     const filtersContainer = document.getElementById('filters');

//     locations.forEach(location => {
//         const button = document.createElement('button');
//         button.textContent = location;
//         button.addEventListener('click', () => filterData(data, location));
//         filtersContainer.appendChild(button);
//       });




//     const div = document.createElement('div');
//     const p = document.createElement('p');
    
//     p.textContent = item.emoji;

//     div.appendChild(p);
//     alldata.appendChild(div);
//     });
// })
// .catch(error => console.error(error));


    // fetch('./alldata.json')
    // .then(response => response.json())
    // .then(data => {
    //     // Access the div element
    //     const alldata = document.getElementById('alldata');

    //     // Loop through the data and add each item to the div
    //     alldata
    //     .forEach(item => {
    //         const div = document.createElement('div');
    //         const p = document.createElement('p');

    //         p.textContent = item.emoji;

    //         /* 
    //         * Onclick function
    //         * whenever a image is clicked
    //         * associated audio will be played
    //         */

    //         /* p.onclick = function () {
    //             let clickedItem = item;
    //             const modal = document.querySelector("#myModal");
    //             const modalContent = `
    //             <div class="modal-content">
    //             <span class="close">&times;</span>
    //             <p id="modalPlace">location: ${clickedItem.shop}</p>
    //             <p id="modalGender">gender: ${clickedItem.gender}</p>
    //             <p id="modalAppearance">appearance: ${clickedItem.appearance}</p>
    //             <p id="modalName">name: ${clickedItem.name}</p>
    //             <p id="modalOrder">order: ${clickedItem.order}</p>
    //             <p id="modalNotes">notes: ${clickedItem.notes}</p>
    //             </div>
    //             `;

    //             // Add modal content to modal popup
    //             modal.innerHTML = modalContent;
    //             modal.style.zIndex = "999"; 
            
    //                 // Add event listener to close button
    //                 const closeButton = modal.querySelector(".close");
    //                 closeButton.addEventListener("click", () => {
    //                 modal.innerHTML = "";
    //                 modal.style.zIndex = "-1";
    //             });
    //         }; */
    //         // Add the HTML tags to webpage
    //         div.appendChild(p);
    //         alldata.appendChild(div);
    //     });
    // })

    // .catch(error => console.error(error));