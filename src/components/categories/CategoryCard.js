import { Card } from "antd";
import "../../styles/ant-card1.css";

const { Meta } = Card;
const CategoryCard = ({ data, categoryIcons, index }) => (
  <Card
    className="category-ant"
    hoverable
    cover={<img key={index} src={categoryIcons[index]} alt={data.name} />}
  >
    <Meta title={data} />
  </Card>
);
export default CategoryCard;
