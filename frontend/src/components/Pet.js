import React from 'react';

const Pet = ({ pet, deletePet }) => {
  const handleDelete = () => {
    deletePet(pet.id);
  };

  return (
    <div className="pet">
      <h4 className="pet-name">{pet.name}</h4>
      <p className="pet-info">{pet.age} years old</p>
      <p className="pet-info">{pet.breed}</p>
      <p className="pet-info">{pet.type}</p>
      <button onClick={handleDelete} className="delete-button">
        Delete pet
      </button>
    </div>
  );
};

export default Pet;
