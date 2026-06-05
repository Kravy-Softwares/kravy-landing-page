import { useSelector } from "react-redux";
import { selectCartTotals } from "@/store/selectors/cartSelectors";

export const useCartTotal = () => {
    return useSelector(selectCartTotals);
};