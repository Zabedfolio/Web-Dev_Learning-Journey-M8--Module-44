// import {CircleDollar} from "@gravity-ui/icons";
import {Card} from "@heroui/react";

const TasksCard = ({task}) => {

    const {title, description,status}=task;
    return (
        <Card className="">
      {/* <CircleDollar aria-label="Dollar sign icon" className="text-primary size-6" role="img" /> */}
      <Card.Header>
        <Card.Title>{title}</Card.Title>
        <Card.Description>
          {description}
        </Card.Description>
      </Card.Header>
      <Card.Footer>
        {status}
      </Card.Footer>
    </Card>
    );
};

export default TasksCard;