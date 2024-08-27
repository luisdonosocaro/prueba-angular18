import { Component, inject, Injector, OnInit } from '@angular/core';
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

  public clientData: Client | undefined = undefined;

  constructor(
    private clientState: ClientStateService
  ){
    this.clientState.set({
      fullName: "LuisDC",
      age: 40,
      email: "correo@prueba.cl"
    })
  }

  ngOnInit() {

    this.clientData = this.clientState.get();
  }


}
