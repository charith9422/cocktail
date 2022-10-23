import { Spin } from "antd";
import React from "react";

const Spinner: React.FC = () => (
	<div className="spinner-loading">
		<Spin size="large" />
	</div>
);

export default Spinner;
