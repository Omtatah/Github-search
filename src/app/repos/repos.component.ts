import { Component, OnInit } from '@angular/core';
import{User} from '../user';
import { Repos } from '../repos';
import { ProfileService } from '../services/profile.service';
import{HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css']
  providers:[ProfileService]
})
export class ReposComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
