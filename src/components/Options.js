import React from 'react';
import Option from './Option';

const Options = (props) => {
    return (
      <div>
        <div className="widget-header">
          <h3 className="title">Your options</h3>
          <button className="button button--link button--link__alt"
          onClick={props.handleDeleteOptions}>Remove All</button>      
        </div>
          {props.options.length === 0 && <p className="widget-message">Please add an option</p>}
        {
          props.options.map((option, index) => (
            <Option 
              key={option} 
              optionText={option} 
              count={index + 1}
              handleDeleteOption={props.handleDeleteOption}
            />
          ))
        }
      </div>
    );
}

export default Options;