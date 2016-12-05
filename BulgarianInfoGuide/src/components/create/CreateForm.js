import React, {Component} from 'react';

export default class CreateForm extends Component{
    render(){
        return(
            <form onSubmit={this.props.onSubmit}>
                <div className="form-group">
                    <label>
                        Name:
                    </label>
                    <input type="text" name="name"
                           value={this.props.name}
                           onChange={this.props.onChange}
                           className="form-control"

                    />
                </div>
                <div className="form-group">
                    <label>
                        Description:
                    </label>
                    <texarea name="description"
                           value={this.props.description}
                           onChange={this.props.onChange}
                           className="form-control"
                    />

                </div>
                <div className="form-group">
                    <label>
                        Image link:
                    </label>
                    <input type="text" name="image"
                           value={this.props.image}
                           onChange={this.props.onChange}
                           className="form-control"
                    />

                    <input type="submit" value="Create Wonder"
                           className="btn-btn-default"
                           disabled={this.props.inputDisabled}/>
                </div>
            </form>
        );
    }
}

