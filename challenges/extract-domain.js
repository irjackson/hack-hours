// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:
// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

function extractDomain(domain){
  const split = domain.split('');
  let check = [];
  const extract = [];
  let capture = false;
  let dotCom = 0;

  for (let i = split.length -1; i >= 0; i--){
    if (check.join('').includes("moc.")){
      dotCom = i;
      break;
    }
    if (check.join('').includes("vt.")){
      dotCom = i;
      break;
    }
    if (check.join('').includes("gro.")){
      dotCom = i;
      break;
    }
    check.push(split[i]);
  }
  while (split[dotCom] !== '.' && split[dotCom] !== '/'){
    if (split[dotCom] === undefined) break;
    extract.push(split[dotCom]);
    dotCom = dotCom - 1;
  }
  return 'Domain name: ' + extract.reverse().join('');
}

console.log(extractDomain("https://www.cnet.com"));
console.log(extractDomain("http://github.com/carbonfive/raygun"));
console.log(extractDomain("http://www.zombie-bites.com"));
console.log(extractDomain("https://developer.mozilla.org"));
console.log(extractDomain("https://www.google.com/"));