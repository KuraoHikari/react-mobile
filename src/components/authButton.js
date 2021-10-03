import { Link } from "react-router-dom";
function AuthButton({ auth, router }) {
  return (
    <Link className="hover:opacity-60" to={router}>
      <img src={auth} />
    </Link>
  );
}

export default AuthButton;
