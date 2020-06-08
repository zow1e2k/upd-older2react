import React from "react";
import "./Header.css";
import Main from "./Main";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {page: 'Main'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, name) {
        this.setState({[name]: e.target.innerHTML});
    }

    render() {

        if (this.state.page === 'Sign up') {
            return (
                <div>
                    <button
                        onClick={(e) => this.handleChange(e, 'page')}
                        onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                        onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                    >Sign in</button>
                    <button
                        onClick={(e) => this.handleChange(e, 'page')}
                        onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                        onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                    >Forum</button>
                    <button
                        onClick={(e) => this.handleChange(e, 'page')}
                        onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                        onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                    >Servers</button>
                    <button
                        onClick={(e) => this.handleChange(e, 'page')}
                        onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                        onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                    >Donate</button>
                    <button
                        onClick={(e) => this.handleChange(e, 'page')}
                        onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                        onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                    >Main</button>
                    <Main page={this.state.page}/>
                </div>
            );
        }

        if (this.state.page === 'Sign in') {
            return (
                <div>
                    <button
                        onClick={(e) => this.handleChange(e, 'page')}
                        onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                        onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                    >Sign up</button>
                    <button
                        onClick={(e) => this.handleChange(e, 'page')}
                        onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                        onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                    >Forum</button>
                    <button
                        onClick={(e) => this.handleChange(e, 'page')}
                        onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                        onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                    >Servers</button>
                    <button
                        onClick={(e) => this.handleChange(e, 'page')}
                        onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                        onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                    >Donate</button>
                    <button
                        onClick={(e) => this.handleChange(e, 'page')}
                        onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                        onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                    >Main</button>
                    <Main page={this.state.page}/>
                </div>
            );
        }

        if (this.state.page === 'Forum') {
            return (
                <div>
                    <button
                        onClick={(e) => this.handleChange(e, 'page')}
                        onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                        onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                    >Sign in</button>
                    <button
                        onClick={(e) => this.handleChange(e, 'page')}
                        onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                        onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                    >Sign up</button>
                    <button
                        onClick={(e) => this.handleChange(e, 'page')}
                        onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                        onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                    >Servers</button>
                    <button
                        onClick={(e) => this.handleChange(e, 'page')}
                        onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                        onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                    >Donate</button>
                    <button
                        onClick={(e) => this.handleChange(e, 'page')}
                        onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                        onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                    >Main</button>
                    <Main page={this.state.page}/>
                </div>
            );
        }

        if (this.state.page === 'Servers') {
            return (
                <div>
                    <button
                        onClick={(e) => this.handleChange(e, 'page')}
                        onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                        onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                    >Sign in</button>
                    <button
                        onClick={(e) => this.handleChange(e, 'page')}
                        onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                        onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                    >Sign up</button>
                    <button
                        onClick={(e) => this.handleChange(e, 'page')}
                        onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                        onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                    >Forum</button>
                    <button
                        onClick={(e) => this.handleChange(e, 'page')}
                        onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                        onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                    >Donate</button>
                    <button
                        onClick={(e) => this.handleChange(e, 'page')}
                        onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                        onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                    >Main</button>
                    <Main page={this.state.page}/>
                </div>
            );
        }

        if (this.state.page === 'Donate') {
            return (
                <div>
                    <button
                        onClick={(e) => this.handleChange(e, 'page')}
                        onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                        onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                    >Sign in</button>
                    <button
                        onClick={(e) => this.handleChange(e, 'page')}
                        onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                        onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                    >Sign up</button>
                    <button
                        onClick={(e) => this.handleChange(e, 'page')}
                        onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                        onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                    >Forum</button>
                    <button
                        onClick={(e) => this.handleChange(e, 'page')}
                        onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                        onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                    >Servers</button>
                    <button
                        onClick={(e) => this.handleChange(e, 'page')}
                        onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                        onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                    >Main</button>
                    <Main page={this.state.page}/>
                </div>
            );
        }

        return (
            <div>
                <button
                    onClick={(e) => this.handleChange(e, 'page')}
                    onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                    onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                >Sign in</button>
                <button
                    onClick={(e) => this.handleChange(e, 'page')}
                    onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                    onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                >Sign up</button>
                <button
                    onClick={(e) => this.handleChange(e, 'page')}
                    onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                    onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                >Forum</button>
                <button
                    onClick={(e) => this.handleChange(e, 'page')}
                    onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                    onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                >Servers</button>
                <button
                    onClick={(e) => this.handleChange(e, 'page')}
                    onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                    onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                >Donate</button>
                <Main page={this.state.page}/>
            </div>
        );
    }
}

export default Header
