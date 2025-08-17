import { BookContext } from "@/content/BookContext";
import { useContext } from "react";

export function useBooks(){
    const ctx = useContext(BookContext);
    if (!ctx) {
      throw new Error("useBooks must be used within an BookContextProvider");
    }
    return ctx;
}