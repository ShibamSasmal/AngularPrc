import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink} from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatButtonModule,RouterLink],
  template: `<header class="header">
  <div class="logo-container">
    <img src="https://t3.ftcdn.net/jpg/04/63/26/26/360_F_463262649_OnqToJa13OkWhGHQPiwpRGPuhPWELvp6.jpg" alt="Company Logo" class="logo"
    routerLink = "/"
    >
    <h1 class="system-name">Product Management System</h1>
  </div>
  <nav class="navigation">
    <ul>
      <li><a routerLink="/">Dashboard</a></li>
      <li><a routerLink="/products">Products</a></li>
      <li><a href="#reports">Reports</a></li>
      <li><a href="#settings">Settings</a></li>
      <li><button mat-raised-button>Logout</button></li>
    </ul>
  </nav>
</header>
`,
  styles: `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Styling for the header */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color : black;
  
  padding: 20px 40px;
  font-family: 'Arial', sans-serif;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Logo and System name styling */
.logo-container {
  display: flex;
  align-items: center;
}

.logo {
  width: 50px;
  height: 50px;
  margin-right: 15px;
}

.system-name {
  font-size: 1.8rem;
  font-weight: bold;
}

/* Navigation styling */
.navigation ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

.navigation a {
  text-decoration: none;
  
  font-size: 1.2rem;
  transition: color 0.3s ease;
}

.navigation a:hover {
  color: #d1e8ff; /* Lighter blue on hover */
}



.logout-button:hover {
  background-color: #e60000;
}`
})
export class HeaderComponent {

}
