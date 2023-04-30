import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";

export function AuthUser() {
  const {  name,email, token, id, } = useSelector(
    (state: RootState) => state.user
  );
  return {
    isAuth: !!email,
    name,
    email,
    token,
    id,
  };
}
