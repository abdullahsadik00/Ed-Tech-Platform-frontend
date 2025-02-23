import type React from "react";
import { Modal as MantineModal, type ModalProps as MantineModalProps } from "@mantine/core";

export interface ModalProps extends MantineModalProps {
    // isOpen: boolean;
    onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ onClose, children, title, ...props }) => {
    return (
        <MantineModal
            // opened={isOpen} // Explicitly set the `opened` prop
            onClose={onClose} // Explicitly set the `onClose` prop
            title={title} // Pass the title prop
            {...props} // Spread the remaining props
        >
            {children}
        </MantineModal>
    );
};