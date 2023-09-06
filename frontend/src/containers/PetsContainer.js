import React, { useState, useEffect } from 'react';
import PetList from "../components/PetList"
import PetForm from '../components/PetForm';

const PetsContainer = () => {
    
const [pets, setPets] = useState([]);


const fetchPets = async() => {
    const response = await fetch("http://localhost:8080/pets");
    const data = await response.json();
    setPets(data);
 
}

useEffect(() => {
    console.log(pets);
    fetchPets()

}, [])

const postPet = async (newPet) => {
  // Check if a name is provided before making the POST request
  if (!newPet.name || newPet.name.trim() === "") {
    alert("Please provide a name for the pet.");
    return;
  }

  try {
    const response = await fetch("http://localhost:8080/pets", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPet),
    });

    if (response.ok) {
      const savedPet = await response.json();
      setPets([...pets, savedPet]);
    } else {
      console.error("Failed to create pet:", response.statusText);
    }
  } catch (error) {
    console.error("Error creating pet:", error);
  }
};


const deletePet = async (petId) => {
    try {
      const response = await fetch(`http://localhost:8080/pets/${petId}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        // Remove the deleted pet from the local state
        const updatedPets = pets.filter((pet) => pet.id !== parseInt(petId));
        setPets(updatedPets);
      } else {
        // Handle the case where the delete request fails
        console.error('Failed to delete pet:', response.statusText);
      }
    } catch (error) {
      console.error('Error deleting pet:', error);
    }
  };


return(<>
<h1> Pet Station</h1>
    <PetForm postPet={postPet}/>
    <PetList pets={pets} deletePet={deletePet}/>

</>)


}

export default PetsContainer;