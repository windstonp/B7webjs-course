const c = (el)=>document.querySelector(el);
const ca = (el)=>document.querySelectorAll(el);
pizzaJson.map((item,index)=>{
    let pizzaitem = c('.models .pizza-item').cloneNode(true);

    c('.pizza-area').append( pizzaitem );
});