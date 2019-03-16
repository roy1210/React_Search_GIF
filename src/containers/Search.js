import Search from "../components/Search";
import { connect } from "react-redux";

// action を読み込む
import getUrls from "../actions/getUrls";

const mapStateToProps = state => {
  return {
    buttonText: state.buttonText
  };
};

// action を dhispatch するメソッドを props として渡す
const mapDispatchToProps = dispatch => {
  return {
    getUrls: word => {
      dispatch(getUrls(word));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
