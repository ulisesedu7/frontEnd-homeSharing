/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useToast } from '../../hooks/toast.hook';
import { selectStatusMessage } from '../../redux/status/status.selectors';

import './add-property.styles.scss';

const defaultFormFields = {
  name: '',
  description: '',
  guest_capacity: 0,
  bedrooms: 0,
  beds: 0,
  baths: 0,
  kind: '',
  size: '',
  address: {
    street: '',
    city: '',
    country: '',
    zip_code: '',
    number: '',
    continent: '',
  },
  categories: [],
};

const AddPropertyComponent = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const {
    name,
    description,
    guest_capacity,
    bedrooms,
    baths,
    kind,
    size,
    address,
    categories,
  } = formFields;

  const { addToast } = useToast();
  const statusMessage = useSelector(selectStatusMessage);

  useEffect(() => {
    if (statusMessage) {
      const { type } = statusMessage;

      if (type === 'error') {
        addToast(statusMessage);
      }
    }
  }, [statusMessage]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // dispatch();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <section className="add-property">
      <div className="add-property__header">
        <h2>Add your property so that other people can rent it!</h2>
        <p>Please, fill all the inputs so that you can host a home!</p>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <div className="form__text-containers">
          <div className="form__inputBox">
            <input
              type="text"
              name="name"
              placeholder=" "
              value={name}
              onChange={handleChange}
              required
            />
            <span>Name</span>
            <i />
          </div>

          <div className="form__inputBox">
            <input
              type="text"
              name="description"
              placeholder=" "
              value={description}
              onChange={handleChange}
              required
            />
            <span>Description</span>
            <i />
          </div>
        </div>

        <div className="form__selectors">
          <div className="form_selectorBox">
            <input
              type="number"
              name="guest_capacity"
              placeholder=" "
              value={guest_capacity}
              onChange={handleChange}
              required
            />
            <span>Guest Capacity</span>
          </div>

          <div className="form_selectorBox">
            <input
              type="number"
              name="bedrooms"
              placeholder=" "
              value={bedrooms}
              onChange={handleChange}
              required
            />
            <span>Bedrooms</span>
          </div>

          <div className="form_selectorBox">
            <input
              type="number"
              name="baths"
              placeholder=" "
              value={baths}
              onChange={handleChange}
              required
            />
            <span>Baths</span>
          </div>
        </div>

        <button type="submit" className="form__btn">Add your property!</button>
      </form>
    </section>
  );
};

export default AddPropertyComponent;