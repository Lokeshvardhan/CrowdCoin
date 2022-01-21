import React,{useDebugValue, useState} from "react";
import Layout from "../../../components/layout";
import {Button, Tab, Table} from 'semantic-ui-react';
import {Link} from '../../../routes';
import Campaign from '../../../etherium/campaign';
import RequestRow from "../../../components/requestRow";
const RequestIndex = (props)=>{
    const {Header, Row, HeaderCell, Body} = Table;
    const renderRow =() =>{
        if(props.requests!==null){
        return props.requests.map((request,index)=>{
            return <RequestRow 
                key={index}
                id={index}
                request={request}
                address={props.address}
                approversCount= {props.approversCount}
            />;
        })
    }
    }
    return(
        <Layout>
            <h3>Requests</h3>

            <Link route={`/campaigns/${props.address}/requests/new`}>
                <a>
                    <Button primary floated="right" style={{marginBottom:10}}>Add Request</Button>
                </a>
            </Link>
            <Table>
                <Header>
                    <Row>
                        <HeaderCell>ID</HeaderCell>
                        <HeaderCell>Description</HeaderCell>
                        <HeaderCell>Amount</HeaderCell>
                        <HeaderCell>Recipient</HeaderCell>
                        <HeaderCell>ApprovalCount</HeaderCell>
                        <HeaderCell>Approve</HeaderCell>
                        <HeaderCell>Finalize</HeaderCell>
                    </Row>
                </Header>
                <Body>
                    {renderRow()}
                </Body>
            </Table>
            <div>Found {props.requestCount} requests.</div>
        </Layout>
    )
};
RequestIndex.getInitialProps = async(props)=>{
    console.log(props.query.address);
     const campaign  = Campaign(props.query.address);
     const requestCount = await campaign.methods.getRequestsCount().call();
     const approversCount = await campaign.methods.approversCount().call();
     var requests =null;
     if(requestCount>0){
      requests = await Promise.all(
         Array(requestCount).fill().map((element,index)=>{
            return campaign.methods.requests(index).call();
         })
     )
        }
    return {
        address:props.query.address,
        requests,
        requestCount,
        approversCount
    };
};
export default RequestIndex;