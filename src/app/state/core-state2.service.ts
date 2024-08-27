import { signal, WritableSignal } from '@angular/core';

export class CoreState2Service<T> {

  private currentState: WritableSignal<T> = signal<T>({} as T);

  get(): T {
    return this.currentState();
  }

  getKey<K extends keyof T>(key: K): T[K] {
    const value = this.currentState() as T;
    return value[key];
  }

  set(entryState: T) {
    this.currentState.set(entryState);
  }

  setKey<K extends keyof T>(key: K, data: T[K]) {
    this.currentState.update(value => value = { ...value, [key]: data } as T)
  }


}
