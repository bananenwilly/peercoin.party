import React from "react";
import { Modal } from "react-bootstrap";
import DonationModal from "./donationModal";
import BlockModal from "./blockModal";
import FindBlock from "./findBlock";
import BlockSingle from "./blockSingle";
import SearchAddress from "./searchAddress";

const ModalWrapper = ({
  modalStep,
  modalBlockSelectedData,
  hideModal,
  raiseModalBlockSelectedData,
  showModal,
  highestBlock,
  raiseSearchAddress
}) => {
  const renderModalStepBody = () => {
    switch (modalStep) {
      case "donation":
        return <DonationModal />;
      case "block":
        return <BlockModal modalBlockSelectedData={modalBlockSelectedData} />;
      case "findblock":
        return (
          <FindBlock
            showModal={x => showModal(x)}
            highestBlock={highestBlock}
            raiseModalBlockSelectedData={raiseModalBlockSelectedData}
          />
        );
      case "blockSingle":
        return (
          <BlockSingle
            showModal={x => showModal(x)}
            block={modalBlockSelectedData["blockIndex"]}
          />
        );
      case "searchaddress":
        return (
          <SearchAddress
            raiseSearchAddress={raiseSearchAddress}
            showModal={x => showModal(x)}
          />
        );
      default:
        return;
    }
  };

  const renderModalStepHeader = () => {
    switch (modalStep) {
      case "donation":
        return "Donation address";
      case "block":
      case "blockSingle":
        return "Block #" + modalBlockSelectedData["blockIndex"];
      case "findblock":
        return "Find block by block number";
      case "searchaddress":
        return "Display all blocks for a specific address";
      default:
        return;
    }
  };

  return (
    <Modal
      show={modalStep !== 0}
      onHide={hideModal}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {renderModalStepHeader()}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{renderModalStepBody()}</Modal.Body>
      <Modal.Footer>
        <button className="btn btn-secondary" onClick={() => hideModal()}>
          Close
        </button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalWrapper;
