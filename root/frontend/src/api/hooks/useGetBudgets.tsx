import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Budget = {
  id: number;
  ownerId: string;
  name: string;
};

type GetBudgetsParams = {
  token: string;
  enabled: boolean;
};

const QUERY_KEY = ["Budgets"];

const fetchBudgets = async (params: GetBudgetsParams): Promise<Budget[]> => {
  const { data } = await axios.get("/api/budgets", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${params.token}`,
    },
  });
  // await new Promise((resolve) => setTimeout(resolve(), 5000));
  return data;
};

export const useGetBudgets = (params: GetBudgetsParams) => {
  return useQuery<Budget[], Error>({
    queryKey: QUERY_KEY,
    enabled: params.enabled,
    throwOnError: true,
    queryFn: () => fetchBudgets(params),
  });
};
