import { createContext, ReactNode, useContext } from "react";

interface GroupProviderProps {
  children: ReactNode;
}

interface IGroupContextData {
  getUserGroups(userId: string): Promise<void>;
}

const GroupContext = createContext({} as IGroupContextData);

function GroupProvider({ children }: GroupProviderProps) {
  async function getUserGroups(userId: string) {
    console.log(`getUserGroups function in GroupProvider with ${userId}`);
  }

  return (
    <GroupContext.Provider value={{ getUserGroups }}></GroupContext.Provider>
  );
}

function useGroup() {
  return useContext(GroupContext);
}

export { GroupProvider, useGroup };
