import React from "react";
import "./Main.css";

class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {login: '', password: '', mail: '', isLogged: 'false'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value, state) {
        this.setState({[state] : value});
    }

    login (login, password) {

        let item = localStorage.getItem(login).split('|')[0];

        if (password === item) {
            this.handleChange('true', 'isLogged');
        }
    }

    register(login, password, mail) {

        if (!login.match(/[|]/gi) && !mail.match(/[|]/gi)) {
            localStorage.setItem(login, password + '|' + mail);
            this.props.page = 'Sign up';
        }
    };


    render() {
        const p = this.props.page,
            isLogged = this.state.isLogged;

        if (p === 'Main' && isLogged === 'false') {
            return (
                <div className={"main"}>
                    <div className={"mainText"}>
                    The rules of conduct on the game server L2xyz.eu and related Internet services:
                    The following rules define the basic principles of communication and interaction within the Lineage II game, on the site www.l2xyz.eu and the forum dedicated to Lineage II.
                    Failure to comply with these rules or their repeated violation will entail a punishment up to disabling your game account on the server Lineage II.
                    While playing Lineage2, you must first respect the rights of other players.
                    <ol>
                        <li>It is forbidden to abuse the trust of players and / or threaten to one degree or another.</li>
                        <li>It is forbidden to disclose someone else's personal information, such as real name, residential address, phone number, email address, account name, both in the game Lineage 2 and on the forum.</li>
                        <li>It is forbidden to use in communication mate, threats, obscene expressions, insults discriminating on the basis of race, gender or ethnicity.</li>
                        <li>It is forbidden to leave links to resources containing pornography and / or violence.</li>
                        <li>It is forbidden to advertise or give links to other Lineage servers.</li>
                        <li>When communicating in Lineage 2 via Global Chat, you have no right to flood, spread spam, repeatedly duplicate messages.</li>
                        <li>It is forbidden to try to play the role of game masters, to create characters with similar names.</li>
                        <li>It is forbidden to distribute advertising, not related to the world of Lineage2, in the game or on the forum.</li>
                        <li>It is forbidden to change the version of the client part of the game Lineage2, adopted by the administration as the base.</li>
                        <li>It is forbidden to advertise and / or sell, buy, exchange, transfer, receive registration information necessary to access the accounts of the game Lineage2, and game characters.</li>
                        <li>It is prohibited to sell / buy Adena / resources / things / characters of the game Lineage2 for real money not from the Administration of the server or authorized representatives of the Administration.</li>
                        <li>You must follow the instructions and instructions of the game masters and administrators in both Lineage2 and the forum.</li>
                        <li>It is not recommended to create and / or consist in gaming clans / organizations based on racial / sexual / ethnic / anti-religious beliefs.</li>
                        <li>It is not recommended to create characters, clans, alliances with offensive and / or provocative names.</li>
                        <li>It is forbidden to use terminology in the names / names of game characters / associations, implying the endowment of the character / association with administrative functions.</li>
                        <li>It is allowed to use fictitious information or intentionally hide certain items when registering on the forum and when creating a game account.</li>
                        <li>It is forbidden to resort to hacking and / or interception of data coming to the server or from the server Lineage2.</li>
                        <li>It is forbidden to use errors of the Lineage2 server software during the game. It is also prohibited to disseminate information about the presence of errors
                            suitable for deliberate use during the game in order to obtain any benefit. Details of errors found should be immediately reported to the administration. If the error found can be intentionally used in
                            in order to obtain any benefit and / or advantage, the administration must be informed immediately.</li>
                        <li>The language of communication in the game: Russian / translit / English. Language of communication on the forum: English.</li>
                        <li>Breeding is prohibited. Breeding is the use of programs other than the accepted reference version.</li>
                        <li>Forbidden cloning of characters.</li>
                        <li>It is forbidden to use an exploit (a situation that allows an NPC to attack without being attacked by itself) on mobs above level 49.</li>
                        <li>Since the game on the server is free and the server is privately owned, the administration has the right to block your access to the game / forums without giving any reasons.</li>
                    </ol>
                    </div>
                </div>
            );
        }

        if (p === 'Sign up' && isLogged === 'false') {
            return (
                <div className={"signUp"}>
                    <form className={"registerForms"}>
                        <div className={"registerText"}>Login</div>
                        <input type="text" name="login" onChange={(e) => this.handleChange(e.currentTarget.value, 'login')}/>
                        <div className={"registerText"}>Password</div>
                        <input type="password" name="password" onChange={(e) => this.handleChange(e.currentTarget.value, 'password')}/>
                        <div className={"registerText"}>Mail</div>
                        <input type="email" name="mail" onChange={(e) => this.handleChange(e.currentTarget.value, 'mail')}/>
                        <button
                            className={"registerBtn"}
                            onClick={() => this.register(this.state.login, this.state.password, this.state.mail)}
                            onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                            onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                        > Sign up </button>
                    </form>
                </div>
            );
        }

        if (p === 'Sign in' && isLogged === 'false') {
            return (
                <div className={"signIn"}>
                    <form className={"registerForms"}>
                        <div className={"registerText"}>Login</div>
                        <input type="text" name="login" onChange={(e) => this.handleChange(e.currentTarget.value, 'login')}/>
                        <div className={"registerText"}>Password</div>
                        <input type="password" name="password" onChange={(e) => this.handleChange(e.currentTarget.value, 'password')}/>
                        <button
                            className={"registerBtn"}
                            onClick={() => this.login(this.state.login, this.state.password)}
                            onMouseOver={(e) => e.currentTarget.style.borderBottom = "2px solid #ffcc00"}
                            onMouseOut={(e) => e.currentTarget.style.borderBottom = "none"}
                        > Sign in </button>
                    </form>
                </div>
            );
        }

        if (p === 'Forum') {
            return (
                <div className={"forum"}>

                </div>
            );
        }

        if (p === 'Servers') {
            return (
                <div className={"servers"}>

                </div>
            );
        }

        if (p === 'Donate') {
            return (
                <div className={"donate"}>

                </div>
            );
        }

        if (isLogged === 'true') {
            return (
                <div className={"profile"}>
                    <p>Welcome to your profile, {this.state.login}</p>
                </div>
            )
        }

        return ('');
    }
}

export default Main
