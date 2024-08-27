import { BehaviorSubject } from 'rxjs';

export class CoreStateService<T> {

  private currentSubject = new BehaviorSubject({} as T);
  public readonly currentState = this.currentSubject.asObservable();

  constructor() { }

  //Para obtener el valor actual del store, hay que suscribirse a
  //la variable currentState

  /**
   * 
   * metodo que setea el estado del store seleccionado
   * @param {T} entryState 
   */
  setState(entryState: T): void {
    if(typeof entryState === "object"){
      this.currentSubject.next({ ...this.currentSubject.value, ...entryState });
    } else {
      this.currentSubject.next(entryState);
    }

  }

  setState1 = (entryState: T): void => { this.currentSubject.next({ ...this.currentSubject.value, ...entryState }) }

  /**
   * 
   * metodo que setea el estado de una llave específica del store seleccionado
   * @param key 
   * @param data 
   */
  setStateData<K extends keyof T>(key: K, data: T[K]): void {
    this.currentSubject.next({ ...this.currentSubject.value, ...{ [key]: data } });
  }

  /**
   * 
   * metodos estaticos para obtener una foto del valor actual, sin escuchar los
   * cambios del observable currentState
   * @returns {T}
   */
  getStaticState = (): T => this.currentSubject.value;
  getStaticData = <K extends keyof T>(key: K): T[K] => this.currentSubject.value[key];

}