  export interface AddNoteModalProps {
    disabled: boolean
    children: React.ReactNode;
    isVisible: boolean;
    onClose: () => void;
    buttonText?: string;
    onSubmit: () => void;
  }