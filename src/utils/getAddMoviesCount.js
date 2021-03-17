export default function getAddMoviesCount() {
    if (window.innerWidth >= 1280) return 4;
    if (window.innerWidth >= 990) return 3;
    return 2;
  };
  