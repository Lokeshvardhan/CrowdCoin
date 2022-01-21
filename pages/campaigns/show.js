import React from "react";
import { Card ,Grid, Button} from "semantic-ui-react";
import Layout from '../../components/layout';
import Campaign from '../../etherium/campaign';
import web3 from "../../etherium/web3";
import ContributeForm from "../../components/contributeForm";
import {Link } from '../../routes';
const CampaignShow = (props) =>{

    const renderCards = ()=>{
        const {
            balance,
            manager,
            minimumContribution,
            approversCount,
            requestsCount
        } = props;
        const items =[
            {
                header:manager,
                meta:'Address of manager',
                description:"The manager created this campaign and can create requests to withdraw money",
                style:{overflowWrap:'break-word'}
            },
            {
                header:minimumContribution,
                meta:'Minimum Contribution(wei)',
                description:"You must contribute this much of wei to become a approver"
            },
            {
                header:requestsCount,
                meta:'Number of requests',
                description:"A request tries to withdraw from  contract. Requests must be approved by approvers."
            },
            {
                header:approversCount,
                meta:'Number of approvers',
                description:"Number of people already donated"
            },
            {
                header:web3.utils.fromWei(balance,'ether'),
                meta:'Campaign balance(ether)',
                description:"This much money is left to spend"
            }
        ]
        return <Card.Group items={items}/>
    }
    return(
        <Layout>
            <h3>Campaign Show </h3>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={10}>
                        {renderCards()}
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <ContributeForm address={props.address}/>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column>
                        <Link route={`/campaigns/${props.address}/requests`}>
                            <a>
                                <Button primary>View Requests</Button>
                            </a>
                        </Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Layout>
    );
};

CampaignShow.getInitialProps = async(props)=>{
    // console.log(props.query.address);
    const campaign  = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();
    // console.log(summary);
    return {
        address:props.query.address,
        minimumContribution: summary[0],
        balance: summary[1],
        requestsCount: summary[2],
        approversCount: summary[3],
        manager: summary[4]
    };
};
export default CampaignShow;