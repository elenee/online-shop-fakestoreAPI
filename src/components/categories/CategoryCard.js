import { Card } from "antd";
import "../../styles/ant-card1.css";

const { Meta } = Card;
const CategoryCard = ({ data, categoryIcons, index, onClick}) => (
  <Card
    className="category-ant"
    onClick={onClick}
    hoverable
    cover={<img key={index} src={categoryIcons[index]} alt={data.name} />}
  >
    <Meta title={data} />
  </Card>
);
export default CategoryCard;
