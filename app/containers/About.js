/**
 * Created by xingxiao05 on 17/5/9.
 */
import React from 'react'

class About extends React.Component {
    render(){
        return(
            <div>
                About
                <p>{this.props.match.params.id }</p>
            </div>
        )

    }
}

export default About