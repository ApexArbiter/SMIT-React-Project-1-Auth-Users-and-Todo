import React from "react";
import { Link } from "react-router-dom";

function Index() {
  return (
    <>
      <div className="container w-100 h-100">
        <div className="center">
          <div className="row">
            <div className="col">
            <Link  to="/logged/users">
            <div className="card1">Users</div>
            </Link>
            </div>
            <div className="col">
            <Link  to="/logged/todo">
            <div className="card1">Todos</div>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
