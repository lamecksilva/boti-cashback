import React from 'react';
import { Redirect, Route, RouteComponentProps, RouteProps } from 'react-router';

interface PrivateRouteProps extends RouteProps {
	component: React.ComponentType<RouteComponentProps<any>>;
}

export function PrivateRoute({
	component: Component,
	...rest
}: PrivateRouteProps): JSX.Element {
	return (
		<Route
			{...rest}
			render={(props) =>
				localStorage.authToken ? (
					<Component {...props} />
				) : (
					<Redirect
						to={{
							pathname: '/',
							state: { from: props?.location },
						}}
					/>
				)
			}
		/>
	);
}
