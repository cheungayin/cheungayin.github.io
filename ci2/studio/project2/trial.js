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


// what i tried here didn't work but keeping these to know what i didn't do right / just as a record

fetch('kaigo.json')
    .then(response => response.json())
    .then(data => {
        const section = document.querySelector('section');

        for (const person of people){
            const myArticle = document.createElement('article')
            const myPara1 = document.createElement('p');
            const myPara2 = document.createElement('p');
            const myPara3 = document.createElement('p');
            const myPara4 = document.createElement('p');
            const myPara5 = document.createElement('p');
            const myPara6 = document.createElement('p');


            myPara1.textContent = `gender: ${person.gender}`;
            myPara2.textContent = `appearance: ${person.appearance}`;
            myPara3.textContent = `img: ${person.img}`;
            myPara4.textContent = `name: ${person.name}`;
            myPara5.textContent = `order: ${person.order}`;
            myPara6.textContent = notes;

            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            myArticle.appendChild(myPara5);
            myArticle.appendChild(myPara6);
        
            section.appendChild(myArticle);
        }
    })

/* function populatePeople(obj){
        const section = document.querySelector('section');
        const people = obj.members;

        for (const person of people){
            const myArticle = document.createElement('article')
            const myPara1 = document.createElement('p');
            const myPara2 = document.createElement('p');
            const myPara3 = document.createElement('p');
            const myPara4 = document.createElement('p');
            const myPara5 = document.createElement('p');
            const myPara6 = document.createElement('p');


            myPara1.textContent = `gender: ${person.gender}`;
            myPara2.textContent = `appearance: ${person.appearance}`;
            myPara3.textContent = `img: ${person.img}`;
            myPara4.textContent = `name: ${person.name}`;
            myPara5.textContent = `order: ${person.order}`;
            myPara6.textContent = notes;

            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);
            myArticle.appendChild(myPara5);
            myArticle.appendChild(myPara6);
        
            section.appendChild(myArticle);
        }
} */




/* reference from: https://github.com/core-interaction-s23/collection */


/* (didn't work :/)

// function to render your items
const renderItems = (collection) => {
    // the `ul` where the items will be inserted
    const collectionList = document.getElementByClass('collection')

    // loop throuhg each item in the colelction array
    collection.forEach(item => {
        const listItem = document.createElement('li'); // make the `li`

        // you can make eachg element inside of that
        const itemImage = document.createElement('img') // add an image
        itemImage.src = item.img // set the `src` attribute from the JSON
        listItem.appendChild(itemImage) // and add that too

        // this can get annoying, so we can use “template literals” instead
        const itemDetails = 
            `
                <p>gender: ${item.gender}</p>
                <p>appearance: ${item.appearance}</p>
                <p>name: ${item.name}</p>
                <p>order: ${item.order}</p>
                <p>${item.notes}</p>
            `
        listItem.insertAdjacentHTML('beforeend', itemDetails) // which can we then insert

        // you can build logic from your data, too
        if (!item.alsoWriter){ // if this is `false`
            listItem.classList.add('faded') // add this class to the whole `li`
        }
        
        collectionList.appendChild(listItem) // then add the whole `li` into the `ul`
    })
}

// fetch gets your JSON file
fetch('kaigon.json')
    .then(response => response.json())
    .then(collection => {
        // and passes the data to the function, above!
        renderItems(collection.reverse()) // in reverse order
    })

*/ 