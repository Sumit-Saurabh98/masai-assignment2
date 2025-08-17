import { MyBookContext } from "@/content/MyBookContext";
import { useContext } from "react";

export function useMyBook(){
    const ctx = useContext(MyBookContext);
    if (!ctx) {
      throw new Error("useBooks must be used within an BookContextProvider");
    }
    return ctx;
}