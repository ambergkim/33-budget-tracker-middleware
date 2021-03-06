import React from 'react';
import {connect} from 'react-redux';

import CategoryList from './category-list.jsx';
import CategoryForm from './category-form.jsx';

class Dashboard extends React.Component {
  render() {
    return <div>
      <h1>Manage Your Budget</h1>
      <h2>Create A Category:</h2>
      <CategoryForm name="create"></CategoryForm>
      <CategoryList></CategoryList>
    </div>
  }
}

export default Dashboard;