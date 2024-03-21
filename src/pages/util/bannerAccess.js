export function bannerAccess(movieData) {
  return movieData.results[
    Math.floor(Math.random() * movieData.results.length - 1)
  ];
}
