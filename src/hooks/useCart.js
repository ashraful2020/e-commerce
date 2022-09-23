import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cart_length } from "../features/cartSlice";
import http from "../services/http.service";

const useCart = () => {
    const [cart, setCart] = useState([]);
    const dispatch = useDispatch();
    const productId = useSelector((state) => state.cart.product);
    useEffect(() => {
        const uri = "/flash-product"
        http.get(uri)
            .then((res) => {
                if (res?.data?.length) {
                    const storedCart = [];
                    for (const id in productId) {
                        const addedProducts = res?.data.find((product) => product._id === id);
                        if (addedProducts) {
                            const quantity = productId[id];
                            addedProducts.quantity = quantity;
                            storedCart.push(addedProducts);
                        }
                    }
                    setCart(storedCart);
                    dispatch(cart_length(storedCart.length));
                }
            });
    }, [productId, dispatch]);
    return [cart, setCart];
};

export default useCart;
