import { Component, inject, Injector, OnInit, signal, WritableSignal } from '@angular/core';
import { ClientStateService } from '../../state/client/client-state.service';
import { Client } from '../../state/client/client.interface';

@Component({
  selector: 'app-view-one',
  standalone: true,
  imports: [],
  templateUrl: './view-one.component.html',
  styleUrl: './view-one.component.scss'
})
export class ViewOneComponent implements OnInit {

  public clientData: WritableSignal<Client> = signal({} as Client);

  constructor(
    private clientState: ClientStateService
  ){
/*     this.clientData.set({
      fullName: "LuisDC",
      age: 40,
      email: "correo@prueba.cl"
    }) 
    this.clientState.set(this.clientData())*/
    this.clientData.set(this.clientState.get());
  }

  ngOnInit() {

  }


}
