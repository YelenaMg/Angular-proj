import { Component, inject, signal } from '@angular/core';
import { Profile } from '../../data/interfaces/profile.interface';
import { ProfileService } from '../../data/services/profile';
import { ProfileCard } from "../../common-ui/common-ui/profile-card/profile-card";

@Component({
  selector: 'app-search-page',
  imports: [ProfileCard],
  templateUrl: './search-page.html',
  styleUrl: './search-page.scss'
})
export class SearchPage {
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
