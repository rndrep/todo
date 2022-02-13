const SearchPanel = () => {
	const searchText = "Type here to search";
	const searchStyle = {
		fontSize: "16px",
	};

	return (
		<input className="form-control" placeholder={searchText} style={searchStyle} />
	);
};

export default SearchPanel;
