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

let count = document.getElementById('count');
function cartCount(){
    let existingOrder = JSON.parse(localStorage.getItem('order'));
    if(existingOrder){
        count.innerHTML = existingOrder.length;
    }
}
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
        count.innerHTML = 1;
    }
    count.innerHTML = existingOrder.length;
    let alert = document.getElementById('alert')
    let itemAdded = document.getElementById('item');
    itemAdded.innerHTML = order[0].item + ' ' + 'has been successfully added to cart'
    alert.classList.add('show');
    setTimeout(function(){ alert.classList.remove('show') },5000);
}
function viewCart(){
    let existingOrder = JSON.parse(localStorage.getItem('order'));
    if(existingOrder){
        let table = document.getElementById('table');
        table.querySelectorAll('*').forEach(n => n.remove());
        let sum = 0;
        existingOrder.forEach(element => {
            let row = document.createElement('tr')
            let index = document.createElement('th')
            index.innerHTML = existingOrder.indexOf(element) + 1;
            let col1 = document.createElement('td');
            col1.innerHTML = element.item
            let col2 = document.createElement('td');
            col2.innerHTML = element.qty
            let col3 = document.createElement('td');
            col3.innerHTML = element.price
            row.append(index,col1,col2,col3);
            table.append(row);
            sum = sum + element.price;
        });
        let total = document.createElement('tr');
        let empty = document.createElement('td');
        let col = document.createElement('td');
        col.colSpan = 2;
        col.innerHTML = 'Total';
        let price = document.createElement('td');
        price.innerHTML = 'N' + sum
        total.append(empty,col,price)
        table.append(total)
    }
}
function empty(){
    localStorage.clear();
    let table = document.getElementById('table');
    table.querySelectorAll('*').forEach(n => n.remove());
    count.innerHTML = 0;
    let alert = document.getElementById('alert')
    let info = document.getElementById('item');
    info.innerHTML = 'Cart Successfully empied';
    alert.classList.add('show');
    setTimeout(function(){ alert.classList.remove('show') },5000);
}
function submit(){
    localStorage.clear();
    let table = document.getElementById('table');
    table.querySelectorAll('*').forEach(n => n.remove());
    count.innerHTML = 0;
    let alert = document.getElementById('alert')
    let info = document.getElementById('item');
    info.innerHTML = 'Your Order has been placed, You will be notified';
    alert.classList.add('show');
    setTimeout(function(){ alert.classList.remove('show') },8000);
}