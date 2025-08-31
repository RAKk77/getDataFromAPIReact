import ListData from "./ListData";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
const url = "https://api.github.com/users";

const FetchData = () => {
  const { data, loading } = ListData(url);
  if (loading) {
    return (
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ minHeight: "80vh" }}
      >
        <div className="text-center">
          <div className="border text-primary" role="status">
            <div className="loader"></div>;
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="container mt-4">
      <h1 className="text-center my-3 text-primary ">API FROM GITHUB</h1>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 ">
        {data.map((user) => (
          <div className="col " key={user.id}>
            <div className="card h-100 rounded-5 overflow-hidden shadow-sm">
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                <img
                  src={user.avatar_url}
                  alt={user.login}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </a>
              <div className="card-body text-center">
                <h5 className="card-title text-uppercase">{user.login}</h5>
                <p className="card-text">
                  <small className="text-muted">{user.type}</small>
                </p>
                {user.user_view_type && (
                  <span className="badge bg-primary">
                    {user.user_view_type}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchData;
