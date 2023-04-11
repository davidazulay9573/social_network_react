function ButtonsMenu(props) {
  return (
    <>
      <div style={{ textAlign: "center" }}>
        <br />
        <button
          style={{ display: props.buttonsMenu }}
          className="btn btn-light"
          onClick={props.viewMyProfile}
        >
          <i className="bi bi-person-fill"></i>
        </button>
        <br />
        <button
          style={{ display: props.buttonsMenu }}
          className="btn btn-light "
          onClick={props.viewUsersList}
        >
          <i className="bi bi-people-fill"></i>
        </button>
        <br />
        <button
          style={{ display: props.buttonsMenu }}
          className="btn btn-light "
          onClick={props.viewFormAddPost}
        >
          <i className="bi bi-file-earmark-plus-fill"></i>
        </button>
        <br />

        {/* <button
          style={{ display: props.buttonsMenu }}
          className="btn btn-light "
          onClick={props.viewFriendRequests}
        >
          Friend requests
        </button> */}

        {/* <br /> */}
        <button
          style={{ display: props.buttonsMenu }}
          className="btn btn-light"
          onClick={props.viewFeed}
        >
          <i className="bi bi-stickies-fill"></i>
        </button>
        <br />
        <button
          style={{ display: props.buttonsMenu }}
          className="btn btn-light"
          onClick={props.viewFeed}
        >
          <i className="bi bi-bell-fill"></i>
        </button>
        <br />
      </div>
    </>
  );
}
export default ButtonsMenu;
