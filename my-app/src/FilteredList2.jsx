import React, { useState } from 'react'
import { DropdownButton, Dropdown } from 'react-bootstrap';
// import List from './List';


export default function FilterList2(props) {
	const [filter, setFilter] = useState("");
	const [group, setGroup] = useState("all");

	return <div style={{
	}}>
		<h1
			style={{
			textAlign: "center",
			fontSize: "2em",
			fontWeight: "bold",
			}}
		>Product Search</h1>
		<DropdownButton
			id="typeDropdown"
			title={"Type"}
			style={{
				margin: "0 auto",
				display: "block",
				width: "20%",
			}}
		>
			<Dropdown.Item
			onClick={() => setGroup("all")}
			>All </Dropdown.Item>
			<br/>
			<Dropdown.Item
			onClick={() => setGroup("Vegetable")}
			>Vegetables </Dropdown.Item>
			<br/>
			<Dropdown.Item
			onClick={() => setGroup("Fruit")}
			>Fruit </Dropdown.Item>
		</DropdownButton>
		<input
			type="text"
			placeholder="Search"
			onChange={(e) => setFilter(e.target.value)}
		/>
		{props.items.filter(val => 
			 filter === ""
				? true
				: val.name.toLowerCase().includes(filter.toLowerCase())
		).filter(val =>
			group === "all"
				? true
				: val.type === group
		).map((item) => {
			return <p key={item.name}>{item.name}</p>
		})}
	</div>;
}