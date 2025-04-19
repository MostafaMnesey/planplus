import React, { useState } from "react";

export default function ReportedVideos() {
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 4;

  const data = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    title: `Card ${i + 1}`,
    description: `This is the description for card ${i + 1}`,
  }));

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = data.slice(indexOfFirstCard, indexOfLastCard);

  const totalPages = Math.ceil(data.length / cardsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

function ReportedVideos() {

}

  return (
    <>
      <>
        <div className="max-w-4xl mx-auto p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
            {currentCards.map((card) => (
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm  ">
                <img
                  className="rounded-t-lg"
                  src="/docs/images/blog/image-1.jpg"
                  alt
                />

                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
                    Noteworthy technology acquisitions 2021
                  </h5>

                  <p className="mb-3 font-normal text-gray-700 ">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 "
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center mt-6 space-x-2">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => paginate(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1
                    ? "bg-mainColor text-white"
                    : "bg-gray-200"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </>
      {/*   <div className=" ">
        <div className="flex items-center justify-center">
          <h1 className="text-2xl font-medium text-white rounded-lg  text-center my-5 bg-mainColor inline-block py-2 px-10    ">
            Reported Videos
          </h1>
        </div>
        <div className=" w-full  ">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 bg-mainColor dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 text-center py-3">
                    thumbnail
                  </th>
                  <th scope="col" className="px-6 text-center py-3">
                    ID
                  </th>
                  <th scope="col" className="px-6 text-center py-3">
                    Title
                  </th>
                  <th scope="col" className="px-6 text-center py-3">
                    description
                  </th>
                  <th scope="col" className="px-6 text-center py-3">
                    publisherName
                  </th>
               
                  <th scope="col" className="px-6 py-3 text-center ">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white   dark:border-gray-700 border-gray-200 hover:bg-gray-50 bg-mainColor">
                  <th

                    className="px-6 py-4 font-medium  whitespace-nowrap flex justify-center dark:text-white"
                  >
                    <img src="https://flowbite.com/docs/images/products/apple-watch.png" className="h-12 me-3 my-1 sm:h-16" alt="" />
                  </th>
                  <td className="px-6 text-center py-4">48852185</td>
                  <td className="px-6 text-center py-4">امنحوتب</td>
                  <td className="px-6 text-center py-4">dasdasdasd</td>
                  <td className="px-6 text-center py-4">mnesey</td>
                  <td className="px-6 text-center py-4">
                    <button className="mx-3 my-2  bg-yellow-500 px-4 py-2 rounded-lg text-white text-[15px] font-medium">Ignore Report</button>
                    <button className="mx-3 my-2  bg-red-500 px-4 py-2 rounded-lg text-white text-[15px] font-medium">Delete Report</button>
                 
                  
                  </td>
                 
                
                
                </tr>
             
              </tbody>
            </table>
          </div>
        </div>
      </div> */}
    </>
  );
}
