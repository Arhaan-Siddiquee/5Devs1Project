import LogoutButton from "./LogoutButton";

import React from 'react';
import Navbar from '../../Components/Navbar';
import Home from '../../Components/Home';
import Roadmap from '../../Components/Roadmap';
import Aboutus from '../../Components/Aboutus';
import Community from '../../Components/Community';
import Findevents from '../../Components/Findevents';
import Aitutor from '../../Components/Aitutor';
import Footer from '../../Components/Footer';
import UserProfile from "../../Components/UserProfile";



const Main = () => {
	return (
	<>
			<Navbar />
      <Home />
      <Roadmap />
      <Community />
      <Aitutor />
      <Findevents />
      <Aboutus />
      <Footer />


      <LogoutButton/>

		</>
	);
};
export default Main;
