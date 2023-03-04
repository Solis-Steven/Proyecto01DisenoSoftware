import { useState } from "react";
import Select from "react-select";



const GenderOptions = ['Male', 'Female', 'Genderless', 'Unknown']
const SpecieOptions = ['Human', 'Alien', 'Unknown']
const StatusOptions = ['Alive', 'Dead', 'Unknown'];


const SearchSection = () => {

    const [selectedGender, setSelectedGender] = useState('Masculino')

    const handleSelectChange = ({ value }) => {
        console.log(value);
        console.log(selectedGender);
        setSelectedGender(value);
    }

    return (

        <div className="flex w-full bg-[#03154F] h-40">
            <div className="flex items-center mx-auto">
            <Select className="w-auto p-2"
                defaultValue={{ label: 'Estado', value: 'Empty' }}
                options={StatusOptions.map(gen => ({ label: gen, value: gen }))}
                onChange={handleSelectChange}
            />
            <Select className=" w-auto p-2"
                defaultValue={{ label: 'Especie', value: 'Empty' }}
                options={SpecieOptions.map(gen => ({ label: gen, value: gen }))}
                onChange={handleSelectChange}
            />
            <Select className="w-auto p-2"
                defaultValue={{ label: 'Genero', value: 'Empty' }}
                options={GenderOptions.map(gen => ({ label: gen, value: gen }))}
                onChange={handleSelectChange}
            />
            </div>
            
        </div>

    );


}

export default SearchSection