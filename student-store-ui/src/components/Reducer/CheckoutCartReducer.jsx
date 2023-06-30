export default function CheckoutCartReducer(checkoutCart, action){
    switch (action.type){
        case "incremented" : {
            // get current product quanitity and increment it 
            const currentQuantity = checkoutCart[action.productID] ? checkoutCart[action.productID].quantity : 0;
            // only add new quantities up to 99 items
            let newQuantity = currentQuantity < 100 ?  + currentQuantity  + 1 : currentQuantity;
            console.log({...checkoutCart, 
                [action.productID] : {
                    quantity : newQuantity,
                    ...action.product
                } 
            });
            return {...checkoutCart, 
                [action.productID] : {
                    quantity : newQuantity,
                    ...action.product
                } 
            }
        }
        case "decremented" : {
            let currentProduct = checkoutCart ? checkoutCart[action.productID] : undefined;
            if (currentProduct){ // ignores products not in cart
                // decrement product quantity
                const currentQuantity = currentProduct.quantity;
                const newQuantity = currentQuantity - 1;
                if (newQuantity === 0){
                    // remove product if quantity is zero
                    let newCheckoutCart = {...checkoutCart};
                    delete newCheckoutCart[action.productID];
                    // return an empty cart if the last 
                    // cart item was deleted
                    return newCheckoutCart; 
                } else{
                    // otherwise update cart with decremented
                    // product quantity
                    return {...checkoutCart, 
                        [action.productID] : {
                            quantity : newQuantity,
                            ...action.product    
                        }
                    }
                }

            }
            return {}
        }
        case "removedItem" : {

            let newCheckoutCart =  checkoutCart;
            delete newCheckoutCart[action.productID]
            return newCheckoutCart ? newCheckoutCart : {};
        }
        case "cleared" : {
            return {};
        } 
    }
}