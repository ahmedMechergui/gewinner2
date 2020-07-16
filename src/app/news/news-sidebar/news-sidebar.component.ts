import {Component, OnInit} from '@angular/core';
import {NewsStorageService} from '../../shared/services/news-storage.service';

@Component({
  selector: 'app-news-sidebar',
  templateUrl: './news-sidebar.component.html',
  styleUrls: ['./news-sidebar.component.css']
})
export class NewsSidebarComponent implements OnInit {
  events = [];

  constructor(private newsStorageService: NewsStorageService) {
  }

  ngOnInit() {
    this.fetchComingEvents();
  }

  fetchComingEvents() {
    this.newsStorageService.getComingEvents().subscribe((events: Array<any>) => {
      this.events = events;
    });
  }

}
