import dns from "dns/promises";

const address = await dns.lookup("www.smkassalaambandung.sch.id");

console.log(address.address);
console.log(address.family);
