import { Input } from "antd";
import { ChangeEventHandler } from "react";

const { Search } = Input;

type SearchBarProps = {
	onSearch: (value: string) => void;
	placeholderText: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
};
const SearchBar: React.FC<SearchBarProps> = ({
	onSearch,
	placeholderText,
	onChange,
}) => {
	return (
		<>
			<Search
				placeholder={placeholderText}
				onSearch={onSearch}
				enterButton
				onChange={onChange}
			/>
		</>
	);
};

export default SearchBar;
