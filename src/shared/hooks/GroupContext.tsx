import { createContext, ReactNode, useContext } from "react";
import { Alert } from "react-native";
import { AppError } from "../errors/AppError";
import supabase from "../services/supabase";

interface GroupProviderProps {
  children: ReactNode;
  userId: string;
}

interface IGroupContextData {
  getUserGroups(): Promise<void>;
}

const GroupContext = createContext({} as IGroupContextData);

function GroupProvider({ children, userId }: GroupProviderProps) {
  async function getUserGroups() {
    console.log(`getUserGroups function in GroupProvider with ${userId}`);
    try {
      const { data, error } = await supabase
        .from("user_groups")
        .select("*,group_id(name)")
        .eq("user_id", userId);
      console.log({ data });
    } catch (error) {
      if (error instanceof AppError) return Alert.alert(error.message);
      console.log(`unknown ERROR: ${error}`);
    }
  }

  return (
    <GroupContext.Provider value={{ getUserGroups }}>
      {children}
    </GroupContext.Provider>
  );
}

function useGroup() {
  return useContext(GroupContext);
}

export { GroupProvider, useGroup };
