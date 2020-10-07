import {Component, OnInit} from '@angular/core';
import {NewsStorageService} from '../../shared/services/news-storage.service';
import {Quote} from '../../shared/models/quote.model';

@Component({
  selector: 'app-news-sidebar',
  templateUrl: './news-sidebar.component.html',
  styleUrls: ['./news-sidebar.component.css']
})


export class NewsSidebarComponent implements OnInit {
  events = [];
  quote: Quote;
  quotes: Quote[] = [
    {text: 'We ought to be thankful not for our eyes but for our ability to see 1', author: 'Mokokoma Mokhonoana'},
    {text: 'We ought to be thankful not for our eyes but for our ability to see 2', author: 'Ahmed Mechergui'},
    {text: 'We ought to be thankful not for our eyes but for our ability to see 3', author: 'Mokokoma Mokhonoana'},
    {text: 'We ought to be thankful not for our eyes but for our ability to see 4', author: 'Mokokoma Mokhonoana'},
    {text: 'We ought to be thankful not for our eyes but for our ability to see 5', author: 'Mokokoma Mokhonoana'},
    {text: 'We ought to be thankful not for our eyes but for our ability to see 6', author: 'Mokokoma Mokhonoana'},
    {text: 'We ought to be thankful not for our eyes but for our ability to see 7', author: 'Mokokoma Mokhonoana'}
  ];

  constructor(private newsStorageService: NewsStorageService) {
  }

  ngOnInit() {
    this.fetchComingEvents();
    this.quote = this.getRandomQuote();
  }

  getRandomQuote(): Quote {
    return this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }

  fetchComingEvents() {
    this.newsStorageService.getComingEvents().subscribe((events: Array<any>) => {
      this.events = events;
    });
  }

}
