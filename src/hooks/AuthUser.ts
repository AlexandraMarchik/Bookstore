import { useSelector } from "react-redux";
import { RootState } from "src/redux/store";

export function AuthUser() {
  const { email, token, id, } = useSelector(
    (state: RootState) => state.user
  );
  return {
    isAuth: !!email,
    email,
    token,
    id,
  };
}
