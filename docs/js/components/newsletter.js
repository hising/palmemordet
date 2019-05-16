import React from "react";

export class Newsletter extends React.PureComponent {
    constructor(props, context) {
        super(props, context);
        this.state = {
            email: "",
            valid: false
        };
    }

    handleSubmit(event) {
        return this.state.valid;
    }

    isValidEmail(email) {
        return /(.+)@(.+){2,}\.(.+){2,}/.test(email);
    }

    handleEmailInput(event) {
        let email = event.target.value;
        let newState = {email};
        newState.valid = this.isValidEmail(email);
        this.setState(newState);
    }

    render() {
        return (
            <div id="newsletter-signup">
                <form
                    action="//ridgestreet.us5.list-manage.com/subscribe/post?u=4e670822a8a8ed8b7329c8bc0&amp;id=43398d6dd0"
                    method="post"
                    id="mc-embedded-subscribe-form"
                    name="mc-embedded-subscribe-form"
                    className="validate"
                    target="_blank"
                    formNoValidate={true}
                    onSubmit={this.handleSubmit}>
                    <h2>Nyhetsbrev om Palmemordet</h2>
                    <p className="lead">
                        Få e-post när sidan uppdateras, vi har fått tag på nya
                        bra dokument eller källor som rör Palmemordet.
                    </p>

                    <div className="input-group">
                        <input
                            type="email"
                            name="EMAIL"
                            id="mce-EMAIL"
                            className="form-control form-control-lg"
                            placeholder="Din E-postadress"
                            value={this.state.email}
                            onChange={this.handleEmailInput}
                        />
                        <span className="input-group-btn">
                            <button
                                className="btn btn-success"
                                type="submit"
                                value="Subscribe"
                                name="subscribe"
                                id="mc-embedded-subscribe"
                                disabled={!this.state.valid}>
                                Prenumerera
                            </button>
                        </span>
                    </div>
                </form>
            </div>
        );
    }
}
