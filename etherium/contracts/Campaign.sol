pragma solidity ^0.5.13;
contract CampaignFactory{
    address[] deployedContracts;
    function createCampaign(uint minimum) public{
        address newCampaign = address(new Campaign(minimum, msg.sender));
        deployedContracts.push(newCampaign);
    }

    function getDeployedCampaigns() public view returns(address[] memory){
        return deployedContracts;
    }
}
contract Campaign{
    struct Request{
        string description;
        uint value;
        address payable recipient;
        bool complete;
        uint approvalCount;
        mapping(address => bool) approvals;
    }
    Request[] public requests;
    address public manager;
    uint public minimumContribution;
    mapping(address => bool) approvers;
    uint public approversCount;
    modifier restricted(){
        require(msg.sender == manager);
        _;
    }
    constructor (uint minimum, address creator) public{
        manager = creator;
        minimumContribution=minimum;
    }

    function contribute() public payable{
        require(msg.value > minimumContribution);
        approvers[msg.sender] = true;
        approversCount++;
    }

    function createRequest(string memory description, uint value, address payable recipient) public restricted{
        Request memory newRequest = Request({
            description: description,
            value:value,
            recipient: recipient,
            complete: false,
            approvalCount:0
        });
        requests.push(newRequest);
    }

    function approveRequest(uint index) public{
        Request storage request = requests[index];
        require(approvers[msg.sender]);
        require(!request.approvals[msg.sender]);
        request.approvals[msg.sender] = true;
        request.approvalCount++;
    }

    function finalizeRequest (uint index) public restricted{
        Request storage request = requests[index];
        require(request.approvalCount > (approversCount/2));
        require(!request.complete);
        request.complete =true;
        request.recipient.transfer(request.value);

    }

    function getSummary() public view returns(
        uint, uint, uint, uint, address
        ) {
        return(
            minimumContribution,
            address(this).balance,
            requests.length,
            approversCount,
            manager
        );
    }

    function getRequestsCount() public view returns(uint){
        return requests.length;
    } 
}