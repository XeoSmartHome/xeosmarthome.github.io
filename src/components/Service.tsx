import React, {FC, useEffect, useMemo, useState} from "react";
import {Alert, AlertColor, AlertTitle} from "@mui/material";

enum ServiceStatus {
	Idle = 'idle',
	Success = 'success',
	Error = 'error',
}

interface ServiceProps {
	name: string;
	url: string;
}

const Service: FC<ServiceProps> = ({name, url}) => {
	const [status, setStatus] = useState<ServiceStatus>(ServiceStatus.Idle);
	const [version, setVersion] = useState<string | null>(null);

	useEffect(() => {
		const startTime = Date.now();
		fetch(url)
			.then((response) => response.json())
			.then((response) => {
				setStatus(ServiceStatus.Success);
				setVersion(response.version);
			})
			.catch(() => {
				setStatus(ServiceStatus.Error);
			});
	}, [url]);

	const severity = useMemo(() => {
		return {
			[ServiceStatus.Idle]: 'info',
			[ServiceStatus.Success]: 'success',
			[ServiceStatus.Error]: 'error',
		}[status] as AlertColor;
	}, [status]);

	const statusText = useMemo(() => {
		return {
			[ServiceStatus.Idle]: 'Checking...',
			[ServiceStatus.Success]: 'ONLINE',
			[ServiceStatus.Error]: 'OFFLINE',
		}[status];
	}, [status]);

	return (
		<Alert variant={"filled"} severity={severity} sx={{margin: '0.5rem'}}>
			<AlertTitle>
				{name} - {statusText}
			</AlertTitle>
			Version: {version ?? 'Unknown'}
		</Alert>
	);
}

export default Service;
