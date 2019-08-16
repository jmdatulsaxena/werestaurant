import React from 'react'

class WSearch extends React.Component {
    state = { zip: ''}

    onFormSubmit =(event) => {
        event.preventDefault();
        this.props.onSubmit(this.state.zip)
    }

    render() {
        return(
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Enter Zip Code</label>
                        <input type="text" maxLength="5" pattern="[0-9]{5}" required
                            value={this.state.zip}
                        onChange={(e)=>this.setState({ zip: e.target.value})}/>                        
                    </div>
                </form>
            </div>
        )
    }
}

export default WSearch;