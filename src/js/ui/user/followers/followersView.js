import { header } from '../../shared/common'
import { renderPlayer } from '../following/followingView'
import layout from '../../layout'
import * as helper from '../../helper'

export default function view(vnode) {
  const ctrl = vnode.state

  return layout.free(
    header.bind(undefined, 'Followers'),
    renderBody.bind(undefined, ctrl)
  )
}

function renderBody(ctrl) {
  if (ctrl.followers().length) {
    const nextPage = ctrl.paginator().nextPage
    return (
      <ul className="native_scroller page">
        {ctrl.followers().map(p => renderPlayer(ctrl, p))}
        {nextPage ?
          <li className="list_item followingList moreFollow" oncreate={helper.ontapY(() => ctrl.loadNextPage(nextPage))}> ... </li> :
          null
        }
      </ul>
    )
  } else {
    return (
      <div className="followingListEmpty">
        Oops! Nothing here.
      </div>
    )
  }
}
