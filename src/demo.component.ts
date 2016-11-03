import {Component, OnInit} from '@angular/core';
import {MyService} from "./demo.service";
import {MyPipe} from "./demo.pipe";

@Component({
    selector: 'my-list',
    template: `<ul><li *ngFor="#item of items">{{ item | capitalizeWords }}</li></ul>`,
    styles: [`
        :host {
            font-family: 'Arial';
            display: flex;
            width: 100%;
            height: 100%;
        }
    `]
})
export class MyList implements OnInit {
    items:Array<string>;
    service:MyService;

    constructor(service:MyService) {
        this.service = service;
    }

    ngOnInit() {
        this.items = this.service.getDogs(5);
    }
}