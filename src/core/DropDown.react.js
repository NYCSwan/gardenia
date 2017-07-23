import React from 'react';

function createUserDropdown() {
let items = [];

for (let i = 0; i < this.props.userData.user_data.length; i++) {
     items.push(
       <option
         key={this.props.userData.user_data[i].id} value={this.props.userData.user_data[i].id}>
           {this.props.userData.user_data[i].first_name}
       </option>);
}
 return items;
}

render() {
  return (
    <div>
      <select name="select"        value={this.props.value}
        onChange={this.handleChange}>
          {this.createUserDropdown()}
      </select>
    </div>
  )
}
