import { lazy } from "react";
const Address = lazy(() => import("../components/dashboard/address/address"));
const AddProduct = lazy(() => import("../components/dashboard/admin/addProduct"));
const AllOrders = lazy(() => import("../components/dashboard/admin/allOrders"));
const AvailableVoucher = lazy(() => import("../components/dashboard/admin/availableVoucher"));
const MerchantAccount = lazy(() => import("../components/dashboard/admin/merchantAccount"));
const OrderCancelRequest = lazy(() => import("../components/dashboard/admin/orderCancelRequest"));
const ReturnRequest = lazy(() => import("../components/dashboard/admin/returnRequest"));
const UpdateProduct = lazy(() => import("../components/dashboard/admin/updateProduct"));
const Cancel = lazy(() => import("../components/dashboard/cancel/cancel"));
const MyOrder = lazy(() => import("../components/dashboard/myOrder/myOrder"));
const PaymentOption = lazy(() => import("../components/dashboard/paymentOption/paymentOption"));
const Profile = lazy(() => import("../components/dashboard/profile/profile"));
const Return = lazy(() => import("../components/dashboard/return/return"));
const Voucher = lazy(() => import("../components/dashboard/voucher/voucher"));

// const name = lazy(() => import(""));

export const routes = [
    {
        path: 'my-profile',
        element: <Profile />,
        name: 1,
        roles: ['user', "merchant", "admin"]

    },
    {
        path: 'address',
        element: <Address />,
        name: 1,
        roles: ['user',"merchant"]
    },
    {
        path: 'payment-option',
        element: <PaymentOption />,
        name: 1,
        roles: ['user', "merchant"]
    },
    {
        path: 'return',
        element: <Return />,
        name: 1,
        roles: ['user']
    },
    {
        path: 'cancel',
        element: <Cancel />,
        name: 1,
        roles: ['user']
    },
    {
        path: 'my-orders',
        element: <MyOrder />,
        name: 1,
        roles: ['user']
    },
    {
        path: 'voucher',
        element: <Voucher />,
        name: 1,
        roles: ['user']
    },

    // Admin Routes Start here 
    {
        path: 'available-voucher',
        element: <AvailableVoucher/>,
        name: 1,
        roles: ["admin"]
    },
    {
        path: 'add-product',
        element: <AddProduct/>,
        name: 1,
        roles: ["admin","merchant"]
    },
    {
        path: 'update-product',
        element: <UpdateProduct/>,
        name: 1,
        roles: ["admin","merchant"]
    },
    {
        path: 'order-cancel',
        element: <OrderCancelRequest/>,
        name: 1,
        roles: ["admin"]
    },
    {
        path: 'order-status',
        element: <AllOrders/>,
        name: 1,
        roles: ["admin"]
    },
    {
        path: 'return-req',
        element: <ReturnRequest/>,
        name: 1,
        roles: ["admin"]
    },
    {
        path: 'merchant',
        element: <MerchantAccount/>,
        name: 1,
        roles: ["admin"]
    },
    // {
    //     path: 'add-products',
    //     element: 1,
    //     name: 1,
    //     roles: ["merchant"]
    // },

    // {
    //     path: '',
    //     element: 1,
    //     name: 1,
    //     roles: ['user', "merchant", "admin"]
    // },
    
]


/**
 * Add product
 * update product
 * my profile
 * all products
 * Address
 * statistic 
 * 
 */