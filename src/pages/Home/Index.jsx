
import React, {Component} from 'react';


class Home extends Component {
    constructor() {
        super()
        this.search = this.search.bind(this);
    }
    search(event){
        console.log(event.currentTarget.attribute);

    }
    render() {
        return(
<div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
    <input onChange={this.search} className="mdl-textfield__input" type="text" id="search" />
    <label className="mdl-textfield__label" htmlFor="search">Digite para buscar...</label>
</div>);
    }
}

export default Home;