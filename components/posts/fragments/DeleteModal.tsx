import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { IPost } from "../../../utils/types";
import { RowBox } from "../../css_components/FlexBox";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

interface deleteModalProps {
  isOpenDeleteModal: boolean;
  selectedPostId: string;
  closeDeleteModal: () => void;
  onClickDeleteConfirmBtn: (
    e: React.MouseEvent<HTMLButtonElement>,
    postId: string,
  ) => void;
}

const DeleteModal = ({
  isOpenDeleteModal,
  selectedPostId,
  closeDeleteModal,
  onClickDeleteConfirmBtn,
}: deleteModalProps) => {
  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={isOpenDeleteModal}
        onClose={closeDeleteModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpenDeleteModal}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              글 삭제
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              정말 이 글을 삭제할까요?
            </Typography>

            <RowBox padding="1rem 0 0" justifyEnd>
              <Button variant="outlined" onClick={closeDeleteModal}>
                취소
              </Button>
              <Button
                variant="contained"
                onClick={e => onClickDeleteConfirmBtn(e, selectedPostId)}
              >
                확인
              </Button>
            </RowBox>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default DeleteModal;
