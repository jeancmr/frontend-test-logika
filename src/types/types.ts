export type LoginFormValues = {
  username: string;
  password: string;
};

export type Pagination = {
  pageNumber: number;
  pageSize: number;
  token: string | null;
};

export interface GetActionsResponse {
  data: ActionsData;
}

export interface ActionsData {
  pageSize: number;
  pageNumber: number;
  totalElements: number;
  totalPages: number;
  data: Action[];
}

export interface Action {
  id: string;
  name: string;
  description: string;
  icon: string;
  color: string;
  status: number;
  createdAt: Date;
}
