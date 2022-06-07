import { connect } from "react-redux";
import { RootState } from "../redux/store";
import { increment, decrement } from "../redux/reducers/counterReducer";

const mapStateToProps = (state: RootState) => {
  const { value } = state.count;
  return { count: value };
};

const withCounter = connect(mapStateToProps, {
  increment,
  decrement,
});

export default withCounter;
