export interface IUser {
  id: string;
  name: string;
  email: string;
  title: string;
  organization: string;
}

export interface IParam {
  name: string;
  personId: string;
}
export interface ISearchPanelProps {
  users: IUser[];
  param: IParam;
  setParam: (param: ISearchPanelProps["param"]) => void;
}

export interface IProject {
  id: string;
  name: string;
  personId: string;
  pin: string;
  organization: string;
}

export interface IListProps {
  list: IProject[];
  users: IUser[];
}
