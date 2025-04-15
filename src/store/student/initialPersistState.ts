import { STUDENT_STORE_KEY } from "../store-key";

export const initialPersistState = {
    [STUDENT_STORE_KEY.IS_PREMIUM_STUDENT]: false,
    [STUDENT_STORE_KEY.IS_STUDENT_LOGGED_IN]: false,
    [STUDENT_STORE_KEY.STUDENT_DATA]: {},
}