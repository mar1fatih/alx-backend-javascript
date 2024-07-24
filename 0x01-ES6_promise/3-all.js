import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const p1 = Promise.all([uploadPhoto(), createUser()]).then((data) => {
      const firstname = data[1].firstName;
      const lastname = data[1].lastName;
      const bd = data[0].body;
      console.log(`${bd} ${firstname} ${lastname}`);
    }).catch(() => { console.log('Signup system offline'); });
  return p1;
}
