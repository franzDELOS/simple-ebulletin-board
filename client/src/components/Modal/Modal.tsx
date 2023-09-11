import { Children, Fragment } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface ModalProps {
  children?: any;
  className?: string;
}
const Modal: React.FC<ModalProps> = ({ className, children }: ModalProps) => {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);

  if (!isOpen) return null;

  return (
    <Fragment>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className={`bg-white rounded-lg ${className}`}>
          <div className="max-h-auto">{children}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
