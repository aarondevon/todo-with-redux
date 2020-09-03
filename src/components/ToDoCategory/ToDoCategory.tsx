import React, {ChangeEvent} from 'react';

interface toDoCategoryProps {
    onCategoryChange: any,
    testTest: string
}


export default class ToDoCategory extends React.Component<toDoCategoryProps, any> {
    state = {
        toDoCategory: 'general'
    }

    handleCategoryChange(event: ChangeEvent<HTMLSelectElement>) {
        this.setState({
            toDoCategory: event.target.value
        });

        console.log(this.props.testTest);
        this.props.onCategoryChange(event.target.value);
    };

    render() {
        return (
            <div>
                <select value={this.state.toDoCategory} onChange={(event) => {
                    this.handleCategoryChange(event);
                }
                }>
                    <option value="general">General</option>
                    <option value="grocery">Grocery</option>
                    <option value="work">Work</option>
                </select>
            </div>
        )
    }
}

