import { createContext, ReactNode, useContext } from "react";
import { Alert } from "react-native";
import { AppError } from "../errors/AppError";
import supabase from "../services/supabase";

interface Group {
  created_at: Date;
  group: {
    group_id: string;
    name: string;
  };
  id: string;
  user_id: string;
  user_points: number;
  user_rank: number;
}

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
        .select("*,group_id(group_id,name)")
        .eq("user_id", userId);

      const groups: Group[] | undefined = data?.map((g) => ({
        created_at: g.created_at,
        group: {
          group_id: g.group_id.group_id,
          name: g.group_id.name,
        },
        id: g.id,
        user_id: g.user_id,
        user_points: g.user_points,
        user_rank: g.user_rank,
      }));

      console.log({ groups });
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
