import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    constructor(private router: Router) {
    }

    logIn(menu) {
        menu.close();
        this.router.navigate(['login']);
    }

    register(menu) {
        menu.close();
        this.router.navigate(['register']);
    }

    home(menu) {
        menu.close();
        this.router.navigate(['home']);
    }

    aboutUs(menu) {
        menu.close();
        this.router.navigate(['about-us']);
    }

    contactUs(menu) {
        menu.close();
        this.router.navigate(['contact-us']);
    }

    showProfile(menu) {
        menu.close();
        this.router.navigate(['user-info']);
    }
}
