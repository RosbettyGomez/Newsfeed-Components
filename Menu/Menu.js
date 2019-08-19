/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  
  

  Pass the function an array as it's only argument.

  Step 2: Iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button currently on the DOM.
  
  Step 4: add a click handler to the menu button, when clicked it should toggle the class 'menu--open' on the menu itself

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
function hamburger(menuItems){//anything that goes inside the () is a variable and/or argument
  let menuDiv = document.createElement("div")//we created a div
  menuDiv.classList.add("menu")//we added a class named menu to the above div
  
  let list = document.createElement("ul") //then we created a ul which means unordered list
  menuDiv.appendChild(list)//then we placed the ul inside of the first and only div

  menuItems.forEach(item =>{ //iterate means to go through the array from top to bottom, and for each item inside the array, perform some code.
    let items = document.createElement("li")
    items.textContent = item
    list.appendChild(items)
  })
  let menuButton = document.querySelector(".menu-button")
  menuButton.addEventListener("click", () =>{
    menuDiv.classList.toggle("menu--open")
  })


  return menuDiv
}
let header = document.querySelector(".header")
header.appendChild(hamburger(menuItems))