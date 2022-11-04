import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import http from "../services/http.service";
import useAuth from "./useAuth";

const useCart = (cart2) => {
    const [cart, setCart] = useState([]);
    const { currentUser } = useAuth();
    const [isLoading, setIsLoading] = useState(false);
    const productId = useSelector(state => state.cart.product)
    console.log("🚀 ~ file: useCart.js ~ line 11 ~ useCart ~ productId", productId)
    // console.log(state)
    // const productId = currentUser?.cart;
    // console.log("useCart render.......");
    // ashraful 

    const delete_from_cart2 = (id) => {
        const product = { ...currentUser?.cart }
        const newProduct = Object.keys(product);
        const exists = newProduct.filter(key => key !== id);
        if (exists) {
            delete cart2[id]
        }
        console.log("delete")
    }

    const increment_quantity2 = (id) => cart2[id] += 1

    const decrement_quantity2 = (id) => {
        console.log('decrement')
        if (cart2[id] > 1) cart2[id] -= 1;
    }



    useEffect(() => {
        setIsLoading(true)
        const uri = "/product/cart-product";
        http.get(uri)
            .then((res) => {
                if (res?.length) {
                    const storedCart = [];
                    for (const id in productId) {
                        const addedProducts = res?.find((product) => product.id === id);
                        if (addedProducts) {
                            const quantity = productId[id];
                            addedProducts.quantity = quantity;
                            storedCart.push(addedProducts);
                        }
                    }
                    setCart(storedCart);
                    setIsLoading(false)
                }
            });
    }, [productId, cart2]);
    return [cart, isLoading];
};

export default useCart;