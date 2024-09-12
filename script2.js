
           document.addEventListener('DOMContentLoaded', function() {  
  const courses = document.querySelectorAll('.course');  
  const cartTableBody = document.querySelector('#cart-table tbody');  
  const clearCartButton = document.querySelector('#clear-cart');  
  const calculateTotalButton = document.querySelector('#calculate-total');  
  const totalPriceElement = document.querySelector('#total-price');  
  let cartItems = []; 
  let totalPrice = 0; // tatalprice
  
  // add course
  courses.forEach(course => {  
    const addButton = course.querySelector('.add-to-cart');  
    addButton.addEventListener('click', function() {  
      const courseName = course.querySelector('h2').textContent.trim();  
      const price = parseFloat(course.dataset.price);  
      const quantity = parseInt(course.querySelector('.quantity').value, 10);  
      const item = { name: courseName, price, quantity };  
      cartItems.push(item);  
      displayCart();  
      calculateTotal();  
    });  
  });  
    
  function displayCart() {  
    cartTableBody.innerHTML = '';  
    cartItems.forEach(item => {  
      const row = document.createElement('tr');  
      row.innerHTML = `  
        <td>${item.name}</td>  
        <td>${item.price.toFixed(2)}￥</td>  
        <td>${item.quantity}</td>  
        <td>${(item.price * item.quantity).toFixed(2)}￥</td>  
        <td><button class="remove-item">remove</button></td>  
      `;  
      const removeButton = row.querySelector('.remove-item');  
      removeButton.addEventListener('click', function() {  
        removeCartItem(item);  
      });  
      cartTableBody.appendChild(row);  
    });  
  }  
  
  // remove course  
  function removeCartItem(item) {  
    const index = cartItems.indexOf(item);  
    if (index !== -1) {  
      cartItems.splice(index, 1);  
      displayCart();  
      calculateTotal();  
    }  
  }  
  
  // clear car 
  clearCartButton.addEventListener('click', function() {  
    cartItems = [];  
    displayCart();  
    calculateTotal();  
  });  
  
  // total price 
  function calculateTotal() {  
    totalPrice = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);  
    totalPriceElement.textContent = `total: ${totalPrice.toFixed(2)}￥`;  
  }  
  
  // update total 
  calculateTotal();  
});
document.getElementById('calculate-total').addEventListener('click', function() {  
    
    var totalPriceText = document.getElementById('total-price').textContent || document.getElementById('total-price').innerText;  
      
    
    alert(totalPriceText);  
});
