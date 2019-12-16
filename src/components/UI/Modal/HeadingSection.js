import React from 'react';
import PropTypes from 'prop-types';

class HeadingSection extends React.Component {
      
    /*getChildContext() {
        var e = this.context.headingLevel;
        return {
            headingLevel: this.context.headingLevel ? this.context.headingLevel + 1 : 1
        }
    }*/
    
    render() {
        return (
            <section>
                {this.props.children}
            </section>
        )
    }
}
       
HeadingSection.propTypes = {
    children: PropTypes.node.isRequired
}
//contextTypes = {
//    headingLevel: p.a
//}
//childContextTypes = {
//    headingLevel: p.a
//}

export default HeadingSection;