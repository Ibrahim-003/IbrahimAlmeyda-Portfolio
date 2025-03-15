interface Notification {
    type: string;
    message: string;
}

interface NotificationProps {
    notification: Notification;
    setNotification: (e: null) => void;
}

const Notification: React.FC<NotificationProps> = ({notification, setNotification}) => {
    return (
      <div
        className={`fixed bottom-4 right-4 px-4 py-3 rounded-lg shadow-lg text-white flex items-center gap-4 transition-opacity duration-300 ${
          notification.type === "success" ? "bg-green-600" : "bg-red-600"
        }`}
      >
        <span>{notification.message}</span>
        <button
          onClick={() => setNotification(null)}
          className='text-white font-bold'
        >
          ✖
        </button>
      </div>
    );
}

export default Notification;
