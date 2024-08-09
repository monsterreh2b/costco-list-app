const menu = [
  {
    id: 0,
    title: "Gas",
    status: "all",
    price: 15.99,
    img: "./images/258s.png",
    desc: `gas`,
  },
  {
    id: 1,
    title: "Apples",
    status: "all",
    price: 15.99,
    img: "./images/jld-envy-2860.jpg",
    desc: `apple`,
  },
  {
    id: 2,
    title: "Sausages",
    status: "all",
    price: 13.99,
    img: "./images/apple-sausage.png",
    desc: `apple sausage`,
  },
  {
    id: 3,
    title: "Small Trash Bags",
    status: "all",
    price: 6.99,
    img: "./images/baby trash.webp",
    desc: `baby trash bags`,
  },
  {
    id: 4,
    title: "Baby Wipes",
    status: "all",
    price: 20.99,
    img: "./images/baby-wipes.png",
    desc: `babywipes`,
  },
  {
    id: 5,
    title: "Batteries",
    status: "all",
    price: 22.99,
    img: "./images/batteries.png",
    desc: `batteries `,
  },
  {
    id: 6,
    title: "Short Rib",
    status: "all",
    price: 18.99,
    img: "./images/braised-beef.png",
    desc: `braised beef short rib`,
  },
  {
    id: 7,
    title: "Burgers",
    status: "all",
    price: 8.99,
    img: "./images/angus-burger.png",
    desc: `burgers `,
  },
  {
    id: 8,
    title: "Carrot Juice",
    status: "all",
    price: 12.99,
    img: "./images/bolthouse-farms-organic-carrot-juice-3-x-32-fl-oz.png",
    desc: `carrot juice`,
  },
  {
    id: 9,
    title: "Chicken Bake",
    status: "all",
    price: 16.99,
    img: "./images/chicken-bake.png",
    desc: `cbake`,
  },
  {
    id: 10,
    title: "Cholula",
    status: "all",
    price: 16.99,
    img: "./images/cholula.png",
    desc: `cholula`,
  },
  {
    id: 11,
    title: "Cheese",
    status: "all",
    price: 16.99,
    img: "./images/finlandia.png",
    desc: `chz`,
  },
  {
    id: 12,
    title: "Coastal Berry",
    status: "all",
    price: 16.99,
    img: "./images/coastal-berry.png",
    desc: `Coastal`,
  },
  {
    id: 13,
    title: "Coffee",
    status: "all",
    price: 16.99,
    img: "./images/coffee.png",
    desc: `coffee`,
  },
  {
    id: 14,
    title: "Collagen",
    status: "all",
    price: 16.99,
    img: "./images/collagen.png",
    desc: `collagen`,
  },
  {
    id: 15,
    title: "Canadian Bacon",
    status: "all",
    price: 16.99,
    img: "./images/jones-dairy-farm-uncured-canadian-bacon-slices-24-oz-1.png",
    desc: `cooked ham for tortillae`,
  },
  {
    id: 16,
    title: "Eggs",
    status: "all",
    price: 16.99,
    img: "./images/eggs.png",
    desc: `eggz`,
  },
  {
    id: 17,
    title: "Filet Mignon",
    status: "all",
    price: 16.99,
    img: "./images/filet-mignon.png",
    desc: `filet mignon`,
  },
  {
    id: 18,
    title: "Fried Rice",
    status: "all",
    price: 16.99,
    img: "./images/fried rice.png",
    desc: `fried rice packets`,
  },
  {
    id: 19,
    title: "Garlic chicken pasta",
    status: "all",
    price: 16.99,
    img: "./images/garlic-chicken.png",
    desc: `garlic chicken pasta frozen`,
  },
  {
    id: 20,
    title: "Golden kiwi",
    status: "all",
    price: 16.99,
    img: "./images/golden-kiwi.png",
    desc: `Golden kiwi`,
  },
  {
    id: 21,
    title: "Chocolate",
    status: "all",
    price: 16.99,
    img: "./images/habi-choco.png",
    desc: `Habi chocos`,
  },
  {
    id: 22,
    title: "Ice cream",
    status: "all",
    price: 16.99,
    img: "./images/jonny-pops.png",
    desc: `Ice cream`,
  },
  {
    id: 23,
    title: "Izze",
    status: "all",
    price: 16.99,
    img: "./images/izze.png",
    desc: `izze`,
  },
  {
    id: 24,
    title: "Jelly",
    status: "all",
    price: 16.99,
    img: "./images/fruitsnacks.png",
    desc: `jelly`,
  },
  {
    id: 25,
    title: "Kaka",
    status: "all",
    price: 16.99,
    img: "./images/jalapeno.png",
    desc: `kaka`,
  },
  {
    id: 26,
    title: "Meatballs",
    status: "all",
    price: 16.99,
    img: "./images/meatballs.png",
    desc: `meatballs`,
  },
  {
    id: 27,
    title: "Milk",
    status: "all",
    price: 16.99,
    img: "./images/milk.png",
    desc: `milk`,
  },
  {
    id: 28,
    title: "Oranges",
    status: "all",
    price: 16.99,
    img: "./images/oranges.png",
    desc: `oranges`,
  },
  {
    id: 29,
    title: "Paper plates",
    status: "all",
    price: 16.99,
    img: "./images/plates.png",
    desc: `paper plates`,
  },
  {
    id: 30,
    title: "Pasta noodles",
    status: "all",
    price: 16.99,
    img: "./images/pasta-noodles.png",
    desc: `pasta nood`,
  },
  {
    id: 31,
    title: "Raos",
    status: "all",
    price: 16.99,
    img: "./images/raos.png",
    desc: `pasta sz`,
  },
  {
    id: 32,
    title: "PB pretzel",
    status: "all",
    price: 16.99,
    img: "./images/pbpretz.png",
    desc: `pb pretzel`,
  },
  {
    id: 33,
    title: "Potpies",
    status: "all",
    price: 16.99,
    img: "./images/potpie.png",
    desc: `potpies`,
  },
  {
    id: 34,
    title: "Raspberries",
    status: "all",
    price: 16.99,
    img: "./images/raspberries.png",
    desc: `raspberry`,
  },
  {
    id: 35,
    title: "Refresh tears",
    status: "all",
    price: 16.99,
    img: "./images/refresh.png",
    desc: `refresh tears`,
  },
  {
    id: 36,
    title: "Salt",
    status: "all",
    price: 16.99,
    img: "./images/salt.png",
    desc: `salt`,
  },
  {
    id: 37,
    title: "Creamer",
    status: "all",
    price: 16.99,
    img: "./images/creamer.png",
    desc: `sbux creamer`,
  },
  {
    id: 38,
    title: "Simply granola",
    status: "all",
    price: 16.99,
    img: "./images/simply.png",
    desc: `simply granola`,
  },
  {
    id: 39,
    title: "Soap bars",
    status: "all",
    price: 16.99,
    img: "./images/soap.png",
    desc: `soap bars`,
  },
  {
    id: 40,
    title: "Soba noodle",
    status: "all",
    price: 16.99,
    img: "./images/soba.png",
    desc: `soba noodle packets`,
  },
  {
    id: 41,
    title: "Strawberries",
    status: "all",
    price: 16.99,
    img: "./images/strawberry.png",
    desc: `Strawberry`,
  },
  {
    id: 42,
    title: "Swiffer wipes",
    status: "all",
    price: 16.99,
    img: "./images/swiffer.png",
    desc: `swiffer`,
  },
  {
    id: 43,
    title: "Toothpaste",
    status: "all",
    price: 16.99,
    img: "./images/toothpaste.png",
    desc: `toothpaste`,
  },
  {
    id: 44,
    title: "Tortilla",
    status: "all",
    price: 16.99,
    img: "./images/tortilla.png",
    desc: `tortilla`,
  },
  {
    id: 45,
    title: "Large trash bags",
    status: "all",
    price: 16.99,
    img: "./images/trash.png",
    desc: `trash bags`,
  },
  {
    id: 46,
    title: "Turmeric`",
    status: "all",
    price: 16.99,
    img: "./images/turmeric.png",
    desc: `turmeric`,
  },
  {
    id: 47,
    title: "Zipfizz",
    status: "all",
    price: 16.99,
    img: "./images/zpfz.png",
    desc: `zipfz`,
  },
  {
    id: 48,
    title: "Banana",
    status: "all",
    price: 16.99,
    img: "./images/bunch-bananas-isolated-on-white-600nw-1722111529.png",
    desc: `banana`,
  },
  {
    id: 49,
    title: "Pantene",
    status: "all",
    price: 16.99,
    img: "./images/pantene.png",
    desc: `pantene`,
  },
  {
    id: 50,
    title: "Nexxus",
    status: "all",
    price: 16.99,
    img: "./images/nexxus.png",
    desc: `nexxus`,
  },
  {
    id: 51,
    title: "Tofu",
    status: "all",
    price: 16.99,
    img: "./images/tofu.png",
    desc: `tofu`,
  },
  {
    id: 52,
    title: "Johnny pop",
    status: "all",
    price: 16.99,
    img: "./images/johnny pop.png",
    desc: `johnny pop`,
  },
  {
    id: 53,
    title: "Beef Jerky",
    status: "all",
    price: 16.99,
    img: "./images/jerky.png",
    desc: `jerky`,
  },
  {
    id: 54,
    title: "Ketchup",
    status: "all",
    price: 16.99,
    img: "./images/ketchup.png",
    desc: `ketchup`,
  },
  {
    id: 55,
    title: "Amino",
    status: "all",
    price: 16.99,
    img: "./images/amino.png",
    desc: `amino`,
  },
  {
    id: 56,
    title: "Ham Steak",
    status: "all",
    price: 16.99,
    img: "./images/hamsteak.png",
    desc: `hamsteak`,
  },
  {
    id: 57,
    title: "Lubriderm",
    status: "all",
    price: 16.99,
    img: "./images/lubriderm.png",
    desc: `lubriderm`,
  },
  {
    id: 58,
    title: "Onions",
    status: "all",
    price: 16.99,
    img: "./images/onions.png",
    desc: `onions`,
  },
  {
    id: 59,
    title: "Glucosamine",
    status: "all",
    price: 16.99,
    img: "./images/glucosamine.png",
    desc: `hglucosamine`,
  },
  {
    id: 60,
    title: "Hydrogen Peroxide",
    status: "all",
    price: 16.99,
    img: "./images/h202.png",
    desc: `hh202`,
  },
  {
    id: 61,
    title: "Sabatinos Sausage",
    status: "all",
    price: 16.99,
    img: "./images/sabatino.png",
    desc: `sabatino`,
  },
  {
    id: 62,
    title: "Frozen Chicken Sausage",
    status: "all",
    price: 16.99,
    img: "./images/chicken-sausage.png",
    desc: `chicken-sausage`,
  },
  {
    id: 63,
    title: "Fried Rice",
    status: "all",
    price: 16.99,
    img: "./images/fried-rice.png",
    desc: `fried-rice`,
  },

  
];

