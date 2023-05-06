import ProfilePicture from "../ProfilePicture";
import Feed from "../Feed";

function PersonalPage(props) {

  return (
    <section style={{ backgroundColor: "rgba(0, 0, 0, 0.100)" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <div
              className="card"
              id="chat3"
              style={{
                textAlign: "center",
                borderRadius: "15px",
                backgroundColor: "rgba(0, 0, 0, 0.100)",
                color: "white",
              }}
            >
              <div className="row">
                <div
                  style={{ borderRadius: "10px", borderStyle: "inset" }}
                  className="col p-4 "
                >
                  {props.loggedOnUser ? (
                    <>
                      <br />
                      <ProfilePicture
                        user={props.loggedOnUser}
                        size="110px"
                        viewProfile={props.viewProfile}
                      ></ProfilePicture>

                      <br />
                      <h3>Posts:</h3>
                      <br />
                      <Feed
                        postslist={props.postslist}
                        addLike={props.addLike}
                        addComment={props.addComment}
                        loggedOnUser={props.loggedOnUser}
                      />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    // <div style={{ textAlign: "center" }}>

    // </div>
  );
}

export default PersonalPage;
