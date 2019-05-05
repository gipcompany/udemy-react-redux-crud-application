import React, { Component } from 'react';
// https://react-redux.js.org/5.x/api/connect
import { connect } from 'react-redux'
// https://lodash.com/docs/4.17.11#map
import _ from 'lodash'
// https://github.com/ReactTraining/react-router/blob/v4.2.2/packages/react-router-dom/docs/api/Link.md
import { Link } from 'react-router-dom'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add'

import { readEvents } from '../actions'

class EventsIndex extends Component {
  componentDidMount() {
    // https://reactjs.org/docs/react-component.html#componentdidmount
    // 以下のrenderメソッドが実行された後にこのcomponentDidMountメソッドは実行されます。
    // 尚、公式ドキュメントに「You may call setState() immediately in componentDidMount().」と書かれているように、
    // 本メソッドの中で状態を変更することが許されています。
    // 状態が変わった場合は適宜その状態に紐づくDOMの再描画が行われることになります。
    // 本アプリケーションの場合は、イベント一覧の取得はテーブル描画後に行っています。
    // そのため、最初に空のイベントテーブルを描画し、イベント一覧が取得できたら
    // イベントの内容をテーブル上に表示するという流れでレンダリングしています。
    this.props.readEvents()
  }

  renderEvents() {
    // lodashのmapメソッドを使用して、collection(配列)の全要素を1つずつ取り出し
    // テーブルの行を配列として取得します。
    // keyにはユニークな値をアサインするためにeventのidを設定しています。
    // また、タイトルをクリックしたら該当のeventの詳細画面に遷移するようにLinkを設定しています。
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

  render() {
    const style = {
      position: "fixed",
      right: 12,
      bottom: 12
    }

    return (
      <React.Fragment>
        <FloatingActionButton style={style} containerElement={<Link to="/events/new" />}>
          <ContentAdd />
        </FloatingActionButton>

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
