/**
 * Created by xingxiao05 on 17/5/9.
 */
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actionsTypes from './../redux/actioins/changeName'


class Home extends React.Component {
    componentDidMount(){
        this.props.changeNameAction.changeName({
            id: 123,
            name: "yuyang"
        });

        console.log(this.props.changeName);
    }
    render(){
        return (
            <div>
                <Link to="/about/32234">To About</Link>
                <div>hello world</div>
                {this.props.changeName.name}
            </div>
        )

    }
}

function mapStateToProps(state) {

    return {
        changeName: state.changeName
    }

}

function mapDispathToProps(dispath) {
    return {
        changeNameAction: bindActionCreators(actionsTypes, dispath)
    }
}

export default connect(
    mapStateToProps,
    mapDispathToProps
)(Home)