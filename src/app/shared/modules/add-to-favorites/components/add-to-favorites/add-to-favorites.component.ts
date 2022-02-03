import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {addFavoritesAction} from '../../store/actions/favoriteActions';


@Component({
  selector: 'mc-add-to-favorites',
  templateUrl: './add-to-favorites.component.html',
  styleUrls: ['./add-to-favorites.component.scss']
})
export class AddToFavoritesComponent implements OnInit {

  @Input('favorited') favoritedProps: boolean | undefined;
  @Input('articleSlug') articleSlugProps: string | undefined;
  @Input('favoritesCount') favoritesCountProps: number | undefined;

  favoriteCount = 0;
  isFavorite = false;

  constructor(private store: Store) {
  }

  ngOnInit(): void {
    this.favoriteCount = this.favoritesCountProps;
    this.isFavorite = this.favoritedProps;
  }

  onHandleLike() {
    this.store.dispatch(addFavoritesAction({
      isFavorite: this.isFavorite,
      slug: this.articleSlugProps
    }));

    if (!this.isFavorite) {
      this.favoriteCount += 1;
    }
    if (this.isFavorite && this.favoriteCount !== 0) {
      this.favoriteCount -= 1;
    }
    this.isFavorite = !this.isFavorite;

  }

}
