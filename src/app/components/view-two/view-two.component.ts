import { Component, signal, WritableSignal } from '@angular/core';
import { ClientStateService } from '../../state/client/client-state.service';
import { Client } from '../../state/client/client.interface';

@Component({
  selector: 'app-view-two',
  standalone: true,
  imports: [],
  templateUrl: './view-two.component.html',
  styleUrl: './view-two.component.scss'
})
export class ViewTwoComponent {

  public clientData: WritableSignal<Client> = signal({} as Client);

  constructor(
    private clientState: ClientStateService
  ){
    this.clientData.set(this.clientState.get() as Client);
  }

}
