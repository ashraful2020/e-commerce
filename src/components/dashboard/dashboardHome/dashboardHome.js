import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import withLayout from '../../../hocs/withLayout';
const AdminRoute = React.lazy(() => import("./adminRoute"));
const DashboardRoute = React.lazy(() => import("./dashboardRoute"));
const MerchantRoute = React.lazy(() => import("./merchantRoute"));

/* A dummy data for the user. */
const user = {
    name: 'user',
    email: 'user@gmail.com',
    role: "admin",
}

const DashboardHome = () => { 
    const RouteFor = (data) => {
        switch (data) {
            case 'user': return <DashboardRoute />;
            case 'admin': return <AdminRoute />;
            case 'merchant': return <MerchantRoute />;
            default: return <DashboardRoute />;
        }
    }

    return (
        <div className='bg-gray-100 '>
            <div className='min-h-[450px] flex mx-32'>
                <div className='w-2/12'>
                    {RouteFor(user.role)}
                </div>
                <div className=' w-10/12'>
                    <Outlet />
                     </div>
            </div>
        </div>
    );
};

export default withLayout(DashboardHome);