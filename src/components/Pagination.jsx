import { Filtered } from "../context/FilterContext";

export function Pagination() {
   
    // Filtered data
    const { 
        filteredData,
        nextPage,
        prevPage,
        pageInfo
    } = Filtered();
        
    return(
        <>
            <div className="flex bg-[#03154F] text-white justify-evenly">
                <button
                    disabled={filteredData.page === 1}
                    onClick={prevPage}>
                    Pagina anterior
                </button>

                <button
                    disabled={filteredData.page === pageInfo.totalPages}
                    onClick={nextPage}>
                    Siguiente pagina
                </button>
            </div>
            
            <div className="bg-[#03154F] text-white text-center">
                <p>
                    Pagina actual: {pageInfo.currentPage}
                </p>
                <p>
                    Maximo de elementos por pagina: {pageInfo.max}
                </p>
                <p>
                    Total de paginas: {pageInfo.totalPages}
                </p>

            </div>
        </>
    );
}