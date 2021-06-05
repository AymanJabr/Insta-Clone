// import { firebase, FieldValue } from '../lib/firebase';
import { firebase } from '../lib/firebase';

export default async function doesUserNameExist(userName) {
  const result = await firebase.firestore().collection('users')
    .where('username', '==', userName).get();

  return result.docs.map((user) => user.data().length > 0);
}
