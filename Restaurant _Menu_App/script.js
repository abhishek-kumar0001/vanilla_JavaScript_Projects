// items
const menu = [
    {
        id: 1,
        name: "Buttermilk Pancake",
        category: "breakfast",
        img: "./assets/item1_Image.jpeg",
        price: 15.99,
        text: "Buttermilk pancakes, though sometimes described as a sweet dessert, can be eaten with savory toppings and all kinds of side dishes."

    },
    {
        id: 2,
        name: "French Toast",
        category: "breakfast",
        img: "./assets/item2_Image.png",
        price: 13.99,
        text: "Bread as hard as a rock? There’s no better recipe than French toast to use all that stale bread."

    },
    {
        id: 3,
        name: "Scrambled Eggs",
        category: "lunch",
        img: "./assets/item3_Image.jpg",
        price: 10.99,
        text: "Scrambled eggs are one of the most common lunch, not only in America but around the world as well."

    },
    {
        id: 4,
        name: "Cinnamon Rolls",
        category: "dinner",
        img: "./assets/item4_Image.jpg",
        price: 16.99,
        text: "Now this recipe, in particular, is a crowd favorite because it lets you raise your dough overnight."

    },
    {
        id: 5,
        name: "English Muffin",
        category: "breakfast",
        img: "./assets/item5_Image.png",
        price: 20.99,
        text: "English muffin toasts are some of the quickest breakfasts you can put together."

    },
    {
        id: 6,
        name: "Avocado Toast",
        category: "breakfast",
        img: "./assets/item6_Image.png",
        price: 12.99,
        text: "Avocado toast might not be everyone’s favorite, but as one of the healthiest breakfast meals around, it certainly has an audience."

    },
    {
        id: 7,
        name: "Hash Browns",
        category: "lunch",
        img: "./assets/item7_Image.jpg",
        price: 17.99,
        text: "Hash browns, or fried shredded potatoes, are not necessarily American lunch staples on their own."

    },
    {
        id: 8,
        name: "Belgian Waffles",
        category: "lunch",
        img: "./assets/item8_Image.jpeg",
        price: 22.99,
        text: "Kids absolutely love Belgian waffles because they’re such sweet treats."

    },
    {
        id: 9,
        name: "Peanut Butter Cookies",
        category: "dinner",
        img: "./assets/item9_Image.png",
        price: 20.99,
        text: "More often than not, Americans prefer sweet breakfasts over savory food options."

    },
    {
        id: 10,
        name: "Oatmeal",
        category: "dinner",
        img: "./assets/item10_Image.png",
        price: 25.99,
        text: "Oatmeals can be eaten on their own, but you can also put any toppings you like."

    },
    {
        id: 11,
        name: "Fruit Smoothie",
        category: "shakes",
        img: "./assets/item11_Image.jpg",
        price: 18.99,
        text: "Some people like mixing berries with bananas. Others throw in protein powder as well."

    },
    {
        id: 12,
        name: "Croissants",
        category: "lunch",
        img: "./assets/item12_Image.jpg",
        price: 13.99,
        text: "However, since it’s incredibly light and airy, eating this on its own for lunch might not suffice for some."

    },
    {
        id: 13,
        name: "French Toast Casserole",
        category: "breakfast",
        img: "./assets/item13_Image.jpg",
        price: 14.99,
        text: "French toasts are good. But if there are just too many mouths to feed, you’ll be late for work before you know it."

    },
    {
        id:  14,
        name: "Bacon and Eggs",
        category: "lunch",
        img: "./assets/item14_Image.jpg",
        price: 18.99,
        text: "When it comes to American lunch, bacon and eggs take the cake fair and square! Why, they’re almost included in every lunch staple."

    },
    {
        id: 15,
        name: "Burritos",
        category: "dinner",
        img: "./assets/item15_Image.jpg",
        price: 25.99,
        text: "Looking for a dish that makes a filling meal in the night? Then take dinner burritos as a perfect example."

    },
    {
        id: 16,
        name: "Sausage",
        category: "dinner",
        img: "./assets/item16_Image.jpg",
        price: 15.99,
        text: "Paired with fried eggs, bacon, and even pancakes, the dinner sausage is one of the classic American dinner foods that makes a filling meal."

    },
];

const sectionCenter = document.querySelector(".sectionCenter");
const btnContainer = document.querySelector(".btnContainer");

// load items
window.addEventListener ("DOMContentLoaded", (e)=>{
    displayMenuItems(menu);
    displayMenuBtns();
    
});


function displayMenuItems(menuItems){
    let displayMenu = menuItems.map((item)=>{
        return `<article class="menuItem">
                    <img src=${item.img} class="photo" alt=${item.name}>
                    <div class="itemInfo">
                        <header>
                            <h4>${item.name}</h4>
                            <h4 class="price">$${item.price}</h4>
                        </header>
                        <p class="itemText">${item.text}</p>
                    </div>
                </article>`;
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
}

function displayMenuBtns(){
    const categories = menu.reduce((values,item)=>{
        if(!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },["all"]);

    const categoryBtns = categories.map((category)=>{
        return `<button class="filterBtn" type="button" data-id=${category}>
        ${category}
        </button>`;
    }).join("")
    btnContainer.innerHTML = categoryBtns;
    const filterBtns = btnContainer.querySelectorAll(".filterBtn");
    console.log(categoryBtns);
    
    // add active class initial in all button
    filterBtns.forEach((filteBtn)=>{
        if(filteBtn.dataset.id === "all"){
            addActiveClass(filteBtn)
        }
    })

    // filter items
    filterBtns.forEach((btn)=>{
        btn.addEventListener("click",(e)=>{
            addActiveClass(e.currentTarget);
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter((menuItem)=>{
                if (menuItem.category === category){
                    return menuItem;
                }
            });
            if(category === "all"){
                displayMenuItems(menu);
            }
            else{
                displayMenuItems(menuCategory);
            }
        });
    });

    // add active class in current clicked button
    function addActiveClass(currentBtn){
        filterBtns.forEach((btn)=>{
            btn.classList.remove("active")
        })
        currentBtn.classList.add("active");
    
    }
}


