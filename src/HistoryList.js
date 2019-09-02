import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import Grid from "@material-ui/core/Grid";
import { TreeView, TreeItem } from "@material-ui/lab";
//import historyItems from "./action_list";
import historyItems from "./action_list2";
import { Container } from "@material-ui/core";

class HistoryList extends Component {
  getHistoryItem(action) {
    console.log(action);
    let label =
      action.actionContent + "-" + action.timestamp + "-" + action.destination;
    return <TreeItem nodeId={label} label={label} />;
  }

  getEntityHistory(entity) {
    console.log(entity);
    return (
      <TreeItem label={entity.id} nodeId={entity.id}>
        {entity.actions.map(a => this.getHistoryItem(a))}
      </TreeItem>
    );
  }
  render() {
    console.log(historyItems);

    console.log(this.props.historyType);
    let filteredHistoryItems = historyItems.filter(h => {
      return h.type === this.props.historyType;
    });

    console.log(filteredHistoryItems.length);
    return (
      <Grid align="center">
        <Container style={{ align: "center", width: "600px"}}>
          <Paper align="center" tyle={{maxHeight: "200px", overflow: 'auto'}}>
            <Typography lign="center" variant="h4" color="primary">
              The History of Edition of type {this.props.historyType} is:
            </Typography>
            <TreeView align="center" style={{maxHeight: '20%', overflow: 'auto'}}>
              {filteredHistoryItems.map(entity => {
                return (
                  <TreeItem
                    align="center"
                    key={entity.id}
                    nodeId={entity.id}
                    label={entity.id}
                    
                  >
                    {entity.actions.map((action, i) => {
                      let label =
                        `${action.actionContent}(` +
                        `${action.timestamp})` +
                        ` : ${action.destination}`;
                      return (
                        <TreeItem
                          align="center"
                          nodeId={`{entity.id}-{i}`}
                          label={label}
                        />
                      );
                    })}
                  </TreeItem>
                );
              })}
            </TreeView>
          </Paper>
        </Container>
      </Grid>
    );
  }
}

export default HistoryList;
