import {BackendErrorsInterface} from '../../../shared/types/backendErrors.interface';

export interface CreateArticleState {
  isSubmitting: boolean;
  validationErrors: BackendErrorsInterface | null;
}
