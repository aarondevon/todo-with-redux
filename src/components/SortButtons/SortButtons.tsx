import React from 'react';
import {connect} from 'react-redux';
import {doSort} from '../../actions/todos';

class SortButtons extends React.Component<any, any> {

    getCategory(event: any) {
        this.props.sortCategory(event.target.value);
    }

    render() {
        return (
            <div className="sort-buttons">
                <button className="button" value="all" onClick={(event) => this.getCategory(event)}>All</button>
                <button className="button" value="general" onClick={(event) => this.getCategory(event)}>General</button>
                <button className="button" value="grocery" onClick={(event) => this.getCategory(event)}>Grocery</button>
                <button className="button" value="work" onClick={(event) => this.getCategory(event)}>Work</button>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch:any) => ({
    sortCategory: (category: string) => dispatch(doSort(category))
});

export default connect(null, mapDispatchToProps)(SortButtons);