import { AutoComplete } from 'antd';
import React, { useEffect, useState } from 'react';
import flag from 'country-code-emoji';
import { geoAPI } from '../../../Api/api';
const { Option } = AutoComplete;

const SearchBar = (props) => {
	const [inputText, setInputText] = useState('');
	const [options, setOptions] = useState([]);

	useEffect(() => {
		const getData = () => {
			geoAPI
				.getLocByName(inputText)
				.then((res) => (res[0].value ? setOptions(res) : setOptions([])));
		};

		let timer = setTimeout(() => {
			if (inputText) getData();
		}, 2000);

		return () => clearTimeout(timer);
	}, [inputText]);

	const onSelect = (value, option) => {
		props.setLocation(options[option.key]);
		setInputText('');
	};

	const onChange = (e) => {
		setInputText(e);
	};

	const test = (el) => {
		console.log(el);
	};

	return (
		<>
			<AutoComplete
				style={{
					width: 250,
					borderRadius: '1rem',
					marginTop: '.5rem',
				}}
				placeholder="Another location"
				value={inputText}
				onSelect={onSelect}
				onChange={onChange}
			>
				{options.map((el) => (
					<Option key={el.key}>
						{el.value}
						{flag(el.country)}
					</Option>
				))}
			</AutoComplete>
			<br />
			<br />
		</>
	);
};

export default SearchBar;
