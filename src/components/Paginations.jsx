import React from 'react'

const Paginations = ({currentPage,setCurrentPage}) => {
    const handlePreviousPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 1));
      }
      
      const handleNextPage = () => {
        setCurrentPage(prevPage => prevPage + 1);
      }
      
      const handlePageClick = (page) => {
        setCurrentPage(page);
      }
  
      
  return (
    <div>
       <div className="flex justify-center mt-6">
      <button
        onClick={handlePreviousPage}
        className="bg-blue-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-l"
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {[...Array(5)].map((_, index) => {
        const page = index + 1;
        return (
          <button
            key={page}
            onClick={() => handlePageClick(page)}
            className={`bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 ${currentPage === page ? 'bg-gray-400' : ''}`}
          >
            {page}
          </button>
        );
      })}
      <button
        onClick={handleNextPage}
        className="bg-blue-500 hover:bg-gray-400 text-white font-bold py-2 px-4 rounded-r"
      >
        Next
      </button>
    </div>

    </div>
  )
}

export default Paginations
