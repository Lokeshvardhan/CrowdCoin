import React from "react";
import { Button, Table } from "semantic-ui-react";
import web3 from "../etherium/web3";
import Campaign from '../etherium/campaign';
import {Link, Router} from '../routes';
const RequestRow = (props)=>{
    const { Row, Cell} = Table;
    const {id,request, approversCount} = props;
    const readyToFinalize = request.approvalCount > approversCount/2;
    const onApprove = async() =>{
        const campaign = Campaign(props.address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.approveRequest(id)
        .send  ({
            from:accounts[0]
        });
        
        Router.pushRoute(`/campaigns/${props.address}/requests`);
    }
    const onFinalize = async() =>{
        const campaign = Campaign(props.address);
        const accounts = await web3.eth.getAccounts();
        await campaign.methods.finalizeRequest(id)
        .send  ({
            from:accounts[0]
        });
        Router.pushRoute(`/campaigns/${props.address}/requests`);
    }
    return(
        <Row disabled={request.complete} positive={readyToFinalize&& !request.complete}>
            <Cell>{id}</Cell>
            <Cell>{request.description}</Cell>
            <Cell>{web3.utils.fromWei(request.value,'ether')}</Cell>
            <Cell>{request.recipient}</Cell>
            <Cell>{request.approvalCount}/{approversCount}</Cell>
            <Cell>
                {request.complete?null:(
                    <Button color="green" basic onClick={onApprove}>Approve</Button>
                )}      
            </Cell>
            <Cell>
                {request.complete?null:(
                    <Button color="teal" basic onClick={onFinalize}>Finalize</Button>
                )}
            </Cell>
        </Row>
    );
}

export default  RequestRow;