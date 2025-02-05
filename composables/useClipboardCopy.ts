export function useClipboardCopy(){
    function copyToClipboard(text:string){
        navigator.clipboard.writeText(text)
        console.log('copied', text);
    }
    return { copyToClipboard }
}