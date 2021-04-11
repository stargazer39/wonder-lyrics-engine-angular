import { ElementRef } from "@angular/core";

export const Cutil = {
    delay (ms: number) {
        return new Promise( resolve => setTimeout(resolve,ms) );
    },
     dim (elem: ElementRef) {
        return elem.nativeElement.getBoundingClientRect();
    }
}