import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import dummyUser from '../../../dummyUser';
import withLayout from '../../../hocs/withLayout';
const AdminRoute = React.lazy(() => import("./adminRoute"));
const DashboardRoute = React.lazy(() => import("./dashboardRoute"));
const MerchantRoute = React.lazy(() => import("./merchantRoute"));


const DashboardHome = memo(() => {
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
                    {RouteFor(dummyUser.role)}
                </div>
                <div className='md:w-10/12'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
});

export default withLayout(DashboardHome);