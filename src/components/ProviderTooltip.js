import React, { Fragment, useState } from 'react';
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

const ProviderTooltip = ({ extcase }) => {

const renderTooltip = (props) => (
  <Tooltip id="button-tooltip" {...props}>
    {props.providername}
  </Tooltip>
);

return (
  <OverlayTrigger
    placement="right"
    delay={{ show: 250, hide: 400 }}
    overlay={renderTooltip(extcase)}
  >
    <td>{extcase.providerid}</td>
  </OverlayTrigger>
)
}

export default ProviderTooltip;