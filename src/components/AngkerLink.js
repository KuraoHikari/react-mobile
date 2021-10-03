import { Link } from "react-router-dom";
function AngkerLink({ text, link, router }) {
  return (
    <div className="text-white text-md">
      {text}
      <Link
        to={router}
        className="text-green-500 font-semibold hover:text-green-700 underline"
      >
        {link}
      </Link>
    </div>
  );
}

export default AngkerLink;
