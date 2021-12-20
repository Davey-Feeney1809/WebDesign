//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


let cart = document.createElement('div');
if (localStorage.getItem('cart' )!= null){
    cart.innerHTML = localStorage.getItem('cart');
}
let cartTotal = 0;
if (localStorage.getItem('cartTotal' )!= null){
    cartTotal = parseFloat(localStorage.getItem('cartTotal'));
}

let cartTotalItems = 0;
if (localStorage.getItem('cartTotalItems' )!= null){
    cartTotalItems = parseInt(localStorage.getItem('cartTotalItems'));
}

function addToCart(itemName , price){
    let cartItem = document.createElement('p');
    cartItem.innerHTML = itemName + ' €' + price;
    cart.appendChild(cartItem);
    localStorage.setItem('cart', cart.innerHTML);
    let priceNum = parseFloat(price);
    cartTotal = cartTotal + priceNum;
    localStorage.setItem('cartTotal', cartTotal);
    cartTotalItems ++;
    localStorage.setItem('cartTotalItems' , cartTotalItems);
    document.getElementById('cartCounter').innerHTML = localStorage.getItem('cartTotalItems');
}


function changeForm(){
    if (document.getElementById('signup').checked === true){
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('signup-form').style.display = 'block';
    }
    else if (document.getElementById('login').checked === true){
        document.getElementById('login-form').style.display = 'block';
        document.getElementById('signup-form').style.display = 'none';
    }
}

document.getElementById('signup-button').addEventListener("click" , submit , false);
function submit() {
    let name = document.getElementById('signup-name').value;
    let email = document.getElementById('signup-email').value;
    let number = document.getElementById('signup-number').value;
    let address = document.getElementById('signup-address').value;
    let password = document.getElementById('signup-password').value;

    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    localStorage.setItem('number', number);
    localStorage.setItem('address', address);
    localStorage.setItem('password', password);

    alert("Thank You For Signing Up!");
}

document.getElementById('login-button').addEventListener('click', login, false);
function login() {
    let name = document.getElementById('login-name').value;
    let password = document.getElementById('login-password').value;


    if (name === localStorage.getItem('name')){
        if (password === localStorage.getItem('password'))
        {
        localStorage.setItem('checkedlogged' , 'login');
            alert("You Are Logged In");
        }
        else
        {
            alert ("Incorrect Password");
        }
    }
    else
     {
       alert("Incorrect Name");
     }
}




