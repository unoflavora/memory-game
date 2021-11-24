const MODAL_STYLES = 
  'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-2xl w-11/12 lg:w-1/3 max-w-screen-sm z-50'
const OVERLAY_STYLES =
  'fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-70'

function Modal({isOpen, children}) {
  if(!isOpen) {
    return null
  } else {
    return  (
    <>
      <div className={OVERLAY_STYLES}>
        <div className={MODAL_STYLES}>
          {children}
        </div>
      </div>
    </>
    );
  }

}

export default Modal;