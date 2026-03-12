import { MaterialLayoutRenderer } from '@jsonforms/material-renderers';
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react';
import { withJsonFormsLayoutProps } from '@jsonforms/react';
import { LayoutProps, rankWith, uiTypeIs } from '@jsonforms/core';

const AccordionGroupRenderer = (props: LayoutProps) => {
  const { uischema, schema, path, visible, renderers } = props;
  
  // Cast uischema to any to access custom elements and labels since we know they exist at runtime
  const ui = uischema as any;

  const layoutProps = {
    elements: ui.elements,
    schema: schema,
    path: path,
    direction: 'column' as 'column', // explicitly set as 'column' literal
    visible: visible,
    uischema: uischema,
    renderers: renderers,
  };
  return (
    <Box sx={{ display: { xs: 'none', sm: 'block',padding:"4px 4px",margin:"5px 5px",borderRadius:"14px" } }} className="collapsible-group">
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>{ui.label}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <MaterialLayoutRenderer {...layoutProps} />
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default withJsonFormsLayoutProps(AccordionGroupRenderer);
export const AccordionGroupTester = rankWith(1000, uiTypeIs('AccordionGroup'));