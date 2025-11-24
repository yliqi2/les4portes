import { Component, signal } from '@angular/core';
import { Header } from "./layout/header/header";
import { Footer } from "./layout/footer/footer";
import { Entrantes } from "./features/entrantes/entrantes";

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Entrantes],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Les 4 Portes');
}
