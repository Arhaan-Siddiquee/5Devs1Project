import React from 'react'
import { useEffect, useState } from "react";
import { useAuthContext } from ".././context/AuthContext";
const Profilename = () => {
	const { authUser } = useAuthContext();
	return (
		<div className=''>
			<div className='flex'>
				<div className='w-8 rounded-full'>
				<img src={authUser.profilePic} alt='user avatar' />
					</div><p>{authUser.fullName}</p>
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
