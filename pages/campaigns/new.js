import React, { useState } from "react";
import { Form,Button, Input,Message } from "semantic-ui-react";
import Layout from "../../components/layout";
import factory from '../../etherium/factory';
import web3 from "../../etherium/web3";
import {Router} from '../../routes';
const CampaignNew = () =>{
    const [minimumConrtibution, setMinimumContribution] =useState('');
    const [errMsg, setErrMsg] = useState('');
    const [loading,setLoading] = useState(false);
    const onSubmit = async(event) =>{
        event.preventDefault();
        setLoading(true);
        setErrMsg('');
        try{
            const accounts = await web3.eth.getAccounts();
            console.log(minimumConrtibution);
            //console.log(accounts,'acco');
            await factory.methods.createCampaign(minimumConrtibution)
            .send({
                from: accounts[0]
            });
            Router.pushRoute('/');
        } catch(err){
            setErrMsg(err.message);
        }
        setLoading(false);
    }
    const setAmount =(event)=>{
        setMinimumContribution(event.target.value);
    }
    return(
        <Layout>
            <h3>Create a Campaign!!</h3>
            <Form onSubmit={onSubmit} error={!!errMsg}>
                <Form.Field>
                    <label>Minimum Contribution(in wei)</label>
                    <Input 
                        label='wei' 
                        labelPosition="right" 
                        value={minimumConrtibution}
                        onChange={setAmount}
                    />

                </Form.Field>
                
                <Message error header="Oops!" content={errMsg} />
                <Button loading={loading} primary>Create</Button>
            </Form>
        </Layout>
    );
}

export default CampaignNew;