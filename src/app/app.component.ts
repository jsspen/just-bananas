import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { getDatabase, ref, set, onValue, remove } from 'firebase/database';
import { initializeApp } from 'firebase/app';

import { Item } from './item';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'just-bananas';
  items: Item[] = [];
}
