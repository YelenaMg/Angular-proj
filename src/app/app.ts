import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileCard } from "./common-ui/common-ui/profile-card/profile-card";

@Component({
  selector: 'app-root',
  imports: [ProfileCard],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  testSignal = signal<string>('hallo signal')


  constructor() {
    console.log(this.testSignal())
  }

}
