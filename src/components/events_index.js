import React, { Component } from 'react';
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import Dialog from 'material-ui/Dialog';
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import { readEvents } from '../actions'

class EventsIndex extends Component {
  componentDidMount() {
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <TableRow key={event.id}>
        <TableRowColumn>{event.id}</TableRowColumn>
        <TableRowColumn>
          <Link to={`/events/${event.id}`}>
            {event.title}
          </Link>
        </TableRowColumn>
        <TableRowColumn>{event.body}</TableRowColumn>
      </TableRow>
    ))
  }

  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  render() {
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12
    }
    const signature = {
      textAlign: 'right'
    }
    const title = {
      fontSize: 27,
      textAlign: 'right'
    }

    return (
      <React.Fragment>
        <FloatingActionButton style={style} containerElement={<Link to="/events/new" />}>
          <ContentAdd />
        </FloatingActionButton>

        <FloatingActionButton secondary={true} style={{ position: "fixed", right: 128, bottom: 12 }} onClick={this.handleOpen} >
          <ContentAdd />
        </FloatingActionButton>

        <Dialog
          title="本当に有難うございました！またお会いしましょう！"
          modal={true}
          contentStyle={{
            width: '100%',
            maxWidth: 'none',
          }}
          titleStyle={{
            textAlign: 'center',
            paddingTop: 100,
            fontSize: 63,
          }}
          style={{
            padding: 30,
          }}
          overlayStyle={{
            // margin: 30,
          }}
          bodyStyle={{
            margin: 30,
            paddingTop: 100
          }}
          open={this.state.open}
        >
          <div style={title}>
            Reactアプリケーション開発入門
          </div>
          <div style={signature}>
            Udemy プログラミング講師
          </div>
          <div style={signature}>
            石田 敦志 (Atsushi Ishida)
          </div>
          <div style={signature}>
            Happy Coding!
          </div>
        </Dialog>

        <Table>
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
          >
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Title</TableHeaderColumn>
              <TableHeaderColumn>Body</TableHeaderColumn>
            </TableRow>
          </TableHeader>

          <TableBody displayRowCheckbox={false}>
            {this.renderEvents()}
          </TableBody>
        </Table>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })

const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)
