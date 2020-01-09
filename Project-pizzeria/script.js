const c = (el)=>document.querySelector(el);
const ca = (el)=>document.querySelectorAll(el);
pizzaJson.map((item,index)=>{
    let pizzaitem = c('.models .pizza-item').cloneNode(true);
    pizzaitem.querySelector('.pizza-item--img img').src = item.img;
    pizzaitem.querySelector('.pizza-item--name').innerHTML= item.name;
    pizzaitem.querySelector('.pizza-item--desc').innerHTML= item.description;
    pizzaitem.querySelector('.pizza-item--price').innerHTML= `R$: ${item.price.toFixed(2)}`;

    c('.pizza-area').append( pizzaitem );
});
