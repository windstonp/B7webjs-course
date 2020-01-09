let modalQT = 1; 
const c = (el)=>document.querySelector(el);
const ca = (el)=>document.querySelectorAll(el);
pizzaJson.map((item,index)=>{
    let pizzaitem = c('.models .pizza-item').cloneNode(true);
    pizzaitem.setAttribute('data-key',index);
    pizzaitem.querySelector('.pizza-item--img img').src = item.img;
    pizzaitem.querySelector('.pizza-item--name').innerHTML= item.name;
    pizzaitem.querySelector('.pizza-item--desc').innerHTML= item.description;
    pizzaitem.querySelector('.pizza-item--price').innerHTML= `R$: ${item.price.toFixed(2)}`;
    //open modal
    pizzaitem.querySelector('a').addEventListener('click', (e)=>{
        e.preventDefault();
        let key = e.target.closest('.pizza-item').getAttribute('data-key');
        modalQT = 1;
        c('.pizzaBig img').src = pizzaJson[key].img; 
        c('.pizzaInfo h1').innerHTML = pizzaJson[key].name;
        c('.pizzaInfo--desc').innerHTML = pizzaJson[key].description;
        c('.pizzaInfo--actualPrice').innerHTML = `R$: ${pizzaJson[key].price.toFixed(2)}`;
        c('.pizzaInfo--size.selected').classList.remove('selected');
        ca('.pizzaInfo--size').forEach((size,sizeIndex)=>{
            if(sizeIndex == 2 ){
                size.classList.add('selected');
            };
            size.querySelector('span').innerHTML = pizzaJson[key].sizes[sizeIndex];
        });
        c('.pizzaInfo--qt').innerHTML = modalQT;
        c('.pizzaWindowArea').style.opacity = 0;
        c('.pizzaWindowArea').style.display = 'flex';
        setTimeout(()=>{
            c('.pizzaWindowArea').style.opacity = 1;
        },200);
    })
    c('.pizza-area').append( pizzaitem );
});
//modal events
function closeModal(){
    c('.pizzaWindowArea').style.opacity = 0;
    setTimeout(()=>{
        c('.pizzaWindowArea').style.display = 'none';
    },300)
}
ca('.pizzaInfo--cancelButton, .pizzaInfo--cancelMobileButton').forEach((item)=>{
    item.addEventListener('click', closeModal);
});
c('.pizzaInfo--qtmenos').addEventListener('click',()=>{
    if (modalQT>1) {
        modalQT--;
        c('.pizzaInfo--qt').innerHTML = modalQT;
    }
});
c('.pizzaInfo--qtmais').addEventListener('click',()=>{
    modalQT++;
    c('.pizzaInfo--qt').innerHTML = modalQT;
});
ca('.pizzaInfo--size').forEach((size,sizeIndex)=>{
    size.addEventListener('click',(e)=>{
        c('.pizzaInfo--size.selected').classList.remove('selected');
        size.classList.add('selected');
    });
});

