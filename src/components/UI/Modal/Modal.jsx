import * as SC from "./styles.js";

export const Modal = ({children, title}) => {
    return (
        <SC.ModalWrapper>
            <SC.Modal>
                <SC.ModalText>{title}</SC.ModalText>
                <SC.ModalContent>
                    {children}
                </SC.ModalContent>
            </SC.Modal>
        </SC.ModalWrapper>
    )
}