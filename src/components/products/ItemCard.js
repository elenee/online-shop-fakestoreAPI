import { Card } from "antd";
import "../../styles/ant-items-card.css";
import ItemModal from "../item-modal/ItemModal";

const { Meta } = Card;
const ItemCard = ({ data, index, showModal }) => {
  return (
    <Card
      className="item-ant"
      hoverable
      cover={<img key={index} src={data.image} alt={data.title} />}
      actions={[`${data.price}$`]}
      onClick={showModal}
    >
      <Meta title={data.title} />
    </Card>
  );
};
export default ItemCard;
