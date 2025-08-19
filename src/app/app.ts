import { Component, inject, signal } from '@angular/core';
import { ProfileCard } from "./common-ui/common-ui/profile-card/profile-card";
import { ProfileService } from './data/services/profile';
import { JsonPipe } from '@angular/common';
import { Profile } from './data/interfaces/profile.interface';
@Component({
  selector: 'app-root',
  imports: [ProfileCard, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  testSignal = signal<string>('hallo signal')
  profileService = inject(ProfileService)

  profiles: Profile[] = []

  constructor() {
    console.log(this.testSignal())

    this.profileService.getTestAccounts().subscribe(val => {
      this.profiles = val
    })
  }

}
