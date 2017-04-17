import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template:`
    <div role="navigation" aria-label="jumplinks">
  <a href="#devicesheadline" class="accessibility">Zum Inhalt springen</a>
</div>

<header aria-labelledby="bannerheadline">
  <a href="overview.html"><img class="title-image" src="../../images/big-logo-small.png" alt="BIG Smart Home logo"></a>

  <h1 class="header-title" id="bannerheadline">
    BIG Smart Home
  </h1>
  <nav aria-labelledby="navigationheadline">
    <h2 class="accessibility" id="navigationheadline">Navigation</h2>
    <ul class="navigation-list">
      <li class="nav-items">
        <ul>
          <li>
            <a href="options.html" class="button" accesskey="2">Optionen</a>
          </li>
          <li>
            <a href="login.html" class="button" accesskey="1">Abmelden</a>
          </li>
        </ul>
      </li>
      <li class="overflow-icon">
        <a href="#" class="button" accesskey="1">☰</a>
      </li>
    </ul>
  </nav>
</header>
        <nav>
     <a routerLink="/login">Login</a>
     <a routerLink="/overview">Overview</a>
   </nav>
   <router-outlet></router-outlet>
<footer>
  © 2017 BIG Smart Home
</footer>
  `
})
export class AppComponent {
  title: string = "Ally's Angular App";
}
