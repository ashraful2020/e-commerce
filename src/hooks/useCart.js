import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import http from "../services/http.service";

const useCart = () => {
    const [cart, setCart] = useState([]);
    const dispatch = useDispatch();
    const productId = useSelector((state) => state.cart.product);
    console.log("🚀 ~ file: useCart.js ~ line 11 ~ useCart ~ productId", productId)
    useEffect(() => {
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
                }
            });
    }, [productId, dispatch]);
    return [cart, setCart];
};

export default useCart;


// import { useEffect } from "react";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// import http from "../services/http.service";

// const useCart = () => {
//     const [cart, setCart] = useState([]);
//     const dispatch = useDispatch();
//     const productId = useSelector((state) => state.cart.product);
//     console.log('ashraful')
//     useEffect(() => {
//         http.get("/product")
//             .then((res) => {
//                 if (res?.length) {
//                     console.log(res,'response ')
//                     const storedCart = [];
//                     for (const id in productId) {
//                         const addedProducts = res?.find((product) => product.id === id);
//                         if (addedProducts) {
//                             const quantity = productId[id];
//                             addedProducts.quantity = quantity;
//                             storedCart.push(addedProducts);
//                         }
//                     }
//                     setCart(storedCart);
//                     console.log(storedCart)
//                 }
//             });
//     }, [productId, dispatch]);
//     return [cart, setCart];
// };

// export default useCart;
