import React from 'react';
import { connect } from 'react-redux';

const ExpenseListFilters = (props) => (
  <div>
    <input type="text" defaultValue={props.filters.text} onChange{(e) => {
      console.log(e.target.value)
    }}/>
  </div>
);

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);