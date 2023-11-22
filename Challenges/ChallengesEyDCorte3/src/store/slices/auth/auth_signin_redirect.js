import { getAuth, signInWithRedirect } from "firebase/auth";
import { provider } from "./authGoogle";

const auth = getAuth();
signInWithRedirect(auth, provider);
