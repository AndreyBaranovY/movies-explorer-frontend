export default function getMoviesCount() {
    if (window.innerWidth >= 1280) return 12;
    if (window.innerWidth >= 990) return 9;
    if (window.innerWidth >= 768) return 6;
    return 4;
  }