let pickedArray = [];

const sectionCenter = document.querySelector(".section-center");
const messageArea = document.querySelector(".message");
const filterBtns = document.querySelectorAll(".filter-btn");
const showCount = document.querySelectorAll(".show-count");
const picky = document.querySelector(".picky");

console.log(filterBtns);

let counter = 0; //if LS is empty, counter var is the result of the clicks (choose item initially)
let counterGrand;
let runningGrand; //if LS has grandTotal, runningGrand inherits grandTotal's value, adds the result of the clicks, then sets grandTotal's value to runningGrand  
let grandTotal;

let countItems = 1;
let countItemsGrand;

let countPicks;
let countPicksGrand;




function displayAMenu(menuItems) {

  showCount.innerHTML = "Costco List" + "(" + countItems + ")";
  const displayMenu = menuItems.map(item => {
    console.log(item);
    //removed price element after item title <h4 class="price">$${item.price}</h4>
    return `<article class="menu-item"><img src="${item.img}" alt="${item.title}" data-key="${item.id}" class="photo" /><div class="item-info"><header><h4>${item.title}</h4></header><p class="item-text">${item.desc}</p><a href="#quick">Top</a><br/><a href="#quickBottom">Bottom</a></div></article>`
  })
  console.log(displayMenu.join(""));
  //showCount.innerHTML = "Costco List" + "(" + countItems + ")";
  sectionCenter.innerHTML = displayMenu.join("");

  //console.log(menuItems);
  // menuItems.forEach(item =>{
  //   item.addEventListener("click", function(e){
  //   console.log(e.currentTarget);
  //   });
  // })
  
}

