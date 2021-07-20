import React, { Component } from "react";

class PrincingClass extends Component {
    constructor() {
        super();
        this.state = {
            pricingData: [{
                title: "FREE",
                currency: "$",
                amount: 0,
                permonth: "/month",
                features: [
                    {
                        name: "Single User",
                        access: true
                    },
                    {
                        name: "5GB Storage",
                        access: true
                    },
                    {
                        name: "Unlimited Public Projects",
                        access: true
                    },
                    {
                        name: "Community Access",
                        access: true
                    },
                    {
                        name: "Unlimited Private Projects",
                        access: false
                    },
                    {
                        name: "Dedicated Phone Support",
                        access: false
                    },
                    {
                        name: "Free Subdomain",
                        access: false
                    },
                    {
                        name: "Monthly Status Reports",
                        access: false
                    }
                ]

            },
            {
                title: "PLUS",
                currency: "$",
                amount: 9,
                permonth: "/month",
                features: [
                    {
                        name: "5 User",
                        access: true
                    },
                    {
                        name: "50GB Storage",
                        access: true
                    },
                    {
                        name: "Unlimited Public Projects",
                        access: true
                    },
                    {
                        name: "Community Access",
                        access: true
                    },
                    {
                        name: "Unlimited Private Projects",
                        access: true
                    },
                    {
                        name: "Dedicated Phone Support",
                        access: true
                    },
                    {
                        name: "Free Subdomain",
                        access: true
                    },
                    {
                        name: "Monthly Status Reports",
                        access: false
                    }
                ]

            },
            {
                title: "PRO",
                currency: "$",
                amount: 49,
                permonth: "/month",
                features: [
                    {
                        name: "Unlimited Users",
                        access: true
                    },
                    {
                        name: "5GB Storage",
                        access: true
                    },
                    {
                        name: "Unlimited Public Projects",
                        access: true
                    },
                    {
                        name: "Community Access",
                        access: true
                    },
                    {
                        name: "Unlimited Private Projects",
                        access: true
                    },
                    {
                        name: "Dedicated Phone Support",
                        access: true
                    },
                    {
                        name: "Unlimited Free Subdomains",
                        access: true
                    },
                    {
                        name: "Monthly Status Reports",
                        access: true
                    }
                ]

            }]
        }
    }

    render() {
        return (

            <section className="pricing py-5">
                <div className="container">
                    <div className="row">

                        {this.state.pricingData.map((value,index) => {
                            return (
                                <div className="col-lg-4" key={index}>
                                    <div className="card mb-5 mb-lg-0" key={index}>
                                        <div className="card-body" key={index}>
                                            <h5 className="card-title text-muted text-uppercase text-center">{value.title}</h5>
                                            <h6 className="card-price text-center">{value.currency}{value.amount}<span className="period">{value.permonth}</span></h6>
                                            <hr></hr>

                                            <ul className="fa-ul">
                                                {value.features.map((value,index) => {
                                                    if (value.access == true) {
                                                        return (<li key={index}><span className="fa-li"><i className="fa fa-check"></i></span>{value.name}</li>)
                                                    } else {
                                                        return (<li key={index} className="text-muted"><span className="fa-li"><i className="fa fa-times"></i></span>{value.name}</li>)
                                                    }

                                                })}
                                            </ul>
                                            <a href="#" className="btn btn-block btn-primary text-uppercase">Button</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </section>
        )
    }
}

export default PrincingClass;







