
function Message({message,position }){
  return (
    <div className={`d-flex flex-row justify-content${position}`}>
        <div className="p-1 text-white rounded-2 bg-primary">
          {message.content}
          
          <p className="small">
            {new Date(message.createAt).getDay() === new Date().getDay()
              ? `${new Date(message.createAt).getHours()}:${new Date(
                  message.createAt
                ).getMinutes()}`
              : `${new Date(message.createAt).getDay()}/${
                  new Date(message.createAt).getMonth() + 1
                }`}
          </p>
        </div>
    </div>
  );
}

export default Message;