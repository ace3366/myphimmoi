import { useState, useEffect } from "react";
export function useHttpAll(movieRequest) {
  const [movieData, setMovieData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function sendRequest() {
      console.log("fetching");
      setIsLoading(true);
      try {
        // Lấy 1 lượt tất cả thể loại phim vào 1 array
        const request = movieRequest.map((movie) =>
          fetch(`https://api.themoviedb.org/3${movie[1]} `)
        );
        const responses = await Promise.all(request);
        const resData = await Promise.all(
          responses.map((response) => response.json())
        );
        // Lưu vào resData để đưa ra
        setMovieData(resData);
        if (!request.ok) {
          throw new Error("Failed to fetch movie");
        }
      } catch (err) {
        console.error(err);
      }
      setIsLoading(false);
    }
    sendRequest();
  }, []);

  // Gọi hàm chạy ở lần render đầu tiên

  return {
    movieData,
    isLoading,
  };
}
