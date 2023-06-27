function MatchFullName(names) {

let patern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

let maches = names.match(patern);
console.log(maches.join(" "));

}MatchFullName("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")