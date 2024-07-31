
//fetching products 
async function fetchProducts(){

    const url = "http://localhost:3000/api/v1/products";

    try{

        const response = await fetch(url);

        if(!response){
            const message = `An error has occurred: ${response.status}`
        }

        const data = await response.json();
        return data

    }catch(error){
        console.log(error.message)
    }
}

//display products
async function displayProducts(){
    let html = '';
    fetchProducts()
    .then( response => {

        for( var i=0; i< response.length; i++){
            let productID = response[i].id;
            let productName = response[i].name;
            let productImage = response[i].image;
            let productDesc = response[i].desc;
            
            let htmlSegment = `
            <div>
                <h4>${productName}</h4>
                <p>${productID}</p>
                <p>${productDesc}</p>
                <img src=${toString(productImage)} alt="product image">
            </div>
            `
            html += htmlSegment;

            let container = document.querySelector('#productDataContainer');

            container.innerHTML = html;

        }
        
    })
}
