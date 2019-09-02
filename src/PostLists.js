import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show_example: new Array(this.props.results.length).fill(0),
      show_err: new Array(this.props.results.length).fill(0)
    };
  }

  updateIndex(index) {
    var arr = this.state.show_example;
    arr[index] = 1;
    this.setState({
      show_example: arr
    });
  }

  updateIndexErr(index) {
    var arr = this.state.show_err;
    arr[index] = 1;
    this.setState({
      show_err: arr
    });
  }

  render() {
    return (
      <Container>
        <div>
          {this.props.results.map((postDetail, index) => {
            return (
              <div key={index}>
                <Paper>
                  <h1 />
                  <Typography
                    color="primary"
                    align="center"
                    variant="h3"
                    gutterBottom
                  >
                    Patterns #{index + 1}:
                  </Typography>
                  <Typography align="center" variant="body1">
                    Pattern:
                  </Typography>

                  {postDetail.title_list &&
                    postDetail.title_list.map(t => (
                      <Typography align="center" variant="body1">
                        {t}
                      </Typography>
                    ))}

                  <Typography align="center" variant="body1">
                    Threshold: {postDetail.threshold}%
                  </Typography>
                  <Typography align="center" variant="body1">
                    Time: {postDetail.time}
                  </Typography>
                </Paper>
                <div>
                  <h1> </h1>
                </div>

                {this.state.show_example[index] === 1 ? (
                  <Paper>
                    <Typography align="center" variant="h3" color="primary">
                      Example:
                    </Typography>
                    {postDetail.example_list.map(e => (
                      <Typography align="center">{e}</Typography>
                    ))}
                    <h1> </h1>
                    <div style={{ align: "center" }}>
                      <button
                        style={{
                          backgroundColor: "#3F51B5",
                          color: "#B5FBDD",
                          width: "150px",
                          align: "center",
                          minHeight: "30px",
                          boxSizing: "border-box"
                        }}
                        onClick={() => {
                          window.open(postDetail.link_example1);
                        }}
                      >
                        link to example1
                      </button>
                      <button
                        style={{
                          backgroundColor: "#3F51B5",
                          color: "#B5FBDD",
                          width: "150px",
                          align: "center",
                          minHeight: "30px",
                          boxSizing: "border-box"
                        }}
                        onClick={() => {
                          window.open(postDetail.link_example2);
                        }}
                      >
                        link to example2
                      </button>
                      <button
                        style={{
                          backgroundColor: "#3F51B5",
                          color: "#B5FBDD",
                          width: "150px",
                          align: "center",
                          minHeight: "30px",
                          boxSizing: "border-box"
                        }}
                        onClick={() => {
                          window.open(postDetail.link_example3);
                        }}
                      >
                        link to example3
                      </button>
                    </div>
                  </Paper>
                ) : null}
                <div style={{ align: "center" }}>
                  <button
                    style={{
                      backgroundColor: "#2398AB",
                      color: "#B5FBDD",
                      width: "150px",
                      align: "center",
                      minHeight: "30px",
                      boxSizing: "border-box"
                    }}
                    onClick={() => this.updateIndex(index)}
                  >
                    show example
                  </button>

                  {this.state.show_err[index] === 1 ? (
                    <Paper>
                      <Typography align="center" variant="h3" color="primary">
                        Error:{" "}
                      </Typography>
                      {postDetail.err_list.map(e => (
                        <Typography align="center">{e}</Typography>
                      ))}
                      {postDetail.err_list_missing.map(e => (
                        <Typography align="center" color="secondary">
                          {e}
                        </Typography>
                      ))}

                      <button
                        style={{
                          backgroundColor: "#3F51B5",
                          color: "#B5FBDD",
                          width: "150px",
                          align: "center",
                          minHeight: "30px",
                          boxSizing: "border-box"
                        }}
                        onClick={() => window.open(postDetail.link_err1)}
                      >
                        link to error #1
                      </button>
                      <button
                        style={{
                          backgroundColor: "#3F51B5",
                          color: "#B5FBDD",
                          width: "150px",
                          align: "center",
                          minHeight: "30px",
                          boxSizing: "border-box"
                        }}
                        onClick={() => window.open(postDetail.link_err2)}
                      >
                        link to error #2
                      </button>
                      <button
                        style={{
                          backgroundColor: "#3F51B5",
                          color: "#B5FBDD",
                          width: "150px",
                          align: "center",
                          minHeight: "30px",
                          boxSizing: "border-box"
                        }}
                        onClick={() => window.open(postDetail.link_err3)}
                      >
                        link to error #3
                      </button>
                    </Paper>
                  ) : null}

                  <button
                    style={{
                      backgroundColor: "#2398AB",
                      color: "#B5FBDD",
                      width: "150px",
                      align: "center",
                      minHeight: "30px"
                    }}
                    onClick={() => this.updateIndexErr(index)}
                  >
                    find errors
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    );
  }
}

export default PostList;
