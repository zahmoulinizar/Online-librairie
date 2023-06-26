import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <header className="mt-lg-5 pt-lg-5 ms-2 ps-2 border border-end-2 ">
      <nav id="sidebarMenu" className="d-flex justify-content-between gap-2 d-lg-block   ">
            <Link
              to="/Admin"
              className="list-group-item list-group-item-action py-2 "
              aria-current="true"
            >
              <i className="fas fa-tachometer-alt fa-fw  me-1"></i>
              <span>Main dashboard</span>
            </Link>

            <Link
              to="/newProd"
              className="list-group-item list-group-item-action py-2 "
            >
              <i className="fas fa-lock fa-fw me-1"></i>
              <span>Products</span>
            </Link>

            <Link
              href="#"
              className="list-group-item list-group-item-action py-2 ripple "
            >
              <i className="fas fa-chart-bar fa-fw me-1"></i>
              <span>Orders</span>
            </Link>

            <Link
              to="/AllUsers"
              className="list-group-item list-group-item-action py-2 ripple "
            >
              <i className="fas fa-users fa-fw me-1"></i>
              <span>Users</span>
            </Link>
         
      </nav>
    </header>
  );
}
