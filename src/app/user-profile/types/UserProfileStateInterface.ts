import {UserProfileInterface} from './UserProfileInterface';

export interface UserProfileStateInterface {
  data: UserProfileInterface | null;
  isLoading: boolean;
  error: string | null;
}
