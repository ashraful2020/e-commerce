import React, { memo } from 'react';
import withLayout from '../../../hocs/withLayout';
import useAuth from '../../../hooks/useAuth';
import Button from '../../custom/components/Button';

const Profile = memo(() => {
    const {handleLogOut}=useAuth()
    return (
        <div>
            <Button title="Log out" onClick={handleLogOut}></Button>
            Profile
        </div>
    );
});

export default withLayout(Profile);