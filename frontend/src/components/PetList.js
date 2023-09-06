import Pet from "./Pet.js";

const PetList = ({pets, deletePet}) => {
    
    const petComponents = pets.map(pet => {
        return <Pet key={pet.id} pet={pet} deletePet={deletePet}/>
    })

    return(<>
        {petComponents}
    </>)

}


export default PetList;