import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      type: "all",
    };
  }

  // Sets the state whenever the user types on the search bar
  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  // Sets the state of the "type" state variable depending on what is passed in
  onFilter = (eventKey) => {
    this.setState({ type: eventKey });
  }

  // Changes filterItem to take into account the "type" state variable when filtering
  filterItem = (item) => {
    const { search, type } = this.state;
    if (type === "all") {
      return item.name.toLowerCase().includes(search);
    } else {
      return item.type === type && item.name.toLowerCase().includes(search);
    }
  }

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>
        <DropdownButton id="typeDropdown" title={"Type"}>
        <Dropdown.Item eventKey="all" onSelect={() => this.onFilter("all")}>All</Dropdown.Item>
        <Dropdown.Item eventKey="Vegetables" onSelect={() => this.onFilter("Vegetables")}>Vegetables</Dropdown.Item>
        <Dropdown.Item eventKey="Fruit" onSelect={() => this.onFilter("Fruit")}>Fruit</Dropdown.Item>

        </DropdownButton>
       
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
