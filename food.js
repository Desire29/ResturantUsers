const menu = [
    {
        id:1,
        item:'Lunch Park Regular',
        price:700,
        qty:1
    },
    {
        id:2,
        item:'Lunch Park Jumbo',
        price:700,
        qty:1
    },
    {
        id:3,
        item:'Swallow Pack Regular',
        price:800,
        qty:1
    },
    {
        id:4,
        item:'Lunch Park Maxi',
        price:1400,
        qty:1
    },
    {
        id:5,
        item:'Lunch Park Xtra',
        price:700,
        qty:1
    },
    {
        id:6,
        item:'Swallow Pack Maxi',
        price:700,
        qty:1
    },
]
function addCart(e){
    let order = menu.filter(item=>{
        return item.id == e
    })
    let existingOrder = JSON.parse(localStorage.getItem('order')) ;
    if(existingOrder){
        existingOrder.push(order[0]);
        localStorage.setItem('order', JSON.stringify(existingOrder));
    }
    else{
        localStorage.setItem('order', JSON.stringify(order));
    }
    let alert = document.getElementById('alert')
    let itemAdded = document.getElementById('item');
    itemAdded.innerHTML = order[0].item;
    alert.classList.add('show');
    setTimeout(function(){ alert.classList.remove('show') },5000);
}
function viewCart(){
    let existingOrder = JSON.parse(localStorage.getItem('order'));
    console.log(existingOrder);
}