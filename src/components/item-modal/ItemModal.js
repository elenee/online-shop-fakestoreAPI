import { Modal } from "antd";
import { useState } from "react";
import ItemCard from "../products/ItemCard";
import "../../styles/ant-modal.css"

const ItemModal = ({ data, index }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <ItemCard data={data} index={index} showModal={showModal} />
      <Modal
        title={data.title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="modal-info">
          <div className="img"><img src={data.image} className='info-img'/></div>
          <div className="info-text">
            {data.description}
            <h2>${data.price}</h2>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ItemModal;
