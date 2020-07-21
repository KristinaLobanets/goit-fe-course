
const productListMarkUp = (products) => {
    return `
    // <ul class=productList>
    // ${products.reduce((acc, product) => {
    //     acc+= create
    // })}
    // </ul>`
}

const productListItemMarkUp = (products) => {
    return `
    <li class=productListItem>
    <img src=${produckt.produktImage} alt=$${produckt.produktName}>
    <p class="productListItemName">${produckt.produktName} </p>
    <div class="productListItemOrder">
    <p class="productListItemPrice">${produckt.produktPrice} </p>
    <div class="productListItemImageBlock">
    <img src="" alt="" class="productListItemCartImage">
    </div>
    </li>`
}


exsport default {
    productsItems: [];
    productItem:{
        name: '',
        price: 0,
        images: [],
        description: '',
        autor: '',
        coments: [{name: '', avatar: '', comment: '', data: '', mark: '',  }],
        views: 0;
        avalible: true;
    }


}