import { Injectable, Service, signal, WritableSignal } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Counter {
    
    counterValue: WritableSignal<number> = signal(0);

    increment() {
        this.counterValue.update((value) => value + 1);
    }

    decrement() {
        if(this.counterValue() > 0) {
            this.counterValue.update((value) => value - 1);
        }
    }

    reset() {
        this.counterValue.set(0);
    }

}
