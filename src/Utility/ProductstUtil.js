//helper function hai products le k unko categorize kar rha hai
export var categorizedProducts = (productsArr) => {
    //iniliatze category Arr and other variables to avoid reininitialization in loop.
    var categories = [];
    var categoryName;
    var isCategoryExist;
    var newCategory;
    //loop over products
    for(var product of productsArr){
         categoryName = product.category; //men
         isCategoryExist = categories.some((categoryObj) => categoryObj.category === categoryName )
        if(isCategoryExist){
            categories = categories.map((categoryObj) => {
                if(categoryObj.category === categoryName){
                    categoryObj.products.push(product)
                    return categoryObj;
                }
                else{
                    return categoryObj;
                }
            })
        }
        else{
            //if category doesnt exist in categories [] then make category
             newCategory = {
                category : product.category,
                products : [product]
            }
            categories.push(newCategory)
        }
    
    }   
    return categories
    
}