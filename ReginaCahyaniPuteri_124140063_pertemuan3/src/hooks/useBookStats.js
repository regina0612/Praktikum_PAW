
import { useMemo } from "react";

function useBookStats(books) {
  const stats = useMemo(() => {
    return {
      total: books.length,
      owned: books.filter((book) => book.status === "owned").length,
      reading: books.filter((book) => book.status === "reading").length,
      wishlist: books.filter((book) => book.status === "wishlist").length,
    };
  }, [books]);

  return stats;
}

export default useBookStats;
