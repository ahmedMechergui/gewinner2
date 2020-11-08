import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {Meta} from '@angular/platform-browser';
import {HostURLService} from '../shared/services/host-url.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-moovobrain',
  templateUrl: './moovobrain.component.html',
  styleUrls: ['./moovobrain.component.css']
})
export class MoovobrainComponent implements OnInit, AfterViewInit {
  // this variable determines if we're on voice mode or brain mode
  @Input() isVoiceMode = false;

  constructor(private metadata: Meta,
              private urlService: HostURLService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params) => {
      this.isVoiceMode = params.mode.toLowerCase() === 'voice';
    });
    this.activatedRoute.fragment.subscribe();
    this.updateMetadata();
  }

  ngAfterViewInit(): void {
  }

  updateMetadata(): void {
    this.metadata.updateTag({content: 'Moovobrain'}, `name='title-for-sharer'`);
    this.metadata.updateTag({content: this.urlService.url + '/assets/img/wheelchair-1.jpeg'}, `name='image-for-sharer'`);
    // tslint:disable-next-line:max-line-length
    this.metadata.updateTag({content: 'MOOVOBRAIN is a steering system of powered wheelchairs for physically disabled people who cannot use their upper members to pilot conventional wheelchairs with joystick.'}, `name='description-for-sharer'`);
  }

}
