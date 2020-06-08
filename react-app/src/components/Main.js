import React from "react";
import Header from "./Header";
import "./Main.css";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {newPage: 'Main'};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e, name) {
        this.setState({[name]: e.target.innerHTML});
    }

    render() {
        this.state.newPage = this.props.page;

        if (this.state.newPage === 'Main') {
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
                        <li>It is forbidden to resort to hacking and / or interception of data coming to the server or from the server Lineage2.
                        <li>It is forbidden to use errors of the Lineage2 server software during the game. It is also prohibited to disseminate information about the presence of errors
                            suitable for deliberate use during the game in order to obtain any benefit. Details of errors found should be immediately reported to the administration. If the error found can be intentionally used in
                            in order to obtain any benefit and / or advantage, the administration must be informed immediately.</li>
                        <li>The language of communication in the game: Russian / translit / English. Language of communication on the forum: English.</li>
                        <li>Breeding is prohibited. Breeding is the use of programs other than the accepted reference version.</li>
                        <li>Forbidden cloning of characters.</li>
                        <li>It is forbidden to use an exploit (a situation that allows an NPC to attack without being attacked by itself) on mobs above level 49.</li>
                        <li>Since the game on the server is free and the server is privately owned, the administration has the right to block your access to the game / forums without giving any reasons.</li>
                        </li>
                    </ol>
                    </div>
                </div>
            );
        }

        if (this.state.newPage === 'Sign up') {
            return (
                <div className={"signUp"}>
                </div>
            );
        }

        if (this.state.newPage === 'Sign in') {
            return (
                <div className={"signIn"}>
                </div>
            );
        }

        if (this.state.newPage === 'Forum') {
            return (
                <div className={"forum"}>
                </div>
            );
        }

        if (this.state.newPage === 'Servers') {
            return (
                <div className={"servers"}>
                </div>
            );
        }

        if (this.state.newPage === 'Donate') {
            return (
                <div className={"donate"}>
                </div>
            );
        }

        return ('');
    }
}

export default Main
