import React, {ChangeEvent} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

interface toDoCategoryProps {
    onCategoryChange: any,
    category: string
}


export default class ToDoCategory extends React.Component<toDoCategoryProps, any> {
    state = {
        toDoCategory: this.props.category !== '' ? this.props.category : 'general'
    }

    handleCategoryChange(event: ChangeEvent<HTMLSelectElement>) {
        this.setState({
            toDoCategory: event.target.value
        });

        this.props.onCategoryChange(event.target.value);
    };

    render() {
        return (
            <div className="category-dropdown-container">
                <Select value={this.state.toDoCategory} onChange={(event:any) => {
                    this.handleCategoryChange(event);
                }
                }>
                    <MenuItem value="general">General</MenuItem>
                    <MenuItem value="grocery">Grocery</MenuItem>
                    <MenuItem value="work">Work</MenuItem>
                </Select>
                {/*<select className="custom-select" value={this.state.toDoCategory} onChange={(event) => {*/}
                {/*    this.handleCategoryChange(event);*/}
                {/*}*/}
                {/*}>*/}
                {/*    <option value="general">General</option>*/}
                {/*    <option value="grocery">Grocery</option>*/}
                {/*    <option value="work">Work</option>*/}
                {/*</select>*/}
            </div>
        )
    }
}

