import { Component, OnInit } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import{User} from '../user';
import { Repos } from '../repos';
import { ProfileService } from '../services/profile.service';
import{HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})
export class MyProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
