
function Message({message,viewProfile,position }){
  return (
    <div className={`d-flex flex-row justify-content${position}`} >
      <div>
        <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">
          {message.content}
        </p>
       
          {new Date(message.createAt).getDay() === new Date().getDay()
            
            ? `${new Date(message.createAt).getHours()}:${new Date(
                message.createAt
              ).getMinutes()}`
            : `${new Date(message.createAt).getDay()}/${new Date(
                message.createAt
              ).getMonth()+1}`}
    
      </div>
    </div>
  );
}

export default Message;