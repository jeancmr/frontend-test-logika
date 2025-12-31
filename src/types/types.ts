export type LoginFormValues = {
  password: string;
  username: string;
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
  data: Action[];
  pageNumber: number;
  pageSize: number;
  totalElements: number;
  totalPages: number;
}

export interface Action {
  color: string;
  createdAt: Date;
  description: string;
  icon: string;
  id: string;
  name: string;
  status: number;
}

export interface CreateActionForm {
  color: string;
  description: string;
  icon: FileList;
  name: string;
  status: boolean;
}
