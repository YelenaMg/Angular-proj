import { Component, inject, signal } from '@angular/core';
import { ProfileCard } from "./common-ui/common-ui/profile-card/profile-card";
import { ProfileService } from './data/services/profile';
import { JsonPipe } from '@angular/common';
import { Profile } from './data/interfaces/profile.interface';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ProfileCard, JsonPipe, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {


}
