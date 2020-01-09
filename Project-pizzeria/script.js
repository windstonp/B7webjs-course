const c = (el)=>document.querySelector(el);
const ca = (el)=>document.querySelectorAll(el);
pizzaJson.map((item,index)=>{
    let pizzaitem = c('.models .pizza-item').cloneNode(true);
    pizzaitem.querySelector('.pizza-item--img img').src = item.img;
    pizzaitem.querySelector('.pizza-item--name').innerHTML= item.name;
    pizzaitem.querySelector('.pizza-item--desc').innerHTML= item.description;
    pizzaitem.querySelector('.pizza-item--price').innerHTML= `R$: ${item.price.toFixed(2)}`;
    pizzaitem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();
        c('.pizzaWindowArea').style.opacity = 0;
        setTimeout(()=>{
            c('.pizzaWindowArea').style.opacity = 1;
        },200);
        c('.pizzaWindowArea').style.display = 'flex';

    })

    c('.pizza-area').append( pizzaitem );
});
