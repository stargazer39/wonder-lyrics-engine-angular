import { ElementRef } from "@angular/core";

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