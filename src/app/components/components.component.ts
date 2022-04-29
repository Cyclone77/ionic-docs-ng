import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { getComponents } from '../utils/component-utils';

@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {
    components = getComponents();

    constructor(private router: Router) {}

    ngOnInit() {}

    onLoadComponent(item: any) {
        this.router.navigate(['components/accordion']);
    }
}
