import React from 'react';
import PropTypes from 'prop-types';

//X TODO 3: Destruct the name and price within the function argument parentheses
//X TODO 4: Add name as a value to the item-name input element and also price to the price-input element
//X TODO 5: Add a name attribute to the item-name input element with a value of name
//X TODO 6: Add a name attribute to the price-input element with a value of price
//X TODO 12: Add onChange to the list of destructed elements in the function argument list.
//X TODO 14: Add an onChange attribute to both input elements with the value of the onChange prop.
//X TODO 17: Add an onSubmit to the list of destructed elements in the function argument list.
//X TODO 19: Add an onSubmit attribute to the form with the value of onSubmit.
export const AddItem = ({name, price, onChange, onSubmit}) => (
    <div className="row justify-content-center">
      <form className="form-inline" onSubmit={onSubmit}>
        <input
            type="text"
            className="form-control mb-2 mr-sm-2"
            placeholder="Item"
            value={name}
            name="name"
            onChange={onChange}
        />

        <div className="input-group mb-2 mr-sm-2">
          <input
              type="text"
              className="form-control"
              placeholder="Price"
              value={price}
              name="price"
              onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-primary mb-2 pxy-4">Save</button>
      </form>
    </div>
);

//X TODO 7: Import PropTypes from the prop-types package.
//X TODO 8: Add a proptypes object for name and price with a type of string and mark them as required.
AddItem.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
 };
//X TODO 13: Add onChange to the proptypes object as a required function.
//X TODO 18: Add onSubmit to the proptypes object as a required function.
