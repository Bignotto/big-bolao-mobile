import { createContext, ReactNode, useContext } from "react";
import { AppError } from "../errors/AppError";
import supabase from "../services/supabase";

interface UserGroup {
  total_points: number;
  total_bonus: number;
  exact_matches: number;
  user_id: string;
  full_name: string;
  group_id: string;
  group_name: string;
  ranking: number;
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
  avatar_url?: string;
  email?: string;
  short?: string;
}

interface UserMatchGuess {
  away_team_flag: string;
  away_team_id: string;
  away_team_name: string;
  away_team_score: number;
  away_team_score_guess: number;
  cup_group: string;
  guess_id: number;
  group_id: string;
  home_team_flag: string;
  home_team_id: string;
  home_team_name: string;
  home_team_score: number;
  home_team_score_guess: number;
  is_finished: string;
  local_time: number;
  match_day: number;
  match_id: string;
  match_index: number;
  match_month: number;
  match_score_points: number;
  match_winner_points: number;
  user_id: string;
  user_full_name?: string;
  group_name?: string;
  guess_points?: number;
  guess_bonus?: number;
  exact_match?: boolean;
}

interface GroupProviderProps {
  children: ReactNode;
  userId: string;
}

interface UserGuess {
  guess_id?: number;
  match_id: string;
  group_id: string;
  user_id: string;
  home_team_score: number;
  away_team_score: number;
}

interface GroupRanking {
  exact_matches: number;
  full_name: string;
  group_id: string;
  name: string;
  total_bonus: number;
  total_points: number;
  user_id: string;
}

interface GroupMatchGuesses {
  user_id: string;
  full_name: string;
  group_id: string;
  group_name: string;
  match_id: string;
  home: string;
  guess_home_team_score: number;
  guess_away_team_score: number;
  away: string;
  guess_id: number;
  home_team_flag: string;
  away_team_flag: string;
  home_team_score: number;
  away_team_score: number;
  is_finished: boolean;
}

interface IGroupContextData {
  getUserGroups(): Promise<UserGroup[]>;
  getGroupUsers(groupId: string): Promise<User[]>;
  createGroup(group: Group): Promise<Group>;
  updateGroup(group: Group): Promise<Group>;
  searchGroupByName(name: string): Promise<Group[]>;
  findGroupByName(name: string): Promise<Group[]>;
  getUserById(userId: string): Promise<User>;
  getGroupById(groupId: string): Promise<Group>;
  joinGroup(groupId: string): Promise<any>;
  getUserGuessesByGroupId(groupId: string): Promise<UserMatchGuess[]>;
  getGroupRankingByGroupId(groupId: string): Promise<GroupRanking[]>;
  saveUserGuesses(guesses: UserGuess[] | undefined): Promise<void>;
  removeUserFromGroup(userId: string, groupId: string): Promise<void>;
  getGroupMatchGuesses(
    groupId: string,
    matchId: string
  ): Promise<UserMatchGuess[]>;
  getUserGuessesByDays(
    months: number[],
    days: number[]
  ): Promise<UserMatchGuess[]>;
}

const GroupContext = createContext({} as IGroupContextData);

