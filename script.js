const buyButtons = document.querySelectorAll(".buy");

const sample=document.getElementById("products")
const item=document.querySelector('.items')
const img=document.getElementById('empty')
const empty=document.querySelector('.emptyCart')
const search=document.querySelector('.form-control')
const searchBtn=document.querySelector('.search-icon')
 const namee=document.querySelectorAll("b")


let count=Number(item.innerHTML)

buyButtons.forEach(btn => {
  btn.addEventListener("click", (e) => {
    count++;
    item.innerHTML=count
   
  const button = btn.closest('.info');
  const name=button.querySelector('b').textContent
  const rate=button.querySelector('.rate').textContent

  
  const addProduct=document.createElement('div')
   
   addProduct.style.display="flex"
   addProduct.style.marginTop='20px'
  //  addProduct.style.backgroundColor="pink"
   addProduct.style.padding='5px'
   addProduct.style.borderRadius='10px'
   addProduct.style.fontSize='20px'
  
  
  
  const productName=document.createElement('div')
  productName.innerHTML=name
  productName.style.border="1px solid black"
  productName.style.padding="10px"

  const price=document.createElement('div')
  price.innerHTML=`₹ ${rate}`
  price.style.border="1px solid black"
  price.style.padding="10px"

  const removeProduct=document.createElement('div')
  const remove=document.createElement('button')
  remove.style.borderRadius='5px'
  remove.style.backgroundColor="#a8e063"
  remove.innerHTML="remove"
  removeProduct.appendChild(remove)
  removeProduct.style.padding="10px"
  removeProduct.style.border="1px solid black"

  addProduct.appendChild(productName)
  addProduct.appendChild(price)
  
  addProduct.appendChild(removeProduct)
 
  img.style.display="none"
  sample.appendChild(addProduct)
  empty.innerHTML="cart Elements"
  
  remove.addEventListener('click',(e)=>{
    e.preventDefault()
    addProduct.remove()
    count=count-1
    item.innerHTML=count
    
    if(count==0){
     empty.innerHTML="No products in cart"
     img.style.display=""
    }
  })
   
  });
});
 function openPopup() {
    document.getElementById("popup").style.display = "block";
  }

  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }


 searchBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const searchText = search.value.toLowerCase().trim();
  const products = document.querySelectorAll(".product");

  products.forEach((product) => {
    const productName = product.querySelector("b").innerText.toLowerCase();

    if (productName.includes(searchText)) {
      product.style.display = "";   // show product
    } else {
      product.style.display = "none";    // hide product
    }
  });
});


const favourite=document.querySelectorAll('.favourite')
favourite.forEach((btn)=>{
  btn.addEventListener('click',(e)=>{
    e.preventDefault()
   const icon = btn.querySelector('i');

    if (icon.classList.contains('fa-regular')) {
      icon.classList.remove('fa-regular');
      icon.classList.add('fa-solid');
      icon.style.color = 'red';
      icon.style.fontSize="20px"
    } else {
      icon.classList.remove('fa-solid');
      icon.classList.add('fa-regular');
      icon.style.color = 'red';
    }
  });
});