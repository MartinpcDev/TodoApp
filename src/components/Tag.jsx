export const Tag = ({ tagName, selectTag, selected }) => {
	const tagStyle = {
		HTML: { backgroundColor: '#fda821' },
		CSS: { backgroundColor: '#15d4c8' },
		JavaScript: { backgroundColor: '#ffd12c' },
		React: { backgroundColor: '#4cdafc' },
		default: { backgroundColor: '#f9f9f9' }
	};
	return (
		<button
			type='button'
			style={selected ? tagStyle[tagName] : tagStyle.default}
			className='text-[14px] font-[500] bg-[#f9f9f9] border-[1px] border-solid border-[#dfe3e6] rounded-md py-[2px] px-[10px] mr-3 cursor-pointer '
			onClick={() => selectTag(tagName)}>
			{tagName}
		</button>
	);
};
