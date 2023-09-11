import React from "react";
import { FaChevronDown } from 'react-icons/fa';

const FilterContainer = () =>{
return(
    <div className="filter-container">
    <div className="filter-element">
      Date <FaChevronDown className='icon' />
    </div>
    <div className="filter-element">
      Assignee <FaChevronDown className='icon' />
    </div>
    <div className="filter-element">
      Priority <FaChevronDown className='icon' />
    </div>
    <div className="filter-element">
      Status <FaChevronDown className='icon' />
    </div>
    <div className="filter-element">
      Tags <FaChevronDown className='icon' />
    </div>
  </div>
)
}
export default FilterContainer