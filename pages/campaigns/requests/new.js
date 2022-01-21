import React,{useState} from "react";
import Layout from "../../../components/layout";
import {Button,Form, Message,Input} from 'semantic-ui-react';
import {Link, Router} from '../../../routes';
import web3 from '../../../etherium/web3';
import Campaign from '../../../etherium/campaign';
const RequestNew = (props) =>{
    const [value, setValue] = useState('');
    const [recpAdd, setRecpAdd] = useState('');
    const [description,setDescription] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [loading,setLoading] = useState(false);
    const onSubmit = async(event) =>{
        event.preventDefault(); 
        const campaign  = Campaign(props.address);
        setLoading(true);
        setErrMsg('');
        try{
            const accounts = await web3.eth.getAccounts();
            await campaign.methods.createRequest(
                description,
                web3.utils.toWei(value,'ether'),
                recpAdd
            )
            .send({
                from: accounts[0]
            });
            Router.pushRoute(`/campaigns/${props.address}/requests`);
        } catch(err){
            setErrMsg(err.message);
        }
        setLoading(false);
    }
    return(
        <Layout>
            <Link route={`/campaigns/${props.address}/requests`}>
                <a>
                    Back
                </a>
            </Link>
            <h3>Create a Request</h3>
            <Form onSubmit={onSubmit} error={!!errMsg}>
                <Form.Field>
                    <label>Description</label>
                    <Input 
                        value={description}
                        onChange={event=>setDescription(event.target.value)}
                    />
                </Form.Field>
                <Form.Field>
                    <label>Value in ether</label>
                    <Input 
                        value={value}
                        onChange={event=>setValue(event.target.value)}
                        />
                </Form.Field>
                <Form.Field>
                    <label>Recipient Address</label>
                    <Input 
                        value={recpAdd}
                        onChange={event=>setRecpAdd(event.target.value)}
                        /> 
                </Form.Field>
                <Message error header="Oops!" content={errMsg} />
                <Button loading={loading} primary>Create!!</Button>
            </Form>
        </Layout>
    )
}
RequestNew.getInitialProps = async(props)=>{
    return {
        address:props.query.address
    };
};
export default RequestNew;