import "./App.scss";
import { DatePicker } from "antd";
import { useTranslation } from "react-i18next";

function App() {
	const { t } = useTranslation();
	return (
		<div className="App">
			<button className="btn btn-primary">Test</button>
			<DatePicker />
			<p>{t("test")}</p>
		</div>
	);
}

export default App;
