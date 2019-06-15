import React from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import { deleteSurvey } from "../../actions";
import "../styles/surveyDelete.css"

class SurveyDelete extends React.Component {
  getId() {
    return this.props.match.params.id;
  }

  getHistory() {
    return this.props.history;
  }

  render() {
    return (
      <div>
        <div className="delete-wrapper">
          <p className="flow-text center-align">
            Are you sure you want to delete this survey?
          </p>
          <div className="center-align">
            <button
              className="red btn-flat white-text yes-delete"
              onClick={() => deleteSurvey(this.getId(), this.getHistory())}
            >
              Yes
            </button>
            <Link
              to="/surveys"
              className="yellow darken-3 btn-flat white-text no-delete"
            >
              No
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(null, {deleteSurvey})(withRouter(SurveyDelete));
