export const CommonUtils = {
    delay (ms: number) {
        return new Promise( resolve => setTimeout(resolve,ms) );
    }
}