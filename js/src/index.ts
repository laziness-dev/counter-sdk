import {
  Counter
} from './domain/counter'

function createUniqueIdentifier(salt: string, secret: string, domain: string, ip: string, userAgent: string) {

  const saltCounter = Counter.createWithSalt(ip, domain, userAgent, salt);
  const secretCounter = Counter.createWithSecret(ip, domain, userAgent, secret);

  const id1 = saltCounter.getUserIdWithSalt();
  const id2 = secretCounter.getUserIdWithSecret();

  localStorage.setItem('uniqueIdWithSalt', id1);
  localStorage.setItem('uniqueIdWithSecret', id2);

  return {
    idWithSalt: id1,
    idWithSecret: id2
  };
}

function getUniqueIdentifier() {
  const idWithSalt = localStorage.getItem('uniqueIdWithSalt');
  const idWithSecret = localStorage.getItem('uniqueIdWithSecret');
  
  return {
      idWithSalt: idWithSalt,
      idWithSecret: idWithSecret
  };
}

const uniqueIds = createUniqueIdentifier('your_salt', 'your_secret', 'example.com', '1.1.1.1', 'Mozilla/5.0');
console.log(uniqueIds);

const retrievedIds = getUniqueIdentifier();
console.log(retrievedIds);