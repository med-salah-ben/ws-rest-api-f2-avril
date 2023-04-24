import React from "react";
import { Button, Card, Image } from "semantic-ui-react";

const ContactCard = ({contact}) => {
  return (
    <Card>
      <Card.Content>
        <Image
          floated="right"
          size="mini"
          src="https://www.vecteezy.com/vector-art/2318271-user-profile-icon"
        />
        <Card.Header> Name : {contact.name}  </Card.Header>
        <Card.Meta>Email : {contact.email}   </Card.Meta>
        <Card.Description>
          Phone : <strong>216</strong> {contact.phone}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            Edit
          </Button>
          <Button basic color="red">
            Delete
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
};

export default ContactCard;
