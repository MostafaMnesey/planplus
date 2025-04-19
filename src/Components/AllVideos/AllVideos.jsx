import axios from "axios";
import React, { useEffect, useState } from "react";

export default function AllVideos() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const [loading, setLoading] = useState(false);

  const [videos, setVideos] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    getAllVideos();
  }, [currentPage]);

  async function getAllVideos() {
    try {
      const response = await axios.get(
        `https://plansplus.runasp.net/api/Video/All?pageNumber=${currentPage}&pageSize=${itemsPerPage}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response?.data?.succeeded) {
        setVideos(response.data.data.items); // فقط العناصر
        setTotalPages(response.data.data.totalPages || 1);
      }
    } catch (error) {
      console.error(error);
    }
  }
  async function deleteVideo(videoId) {
    setLoading(true);
    try {
      const response = await axios.delete(
        `https://plansplus.runasp.net/api/Video/${videoId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      console.log();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <div className="h-screen">
        <div className="flex justify-center">
          <h1 className="text-2xl text-center mt-10 mb-4 px-8 text-gray-100 py-2 rounded-lg bg-mainColor inline">
            All Videos
          </h1>
        </div>
        <div className="tb">
          <div className="p-6 space-y-6">
            <div className="overflow-x-auto text-center text-white">
              <table className="min-w-full bg-mainColor border rounded-xl shadow-sm">
                <thead>
                  <tr className="bg-mainColor">
                    <th className="p-4">Thumbnail</th>
                    <th className="p-4">Title</th>

                    <th className="p-4">Publisher Name</th>
                    <th className="p-4">Upload Date</th>
                    <th className="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {videos?.map((video, index) => (
                    <tr key={index} className="border-t  transition-all">
                      <td className="p-4">
                        <img
                          src={`https://plmetadata9872.b-cdn.net/${video.streamId}/thumbnail.jpg`}
                          className="w-20 h-20 rounded-lg"
                          alt=""
                        />
                      </td>
                      <td className="p-4">{video.title}</td>

                      <td className="p-4">{video.publisherName}</td>
                      <td className="p-4">{video.uploadDate}</td>
                      <td className="p-4">
                        <button
                          onClick={() => deleteVideo(video.id)}
                          className="bg-red-700 hover:bg-red-800 transition-all hover:text-black text-white font-bold py-2 px-4 rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center items-center gap-2">
              <button
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
                disabled={currentPage === 1}
              >
                Prev
              </button>
              <span>
                Page <strong>{currentPage}</strong> of{" "}
                <strong>{totalPages}</strong>
              </span>
              <button
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="px-3 py-1 border rounded disabled:opacity-50"
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
