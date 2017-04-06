import React, { PropTypes  } from "react";

/*class Greet extends Component {
    render() {
        const {name} = this.props;

        return (
            <div>
                Hello {name}
            </div>
        );
    }
}*/

const Greet = ({ name }) => (
  <div>
    Hello {name.toUpperCase()}
  </div>
);

Greet.propTypes = {
    name: PropTypes.string.isRequired
}

Greet.defaultProps = {
    name: "stranager"
}

export default Greet;
