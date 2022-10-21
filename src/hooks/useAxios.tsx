import { useState, useEffect } from "react";

export interface IConfig {
	axiosInstance: any;
	method: string;
	url: string;
	requestConfig: any;
}

const useAxios = <T,>() => {
	const [response, setResponse] = useState<T>();
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const [controller, setController] = useState<AbortController>();

	const axiosFetch = async (configObj: IConfig) => {
		const { axiosInstance, method, url, requestConfig = {} } = configObj;

		try {
			setLoading(true);
			const ctrl = new AbortController();
			setController(ctrl);
			const res = await axiosInstance[method.toLowerCase()](url, {
				...requestConfig,
				signal: ctrl.signal,
			});
			console.log(res);
			setResponse(res.data);
		} catch (error) {
			if (error instanceof Error) {
				console.log(error);
				setError(error.message);
			}
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		console.log(controller);

		// useEffect cleanup function
		return () => controller && controller.abort();
	}, [controller]);

	return [response, error, loading, axiosFetch];
};
export default useAxios;
