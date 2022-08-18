import { createContext, ReactNode, useContext } from "react";
import { AppError } from "../errors/AppError";
import supabase from "../services/supabase";

interface UserGroup {
  created_at: Date;
  group: Group;
  id: string;
  user_id: string;
  user_points: number;
  user_rank: number;
}

interface Group {
  group_id?: string;
  name: string;
  owner_id?: string;
  created_at?: Date;
  match_score_points: number;
  match_winner_points: number;
  password: string;
}

interface User {
  user_id: string;
  full_name: string;
}

interface GroupProviderProps {
  children: ReactNode;
  userId: string;
}

interface IGroupContextData {
  getUserGroups(): Promise<UserGroup[]>;
  getGroupUsers(groupId: string): Promise<User[]>;
  createGroup(group: Group): Promise<Group>;
  searchGroupByName(name: string): Promise<Group[]>;
  getUserById(userId: string): Promise<User>;
  joinGroup(groupId: string): Promise<any>;
}

const GroupContext = createContext({} as IGroupContextData);

function GroupProvider({ children, userId }: GroupProviderProps) {
  async function searchGroupByName(name: string) {
    const { data: groups, error } = await supabase
      .from("groups")
      .select("*")
      .ilike("name", `%${name}%`);

    if (error) throw new AppError("ERROR while searching groups");

    return Promise.resolve(groups);
  }

  async function createGroup({
    name,
    password,
    match_score_points,
    match_winner_points,
  }: Group) {
    const newGroup: Group = {
      name,
      password,
      match_score_points,
      match_winner_points,
      owner_id: userId,
      created_at: new Date(),
    };

    const { data, error } = await supabase.from("groups").insert([newGroup]);

    if (error) throw new AppError("ERROR while creating new group");

    const { data: join_data, error: join_error } = await supabase
      .from("user_groups")
      .insert([
        {
          user_id: userId,
          group_id: data[0].group_id,
        },
      ]);

    if (join_error) throw new AppError("ERROR while joining new group");

    return Promise.resolve(data[0]);
  }

  async function getUserGroups() {
    let groups: UserGroup[] = [];

    const { data, error } = await supabase
      .from("user_groups")
      .select("*,group_id(group_id,name)")
      .eq("user_id", userId);

    if (error) throw new AppError("ERROR while getting user groups");

    if (data) {
      groups = data.map((g) => ({
        created_at: g.created_at,
        group: {
          group_id: g.group_id.group_id,
          name: g.group_id.name,
          owner_id: g.group_id.owner_id,
          created_at: g.group_id.created_at,
          match_score_points: g.group_id.match_score_points,
          match_winner_points: g.group_id.match_winner_points,
          password: g.group_id.password,
        },
        id: g.id,
        user_id: g.user_id,
        user_points: g.user_points,
        user_rank: g.user_rank,
      }));
    }
    return Promise.resolve(groups);
  }

  async function getUserById(userId: string) {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("user_id", userId);

    if (error) throw new AppError("ERROR while getting user by id");

    return Promise.resolve(data[0]);
  }

  async function getGroupUsers(groupId: string) {
    const { data, error } = await supabase
      .from("user_groups")
      .select("*,user_id(id,full_name)")
      .eq("group_id", groupId);

    if (error) throw new AppError(`ERROR while getting group users ${error}`);

    if (data) {
      const users: User[] = data.map((u) => {
        return {
          user_id: u.user_id.id,
          full_name: u.user_id.full_name,
        };
      });
      return Promise.resolve(users);
    }
    return Promise.resolve([]);
  }

  async function joinGroup(groupId: string) {
    const { data, error } = await supabase.from("user_groups").insert([
      {
        user_id: userId,
        group_id: groupId,
      },
    ]);

    if (error) throw new AppError("ERROR while joining group");

    return Promise.resolve(data);
  }

  return (
    <GroupContext.Provider
      value={{
        getUserGroups,
        getGroupUsers,
        createGroup,
        searchGroupByName,
        getUserById,
        joinGroup,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
}

function useGroup() {
  return useContext(GroupContext);
}

export { GroupProvider, useGroup, UserGroup, Group, User };
