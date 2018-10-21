import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-cloud"></span>
                    <h1>Welcome to <strong>EasyPay</strong>, a rewards program<br />
                    for the community by the community.</h1>
                    <p>A convenient and secure way you can trust to pay your bills<br />
                    The more you use EasyPay, the more rewards you can access.</p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Learn about Rewards</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
