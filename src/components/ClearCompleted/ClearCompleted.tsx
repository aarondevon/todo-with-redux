import React from 'react';
import {connect} from "react-redux";

class ClearCompleted extends React.Component<any, any> {

    onClearCompleted() {
        this.props.clearCompleted();
    }

    render() {
        return (
            <div>
                <button className="button" onClick={() => this.onClearCompleted()}>Clear Completed</button>
            </div>
        )
    }
}

const mapDispatchToState = (dispatch: any) => ({
  clearCompleted: () => dispatch({
      type: 'CLEAR_COMPLETED'
  })
})

export default connect(null,mapDispatchToState)(ClearCompleted);