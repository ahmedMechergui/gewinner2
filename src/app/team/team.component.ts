import {Component, OnInit} from '@angular/core';
import {TeamMember} from '../shared/models/teamMember.model';
import {TeamMembersStorageService} from '../shared/services/team-members-storage.service';
import {HostURLService} from '../shared/services/host-url.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  teamMembers: TeamMember[] = [];
  url = this.urlService.url;
  isError = false;

  constructor(private teamMembersStorageService: TeamMembersStorageService, private urlService: HostURLService) {
  }

  ngOnInit() {
    this.teamMembersStorageService.FetchTeamMembers().subscribe((membersArray: Array<TeamMember>) => {
      this.teamMembers = membersArray;
    }, () => {
      this.isError = true;
    });
  }

}
