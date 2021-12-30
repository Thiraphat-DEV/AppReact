import React from "react";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import './Footer.css'
const Footer = () => {
  return (
    <>
      <div className="main-footer" >
        <div className="container">
          <div className="row">
            {/* mainAddress */}
            <div className="col">
              <h4>Thiraphat Boaty</h4>
              <h1 className="list-unstyled">
                <li>NangRong, Thailand</li>
                <li>Baradise</li>
              </h1>
            </div>
            {/* Hobby */}
            <div className="col">
              <h4>HOBBY</h4>
              <ui className="list-unstyled">
                <li>Learn To code</li>
                <li>Exercise for Family</li>
                <li>Read Books</li>
              </ui>
            </div>
            {/* Column3 */}
            <div className="col">
              <h4>Present</h4>
              <ui className="list-unstyled">
                <li>19 yearold</li>
                <li>Study For Myself</li>
                <li>Practice To English</li>
              </ui>
            </div>
          </div>
          <hr />
          <div className="row">
            <p className="col-sm">
              &copy;{new Date().getFullYear()} Thiraphat | All rights <FavoriteBorderRoundedIcon />
              | Terms Of Service | Privacy
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
