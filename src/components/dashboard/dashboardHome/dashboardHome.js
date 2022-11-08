import React, { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import dummyUser from '../../../dummyUser';
import withLayout from '../../../hocs/withLayout';
import http from '../../../services/http.service';
const AdminRoute = React.lazy(() => import("./adminRoute"));
const DashboardRoute = React.lazy(() => import("./dashboardRoute"));
const MerchantRoute = React.lazy(() => import("./merchantRoute"));


const DashboardHome = memo(() => {

    const email = useSelector((state) => state.auth.email)
    console.log("🚀 ~ file: dashboardHome.js ~ line 15 ~ DashboardHome ~ email", email)
    const [userRole, setUserRole] = useState("");
    console.log("🚀 ~ file: dashboardHome.js ~ line 17 ~ DashboardHome ~ userRole", userRole)
    http.get(`/user/${email}`).then((res) => setUserRole(res?.role));
    if (!userRole) {
        return <h1 className='text-3xl text-center text-blue-900'>Loading.........</h1>
    }
    document.title = "Dashboard | Amar store"
    const RouteFor = (data) => {
        switch (data) {
            case 'user': return <DashboardRoute />;
            case 'admin': return <AdminRoute />;
            case 'merchant': return <MerchantRoute />;
            default: return <DashboardRoute />;
        }
    }

    return (
        <div className='bg-gray-100'>
            <div className='min-h-[450px] md:mx-12 md:flex'>
                <div className='md:w-2/12'>
                    {RouteFor(userRole)}
                </div>
                <div className='md:w-10/12'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
});

export default withLayout(DashboardHome);