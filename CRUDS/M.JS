var pn = document.getElementById('pname');
var pp = document.getElementById('pprice');
var pc = document.getElementById('pcategory');
var pd = document.getElementById('pdescription');
var btn = document.getElementById('btn');
var mainindex;
var products = [];


if (localStorage.getItem("products") != null) {
    products = JSON.parse(localStorage.getItem("products"));
}

getData(products);

function storeData() {

    if (btn.innerHTML == 'Add') {
        var product = {
            name: pn.value,
            price: Number(pp.value),
            category: pc.value,
            description: pd.value
        };

        products.push(product);
        localStorage.setItem("products", JSON.stringify(products));
        clearData();
        getData(products);
    }
    else {
        products[mainindex].name = pn.value;
        products[mainindex].price = pp.value;
        products[mainindex].category = pc.value;
        products[mainindex].description = pd.value;
        localStorage.setItem("products", JSON.stringify(products));
        clearData();
        getData(products);
        btn.innerHTML = 'Add';

    }
}

function clearData() {
    pn.value = "";
    pp.value = "";
    pc.value = "";
    pd.value = "";
}

function getData(myarray) {
    var cartoona = "";
    for (i = 0; i < products.length; i++) {
        cartoona += `    <tr>
<td>${i + 1}</td>
<td>${myarray[i].name}</td>
<td>${myarray[i].price}</td>
<td>${myarray[i].category}</td>
<td>${myarray[i].description}</td>
<td><button onclick=updateData(${i}) class="btn btn-warning">Update</button></td>
<td><button onclick=deleteData(${i}) class="btn btn-warning">Delete</button></td>
</tr>`
    }
    document.getElementById('tbody').innerHTML = cartoona;
}

function deleteData(index) {
    products.splice(index, 1)
    localStorage.setItem("products", JSON.stringify(products));
    getData(products);
}

function updateData(index) {
    mainindex = index;
    pn.value = products[index].name;
    pp.value = products[index].price;
    pc.value = products[index].category;
    pd.value = products[index].description;
    btn.innerHTML = 'Update';
}

function searchData(search) {
    var marray = [];
    for( var i = 0; i < products.length; i++){
    if (products[i].name.toLowerCase().indexOf(search.toLowerCase()) == 0 ) {
        marray.push(products[i])
    }
    getData(marray)
    document.getElementById('tbody').innerHTML = cartoona;
}
    
}