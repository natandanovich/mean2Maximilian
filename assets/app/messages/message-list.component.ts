import {Component} from "@angular/core";
import {Message} from "./message.model";
@Component({
    selector: 'app-message-list',
    template: `
            <div class="col-md-8 col-md-offset-2">
            <app-message
                    [message]="message"
                    *ngFor="let message of messages"
                    (editClicked)="message.content = $event"
                    >
            </app-message>
</div>
`
})
export class MessageListComponent {
    messages: Message[] = [
        new Message('Some message','Natan'),
        new Message('Some message II','Vimukta'),
        new Message('Some message III','Chinmaya'),
    ];
}