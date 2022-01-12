import {Component, Input, OnInit} from '@angular/core';
import {Posting} from '../../model/posting';
import {Observable} from 'rxjs';
import {PostingService} from '../../service/posting.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  like: number;
  @Input()
  posting: Posting;

  constructor(
    private postingService: PostingService
  ) { }

  ngOnInit(): void {
    // window.sessionStorage.getItem("tokenKey")
  }

  // likePost(postId: number) {
  //   if (this.postingService.isLikedByAccountId())
  //   const value = this.like.nativeElement.textContent;
  //   this.store.dispatch(
  //     new LikeDislikePost({ postId, action: "likes", value })
  //   );
  // }

}