function GroupProvider({ children, userId }: GroupProviderProps) {
  async function searchGroupByName(name: string) {
    const { data: groups, error } = await supabase
      .from("groups")
      .select("*")
      .ilike("name", `%${name.trim()}%`);

    if (error) throw new AppError("ERROR while searching groups");

    return Promise.resolve(groups);
  }

  async function findGroupByName(name: string) {
    const { data: groups, error } = await supabase
      .from("groups")
      .select("*")
      .eq("name", name.trim());

    if (error) throw new AppError("ERROR while finding groups");

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

  async function updateGroup({
    group_id,
    name,
    owner_id,
    match_score_points,
    match_winner_points,
    password,
  }: Group) {
    const newGroup: Group = {
      group_id,
      name,
      password,
      match_score_points,
      match_winner_points,
    };
    const { data, error } = await supabase
      .from("groups")
      .update(newGroup)
      .eq("group_id", group_id);

    if (error) throw new AppError("ERROR while updating group");

    return Promise.resolve(data[0]);
  }

  async function getUserGroups() {
    let groups: UserGroup[] = [];

    const { data, error } = await supabase
      .from("user_groups_points")
      .select("*")
      .eq("user_id", userId);

    if (error) throw new AppError("ERROR while getting user groups");
    return Promise.resolve(data);
  }

  async function getUserById(userId: string) {
    const { data, error } = await supabase
      .from("profiles")
      .select("*")
      .eq("id", userId);

    if (error) throw new AppError("ERROR while getting user by id");

    const user: User = {
      user_id: data[0].user_id,
      full_name: data[0].full_name,
      avatar_url: data[0].avatar_url,
      email: supabase.auth.user()?.email,
      short: data[0].short,
    };
    return Promise.resolve(user);
  }

  async function getGroupUsers(groupId: string) {
    const { data, error } = await supabase
      .from("user_groups")
      .select("*,profiles!user_groups_user_id_fkey(id,full_name)")
      .eq("group_id", groupId);

    if (error)
      throw new AppError(
        `ERROR while getting group users ${error.message} \n ${error.hint}`
      );

    if (data) {
      const users: User[] = data.map((u) => {
        return {
          user_id: u.profiles.id,
          full_name: u.profiles.full_name,
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

  async function getUserGuessesByGroupId(groupId: string) {
    const { data, error } = await supabase.rpc("match_guesses", {
      param_user_id: userId,
      param_group_id: groupId,
    });

    if (error) throw new AppError(`ERROR while getting user guesses`);

    return Promise.resolve(data);
  }

  async function getGroupRankingByGroupId(groupId: string) {
    const { data, error } = await supabase
      .from("user_groups_points")
      .select("*")
      .eq("group_id", groupId);

    if (error) throw new AppError(`ERROR while getting group ranking`);

    return Promise.resolve(data);
  }

  async function saveUserGuesses(guesses: UserGuess[]) {
    const newGuesses = guesses.filter((guess) => guess.guess_id === null);
    if (newGuesses.length > 0) {
      const insertData = newGuesses.map(({ guess_id, ...guess }) => guess);
      const { data: newData, error: newDataError } = await supabase
        .from("guesses")
        .insert(insertData);
      if (newDataError) throw new AppError("Error while saving new guesses");
    }

    const updateGuesses = guesses.filter((guess) => guess.guess_id !== null);
    if (updateGuesses.length > 0) {
      const { data, error } = await supabase
        .from("guesses")
        .upsert(updateGuesses);
      if (error) throw new AppError("Error while updating guesses");
    }
  }

  async function removeUserFromGroup(userId: string, groupId: string) {
    const { data, error } = await supabase
      .from("user_groups")
      .delete()
      .eq("user_id", userId)
      .eq("group_id", groupId);

    if (error) throw new AppError("ERROR while leaving group.");
  }

  async function getGroupById(groupId: string) {
    const { data, error } = await supabase
      .from("groups")
      .select("*")
      .eq("group_id", groupId);

    if (error) throw new AppError("ERROR while getting group by id");

    return Promise.resolve(data[0]);
  }

  async function getGroupMatchGuesses(groupId: string, matchId: string) {
    const { data, error } = await supabase
      .from("guesses_by_match_and_group")
      .select("*")
      .eq("group_id", groupId)
      .eq("match_id", matchId);

    if (error) {
      console.log({ error, groupId, matchId });
      throw new AppError(
        `ERROR while getting user guesse for this match: ${error}`
      );
    }

    return Promise.resolve(data);
  }

  async function getUserGuessesByDays(months: number[], days: number[]) {
    const { data, error } = await supabase
      .from("guesses_by_match_and_group")
      .select("*")
      .eq("user_id", userId)
      .in("match_month", months)
      .in("match_day", days)
      .order("match_index")
      .order("group_name");

    if (error)
      throw new AppError(`ERROR while getting user guesse for period.`);

    return Promise.resolve(data);
  }

  return (
    <GroupContext.Provider
      value={{
        getUserGroups,
        getGroupUsers,
        createGroup,
        updateGroup,
        searchGroupByName,
        findGroupByName,
        getUserById,
        getGroupById,
        joinGroup,
        getUserGuessesByGroupId,
        getGroupRankingByGroupId,
        saveUserGuesses,
        removeUserFromGroup,
        getGroupMatchGuesses,
        getUserGuessesByDays,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
}

function useGroup() {
  return useContext(GroupContext);
}

export {
  GroupProvider,
  useGroup,
  UserGroup,
  Group,
  User,
  UserMatchGuess,
  UserGuess,
  GroupRanking,
  GroupMatchGuesses,
};
