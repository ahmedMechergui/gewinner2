import {Component, OnInit} from '@angular/core';
import {MoovobrainRequestsService} from '../../moovobrain-requests.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  isFirstClick = true;
  ratingGiven = null;
  isLoading = false;

  // array global so we can edit it when loading a feedback from localStorage
  reviewsNumber = this.moovobrainRequestsService.reviewsNumber;

  constructor(public moovobrainRequestsService: MoovobrainRequestsService, private toaster: ToastrService) {
  }

  ngOnInit() {
  }

  starClicked(starNumber: number) {
    for (let i = 1; i < 6; i++) {
      const starID = 'star' + i;
      document.getElementById(starID).style.color = starNumber >= i ? '#fc0' : '#ccc';
    }
    this.ratingGiven = starNumber;
    this.incrementReviews(starNumber);
  }

  // once the user clicks on a star we increment the specified reviews type
  incrementReviews(starNumber: number) {
    if (this.isFirstClick) {
      this.isFirstClick = false;
      this.reviewsNumber[starNumber - 1]++;
    }
  }

  submitFeedback(descriptionInput: HTMLTextAreaElement) {
    // this is just ,to make a fake delay to feel like it is sending requests
    this.isLoading = true;
    setTimeout(() => {
      this.moovobrainRequestsService.storeFeedback(descriptionInput.value, this.ratingGiven);
      this.toaster.success('Thanks for the feedback', '', {positionClass: 'toast-bottom-right'});
      descriptionInput.value = '';
      this.isLoading = false;
    }, 1000);

  }

}
