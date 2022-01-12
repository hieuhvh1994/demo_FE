import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userSettings = document.querySelector('.user-settings');
  constructor() { }

  ngOnInit(): void {
  }

  UserSettingToggle(): void {
    alert(this.userSettings)
    // @ts-ignore

  }
}
