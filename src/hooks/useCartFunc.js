import useAuth from "./useAuth"

const useCartFunc = () => {
    const { currentUser } = useAuth();
    const cart = currentUser?.cart;
    console.log("useCartFunc render.......");
    const handleAddToCart = (id) => {
        const product = { ...currentUser?.cart }
        const newProduct = Object.keys(product);
        const exists = newProduct.find(key => key === id)
        if (!exists) {
            cart[id] = 1
            const newCart = {
                ...cart,
            }
        }
        else {
            cart[id] += 1
            const newCart = {
                ...cart
            }
        }
    };

    const delete_from_cart2 = (id) => {
        const product = { ...currentUser?.cart }
        const newProduct = Object.keys(product);
        const exists = newProduct.filter(key => key !== id);
        if (exists) {
            delete cart[id]
        }
    }

    const increment_quantity2 = (id) => cart[id] += 1

    const decrement_quantity2 = (id) => { if (cart[id] > 1) cart[id] -= 1 }



    // console.log(user?.photoURL);
    // console.log(user?.phoneNumber);

    return {
        // add_to_cart,
        // remove_from_cart,
        // increase_amount2,
        // decrease_amount2,

        increment_quantity2,
        decrement_quantity2,
        delete_from_cart2,
        handleAddToCart
    };
};

export default useCartFunc;