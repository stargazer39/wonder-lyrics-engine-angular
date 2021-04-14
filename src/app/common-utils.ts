import { ElementRef } from "@angular/core";
import { Subject } from 'rxjs';

export function  delay (ms: number) {
    return new Promise( resolve => setTimeout(resolve,ms) );
}
export function dim (elem: ElementRef): any;
export function dim (elem: ElementRef | undefined): any;
export function dim (elem: HTMLElement): any;

export function dim (elem: any): any{
    if(Object.keys(elem).includes('nativeElement')){
        return elem.nativeElement.getBoundingClientRect();
    }else{
        return elem.getBoundingClientRect();
    }
}

/* interface IEvent {
    name: string;
    callback: any;
    once?: boolean;
}

export class EventEngine {
    private subj = new Subject<any>();
    private events = Array<IEvent>();
    constructor () { }

    on(name: string, callback: any, once?: boolean) {
        this.subj.subscribe(callback)
        let e: IEvent = {
            name: name,
            callback: callback,
            once: once
        } 
        this.events.push(e);
    } 
    fire(data: any) {

    }
} */