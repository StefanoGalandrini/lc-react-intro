/**
 * Se le immagini sono presenti nella cartella public, è sufficiente scrivere il percorso assoluto: "/icons/first.svg"
 * Se le immagini sono presenti nella cartella src/assets, è necessario importare dinamicamente l'immagine e utilizzare l'url generato
 * @param {*} name 
 * @returns 
 */
export function getImgUrl(name) {
  return new URL('../assets/imgs/' + name, import.meta.url).href;
}