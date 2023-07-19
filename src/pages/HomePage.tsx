import React from 'react';
import {Container, Typography} from "@mui/material";
import Service from "../components/Service";

const HomePage = () => {
	return (
		<Container sx={{padding: '5rem', display: 'flex', flexDirection: 'column'}}>
			<Typography variant={"h3"} sx={{alignSelf: 'center', marginBottom: '2rem'}}>
				XeoSmartHome API Status
			</Typography>
			<Service name={"Auth"} url={"https://api.staging.xeosmarthome.com/auth-service/"}/>
			<Service name={"Accounts"} url={"https://api.staging.xeosmarthome.com/accounts-service/"}/>
			<Service name={"Devices"} url={"https://api.staging.xeosmarthome.com/devices-service/"}/>
			<Service name={"Control Nodes Session Manager"} url={"https://api.staging.xeosmarthome.com/devices-sessions-service/"}/>
			<Service name={"Devices Sensors"} url={"https://api.staging.xeosmarthome.com/sensors-service/"}/>
			<Service name={"Rooms"} url={"https://api.staging.xeosmarthome.com/rooms-service/"}/>
			<Service name={"Scenes"} url={"https://api.staging.xeosmarthome.com/scenes-service/"}/>
			<Service name={"Developers"} url={"https://api.staging.xeosmarthome.com/developer-service/"}/>
		</Container>
	);
}

export default HomePage;
