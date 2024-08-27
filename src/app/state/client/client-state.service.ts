import { Injectable } from '@angular/core';

import { CoreState2Service } from '../core-state2.service';
import { Client } from "./client.interface";

@Injectable({
  providedIn: 'root'
})
export class ClientStateService extends CoreState2Service<Client> {

  constructor() {
    super();
    this.set({
      fullName: "Luis Donoso",
      age: 39,
      email: "ldonoso@bancoestado.cl"
    })
   }
}
