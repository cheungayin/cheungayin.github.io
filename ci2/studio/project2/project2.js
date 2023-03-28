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
        /* const audio = document.createElement('audio'); */

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
        div.appendChild(a);
        div.appendChild(p2);
        div.appendChild(p3);
        div.appendChild(p4);
        div.appendChild(p5);
        div.appendChild(p6);
        div.appendChild(p7);
        div.appendChild(p8);
        div.appendChild(p9);
        /* div.appendChild(audio); */
        cafedata.appendChild(div);
        });
    })
    .catch(error => console.error(error));
