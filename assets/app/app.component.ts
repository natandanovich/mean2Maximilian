import {Component} from '@angular/core';
import {Message} from "./messages/message.model";

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',

})
export class AppComponent {
    messages: Message[] = [
        new Message('Some message','Natan'),
        new Message('Some message II','Vimukta'),
        new Message('Some message III','Chinmaya'),
    ];
}