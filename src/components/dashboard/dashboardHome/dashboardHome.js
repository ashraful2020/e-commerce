import React, { memo } from 'react';
import { Outlet } from 'react-router-dom';
import withLayout from '../../../hocs/withLayout';
import DashboardRoute from './dashboardRoute';

const DashboardHome = memo(() => {
    return (
        <div className='bg-gray-100 '>
        <div className='min-h-[450px] flex mx-32'>
            <div className='w-2/12'>
            <DashboardRoute />
            </div>
            <div className=' w-10/12'>
                <Outlet />
            </div>
        </div>
        </div>
    );
});

export default withLayout(DashboardHome);