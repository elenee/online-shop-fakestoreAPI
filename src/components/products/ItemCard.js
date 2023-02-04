import { Card } from "antd";
import '../../styles/ant-items-card.css'

const { Meta } = Card;
const ItemCard = ({ data, index }) => (
  <Card
    className="item-ant"
    hoverable
    style={{
      width: 300,
      height: 340,
    }}
    cover={<img key={index} src={data.image} />}
    actions={[
      `${data.price}$`
    ]}
  >
    <Meta title={data.title} />
  </Card>
);
export default ItemCard;
