import { Component, OnInit, Input } from '@angular/core';
import { User } from "../../../models/user.model";

@Component({
    selector: 'app-personal-info',
    templateUrl: './personal-info.component.html',
    styleUrls: ['./personal-info.component.css']
})
export class PersonalInfoComponent implements OnInit {

    @Input()
    public model: User = new User();

    constructor() { }

    ngOnInit() {
    }

}
