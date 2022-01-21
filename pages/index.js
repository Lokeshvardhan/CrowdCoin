
import React,{useEffect, useState} from 'react';
import { Card,Button } from 'semantic-ui-react';
import factory from '../etherium/factory';
import Layout from '../components/layout';
import {Link} from '../routes';
const CampaignIndex =(campaigns) =>{
        //console.log(campaigns);
    // useEffect(()=>{
    //     const getCampaigns = async() =>{
           
    //        console.log(campaigns);
    //     };
    //     getCampaigns();
    // },[]);
    campaigns = Object.values(campaigns);
    const renderCampaigns = () =>{
        const items = campaigns.map(address =>{
            return {
                header:address,
                description: (
                    <Link route={`/campaigns/${address}`}>
                        <a>View Campaign</a>
                    </Link>
                    ),
                fluid: true
            }
        });
        return <Card.Group items={items} />;
    }
    return(
        <Layout>
            <div>
                <h1>Campaign</h1>
                
                <h3>Open Campaigns</h3>
                <Link route="/campaigns/new">
                    <a>
                        <Button 
                            floated="right"
                            content="Create Campaign"
                            icon="add circle"
                            primary
                        />
                    </a>
                </Link>
                {renderCampaigns()}
            </div>
        </Layout>
    );
}

CampaignIndex.getInitialProps = async()=>{
    const campaigns=  await factory.methods.getDeployedCampaigns().call();
    //console.log(campaigns,'props');
    return campaigns;
};
export default CampaignIndex;