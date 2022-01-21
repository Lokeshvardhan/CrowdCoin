import React,{useState}  from "react";
import {Form, Input , Message,Button} from 'semantic-ui-react';
import Campaign from "../etherium/campaign";
import web3 from "../etherium/web3";
import { Router } from "../routes";
const ContributeForm = (props)=>{
    const [value, setValue] =useState('');
    const [errMsg, setErrMsg] = useState('');
    const [loading,setLoading] = useState(false);
    const onSubmit = async(event) =>{
        event.preventDefault();
        const campaign = Campaign(props.address);
        setLoading(true);
        setErrMsg('');
        try{
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.contribute()
            .send({
                from: accounts[0],
                value:web3.utils.toWei(value, 'ether')
            });
            setValue('');
            Router.replaceRoute(`/campaigns/${props.address}`);
        } catch(err){
            setErrMsg(err.message);
        }
        setLoading(false);
    }
    return( 
        <Form onSubmit={onSubmit} error={!!errMsg}>
            <Form.Field>
                <label>Amount to Contribute</label>
                <Input 
                    value={value}
                    onChange={event => setValue(event.target.value)}
                    label="ether"
                    labelPosition="right"
                />
            </Form.Field>
                <Message error header="Oops!" content={errMsg} />
            <Button 
                primary
                loading={loading}>
                Contribute
            </Button>
        </Form>
    );
}

export default ContributeForm;