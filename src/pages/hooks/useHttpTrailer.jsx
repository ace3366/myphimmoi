import { useState, useEffect } from "react";
export function useHttpTrailer(trailerExtract) {
  const [inviMov, setInviMov] = useState(null);
  const [trailerData, setTrailerData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const API_KEY = "292c6915aed6c1ea24bb47d8b5d3ca92";

  function infoHandler(choosenMov) {
    // Kiểm tra cú click này có trùng movie với lần trước không
    // Nếu trùng thì đóng phần info
    // Nếu không thì hiện info movie khác
    setInviMov((prevMov) => (prevMov === choosenMov ? null : choosenMov));
  }
  useEffect(() => {
    async function sendRequest() {
      setIsLoading(true);
      try {
        // Gửi request lấy trailer
        const request = await fetch(
          `https://api.themoviedb.org/3/movie/${
            inviMov && inviMov.id
          }/videos?api_key=${API_KEY} `
        );
        const resData = await request.json();
        // Lấy dữ liệu trailer, nếu không có kết quả nào thoả thì trả về null
        // Lưu thông tin trailer nhận được
        setTrailerData(trailerExtract(resData));
        if (!request.ok) {
          throw new Error("Failed to fetch movie");
        }
      } catch (err) {
        console.error(err);
        // Nếu không fetch được data trailer thì thực hiện chức năng như bình thường
        // Đồng thời cho dữ liệu trailer là null để hiển thị backdrop thay thế
        setTrailerData(null);
      }
      setIsLoading(false);
    }

    sendRequest();
  }, [inviMov]);

  return {
    inviMov,
    trailerData,
    isLoading,
    infoHandler,
  };
}