// function displayMessage(msg) {
//   sectionCenter.innerHTML =
// }


window.addEventListener("DOMContentLoaded", () => {
  
  //localStorage.clear();
  
  console.log("shake bake");
  displayAMenu(menu);

  const menuItems = document.querySelectorAll(".photo");
  menuItems.forEach(item => {
    console.log(item);

    //for each menu item, grab the child of menu-item's  (img) alt value, and create
    //the attribute "data-key" then the value "alt value"
    item.addEventListener("click", (e) => {
    const target = e.currentTarget.getAttribute("alt");
    console.log(target);
   e.currentTarget.classList.add("shimmer");
   menu.filter(item =>{
      console.log(item.title);
      if (item.title === target){
        counter = counter + 1;
        console.log(counter);
        console.log(item);
        pickedArray.push(item);
        console.log(pickedArray);

        console.log(pickedArray.length + 1);
        

        if (localStorage.getItem('grandTotal')) {//if local storage filled with grandTotal
          runningGrand = JSON.parse(localStorage.getItem('grandTotal'));
        
          console.log(countItems);
          runningGrand.push(item);
          localStorage.setItem('grandTotal', JSON.stringify(runningGrand));
        
          //scorey.innerHTML = JSON.parse(localStorage.getItem('grandTotal'));
          countItems++;
          
          console.log(countItems);
          
      }
      else { //local storage is empty
          //counter = item;
          // localStorage.setItem('total', JSON.stringify(item));
          // grandTotal = JSON.parse(localStorage.getItem('total'));
          // console.log(grandTotal);
          localStorage.setItem('grandTotal', JSON.stringify(pickedArray)); // set LS grandTotal for the first time
          
          
          //scorey.innerHTML = JSON.parse(localStorage.getItem('grandTotal'));
      }

      if (localStorage.getItem('countPicksGrand')) {//if local storage filled with countPicksGrand
        countPicks =  JSON.parse(localStorage.getItem('countPicksGrand'));
        countPicks = countPicks + 1;
        localStorage.setItem('countPicksGrand', JSON.stringify(countPicks));
      }
      else { //local storage is empty 
        localStorage.setItem('countPicksGrand', JSON.stringify(pickedArray.length));
      }

     
        //localStorage.setItem('picked', JSON.stringify(pickedArray));
      }
    })
    console.log(pickedArray);
    console.log(pickedArray.length);
   

     
    
    })
  });
})



filterBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
  console.log(e.currentTarget.dataset.key);
  const targetTop = e.currentTarget.dataset.key;

  const filteredMenu = menu.filter(item => {
    console.log(item.status);
    if (item.status === targetTop) {
    return item;
    }
  })
  console.log(filteredMenu);

  if (targetTop === "picked") {
    if (localStorage.getItem('grandTotal')){
    // console.log(countItems);
    // countItemsGrand = countItemsGrand + countItems;
    // console.log(countItemsGrand);

    displayAMenu((JSON.parse(localStorage.getItem('grandTotal'))));
   //showCount.innerHTML = countItems;
    picky.innerHTML =  JSON.parse(localStorage.getItem('countPicksGrand'));
    picky.classList.toggle("pickyColored");

    const pickedItems = document.querySelectorAll(".menu-item");

pickedItems.forEach(item => {
    console.log(item);

   
    item.addEventListener("click", (e) => {
      console.log(e.target.dataset.key);
      console.log(e.currentTarget.dataset.key);
   //e.currentTarget.classList.add("dnone");
   if (localStorage.getItem('grandTotal')) {//if local storage filled with grandTotal
    const pickedItemsGrand = JSON.parse(localStorage.getItem('grandTotal'));
    console.log(pickedItemsGrand);
    const pickedItemsRemaining = pickedItemsGrand.filter(item =>{
      // console.log(item.id);
      // if (item.id === e.target.dataset.key) {
      // pickedItems.splice(2, 1);
      
      //  }
      return item.id != e.target.dataset.key;
    })
    console.log(pickedItemsRemaining);
    localStorage.setItem('grandTotal', JSON.stringify(pickedItemsRemaining));
    
  
    //console.log(pickedItemsRemaining);
   }

   displayAMenu((JSON.parse(localStorage.getItem('grandTotal'))));

   if (localStorage.getItem('countPicksGrand')) {//if local storage filled with countPicksGrand
    countPicks =  JSON.parse(localStorage.getItem('countPicksGrand'));
    countPicks = countPicks - 1;
    localStorage.setItem('countPicksGrand', JSON.stringify(countPicks));
    picky.innerHTML =  JSON.parse(localStorage.getItem('countPicksGrand'));
  }
  
   
})
})
    }
    else {
      console.log(countItems);
      messageArea.innerHTML = `<p style="font-size:20pt;font-weight:bold;\">No items are picked. Please click 'Show All' and choose items!</p>`
      sectionCenter.innerHTML = "";

    }
  }
 else if (targetTop === "all") {
  //displayAMenu(menu);
  //console.log(JSON.parse(localStorage.getItem('picked')));
  //sectionCenter.innerHTML = JSON.parse(localStorage.getItem('picked'));
  location.reload();
 
 }

else{
   localStorage.clear();
//   location.reload();
picky.innerHTML = "";
picky.classList.remove("pickyColored");
}
  })
})


