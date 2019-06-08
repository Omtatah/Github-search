import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ProfileService } from '../services/profile.service';
import { HttpClient } from '@angular/common/http';
import { Repos } from '../repos';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
