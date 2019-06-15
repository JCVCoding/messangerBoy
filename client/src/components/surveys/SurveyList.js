import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";
import "../styles/surveyList.css";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  getSurveyLength() {
    return this.props.surveys.length;
  }

  renderSurveys() {
    if (this.getSurveyLength() >= 1) {
      return this.props.surveys.reverse().map(survey => {
        return (
          <div key={survey._id} className="row">
            <div className="col s12">
              <div className="card darken-1">
                <div className="card-content">
                  <span className="card-title">{survey.title}</span>
                  <p>{survey.body}</p>
                  <p className="right">
                    Sent on: {new Date(survey.dateSent).toLocaleDateString()}
                  </p>
                </div>
                <div className="card-action">
                  <p>Yes: {survey.yes}</p>
                  <p>No: {survey.no}</p>
                </div>
                <a href={`/surveys/delete/${survey._id}`}>
                  <i
                    className="
                  material-icons small trashcan"
                  >
                    delete
                  </i>
                </a>
              </div>
            </div>
          </div>
        );
      });
    } else {
      return (
        <div className="valign-wrapper">
          <div className="message-wrapper big active">
            <p className="flow-text">
              Click the red button to create your first survey!
            </p>
          </div>
        </div>
      );
    }
  }

  render() {
    return <div>{this.renderSurveys()}</div>;
  }
}

const mapStateToProps = ({ surveys }) => {
  return { surveys };
};

export default connect(
  mapStateToProps,
  { fetchSurveys }
)(SurveyList);
