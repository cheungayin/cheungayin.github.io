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


fetch('kaigo.json')
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
        const img = document.createElement('img');
        const audio = document.createElement('audio');

        // Set the text content and href attributes for the link
        p.textContent = 'gender: ' + item.gender;
        p2.textContent = 'appearance: ' + item.appearance;
        p3.textContent = item.name;
        p4.textContent = 'order: ' + item.order;
        p5.textContent = 'notes: ' + item.notes;
        img.src = "./img/kaigo/" + item.img;
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
        div.appendChild(p3);
        div.appendChild(p);
        div.appendChild(p2);
        div.appendChild(p4);
        div.appendChild(p5);
        div.appendChild(audio);
        kaigodata.appendChild(div);
        });
    })
    .catch(error => console.error(error));

    