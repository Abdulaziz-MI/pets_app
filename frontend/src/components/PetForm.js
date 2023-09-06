import React, { useState } from 'react';

const PetForm = ({ postPet }) => {
  const petTypes = [
    'Other',
    'Dog',
    'Cat',
    'Fish',
    'Bird',
    'Tortoise',
    'Rabbit',
  ];

  const [petState, setPetState] = useState({
    name: '',
    age: 0,
    breed: '',
    type: null,
  });

  const typeOptions = petTypes.map((type) => (
    <option key={type} value={type}>
      {type}
    </option>
  ));

  const handleChange = (e) => {
    let propertyName = e.target.name;
    let clonedPet = { ...petState };
    clonedPet[propertyName] = e.target.value;
    setPetState(clonedPet);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    postPet(petState);
    setPetState({
      name: '',
      age: 0,
      breed: '',
      type: null,
    });
  };

  return (
    <form id="pet-form" onSubmit={handleFormSubmit} className="pet-form">
      <label htmlFor="name">Name:</label>
      <input
        type="text"
        id="pet-name"
        name="name"
        value={petState.name}
        onChange={handleChange}
        required
      />

      <label htmlFor="age">Age:</label>
      <input
        type="number"
        min={1}
        max={200}
        id="pet-age"
        name="age"
        value={petState.age}
        onChange={handleChange}
        required
      />

      <label htmlFor="breed">Breed:</label>
      <input
        type="text"
        id="pet-breed"
        name="breed"
        value={petState.breed}
        onChange={handleChange}
        required
      />

      <label htmlFor="type">Type:</label>
      <select
        id="type"
        name="type"
        onChange={handleChange}
        required
        className="pet-type"
      >
        <option disabled value="select-type">
          Choose a type
        </option>
        {typeOptions}
      </select>

      <input type="submit" value="Add Pet" className="submit-button" />
    </form>
  );
};

export default PetForm;
