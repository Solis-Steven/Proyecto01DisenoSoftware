import Select from "react-select";



const GenderOptions = ['Genero','Male', 'Female', 'Genderless', 'Unknown']
const SpecieOptions = ['Especie','Human', 'Alien', 'Unknown']
const StatusOptions = ['Estado','Alive', 'Dead', 'Unknown'];


const SearchSection = ({ filterStatus, filterSpecie, filterGender }) => {

    return (

        <div className="flex w-full bg-[#03154F] h-40">
            <div className="flex flex-wrap items-center mx-auto">
            <Select className="w-auto p-2"
                defaultValue={{ label: 'Estado', value: 'Empty' }}
                options={StatusOptions.map(gen => {
                    if (gen === 'Estado') {
                       return { label: gen, value: "" }
                    }
                    return { label: gen, value: gen }
                    
                })}
                onChange={ filterStatus }
            />
            <Select className=" w-auto p-2"
                defaultValue={{ label: 'Especie', value: 'Empty' }}
                options={SpecieOptions.map(gen => {
                    if (gen === 'Especie') {
                       return { label: gen, value: "" }
                    }
                    return { label: gen, value: gen }
                    
                })}
                onChange={ filterSpecie }
            />
            <Select className="w-auto p-2"
                defaultValue={{ label: 'Genero', value: 'Empty' }}
                options={GenderOptions.map(gen => {
                    if (gen === 'Genero') {
                       return { label: gen, value: "" }
                    }
                    return { label: gen, value: gen }
                    
                })}
                onChange={ filterGender }
            />
            </div>
            
        </div>

    );


}

export default SearchSection