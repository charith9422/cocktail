type TooltipProps = {
	text: string;
};
const Tooltip: React.FC<TooltipProps> = ({ text }) => {
	return <p>{text}</p>;
};

export default Tooltip;
