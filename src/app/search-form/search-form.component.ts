import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { Search } from '../search';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { Repos } from '../repos';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
