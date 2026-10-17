import { useNavigate } from "react-router-dom";

export default function FooterNavigation({
  previous,
  previousPath,
  next,
  nextPath,
}) {

  const navigate = useNavigate();

  return (

    <div className="footer-nav">

      <div>

        {previous && (

          <button
            className="nav-btn"
            onClick={() =>
              navigate(previousPath)
            }
          >
            ← {previous}
          </button>

        )}

      </div>

      <div>

        {next && (

          <button
            className="nav-btn"
            onClick={() =>
              navigate(nextPath)
            }
          >
            {next} →
          </button>

        )}

      </div>

    </div>
  );
}