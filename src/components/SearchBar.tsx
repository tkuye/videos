import React from 'react';

interface SearchBarProps {
    onFormSubmit: (term:string) => void;
}

interface State {
    term: string;
}

class SearchBar extends React.Component<SearchBarProps> {
    state:State = {term: ''}

    onInputChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
            this.setState({term:event.currentTarget.value});
    }

    onFormSubmit = (event:React.FormEvent):void => {
            event.preventDefault();
            this.props.onFormSubmit(this.state.term)
    }

    render(): JSX.Element {
        return (
            <div className='ui segment search-bar'>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" 
                        value={this.state.term}
                        onChange={this.onInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}
export default SearchBar