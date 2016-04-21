
import React, {Component} from 'react';
import OverlayTrigger from 'react-bootstrap/lib/OverlayTrigger';
import Popover from 'react-bootstrap/lib/Popover';
import Button from 'react-bootstrap/lib/Button';
import Glyphicon from 'react-bootstrap/lib/Glyphicon';

let info = `1. Червона лінія відмежовує ті заявки з прохідним балом на
            бюджетну форму навчання. Всі заявки які вище червоної межі
            проходять, нижче - ні

            2. Синя лінія відмежовує заявки які можуть будти зараховані
            на конктрактну форму навчання. `;

export default function () {
  return (
      <div className="help">
        <OverlayTrigger trigger={['hover','focus']} placement="bottom"
                         overlay={
                            <Popover title="Довідкова інформація"> {info}</Popover> }>
          <Button className="help__btn" bsStyle="default" bsSize="small"><Glyphicon glyph="cd" /></Button>
        </OverlayTrigger>
      </div>
  )
}