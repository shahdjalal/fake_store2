

const getcatogary = async() =>{


    const {data} = await axios.get(`https://dummyjson.com/products/category-list`);

    console.log(data)

return data;
}

const displaycatogaries = async() =>{
    const categories =await getcatogary();

const result = categories.map ( (category) =>{


    return `
    <div class="catogory">
    
     <h2>${category}</h2>
     <a href="catogoryDetail.html?category=${category}">Details</a>
    </div>`;
   


 } ).join("");



 document.querySelector(".catogories .row").innerHTML=result;
}



const getproducts = async() =>{


    const {data} = await axios.get(`https://dummyjson.com/products`);

    console.log(data)

return data;
}

const displayproducts = async() => {

const data =await getproducts();

const result = data.products.map( (product)=>{

   return `
   <div  class="product">
   <img src="${product.thumbnail}"/>
   <h3>${product.title}</h3>
   <span>${product.price}</span>
   
   
   </div>`;
   
   
  
  

}).join('');

document.querySelector(".products .row").innerHTML=result;

}


displaycatogaries();
displayproducts();
