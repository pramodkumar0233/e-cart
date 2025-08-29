const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white  rounded-xl shadow-2xl w-11/12 md:w-2/3 lg:w-1/2 max-h-[80vh] overflow-y-auto relative">
        {/* Close button */}
        <div className="p-2">
            <h1 className="text-4xl">Notifications</h1>
            <button
          onClick={onClose}
          className="absolute top-4 right-2 text-gray-600 hover:text-black dark:text-gray-300"
        >
          ✖
        </button>
        <hr className="mt-3" />
        </div>

        
        {children}
      </div>
    </div>
  );
};

export default Modal;
