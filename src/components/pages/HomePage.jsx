import FormAddPost from "../FormAddPost";
import Feed from "../Feed";

function HomePage(props) {
  return (
    <section style={{ backgroundColor: "rgba(0, 0, 0, 0.350)" }}>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <div
              className="card"
              id="chat3"
              style={{
                textAlign: "center",
                borderRadius: "15px",
                backgroundColor: "white",
              }}
            >
              <div className="row">
                <>
                  {props.loggedOnUser ? (
                    <>
                      <FormAddPost onSubmit={props.handleAddPost} />

                      {props.postsView.length !== 0 ? (
                        <Feed
                          postslist={props.postsView}
                          addLike={props.addLike}
                          addComment={props.addComment}
                          viewProfile={props.viewProfile}
                          loggedOnUser={props.loggedOnUser}
                        />
                      ) : (
                        <p className="p-4">
                          Add new friends for to see posts
                        </p>
                      )}
                    </>
                  ) : (
                   <div><h3>Welcome!</h3></div> 
                  )}
                </>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomePage;
