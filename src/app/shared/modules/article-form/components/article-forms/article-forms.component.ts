import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {ArticleInputInterface} from '../../../../types/articleInputInterface';
import {BackendErrorsInterface} from '../../../../types/backendErrors.interface';

@Component({
  selector: 'mc-article-forms',
  templateUrl: './article-forms.component.html',
  styleUrls: ['./article-forms.component.scss']
})
export class ArticleFormsComponent implements OnInit {

  @Input('initialValues') initialValuesProps: ArticleInputInterface;
  @Input('isSubmitting') isSubmittingProps: boolean;
  @Input('errors') errorsProps: BackendErrorsInterface | null;

  @Output('articleSubmit') articleSubmitEvent;
  formGroup: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder) {
    this.articleSubmitEvent = new EventEmitter<ArticleInputInterface>();
  }

  ngOnInit(): void {
    this.onInitFormGroup();
  }

  private onInitFormGroup(): void {
    this.formGroup = this.formBuilder.group(
      {
        title: this.initialValuesProps.title,
        description: this.initialValuesProps.description,
        body: this.initialValuesProps.body,
        tagList: this.initialValuesProps.tagList.join(',')
      }
    );
  }

  onSubmit(): void {
    this.articleSubmitEvent.emit(this.formGroup.value);
  }
}
