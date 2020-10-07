import React, {ChangeEvent} from 'react';
import './ToDoCategory.scss';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Categories from "../../models/categories";

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
                    <MenuItem value={Categories.General}>General</MenuItem>
                    <MenuItem value={Categories.Grocery}>Grocery</MenuItem>
                    <MenuItem value={Categories.Work}>Work</MenuItem>
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

