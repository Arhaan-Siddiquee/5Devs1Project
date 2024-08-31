import React from 'react'
import { useEffect, useState } from "react";
import { useAuthContext } from ".././context/AuthContext";
const Profilename = () => {
	const { authUser } = useAuthContext();
	return (
		<div className=''>
			<div className='flex mt-2'>
				<div className='w-8 rounded-full'>
				<img src={authUser.profilePic} alt='user avatar' className='mx-3' />
					</div><p className='mx-5'>{authUser.fullName}</p>
			</div>
		</div>
	);
};
const UserProfile = () => {
  return (
    <div>
      <Profilename/>
    </div>
  )
}

export default UserProfile
