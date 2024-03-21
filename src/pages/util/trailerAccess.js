// Hàm tìm trailer
export function trailerExtract(trailer) {
  // Tìm Trailer, nếu không có Trailer chuyển sang tìm Teaser
  if (trailer) {
    return (
      trailer.results.find((trail) => trail.type === "Trailer") ||
      trailer.results.find((trail) => trail.type === "Teaser")
    );
  } else {
    return null;
  }
}
