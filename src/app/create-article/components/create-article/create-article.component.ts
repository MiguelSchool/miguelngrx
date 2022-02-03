import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {ArticleInputInterface} from '../../../shared/types/articleInputInterface';
import {Observable} from "rxjs";
import {BackendErrorsInterface} from '../../../shared/types/backendErrors.interface';
import {select, Store} from '@ngrx/store';
import {isSubmittingSelector} from '../../../auth/store/selectors';
import {validationErrorsSelector} from '../../shared/store/selectors/selectors';
import {createArticleAction} from '../../shared/store/actions/actions';

@Component({
  selector: 'mc-create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.scss']
})
export class CreateArticleComponent implements OnInit {


  initialValues: ArticleInputInterface = {
   title: '',
   description: '',
   body: '',
   tagList: []
  };
  isSubmitting$: Observable<boolean> | undefined;
  backendErrors$: Observable<BackendErrorsInterface | null> | undefined;

  constructor(
    private router: Router,
    private store: Store
  ) { }

  ngOnInit(): void {
    this.initializeValues();
  }

  private initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector));
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector));
  }

  onSubmit(result: ArticleInputInterface): void {
    this.store.dispatch(createArticleAction({articleInput: result}));
  }
}
